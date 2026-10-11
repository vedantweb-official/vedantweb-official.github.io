export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'saas' | 'education' | 'business' | 'portfolio';
  tags: string[];
  featured?: boolean;
  image?: string;
  status?: 'completed' | 'in_progress' | 'review';
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  region: string;
  tier: 1 | 2 | 3;
  popularSectors: string[];
}

export interface ProductIdea {
  title: string;
  platformType: "Android & Web App" | "Web Portal" | "Mobile App" | "Cloud Automation";
  description: string;
  features: string[];
}

export interface IndustryData {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  features: string[];
  recommendedPlan: string;
  relevantProjects?: string[];
  productIdeas: ProductIdea[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  source: 'google' | 'direct';
  date: string;
  initial: string;
}

export interface ClientProject {
  id: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  title: string;
  industry: string;
  city: string;
  plan_tier: string;
  total_budget: number;
  paid_amount: number;
  pending_amount: number;
  status: 'pending' | 'in_progress' | 'review' | 'completed';
  progress_pct: number;
  current_milestone: string;
  live_preview_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectTicket {
  id: string;
  project_id: string;
  project_title?: string;
  title: string;
  description: string;
  type: 'bug' | 'change_request' | 'improvement';
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in_progress' | 'resolved';
  admin_comment?: string;
  created_at: string;
  resolved_at?: string;
}

export interface ProjectCredential {
  id: string;
  project_id: string;
  project_title: string;
  service_name: string;
  login_url?: string;
  username_or_email: string;
  secret_key_or_password: string;
  notes?: string;
  created_at: string;
}

export interface ExpenseRecord {
  id: string;
  project_id?: string;
  title: string;
  amount: number;
  category: 'Domain' | 'Hosting' | 'API' | 'Tools' | 'Freelancer' | 'Marketing' | 'Other';
  date: string;
  notes?: string;
}

export interface PaymentRecord {
  id: string;
  project_id: string;
  project_title: string;
  client_name: string;
  amount: number;
  type: 'token' | 'milestone' | 'final';
  status: 'received' | 'pending';
  method: string;
  date: string;
  notes?: string;
}
