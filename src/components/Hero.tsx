"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import gsap from "gsap";
import BookingModal, { BookingMode } from "./BookingModal";
import MagneticWrapper from "./MagneticWrapper";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<BookingMode>("demo_501");

  const openBooking = (mode: BookingMode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant 3D perspective page-load entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(containerRef.current, { perspective: 1200 });

      tl.fromTo(
        pillRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
            rotateX: 18,
            transformOrigin: "50% 100%",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          trustStripRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100/80"
    >
      {/* Corner cross-marks (+) */}
      <div className="absolute top-4 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-4 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>

      {/* Subtle modern ambient background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Status Pill */}
        <div className="flex justify-center mb-5">
          <div
            ref={pillRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/90 text-gray-800 text-xs font-bold shadow-2xs backdrop-blur-xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for New Projects &amp; MVPs</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-600 font-semibold">Turnaround in 48h</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          High-Converting Websites. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600">
            Engineered for Growth.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-5 text-sm sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal"
        >
          We build blazing-fast Next.js platforms, online CBT mock test portals, and modern web systems for businesses, educators, and startups—delivered at less than 50% of typical agency cost.
        </p>

        {/* Action CTAs styled with deep drop shadows matching user reference image */}
        <div
          ref={ctaGroupRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          {/* CTA 1: Black Pill Button with Deep Shadow (matching attached image) */}
          <MagneticWrapper>
            <Link
              href="/book-meeting"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black hover:bg-gray-900 text-white font-extrabold text-xs sm:text-sm shadow-cta-black transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book a Free 30-Min Call</span>
              <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </Link>
          </MagneticWrapper>

          {/* CTA 2: White Pill Button with WhatsApp Green Icon & Deep Shadow (matching attached image) */}
          <MagneticWrapper>
            <a
              href="https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-950 font-extrabold text-xs sm:text-sm shadow-cta-white border border-gray-100 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              {/* Green WhatsApp SVG Icon matching user screenshot */}
              <svg className="w-5 h-5 fill-emerald-500 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </MagneticWrapper>

          {/* CTA 3: Cost Estimator */}
          <MagneticWrapper>
            <Link
              href="/estimate"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Cost Calculator</span>
            </Link>
          </MagneticWrapper>
        </div>

        {/* Micro Trust Row */}
        <div
          ref={trustStripRef}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600 font-semibold"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            &lt;50% Market Cost
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Risk-Free ₹501 Demo
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Direct Engineer Access
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            100% Code Ownership
          </span>
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
