import Link from "next/link";
import { Check, ArrowRight, Zap, Shield } from "lucide-react";

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20 bg-gray-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Unbeatable Indian Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Affordable Plans Starting @ ₹999/- Only
          </h2>
          <p className="mt-3 text-base text-gray-600">
            No agency extortion. Straightforward pricing designed to empower local businesses, creators, and schools.
          </p>
        </div>

        {/* 3 Main Web Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold mb-4">
                Starter / Demo Trial
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Starter Website</h3>
              <p className="mt-2 text-xs text-gray-500">
                Ideal for personal portfolios, single-product showcases & local business presence.
              </p>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-950">₹999</span>
                  <span className="text-xs font-bold text-gray-500">/- one-time</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                  Pay ₹999 token advance & launch within 48 hours
                </p>
              </div>

              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Ultra-fast 1-page responsive layout</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Contact Inquiry Form + WhatsApp click</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Mobile, tablet & desktop optimized</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free deployment on Vercel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Client portal access to track progress</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20want%20to%20book%20the%20Starter%20Plan%20with%20%E2%82%B9999%20Token%20Advance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs transition-colors"
              >
                <span>Book with ₹999 Token</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Plan 2: Business (Most Popular) */}
          <div className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 hover:shadow-2xl transition-all">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
              <span>Most Popular</span>
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold mb-4">
                Full Business Presence
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Standard Business</h3>
              <p className="mt-2 text-xs text-gray-500">
                Complete multi-page website with Google SEO for established local companies & clinics.
              </p>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-950">₹2,499</span>
                  <span className="text-xs font-bold text-gray-500">/- one-time</span>
                </div>
                <p className="text-[11px] text-blue-600 font-semibold mt-1">
                  Start with ₹999 token, balance upon final approval
                </p>
              </div>

              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>3 to 5 custom designed pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hyper-Local Google SEO & Schema markup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Product / Service catalog showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Custom domain connection & SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Priority bug tracking & changes ticket support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20am%20interested%20in%20the%20Standard%20Business%20Plan%20(%E2%82%B92499)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Select Business Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Plan 3: Full-Stack Web App */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-indigo-50 text-indigo-800 text-xs font-bold mb-4">
                Advanced Web Apps
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Full-Stack SaaS / App</h3>
              <p className="mt-2 text-xs text-gray-500">
                Custom mock test engines, school portals, or SaaS with database & logins (e.g. Exammarg).
              </p>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-950">₹7,999</span>
                  <span className="text-xs font-bold text-gray-500">+ custom</span>
                </div>
                <p className="text-[11px] text-indigo-600 font-semibold mt-1">
                  Milestone-based delivery with full source code
                </p>
              </div>

              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Next.js + Supabase PostgreSQL database</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>User Authentication & Profile Dashboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Custom admin control room & data exports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Payment Gateway & Webhook automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Credentials vault & 30 days post-launch support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/estimate"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs transition-colors"
              >
                <span>Customize in Estimator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
