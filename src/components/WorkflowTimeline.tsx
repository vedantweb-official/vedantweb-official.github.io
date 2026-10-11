"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Video,
  ArrowRight,
  Clock,
  Code2,
  Terminal,
} from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";
import BookingModal, { BookingMode } from "./BookingModal";

interface WorkflowStep {
  phase: string;
  duration: string;
  title: string;
  desc: string;
  icon: any;
  deliverables: string[];
  badgeColor: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    phase: "01",
    duration: "24 – 48 Hours",
    title: "Risk-Free Prototype Intake",
    desc: "We analyze your exact business requirements, outline user journeys, and deploy an initial working interactive demo URL for just ₹501 token.",
    icon: Zap,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    deliverables: [
      "Initial working interactive demo link",
      "Mobile & tablet responsive viewport test",
      "Zero upfront risk before approving the scope",
    ],
  },
  {
    phase: "02",
    duration: "Days 2 – 4",
    title: "Next.js 15 & Supabase Cloud Architecture",
    desc: "We engineer a clean, maintainable software foundation using Next.js 15 App Router, Tailwind CSS, and a dedicated Supabase PostgreSQL cloud database.",
    icon: Cpu,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    deliverables: [
      "Sub-second edge rendering (99+ Core Web Vitals)",
      "Supabase PostgreSQL with Row Level Security (RLS)",
      "Custom API endpoints & database schema migration",
    ],
  },
  {
    phase: "03",
    duration: "Days 4 – 7",
    title: "Milestone Sprints & Client Portal Access",
    desc: "Track live progress in your dedicated Client Portal. Review progress meters (0–100%), test features as they are built, and log change requests directly to our lead developer.",
    icon: Terminal,
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    deliverables: [
      "Dedicated Client Portal with milestone tracker",
      "Direct WhatsApp access to the lead full-stack engineer",
      "Built-in bug & feedback resolver with admin notes",
    ],
  },
  {
    phase: "04",
    duration: "Launch Day",
    title: "Production Deployment & 100% Code Handover",
    desc: "We connect your custom domain, configure automated SSL security, inject Google LocalBusiness SEO schema, and hand over the complete repository.",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    deliverables: [
      "Custom domain DNS & automated SSL security",
      "Google Search Console & XML sitemap indexing",
      "100% clean source code ownership (zero vendor lock-in)",
    ],
  },
];

export default function WorkflowTimeline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<BookingMode>("demo_501");

  const openBooking = (mode: BookingMode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      
      {/* Subtle corner cross-marks (+) inspired by Codeair's architectural styling */}
      <div className="absolute top-4 left-6 text-gray-300 font-mono text-sm select-none pointer-events-none">+</div>
      <div className="absolute top-4 right-6 text-gray-300 font-mono text-sm select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 left-6 text-gray-300 font-mono text-sm select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 right-6 text-gray-300 font-mono text-sm select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Structured Engineering Sprint</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            How We Build &amp; Ship Your Platform
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            From your initial ₹501/- prototype to production deployment, experience a structured, transparent software sprint with zero agency guesswork.
          </p>
        </div>

        {/* 4-Step Grid with Connecting Hairline Markers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={step.phase}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-gray-50/70 border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400/80 hover:bg-white transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-gray-300 group-hover:text-blue-600 transition-colors">
                      {step.phase}
                    </span>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${step.badgeColor} flex items-center gap-1`}>
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-950 leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mt-2 mb-5">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Bullet List */}
                <div className="pt-4 border-t border-gray-200/80 space-y-2">
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Callout & Dual Magnetic Buttons */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-gray-900 via-slate-900 to-gray-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center lg:text-left max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
              Zero Upfront Commitment
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Ready to Kick Off Phase 01 With Just ₹501?
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              We design and ship your working interactive demo before you commit to any full contract.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <MagneticWrapper>
              <button
                type="button"
                onClick={() => openBooking("demo_501")}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-gray-950 font-black text-xs shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 text-gray-950" />
                <span>Book Demo (Rs. 501/-)</span>
              </button>
            </MagneticWrapper>

            <MagneticWrapper>
              <Link
                href="/book-meeting"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta-black"
              >
                <Video className="w-4 h-4 text-blue-400" />
                <span>Schedule Google Meet</span>
              </Link>
            </MagneticWrapper>
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
      />
    </section>
  );
}
