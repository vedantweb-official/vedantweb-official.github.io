"use client";

import { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Zap,
  Calendar,
  Video,
  Clock,
  ShieldCheck,
  Send,
  IndianRupee,
} from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

export type BookingMode = "demo_501" | "google_meet";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: BookingMode;
  defaultCity?: string;
  defaultPlan?: string;
  projectSummary?: {
    estimatedPrice?: number;
    pagesCount?: number;
    projectType?: string;
    features?: string[];
  };
}

export default function BookingModal({
  isOpen,
  onClose,
  mode = "demo_501",
  defaultCity = "",
  defaultPlan = "",
  projectSummary,
}: BookingModalProps) {
  const [activeMode, setActiveMode] = useState<BookingMode>(mode);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("11:00 AM - 11:30 AM");
  const [requirements, setRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActiveMode(mode);
    setSubmitted(false);
  }, [mode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSupabaseConfigured && supabase) {
        const isMeet = activeMode === "google_meet";
        await supabase.from("projects").insert({
          client_name: fullName,
          client_email: email,
          client_phone: phone,
          title: projectName || `${fullName}'s Project`,
          city: defaultCity || "India",
          plan_tier: defaultPlan || (isMeet ? "google_meet_discovery" : "demo_501_prototype"),
          total_budget: projectSummary?.estimatedPrice || (isMeet ? 0 : 501),
          token_amount: isMeet ? 0 : 501,
          paid_amount: 0,
          pending_amount: isMeet ? 0 : 501,
          description: `Mode: ${activeMode}. Meeting Slot: ${isMeet ? `${meetingDate} at ${meetingTime}` : "N/A"}. Requirements: ${requirements}. Summary: ${JSON.stringify(projectSummary || {})}`,
          status: "pending",
          progress_pct: 5,
          current_milestone: isMeet
            ? "Google Meet Discovery Scheduled"
            : "₹501 Demo Prototype Intake Submitted",
        });
      }
    } catch (err) {
      console.warn("Supabase log error (fallback mode active):", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const isMeet = activeMode === "google_meet";

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-gray-950 tracking-tight">
              {isMeet ? "Meeting Request Received!" : "₹501 Demo Prototype Booked!"}
            </h3>
            
            <p className="text-sm text-gray-600 mt-2 max-w-sm mx-auto leading-relaxed">
              {isMeet ? (
                <>
                  Thank you, <strong>{fullName}</strong>. We will send the Google Meet invitation to <strong>{email}</strong> and verify via WhatsApp on <strong>{phone}</strong>.
                </>
              ) : (
                <>
                  Your demo request for <strong>{projectName || "your project"}</strong> has been locked at <strong>₹501/-</strong>. Our technical lead will reach out on WhatsApp within 2 hours.
                </>
              )}
            </p>

            {projectSummary?.estimatedPrice && (
              <div className="mt-5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-700 flex items-center justify-between">
                <span className="font-medium text-gray-500">Estimated Project Scope:</span>
                <span className="font-bold text-gray-950">₹{projectSummary.estimatedPrice.toLocaleString("en-IN")}/-</span>
              </div>
            )}

            <button
              onClick={onClose}
              type="button"
              className="mt-6 w-full py-3 rounded-xl bg-gray-950 text-white text-xs font-bold hover:bg-black transition-colors"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <div>
            {/* Top Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-gray-100 border border-gray-200 mb-6">
              <button
                type="button"
                onClick={() => setActiveMode("google_meet")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isMeet
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Google Meet (Free)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("demo_501")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  !isMeet
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Book Demo (₹501/-)</span>
              </button>
            </div>

            {/* Header info */}
            <div className="mb-6">
              <h2 className="text-2xl font-black text-gray-950 tracking-tight flex items-center gap-2">
                {isMeet ? (
                  <>
                    <span>Book Online Meeting</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">Google Meet</span>
                  </>
                ) : (
                  <>
                    <span>Book Demo (Rs. 501/-)</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-bold">Risk-Free</span>
                  </>
                )}
              </h2>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                {isMeet
                  ? "Schedule a 15-minute 1-on-1 strategy call on Google Meet to discuss architecture, timeline, and exact deliverables."
                  : "Lock in your live working interactive prototype for just ₹501. Review the initial design before paying any balance."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    WhatsApp / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Project or Business Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharma Coaching / Exammarg / Portal"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Specific fields for Google Meet */}
              {isMeet && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <div>
                    <label className="block text-xs font-bold text-blue-900 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required={isMeet}
                      value={meetingDate}
                      onChange={(e) => setMeetingDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-blue-200 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-900 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      value={meetingTime}
                      onChange={(e) => setMeetingTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-blue-200 text-xs text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="11:00 AM - 11:30 AM">11:00 AM – 11:30 AM</option>
                      <option value="02:00 PM - 02:30 PM">02:00 PM – 02:30 PM</option>
                      <option value="05:00 PM - 05:30 PM">05:00 PM – 05:30 PM</option>
                      <option value="07:30 PM - 08:00 PM">07:30 PM – 08:00 PM</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Brief Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to build or achieve..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 px-6 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  isMeet
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"
                    : "bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-gray-950 shadow-amber-400/20"
                }`}
              >
                {loading ? (
                  <span>Saving details...</span>
                ) : isMeet ? (
                  <>
                    <Video className="w-4 h-4" />
                    <span>Confirm Google Meet Discovery Call</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Lock In ₹501/- Prototype Demo</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero spam guarantee · Direct communication with lead engineer</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
