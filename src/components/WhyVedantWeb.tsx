import { Zap, ShieldCheck, Database, Headphones, Code2, ArrowUpRight, TrendingDown, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: TrendingDown,
    title: "<50% Lower Than Market Rates",
    desc: "Traditional agencies bill you for account managers, sales commissions, and posh office leases. You work directly with senior engineers, cutting your total cost by more than half.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    badge: "Maximum ROI",
  },
  {
    icon: Zap,
    title: "Sub-Second Edge Speed",
    desc: "Built on Next.js 15 App Router with zero client bloat. 99+ Core Web Vitals guarantee instant loading that ranks high on Google and keeps visitors from bouncing.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
    badge: "99+ PageSpeed",
  },
  {
    icon: Database,
    title: "Supabase Cloud Database",
    desc: "PostgreSQL 16 backend with enterprise Row-Level Security (RLS), real-time subscriptions, and edge-caching for sub-150ms database operations.",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    badge: "Enterprise Tech",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Free ₹501/- Prototype",
    desc: "Never pay large agency advances blindly. Test our code quality and responsiveness with a ₹501 token prototype URL before approving any full project scope.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    badge: "Zero Upfront Risk",
  },
];

export default function WhyVedantWeb() {
  return (
    <section id="why-us" className="py-12 sm:py-16 bg-white/70 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>The Direct Engineering Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            High-Quality Work at Less Than 50% Market Cost
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Why pay excessive agency commissions? We build high-performance Next.js 15 platforms directly with you—cutting out the middlemen so you save over 50% without compromising on engineering quality.
          </p>
        </div>

        {/* Cost & Quality Comparison Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm shrink-0 border border-emerald-500/30">
              50%+
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Direct Developer Pricing Advantage</h3>
              <p className="text-xs text-slate-300">
                Traditional Agency Markup: <span className="line-through text-slate-400">₹25,000 – ₹75,000+</span> · Vedant Web Direct: <span className="text-emerald-400 font-bold">From ₹999 / ₹2,499</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold shrink-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Code Ownership
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Sub-Second Speed
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Save 50%+ Budget
            </span>
          </div>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 px-2 py-0.5 rounded-full bg-gray-100">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-950 mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center text-[11px] font-bold text-blue-600">
                  <span>Standard on every build</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Google Business Listing Banner with Direct Link */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-2xs flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="text-base font-extrabold text-gray-950">
                  Vedant Web on Google Business
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Verified
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Visit our official Google Business page, find our local presence, and explore verified client feedback.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="https://local.google.com/place?placeid=ChIJHVnB5ekTAUURsnBZJ1oXi3g"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-xs shadow-cta-black flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>Check us out on Google</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
