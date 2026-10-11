"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  MessageCircle,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ArrowRight,
  Cpu,
  ExternalLink,
  Laptop,
  Smartphone,
  Server,
  Layers,
  ArrowUpRight,
  Check,
  Video,
  ChevronRight,
  Clock,
  Flame,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { IndustryData, ProductIdea } from "@/types";

interface IndustryLandingClientProps {
  industry: IndustryData;
}

export default function IndustryLandingClient({ industry }: IndustryLandingClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductIdea | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleInquireProduct = (product: ProductIdea) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const getPlatformBadgeColor = (type: string) => {
    switch (type) {
      case "Android & Web App":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Web Portal":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Cloud Automation":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  const getPlatformIcon = (type: string) => {
    switch (type) {
      case "Android & Web App":
        return <Smartphone className="w-3.5 h-3.5" />;
      case "Web Portal":
        return <Laptop className="w-3.5 h-3.5" />;
      case "Cloud Automation":
        return <Server className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      
      {/* ========================================================
          ANIMATED AMBIENT BACKGROUND GLOWS (LIGHTWEIGHT & SMOOTH)
          ======================================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* ========================================================
          1. HERO SECTION WITH PROMINENT ₹501 OFFER
          ======================================================== */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 border-b border-gray-100 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill with live pulse */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
              <Building2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>INDUSTRY-SPECIALIZED ENGINEERING — {industry.name.toUpperCase()}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-extrabold">
              <Flame className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
              <span>Limited Promo: Landing Page in ₹501/- Only</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.15]">
            Supercharge Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              {industry.name}
            </span>{" "}
            Business With Modern Web &amp; Apps
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {industry.shortDesc} Get a high-converting landing page crafted in 48 hours for just{" "}
            <span className="text-gray-950 font-bold underline decoration-amber-400 decoration-2">
              ₹501/- advance token
            </span>
            , or deploy custom Android and web software built specifically for your sector.
          </p>

          {/* Prominent Offer Highlight Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-purple-50/90 border border-blue-200/60 shadow-xs relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider">
                    Instant Kickoff
                  </span>
                  <span className="text-xs font-semibold text-gray-500">48-Hour Delivery Window</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-950 mt-1">
                  Professional Landing Page at Just ₹501/-
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Includes 100% responsive mobile layout, WhatsApp inquiry integration, fast speed score, and zero risk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-cta-black transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Claim ₹501/- Landing Page</span>
                </button>

                <Link
                  href="/book-meeting"
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-bold text-xs shadow-cta-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>Book Google Meet</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs text-gray-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full Source Code Ownership</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Direct WhatsApp Lead Capture</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Sub-Second Page Load Speed</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Google Local SEO Schema Included</span>
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. REAL PRODUCT & SOFTWARE IDEAS TAILORED FOR THIS SECTOR
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center sm:text-left mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-[11px] font-bold mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>BESPOKE SOFTWARE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Real Digital Products We Can Build for {industry.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Don&apos;t just settle for a generic website. We engineer customized operational apps, booking engines, and automated workflows designed around how you do business:
            </p>
          </div>

          {/* Interactive Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.productIdeas.map((idea, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Platform Type Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${getPlatformBadgeColor(
                        idea.platformType
                      )}`}
                    >
                      {getPlatformIcon(idea.platformType)}
                      <span>{idea.platformType}</span>
                    </span>

                    <span className="text-xs font-black text-gray-300 group-hover:text-blue-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-black text-gray-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {idea.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Key Features List */}
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                      Core System Modules:
                    </span>
                    {idea.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => handleInquireProduct(idea)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-900 group-hover:bg-blue-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta-black"
                  >
                    <span>Build This Software</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Custom Inquiries Banner */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Have a unique app or workflow idea in mind?</h4>
                <p className="text-[11px] text-gray-500">We design custom MVPs and production platforms in 7 to 14 days.</p>
              </div>
            </div>

            <a
              href={`https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20have%20a%20custom%20software%20idea%20for%20my%20${encodeURIComponent(
                industry.name
              )}%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. ESSENTIAL CONVERSION FEATURES INCLUDED
          ======================================================== */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-gray-950">
              Standard Features Included in Every {industry.name} Website
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              All our builds come pre-configured with conversion-tested UX and operational touchpoints:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900">{feat}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Configured for high mobile speeds and instant customer response.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. VIEW OUR WORK SECTION (LINKING TO /projects AS REQUESTED)
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-gray-950 text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>PROVEN TRACK RECORD</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Explore Shipped Platforms &amp; Live Client Work
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-xl">
                We have engineered mission-critical web applications, high-converting portals, and SaaS tools across education, logistics, business management, and commerce.
              </p>
            </div>

            <Link
              href="/projects"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm shadow-cta-black transition-all hover:scale-105 flex items-center justify-center gap-2 shrink-0"
            >
              <span>View All Work &amp; Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Engineering Value Pillars (Authentic & Honest) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-center sm:text-left">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm font-bold text-white block">Next.js 15 &amp; React</span>
              <span className="text-xs text-gray-400 mt-0.5 block">Modern Edge Architecture</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm font-bold text-white block">Mobile-First Layout</span>
              <span className="text-xs text-gray-400 mt-0.5 block">Responsive On Every Screen</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm font-bold text-white block">Direct WhatsApp</span>
              <span className="text-xs text-gray-400 mt-0.5 block">Instant Lead Inquiries</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm font-bold text-white block">100% Code Ownership</span>
              <span className="text-xs text-gray-400 mt-0.5 block">Full Source Code Handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM OFFER CONVERSION CTA
          ======================================================== */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider mb-3">
            Zero-Risk Onboarding
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build a High-Performing Presence for {industry.name}?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Book your landing page prototype for just ₹501/- advance token. If you need custom Android apps or web portals, schedule a quick discovery call.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-950 font-black text-sm shadow-cta-white hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Get Landing Page in ₹501/- Only</span>
            </button>

            <Link
              href="/book-meeting"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black/30 hover:bg-black/40 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-blue-300" />
              <span>Schedule Google Meet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        defaultPlan={
          selectedProduct
            ? `${selectedProduct.title} (${selectedProduct.platformType} - ${industry.name})`
            : `Website design in 501/- Only (${industry.name})`
        }
      />

    </div>
  );
}
