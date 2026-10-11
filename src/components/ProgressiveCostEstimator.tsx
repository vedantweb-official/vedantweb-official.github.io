"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Video,
  Shield,
  Layers,
  Globe,
  Sliders,
  Check,
  Clock,
  Zap,
  HelpCircle,
  PhoneCall,
  Laptop,
  GraduationCap,
  Building2,
  Code2,
} from "lucide-react";
import BookingModal, { BookingMode } from "./BookingModal";

interface ProjectTypeOption {
  id: string;
  title: string;
  desc: string;
  icon: any;
  basePrice: number;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "landing",
    title: "High-Converting Landing Page",
    desc: "Single page built for Google/Meta ads, local lead capture & quick sales.",
    icon: Laptop,
    basePrice: 501,
  },
  {
    id: "mocktest",
    title: "Mock Test & Exam Portal",
    desc: "Online CBT test simulator like Exammarg / Suchnakendra with timer & results.",
    icon: GraduationCap,
    basePrice: 2499,
  },
  {
    id: "school_saas",
    title: "School / Institution Management",
    desc: "Time-table scheduling, student records, fee notices (like KVS Timetable).",
    icon: Building2,
    basePrice: 3499,
  },
  {
    id: "corporate",
    title: "Multi-Page Corporate / Business",
    desc: "Professional agency or company site with services, portfolio & inquiries.",
    icon: Globe,
    basePrice: 1499,
  },
  {
    id: "custom",
    title: "Custom Full-Stack Web App",
    desc: "Bespoke database-backed web application tailored to your unique workflow.",
    icon: Code2,
    basePrice: 4999,
  },
];

interface FeatureOption {
  id: string;
  title: string;
  desc: string;
  price: number;
  badge?: string;
  defaultChecked?: boolean;
}

const AVAILABLE_FEATURES: FeatureOption[] = [
  {
    id: "responsive",
    title: "Mobile-First Ultra Fast UI",
    desc: "100% responsive on iPhone, Android & iPad with 99+ Core Web Vitals.",
    price: 0,
    badge: "Included Free",
    defaultChecked: true,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Direct Floating Inquiries",
    desc: "Visitors start a WhatsApp conversation with 1 tap directly to your phone.",
    price: 0,
    badge: "Included Free",
    defaultChecked: true,
  },
  {
    id: "seo",
    title: "Google Local Search & Schema Setup",
    desc: "Metadata, JSON-LD schema, and sitemap generation for ranking.",
    price: 0,
    badge: "Included Free",
    defaultChecked: true,
  },
  {
    id: "admin",
    title: "Admin Management Dashboard",
    desc: "Self-service control panel to update content, view inquiries & download leads.",
    price: 999,
  },
  {
    id: "payments",
    title: "UPI & Payment Gateway Integration",
    desc: "Instant payments via Razorpay / Cashfree / PhonePe / QR Code.",
    price: 799,
  },
  {
    id: "auth",
    title: "User Accounts & Authentication",
    desc: "Secure login, signup, and profile management for clients or students.",
    price: 899,
  },
  {
    id: "cbt_engine",
    title: "Real-Time Test & Timer Engine",
    desc: "Automated scoring, negative marking, answer key & analytics.",
    price: 1499,
  },
  {
    id: "domain_ssl",
    title: "Custom Domain Connection & SSL",
    desc: "DNS setup, SSL certificate & production hosting configuration.",
    price: 399,
  },
];

interface TimelineOption {
  id: string;
  title: string;
  days: string;
  extraMultiplier: number;
  desc: string;
}

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: "standard",
    title: "Standard Pace",
    days: "7 – 10 Days",
    extraMultiplier: 0,
    desc: "Normal structured sprint with regular milestone reviews.",
  },
  {
    id: "fast",
    title: "Priority Fast Track",
    days: "4 – 6 Days",
    extraMultiplier: 499,
    desc: "Accelerated development sprint with dedicated focus.",
  },
  {
    id: "express",
    title: "Express MVP Launch",
    days: "48 – 72 Hours",
    extraMultiplier: 999,
    desc: "Immediate priority delivery for tight deadlines & launches.",
  },
];

