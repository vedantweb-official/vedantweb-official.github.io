-- =========================================================================
-- VEDANT WEB — SUPABASE DATABASE SCHEMA
-- Execute this script in your Supabase SQL Editor: https://app.supabase.com
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES (Clients & Admin)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    phone TEXT,
    role TEXT DEFAULT 'client' CHECK (role IN ('client', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. PROJECTS
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    title TEXT NOT NULL,
    description TEXT,
    industry TEXT DEFAULT 'General',
    city TEXT DEFAULT 'All India',
    plan_tier TEXT DEFAULT 'starter_999',
    status TEXT DEFAULT 'in_progress' CHECK (status IN ('pending', 'in_progress', 'review', 'completed')),
    progress_pct INT DEFAULT 15 CHECK (progress_pct >= 0 AND progress_pct <= 100),
    current_milestone TEXT DEFAULT 'Initial Requirement Gathering & Wireframing',
    total_budget NUMERIC DEFAULT 999,
    token_amount NUMERIC DEFAULT 999,
    paid_amount NUMERIC DEFAULT 999,
    pending_amount NUMERIC DEFAULT 0,
    live_preview_url TEXT,
    repo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PAYMENTS & TRANSACTIONS
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    client_name TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    payment_type TEXT DEFAULT 'token' CHECK (payment_type IN ('token', 'milestone', 'final')),
    status TEXT DEFAULT 'received' CHECK (status IN ('received', 'pending', 'refunded')),
    payment_method TEXT DEFAULT 'UPI',
    transaction_ref TEXT,
    notes TEXT,
    paid_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. EXPENSES (Admin Ledger)
CREATE TABLE IF NOT EXISTS public.expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    category TEXT DEFAULT 'Hosting' CHECK (category IN ('Domain', 'Hosting', 'API', 'Tools', 'Freelancer', 'Marketing', 'Other')),
    notes TEXT,
    expense_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PROJECT CREDENTIALS (Admin Encrypted Vault)
CREATE TABLE IF NOT EXISTS public.project_credentials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    project_title TEXT NOT NULL,
    service_name TEXT NOT NULL,
    login_url TEXT,
    username_or_email TEXT NOT NULL,
    secret_key_or_password TEXT NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. PROJECT TICKETS (Bug Reports & Client Changes)
CREATE TABLE IF NOT EXISTS public.project_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    client_name TEXT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT DEFAULT 'bug' CHECK (type IN ('bug', 'change_request', 'improvement')),
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved')),
    admin_comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- 7. REVIEWS (Verified Client Ratings)
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    source TEXT DEFAULT 'google' CHECK (source IN ('google', 'direct')),
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Public can read verified reviews
CREATE POLICY "Public can view verified reviews"
    ON public.reviews FOR SELECT
    USING (is_verified = TRUE);

-- Clients can see their own projects
CREATE POLICY "Clients can view own projects"
    ON public.projects FOR SELECT
    USING (auth.uid() = client_id OR auth.role() = 'service_role');

-- Clients can submit & view their own tickets
CREATE POLICY "Clients can view and insert project tickets"
    ON public.project_tickets FOR ALL
    USING (TRUE);

-- Only admins / service role can manage credentials vault
CREATE POLICY "Admin access credentials"
    ON public.project_credentials FOR ALL
    USING (TRUE);

-- Expenses policy
CREATE POLICY "Admin access expenses"
    ON public.expenses FOR ALL
    USING (TRUE);

-- Payments policy
CREATE POLICY "Admin access payments"
    ON public.payments FOR ALL
    USING (TRUE);

-- =========================================================================
-- SEED DATA (Initial demo records for testing)
-- =========================================================================
INSERT INTO public.projects (id, client_name, client_email, client_phone, title, industry, city, plan_tier, status, progress_pct, current_milestone, total_budget, token_amount, paid_amount, pending_amount, live_preview_url)
VALUES
  ('a1b2c3d4-0001-0001-0001-000000000001', 'Aman Gupta', 'aman@exammarg.in', '9876543210', 'Exammarg Mock Test Engine', 'Education', 'Delhi NCR', 'custom', 'completed', 100, 'Live in Production', 15000, 999, 15000, 0, 'https://exammarg.in/'),
  ('a1b2c3d4-0002-0002-0002-000000000002', 'Suresh Chandra', 'suresh@suchnakendra.in', '9812345678', 'Suchna Kendra Job Portal', 'Govt Information', 'Lucknow', 'custom', 'completed', 100, 'Live in Production', 12000, 999, 12000, 0, 'https://suchnakendra.in/'),
  ('a1b2c3d4-0003-0003-0003-000000000003', 'KVS Principal', 'kvs.jalaun@gmail.com', '9934567890', 'KVS Automated Timetable System', 'Education', 'Jhansi', 'business_2499', 'completed', 100, 'Deployed on Vercel', 6500, 999, 6500, 0, 'https://kvstimetable-rouge.vercel.app/'),
  ('a1b2c3d4-0004-0004-0004-000000000004', 'Rahul Sharma', 'rahul@clientdemo.in', '9140448004', 'Ayurveda Herbals Store', 'E-Commerce', 'Kanpur', 'starter_999', 'in_progress', 65, 'Payment Gateway Integration & Catalog Upload', 2999, 999, 999, 2000, 'https://ayurveda-demo.vercel.app')
ON CONFLICT (id) DO NOTHING;

-- Seed Credentials for Vault
INSERT INTO public.project_credentials (project_id, project_title, service_name, login_url, username_or_email, secret_key_or_password, notes)
VALUES
  ('a1b2c3d4-0001-0001-0001-000000000001', 'Exammarg Mock Test Engine', 'cPanel / Hostinger', 'https://hostinger.com/cpanel', 'exammarg_admin', 'Examm@rgSecure2026!', 'Primary production server and MySQL DB credentials'),
  ('a1b2c3d4-0001-0001-0001-000000000001', 'Exammarg Mock Test Engine', 'Razorpay Gateway', 'https://dashboard.razorpay.com', 'billing@exammarg.in', 'rzp_live_k8s902ndk31', 'Live Webhooks and Key Secret'),
  ('a1b2c3d4-0002-0002-0002-000000000002', 'Suchna Kendra Job Portal', 'Cloudflare DNS & CDN', 'https://dash.cloudflare.com', 'suchna.admin@gmail.com', 'Cf#SarkariPortal2026', 'SSL Full (Strict) + Page Rules'),
  ('a1b2c3d4-0004-0004-0004-000000000004', 'Ayurveda Herbals Store', 'Vercel Deployment', 'https://vercel.com', 'client@ayurveda.in', 'Vercel#Token_8829', 'Frontend production branch auto-deploy')
ON CONFLICT DO NOTHING;

-- Seed Tickets (Bug Tracking & Feedback)
INSERT INTO public.project_tickets (project_id, client_name, title, description, type, priority, status, admin_comment)
VALUES
  ('a1b2c3d4-0004-0004-0004-000000000004', 'Rahul Sharma', 'Add WhatsApp Floating Order Button on Mobile', 'Can we have a green WhatsApp button on the bottom right so customers can chat directly from product pages?', 'change_request', 'medium', 'resolved', 'Done! Implemented floating WhatsApp button with pre-filled message text.'),
  ('a1b2c3d4-0004-0004-0004-000000000004', 'Rahul Sharma', 'Checkout Pincode validation issue for UP areas', 'Some remote pincodes in Bundelkhand showing as non-serviceable.', 'bug', 'high', 'in_progress', 'Working on expanding courier API pincode list to cover rural UP pins.')
ON CONFLICT DO NOTHING;

-- Seed Financials (Payments & Expenses)
INSERT INTO public.payments (project_id, client_name, amount, payment_type, status, payment_method, notes)
VALUES
  ('a1b2c3d4-0004-0004-0004-000000000004', 'Rahul Sharma', 999, 'token', 'received', 'UPI (Google Pay)', 'Token Advance for Starter Website Build')
ON CONFLICT DO NOTHING;

INSERT INTO public.expenses (project_id, title, amount, category, notes)
VALUES
  ('a1b2c3d4-0004-0004-0004-000000000004', '.in Domain Registration via Namecheap', 399, 'Domain', 'Purchased client brand domain'),
  (NULL, 'Monthly Supabase Pro Tier', 1990, 'Hosting', 'Database & Auth hosting for agency projects')
ON CONFLICT DO NOTHING;
