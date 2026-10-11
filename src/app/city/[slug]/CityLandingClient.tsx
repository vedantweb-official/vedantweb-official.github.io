"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, MessageCircle, CheckCircle2, MapPin, Building, ShieldCheck, ArrowRight, Video, ArrowUpRight, Flame, Cpu } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { CityInfo } from "@/data/cities";

interface CityLandingClientProps {
  city: CityInfo;
}

export default function CityLandingClient({ city }: CityLandingClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      
      {/* Animated Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* 1. Hyper-Local Hero Banner (Simple, focused, high-trust) */}
      <section className="relative py-16 sm:py-24 border-b border-gray-100 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          
          {/* Localized Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>LOCAL WEB AGENCY — {city.name.toUpperCase()}, {city.state.toUpperCase()}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-extrabold">
              <Flame className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
              <span>Limited Promo: Landing Page in ₹501/- Only</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            High-Performing Websites for Businesses in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {city.name}
            </span>
          </h1>

          <p className="mt-3 text-base font-semibold text-blue-700">
            {city.tagline}
          </p>

          <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            {city.localMarketContext}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            {/* Primary CTA requested by user */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-cta-black transition-all hover:scale-105 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Website design in 501/- Only</span>
            </button>

            <Link
              href="/book-meeting"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-sm border border-gray-300 shadow-cta-white transition-all hover:scale-105"
            >
              <Video className="w-4 h-4 text-blue-600" />
              <span>Book Google Meet</span>
            </Link>

            <a
              href={`https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20am%20looking%20for%20website%20development%20for%20my%20business%20in%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Local Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs text-gray-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Google Local Search &amp; Schema
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Direct WhatsApp Inquiries
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Launch Ready in 48 Hours
            </span>
          </div>

        </div>
      </section>

      {/* 2. Distinct Local Commercial Hubs Section */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950">
              Serving Commercial Centers Across {city.name}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              We build dedicated digital presence for companies, factories, shops, and institutions based in:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {city.popularHubs.map((hub) => (
              <div
                key={hub}
                className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/90 text-left flex items-center gap-2.5"
              >
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-gray-900 truncate">{hub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Local Market Insight (Why local presence matters in this specific city) */}
      <section className="py-14 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-2xs">
            <h3 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              <span>Local Market Advantage in {city.name}</span>
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {city.whyLocalMatters}
            </p>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Key Local Sectors in Demand:
              </h4>
              <div className="flex flex-wrap gap-2">
                {city.topLocalSectors.map((sector) => (
                  <span
                    key={sector}
                    className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-100"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Simple Transparent Packages Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-gray-950">
              Transparent Website Packages for {city.name}
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Zero agency overhead. High quality code with 100% ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Promo Plan: 501/- */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border-2 border-amber-400 flex flex-col justify-between shadow-xs">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 text-[10px] font-extrabold uppercase">
                  Trial Promotion
                </span>
                <h3 className="text-lg font-bold text-gray-950 mt-2">Design Prototype</h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-gray-950">₹501</span>
                  <span className="text-xs text-gray-500">/- one-time</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">✓ 1-Page responsive mockup</li>
                  <li className="flex items-center gap-1.5">✓ WhatsApp inquiry integration</li>
                  <li className="flex items-center gap-1.5">✓ 100% money-back guarantee</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Website design in 501/- Only
              </button>
            </div>

            {/* Standard: 999/- */}
            <div className="p-6 rounded-2xl bg-white border-2 border-blue-600 flex flex-col justify-between shadow-md">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase">
                  Most Popular
                </span>
                <h3 className="text-lg font-bold text-gray-950 mt-2">Starter Website</h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-gray-950">₹999</span>
                  <span className="text-xs text-gray-500">/- one-time</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">✓ Complete fast landing page</li>
                  <li className="flex items-center gap-1.5">✓ Google Maps &amp; Schema SEO</li>
                  <li className="flex items-center gap-1.5">✓ Vercel hosting setup</li>
                  <li className="flex items-center gap-1.5">✓ Delivered in 48 hours</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Book for ₹999/-
              </button>
            </div>

            {/* Business: 2499/- */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[10px] font-extrabold uppercase">
                  Full Company
                </span>
                <h3 className="text-lg font-bold text-gray-950 mt-2">Business Portal</h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-gray-950">₹2,499</span>
                  <span className="text-xs text-gray-500">/- one-time</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">✓ 3-5 multi-page structure</li>
                  <li className="flex items-center gap-1.5">✓ Product/service catalog</li>
                  <li className="flex items-center gap-1.5">✓ Priority bug tracking support</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Inquire Business Plan
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. View Our Work Section */}
      <section className="py-16 sm:py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>REAL SHIPPED APPLICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Explore Shipped Platforms &amp; Live Client Work
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-xl">
                See real platforms, high-speed educational portals, and web applications developed with modern edge architecture.
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

      {/* 6. Bottom Local Callout */}
      <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Dominate Local Google Searches in {city.name}?
          </h3>
          <p className="mt-2 text-sm text-blue-100">
            Claim our promotional prototype package with zero risk.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-white text-gray-950 font-black text-sm shadow-md hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer"
            >
              Website design in 501/- Only
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCity={city.name}
        defaultPlan={`Website design in 501/- Only (${city.name} Promotion)`}
      />

    </div>
  );
}
