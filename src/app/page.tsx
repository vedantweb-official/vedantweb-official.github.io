import Hero from "@/components/Hero";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import WhyVedantWeb from "@/components/WhyVedantWeb";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { ArrowRight, Calculator, Video, ShieldCheck, Calendar } from "lucide-react";
import MagneticWrapper from "@/components/MagneticWrapper";
import InteractiveDotGrid from "@/components/InteractiveDotGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-gray-950 relative selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Subtle Grid of Tiny Color-Changing Dots in Background */}
      <InteractiveDotGrid />

      {/* 1. Hero with GSAP 3D Entrance Animation, Deep Shadow CTAs (No Systems Operational) */}
      <Hero />

      {/* 2. Infinite Moving Tech Stack Slider (Left-to-Right, Greyed to Colorful on Hover) */}
      <TechStackSection />

      {/* 3. Services We Offer (Positioned just above Featured Client Platforms with animated movement) */}
      <ServicesSection />

      {/* 4. My Work Section: Top 3 Priority Live Platforms (ExamMarg, SuchnaKendra, KVS Timetable) */}
      <FeaturedProjects />

      {/* 5. Structured 4-Stage Delivery Roadmap (Workflow Timeline) */}
      <WorkflowTimeline />

      {/* 6. Strategic Cost Calculator Banner (Links to Freelancer-style progressive /estimate flow) */}
      <section className="py-10 sm:py-14 bg-white/70 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-3 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute top-3 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl overflow-hidden border border-slate-800">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Instant Project Cost Calculator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Calculate Your Website Cost in 60 Seconds
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Interactive multi-step progressive form inspired by Freelancer. Select your platform type, modules, authentication, and get an immediate breakdown with ₹501 demo option.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <MagneticWrapper>
                  <Link
                    href="/estimate"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-black text-xs shadow-cta-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Launch Cost Calculator</span>
                    <ArrowRight className="w-4 h-4 text-gray-950" />
                  </Link>
                </MagneticWrapper>

                <MagneticWrapper>
                  <Link
                    href="/projects"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore Live Demos</span>
                  </Link>
                </MagneticWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Modern Businesses Choose Vedant Web (<50% Market Cost + Direct Engineering) */}
      <WhyVedantWeb />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Bottom Callout Banner with Reference CTA Shadows */}
      <section className="py-12 sm:py-16 bg-gray-950 text-white text-center border-t border-gray-800 relative overflow-hidden">
        <div className="absolute top-3 left-6 text-gray-700 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute top-3 right-6 text-gray-700 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute bottom-3 left-6 text-gray-700 font-mono text-xs select-none pointer-events-none">+</div>
        <div className="absolute bottom-3 right-6 text-gray-700 font-mono text-xs select-none pointer-events-none">+</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3.5 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Launch Your Platform Without Financial Risk</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Ready to Build Something Remarkable?
          </h2>
          
          <p className="mt-2.5 text-xs sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Test our engineering quality with a ₹501/- prototype demo, or schedule a free 15-minute Google Meet discovery call to discuss your exact requirements.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrapper>
              <Link
                href="/estimate"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-950 font-black text-xs sm:text-sm shadow-cta-white hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Project Cost</span>
              </Link>
            </MagneticWrapper>

            <MagneticWrapper>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm border border-white/20 shadow-cta-black transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore All Client Work</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