export default function ProgressiveCostEstimator() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 4;

  // State
  const [selectedType, setSelectedType] = useState<string>("landing");
  const [pageCount, setPageCount] = useState<number>(3);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "responsive",
    "whatsapp",
    "seo",
    "admin",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<BookingMode>("demo_501");

  // Calculations
  const currentTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const timelineObj = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[0];

  const basePrice = currentTypeObj.basePrice;
  const pagePrice = pageCount > 1 ? (pageCount - 1) * 300 : 0;
  const featuresPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = AVAILABLE_FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);
  const timelinePrice = timelineObj.extraMultiplier;

  const totalEstimate = basePrice + pagePrice + featuresPrice + timelinePrice;

  const toggleFeature = (id: string) => {
    const feat = AVAILABLE_FEATURES.find((f) => f.id === id);
    if (feat?.price === 0) return; // Free included features can't be toggled off

    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleOpenModal = (mode: BookingMode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <div id="cost-estimator" className="w-full max-w-5xl mx-auto">
      {/* Container Card */}
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
        
        {/* Header Bar with Live Progressive Step Indicator */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Progressive Project Cost Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Configure Your Project Scope
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Transparent breakdown inspired by global platform standards. No agency guesswork.
              </p>
            </div>

            {/* Running Price Capsule */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-200 shadow-xs self-start md:self-auto">
              <div>
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Live Estimate
                </span>
                <span className="text-xl sm:text-2xl font-black text-gray-950">
                  ₹{totalEstimate.toLocaleString("en-IN")}
                  <span className="text-xs font-semibold text-gray-400">/-</span>
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                {timelineObj.days}
              </span>
            </div>
          </div>

          {/* Step Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
              <span className={currentStep >= 1 ? "text-blue-600" : ""}>
                1. Project Type
              </span>
              <span className={currentStep >= 2 ? "text-blue-600" : ""}>
                2. Page Scope
              </span>
              <span className={currentStep >= 3 ? "text-blue-600" : ""}>
                3. Features
              </span>
              <span className={currentStep >= 4 ? "text-blue-600" : ""}>
                4. Estimate &amp; Next Steps
              </span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step Body Content */}
        <div className="p-6 sm:p-10">
          
          {/* ============================================================
              STEP 1: Choose Project Category
              ============================================================ */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Step 1: What type of website or platform are you building?
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Select the category that best matches your vision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;

                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black text-gray-900">
                          From ₹{type.basePrice}/-
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-gray-900 mt-3">
                        {type.title}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================
              STEP 2: Page Scale & Size Slider
              ============================================================ */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Step 2: How many pages or views does your project need?
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Adjust the slider to match your content structure.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-700">Page Scope</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-blue-600">{pageCount}</span>
                    <span className="text-xs font-semibold text-gray-500">
                      {pageCount === 1 ? "Page (Single Landing)" : "Total Pages"}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-3">
                  <span>1 Page (Landing)</span>
                  <span>5 Pages (Corporate)</span>
                  <span>10 Pages (Portal)</span>
                  <span>15+ Pages (Enterprise)</span>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200 text-xs text-gray-600 flex items-center justify-between">
                  <span>
                    Additional Pages: {pageCount > 1 ? `${pageCount - 1} extra @ ₹300/page` : "None"}
                  </span>
                  <span className="font-bold text-gray-900">
                    +₹{pagePrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Delivery Timeline Option */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Target Launch Schedule:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TIMELINE_OPTIONS.map((time) => {
                    const isSelected = selectedTimeline === time.id;
                    return (
                      <div
                        key={time.id}
                        onClick={() => setSelectedTimeline(time.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-gray-900">{time.title}</span>
                          <span className="text-[11px] font-extrabold text-blue-600">
                            {time.days}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 leading-snug">{time.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              STEP 3: Features & Capabilities
              ============================================================ */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Step 3: Select required capabilities &amp; integrations
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Toggle the modules you need for your visitors or students.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {AVAILABLE_FEATURES.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  const isFree = feat.price === 0;

                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                        isFree
                          ? "bg-emerald-50/30 border-emerald-200/60 cursor-default"
                          : isChecked
                          ? "bg-blue-50/40 border-blue-500 ring-1 ring-blue-500/20 cursor-pointer"
                          : "bg-white border-gray-200 hover:border-gray-300 cursor-pointer"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? isFree
                              ? "bg-emerald-600 text-white"
                              : "bg-blue-600 text-white"
                            : "border border-gray-300"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-xs font-bold text-gray-900 truncate">
                            {feat.title}
                          </h5>
                          {feat.badge ? (
                            <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black shrink-0">
                              {feat.badge}
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-gray-700 shrink-0">
                              +₹{feat.price}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================
              STEP 4: Transparent Estimate & THE 2 CLEAR CTAs
              ============================================================ */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Step 4: Your Transparent Estimate &amp; Booking Options
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Review your scope breakdown and choose how you would like to proceed.
                </p>
              </div>

              {/* Estimate Summary Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl">
                
                {/* Left: Final Number */}
                <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Calculated Transparent Scope</span>
                  </span>

                  <p className="text-xs text-slate-400">Total Estimated Project Value</p>
                  <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-3xl font-light text-slate-400">₹</span>
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                      {totalEstimate.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-bold text-slate-400">/-</span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Estimated Timeline: <strong className="text-white">{timelineObj.days}</strong>
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>Zero upfront commitment required to discuss.</span>
                  </div>
                </div>

                {/* Right: Itemized Breakdown */}
                <div className="lg:col-span-7 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-medium text-slate-400">Selected Architecture:</span>
                    <span className="font-bold text-white">{currentTypeObj.title}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-medium text-slate-400">Page Scope:</span>
                    <span className="font-bold text-white">
                      {pageCount} {pageCount === 1 ? "Page" : "Pages"} (+₹{pagePrice})
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-medium text-slate-400">Selected Addons:</span>
                    <span className="font-bold text-white">
                      {selectedFeatures.length} features enabled (+₹{featuresPrice})
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-medium text-slate-400">Timeline Sprint:</span>
                    <span className="font-bold text-white">{timelineObj.title}</span>
                  </div>

                  <div className="pt-2 text-[11px] text-amber-300 font-medium">
                    💡 You don&apos;t have to pay full budget right away. Test with our prototype token!
                  </div>
                </div>

              </div>

              {/* ========================================================
                  THE TWO DISTINCT CLEAR CTAs AS REQUESTED
                  ======================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* CTA 1: Book Online Meeting (Google Meet) */}
                <Link
                  href="/book-meeting"
                  className="p-5 rounded-2xl bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 font-extrabold text-sm shadow-cta-white transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-2 cursor-pointer group text-center"
                >
                  <div className="flex items-center gap-2 text-blue-600">
                    <Video className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-base font-black">Book Online Meeting</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    Free 15-min discovery call on Google Meet
                  </span>
                  <span className="mt-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold">
                    Schedule Slot →
                  </span>
                </Link>

                {/* CTA 2: Book Demo (Rs. 501/-) */}
                <button
                  type="button"
                  onClick={() => handleOpenModal("demo_501")}
                  className="p-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-gray-950 font-extrabold text-sm shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-2 cursor-pointer group text-center"
                >
                  <div className="flex items-center gap-2 text-gray-950">
                    <Zap className="w-5 h-5 text-gray-950 group-hover:scale-110 transition-transform" />
                    <span className="text-base font-black">Book Demo (Rs. 501/-)</span>
                  </div>
                  <span className="text-xs text-gray-800 font-medium">
                    Risk-free interactive prototype before full contract
                  </span>
                  <span className="mt-1 px-3 py-1 rounded-full bg-black/10 text-gray-950 text-[11px] font-black">
                    Claim ₹501 Promo →
                  </span>
                </button>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Need instant advice? WhatsApp our technical team directly:{" "}
                    <strong className="text-gray-900">+91 9140448004</strong>
                  </span>
                </div>
                <a
                  href={`https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20used%20the%20cost%20estimator%20for%20a%20${currentTypeObj.title}%20(${pageCount}%20pages%2C%20est.%20₹${totalEstimate}).%20Let%27s%20connect.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shrink-0"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Step Navigation Footer Controls */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-md shadow-blue-600/20"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              Reconfigure Scope ↺
            </button>
          )}
        </div>

      </div>

      {/* Booking Intake Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        projectSummary={{
          estimatedPrice: totalEstimate,
          pagesCount: pageCount,
          projectType: currentTypeObj.title,
          features: selectedFeatures,
        }}
      />
    </div>
  );
}
