"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Palette,
  Smartphone,
  Layers,
  Sparkle,
  Cpu,
  Rocket,
  Bot,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import BookingModal from "./BookingModal";
import MagneticWrapper from "./MagneticWrapper";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  icon: any;
  accent: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    tagline: "Conversion-Focused Product Design",
    desc: "We craft clean, pixel-perfect user journeys in Figma. Wireframing, interactive prototypes, design tokens, and design systems built to convert visitors into loyal paying customers.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    icon: Palette,
    accent: "from-blue-600 to-indigo-600",
    badge: "Figma & Micro-Interactions",
    deliverables: [
      "User research & low-fidelity wireframing",
      "Interactive click-through prototype",
      "Responsive design tokens for mobile & web",
    ],
    techStack: ["Figma", "Tailwind CSS", "Design Tokens", "GSAP"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    tagline: "High-Performance iOS & Android",
    desc: "Cross-platform mobile applications engineered with React Native and Expo. Offline synchronization, push notifications, smooth 60fps animations, and one-click app store release.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    icon: Smartphone,
    accent: "from-emerald-600 to-teal-600",
    badge: "iOS & Android Native",
    deliverables: [
      "Cross-platform React Native code architecture",
      "Offline SQLite / Supabase synchronization",
      "Google Play & Apple App Store readiness",
    ],
    techStack: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
  {
    id: "full-stack",
    title: "Full Stack Web Apps",
    tagline: "Modern Edge Architecture & Database",
    desc: "Scalable web applications built on Next.js 15 App Router, TypeScript, and Supabase PostgreSQL. Sub-second edge response times, enterprise authentication, and zero infrastructure bloat.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    icon: Layers,
    accent: "from-indigo-600 to-violet-600",
    badge: "Next.js 15 & Supabase",
    deliverables: [
      "Server Components & dynamic edge caching",
      "Supabase PostgreSQL with Row Level Security",
      "Custom REST / Server Action endpoints",
    ],
    techStack: ["Next.js 15", "Supabase", "PostgreSQL", "Tailwind"],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    tagline: "Memorable Visual Identity & Branding",
    desc: "Distinctive logo design and complete corporate brand guidelines. Vector SVG files, responsive mark variations for app icons, favicon, social media banners, and print assets.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    icon: Palette,
    accent: "from-amber-500 to-orange-600",
    badge: "Brand Identity",
    deliverables: [
      "Vector SVG, EPS & PNG logo packages",
      "App icon & favicon system",
      "Typography & brand color palette guide",
    ],
    techStack: ["Vector Graphics", "Brand Guide", "Iconography"],
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Apps",
    tagline: "Bespoke Portals, CRM & Workflow Engines",
    desc: "Custom web software tailored to your specific business operations. Internal employee portals, client dashboard meters, automated invoice generators, and multi-tenant management consoles.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: Cpu,
    accent: "from-sky-600 to-cyan-600",
    badge: "Business Automation",
    deliverables: [
      "Role-based access control (Admin / Staff / Client)",
      "Automated PDF generation & data export",
      "Real-time data feeds with sub-150ms latency",
    ],
    techStack: ["Next.js 15", "PostgreSQL", "RLS", "Webhooks"],
  },
  {
    id: "custom-mvp",
    title: "Custom MVP",
    tagline: "7-Day Rapid Prototyping for Founders",
    desc: "Turn your startup idea into a live, investor-ready working MVP in as fast as 7 days. We trim the non-essential bloat, build core value features, and deploy on high-performance cloud edge.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    icon: Rocket,
    accent: "from-purple-600 to-pink-600",
    badge: "7-Day Launch",
    deliverables: [
      "Validated core user flow & authentication",
      "Payment gateway integration (Razorpay / Stripe)",
      "Live production URL ready for customer onboarding",
    ],
    techStack: ["Next.js", "Supabase", "Razorpay", "Vercel"],
  },
  {
    id: "ai-products",
    title: "AI Powered Products",
    tagline: "LLM Agents & Smart Workflow Intelligence",
    desc: "Integrate generative AI capabilities into your applications. Custom OpenAI and Gemini API workflows, intelligent document processors, automated data extraction, and conversational agents.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    icon: Bot,
    accent: "from-blue-700 to-teal-500",
    badge: "OpenAI & Gemini API",
    deliverables: [
      "Custom prompt orchestration & streaming responses",
      "Vector embeddings & retrieval (RAG)",
      "Cost-efficient token caching & error guards",
    ],
    techStack: ["OpenAI API", "Google Gemini", "LangChain", "Vector DB"],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeService = SERVICES[activeIndex];

  // Auto-advance animation every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 border-b border-gray-100 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Corner cross-marks (+) */}
      <div className="absolute top-4 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-4 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Services We Offer
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Explore our core disciplines. Each solution is built custom from scratch with 100% code ownership and sub-second edge speed.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 shadow-2xs hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 shadow-2xs hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Category Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {SERVICES.map((s, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-black text-white shadow-cta-black scale-[1.02]"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <span>{s.title}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Stage with Animated Movement */}
        <div className="relative rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            
            {/* Left Column: Visual Showcase Image with Ambient Tint */}
            <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-full overflow-hidden bg-gray-900 group">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-gray-950/20 lg:to-gray-950/60" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/15 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeService.badge}</span>
              </div>

              {/* Bottom Tagline on Image for Mobile */}
              <div className="absolute bottom-4 left-5 right-5 lg:hidden text-white">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                  {activeService.tagline}
                </span>
                <span className="text-xl font-black">
                  {activeService.title}
                </span>
              </div>
            </div>

            {/* Right Column: Detailed Specification & Direct CTAs */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="hidden lg:flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider">
                    {activeService.tagline}
                  </span>
                </div>

                <h3 className="hidden lg:block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-3">
                  {activeService.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {activeService.desc}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    What You Receive:
                  </span>
                  {activeService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeService.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-[11px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                <MagneticWrapper>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-xs shadow-cta-black flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span>Book Demo (₹501/-)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </MagneticWrapper>

                <MagneticWrapper>
                  <a
                    href={`https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20want%20to%20discuss%20${encodeURIComponent(activeService.title)}%20for%20my%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-950 font-bold text-xs shadow-cta-white border border-gray-200 flex items-center justify-center gap-2 transition-transform hover:scale-105"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                </MagneticWrapper>
              </div>

            </div>

          </div>

          {/* Bottom Progress Bar showing auto-rotation timeline */}
          <div className="h-1 bg-gray-100 w-full relative overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / SERVICES.length) * 100}%` }}
            />
          </div>

        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPlan={`${activeService.title} (₹501 Prototype Trial)`}
      />
    </section>
  );
}
