"use client";

import { useState } from "react";
import { Calculator, Check, Zap, Shield, Sliders } from "lucide-react";
import BookingModal from "./BookingModal";

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  included?: boolean;
}

const FEATURES_LIST: FeatureOption[] = [
  { id: "responsive", name: "100% Mobile & Tablet Responsive UI", price: 0, included: true },
  { id: "whatsapp", name: "WhatsApp Direct Floating Chat & Inquiries", price: 0, included: true },
  { id: "seo", name: "Google Local Search Optimization & Schema", price: 0, included: true },
  { id: "admin", name: "Admin Dashboard (Manage Content & Leads)", price: 1200 },
  { id: "auth", name: "User Accounts & Authentication (Google / Email)", price: 1000 },
  { id: "payments", name: "Payment Gateway (Razorpay / UPI Integration)", price: 800 },
  { id: "mocktest", name: "Mock Test Engine & Student Timer", price: 3000 },
  { id: "domain", name: "Custom Domain Connection & SSL Security", price: 500 },
  { id: "analytics", name: "Google Analytics 4 & Conversion Tracking", price: 500 },
];

export default function CostEstimator() {
  // Slider state: 1 to 15 pages
  const [pagesCount, setPagesCount] = useState<number>(3);
  // Selected features
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "responsive",
    "whatsapp",
    "seo",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFeature = (id: string) => {
    const feat = FEATURES_LIST.find((f) => f.id === id);
    if (feat?.included) return; // Always included

    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Pricing formula: Base 501 + (pages - 1) * 350 + selected features
  const basePrice = 501;
  const pagesCost = (pagesCount - 1) * 350;
  const featuresCost = selectedFeatures.reduce((sum, id) => {
    const f = FEATURES_LIST.find((item) => item.id === id);
    return sum + (f ? f.price : 0);
  }, 0);

  const totalEstimate = basePrice + pagesCost + featuresCost;

  return (
    <section id="estimator" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Slider Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Estimate Your Website Cost In Real-Time
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Use the page slider and toggle features below to compute your transparent estimate. No agency markups.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Slider + Features) */}
          <div className="lg:col-span-7 space-y-8 bg-gray-50/70 p-6 sm:p-8 rounded-2xl border border-gray-200">
            
            {/* 1. Page Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <span>Number of Pages Needed:</span>
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 text-white font-black text-sm">
                  <span>{pagesCount}</span>
                  <span className="text-xs font-medium text-blue-200">
                    {pagesCount === 1 ? "Page (Landing)" : "Pages"}
                  </span>
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-2">
                <span>1 Page (Single Landing)</span>
                <span>5 Pages (Business)</span>
                <span>10 Pages (Company)</span>
                <span>15+ Custom</span>
              </div>
            </div>

            {/* 2. Features-Based Checkboxes */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">
                Select Features &amp; Capabilities:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FEATURES_LIST.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);

                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-start justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-white border-blue-400 shadow-2xs"
                          : "bg-white/60 border-gray-200 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold text-gray-800 leading-snug">
                          {feat.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-gray-600 shrink-0 ml-2">
                        {feat.included ? (
                          <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md text-[10px]">
                            Free
                          </span>
                        ) : (
                          `+₹${feat.price}`
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-Time Price Card & 501/- CTA */}
          <div className="lg:col-span-5 sticky top-28 bg-white p-6 sm:p-8 rounded-2xl border-2 border-blue-600 shadow-xl shadow-blue-600/5">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Transparent Breakdown
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                100% Fixed Rate
              </span>
            </div>

            <div className="py-6 text-center border-b border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Estimated Project Cost</p>
              <div className="mt-2 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-gray-500">₹</span>
                <span className="text-5xl font-black text-gray-950 tracking-tight">
                  {totalEstimate.toLocaleString("en-IN")}
                </span>
                <span className="text-sm font-bold text-gray-400 self-end mb-1">/- only</span>
              </div>
              <p className="mt-1 text-xs text-emerald-600 font-semibold">
                For {pagesCount} {pagesCount === 1 ? "page" : "pages"} with selected modules
              </p>
            </div>

            {/* Special Callout: Website design in 501/- Only */}
            <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-black text-amber-950 uppercase tracking-wide">
                  Special Starter Promotion
                </span>
              </div>
              <p className="text-xs text-amber-900 font-medium leading-relaxed">
                Want to test our design capability first? Claim our prototype package with zero upfront risk!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* PRIMARY CTA AS REQUESTED: Website design in 501/- Only */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Website design in 501/- Only</span>
              </button>

              <a
                href={`https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20used%20the%20slider%20calculator%20for%20${pagesCount}%20pages%20(Estimated%3A%20₹${totalEstimate}).%20I%20want%20to%20discuss.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-xs border border-gray-200 transition-colors"
              >
                <span>Discuss on WhatsApp (+91 9140448004)</span>
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-500">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>100% money back if not satisfied with design prototype</span>
            </div>

          </div>

        </div>

      </div>

      {/* Booking Form Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPlan={`${pagesCount} Pages Custom Configuration (₹${totalEstimate})`}
      />
    </section>
  );
}
