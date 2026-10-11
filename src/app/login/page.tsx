"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Video,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Layers,
  ShieldCheck,
  Zap,
  Terminal,
  Activity,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function ClientPortalDevelopmentPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"milestones" | "invoicing" | "tickets" | "security">("milestones");
  const [selectedService, setSelectedService] = useState("₹501/- Prototype Landing Page");
  const [clientName, setClientName] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  const phoneNumber = "+91 9140448004";
  const rawPhone = "919140448004";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppUrl = () => {
    const greeting = clientName.trim()
      ? `Hi Vedant Web, I am ${clientName.trim()}.`
      : `Hi Vedant Web,`;
    const details = clientNotes.trim()
      ? ` Requirement: ${clientNotes.trim()}`
      : ``;
    const text = encodeURIComponent(
      `${greeting} I am interested in discussing my project (${selectedService}).${details} Looking forward to connecting!`
    );
    return `https://wa.me/${rawPhone}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-canvas text-gray-900 selection:bg-blue-500 selection:text-white relative overflow-hidden">
      {/* Creative Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/10 to-amber-300/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-48 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-10 -right-48 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

      {/* Navigation Header */}
      <header className="border-b border-gray-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-light.png"
              alt="Vedant Web Logo"
              width={100}
              height={50}
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-600 hover:text-gray-950 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/book-meeting"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-950 text-white hover:bg-gray-800 transition-colors shadow-xs"
            >
              <Video className="w-3.5 h-3.5 text-blue-400" />
              <span>Book Google Meet</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        
        {/* Animated Beacon Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="tracking-wide uppercase text-[11px] font-black">Facility Under Active Development</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Client Portal &amp; Self-Service Dashboard Coming Soon
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We are engineering an automated client control room with real-time Git sprint telemetry, milestone sign-offs, and instant invoice tracking. During this phase, <strong className="text-gray-900 font-bold">all client onboarding, project discussions, and sprint reviews are managed directly with our lead full-stack engineering team.</strong>
          </p>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-blue-700">
            No waiting queues. Connect directly with our lead engineer via Phone, WhatsApp, or Google Meet:
          </p>
        </div>

        {/* 3 Core Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          
          {/* Card 1: Direct Phone Call */}
          <div className="group relative bg-white rounded-3xl border border-gray-200/90 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-black tracking-wider uppercase text-emerald-700 mb-1">
                Immediate Discussion
              </div>
              <h3 className="text-lg font-bold text-gray-950">Call Lead Engineer</h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Direct phone consultation with our founder. Discuss scope, technical feasibility, and delivery timeline.
              </p>
              
              <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs font-mono font-bold text-gray-800">
                <span>{phoneNumber}</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              {copied && (
                <p className="text-[10px] text-emerald-600 font-bold mt-1 text-right">
                  Copied to clipboard!
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href={`tel:${phoneNumber}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call +91 9140448004</span>
              </a>
              <p className="text-[10px] text-center text-gray-400 font-medium mt-2">
                Available 9:00 AM – 9:00 PM IST
              </p>
            </div>
          </div>

          {/* Card 2: WhatsApp Direct Connect */}
          <div className="group relative bg-white rounded-3xl border-2 border-emerald-500/70 p-6 shadow-md hover:shadow-xl hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
              Fastest Response
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md shadow-emerald-500/30">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-black tracking-wider uppercase text-emerald-700 mb-1">
                Instant Chat &amp; Wireframes
              </div>
              <h3 className="text-lg font-bold text-gray-950">WhatsApp Connect</h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Send references, Figma links, PDFs, or requirement voice notes. Get immediate quotes and sprint timelines.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-medium">
                ⚡ Typical reply time: <strong className="font-bold text-emerald-800">&lt; 15 minutes</strong>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/30 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-center text-gray-400 font-medium mt-2">
                Direct WhatsApp with Founder
              </p>
            </div>
          </div>

          {/* Card 3: Book a Google Meet */}
          <div className="group relative bg-white rounded-3xl border border-gray-200/90 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-black tracking-wider uppercase text-blue-700 mb-1">
                Google Calendar Integrated
              </div>
              <h3 className="text-lg font-bold text-gray-950">Book Google Meet</h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Choose a 30-minute slot on our official Google Calendar. We will share screens and map your application architecture.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Instant Google Meet invite link generated</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                href="/book-meeting"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-bold text-xs shadow-cta-black transition-all hover:scale-[1.02]"
              >
                <Video className="w-3.5 h-3.5 text-blue-400" />
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[10px] text-center text-gray-400 font-medium mt-2">
                100% Free • No Obligation
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Quick Direct Connect Builder */}
        <section className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-sm mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Interactive Requirement Dispatcher</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                Have a Project in Mind? Prefill &amp; Send Instantly
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Select your service tier and shoot a pre-formatted requirement over WhatsApp or call us directly.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Select Project Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "₹501/- Prototype Landing Page",
                    "Standard Business Website (₹2,499)",
                    "Full-Stack Web App / SaaS",
                    "Mobile App (Android/iOS)",
                    "UI/UX Design &amp; Figma Prototype",
                    "Custom MVP in 7 Days",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service.replace("&amp;", "&"))}
                      className={`text-left p-2.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedService === service.replace("&amp;", "&")
                          ? "border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {service.replace("&amp;", "&")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Your Name / Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Key Requirement or Reference Links (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Need booking app like Practo"
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Live WhatsApp preview & trigger card */}
            <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100 p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Live Dispatch Preview
                </span>
                <p className="mt-2 text-xs text-gray-700 italic bg-white p-3 rounded-xl border border-emerald-100 leading-relaxed font-mono">
                  &ldquo;Hi Vedant Web{clientName ? `, I am ${clientName}` : ""}. I am interested in discussing my project ({selectedService}){clientNotes ? ` - ${clientNotes}` : ""}.&rdquo;
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-bold text-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or Call Directly</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Feature Roadmap Explorer */}
        <section className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-sm mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5 text-purple-600" />
              <span>Engineering Preview</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-950">
              What We Are Building for the Client Portal
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Click through the engineering modules below to explore the upcoming self-service suite:
            </p>
          </div>

          {/* Tab selector */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-gray-100 pb-3">
            {[
              { id: "milestones", label: "Live Git Sprint Tracker", icon: Activity },
              { id: "invoicing", label: "Transparent Invoicing & Escrow", icon: Layers },
              { id: "tickets", label: "1-Click Revision Hub", icon: Zap },
              { id: "security", label: "Credentials & Staging Vault", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-gray-950 text-white shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-6 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            {activeTab === "milestones" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-950">Real-Time CI/CD &amp; Sprint Milestone Tracking</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-700">In Architecture</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every project will be connected directly to private GitHub repositories with automated preview deployments on Vercel. Clients will track Wireframe &rarr; UI Implementation &rarr; API Integration &rarr; Final Staging Sign-Off with live progress bars.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="text-gray-400 font-bold block text-[10px]">STAGE 1</span>
                    <span className="font-bold text-gray-900">Figma &amp; Architecture</span>
                    <p className="text-[11px] text-gray-500 mt-0.5">Wireframes approved before coding starts</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="text-gray-400 font-bold block text-[10px]">STAGE 2</span>
                    <span className="font-bold text-gray-900">Staging Deployment</span>
                    <p className="text-[11px] text-gray-500 mt-0.5">Interactive live URL on .vercel.app</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="text-gray-400 font-bold block text-[10px]">STAGE 3</span>
                    <span className="font-bold text-gray-900">Production &amp; Handover</span>
                    <p className="text-[11px] text-gray-500 mt-0.5">Custom domain DNS &amp; full source code</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "invoicing" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-950">Milestone-Based Escrow Payments &amp; Instant Invoices</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">In Integration</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Zero hidden costs. Clients book projects with small token advances (such as our ₹501/- prototype model or ₹999/- standard starter token). Remaining balance is unlocked only upon your final satisfaction and staging approval.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant downloadable GST invoice PDFs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>UPI, NetBanking &amp; Cards via Razorpay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Clear breakdown of tokens, balances &amp; domain fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% money-back guarantee if prototype rejected</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "tickets" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-950">1-Click Revision Dispatcher &amp; Bug Tracking</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-700">In Planning</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pinpoint exact feedback directly on the website preview. Submissions trigger automated webhooks directly to our developers&apos; private channels with screenshot attachments, resulting in sub-24h turnaround times.
                </p>
                <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-700 flex items-center justify-between">
                  <span>Current alternative: Share screenshot directly on WhatsApp</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>Send on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-950">Encrypted Credentials &amp; Domain Vault</h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">Security Hardening</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All database credentials (PostgreSQL/Supabase), third-party API keys (Razorpay, Google OAuth), and domain DNS records are secured with AES-256 encryption. Handover packages include zipped source code, license documentation, and admin ownership transfers.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-gray-600">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200">Supabase Auth</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200">Row Level Security</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200">Vercel Edge Encryption</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-gray-200">Git Zero-Leak Audit</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Google Business Profile & Shipped Work Trust Bar */}
        <section className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 border border-blue-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Google Verified Business</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Verified Track Record Across India
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
              We have designed and deployed high-performance platforms like <strong>ExamMarg.in</strong> (online mock test engine), <strong>SuchnaKendra.in</strong> (job notification portal), and automated academic scheduling software. Check our public Google reviews and portfolio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://local.google.com/place?placeid=ChIJHVnB5ekTAUURsnBZJ1oXi3g"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-gray-950 font-bold text-xs hover:bg-gray-100 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            </a>

            <Link
              href="/projects"
              className="px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore All Shipped Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-200/80 py-8 bg-white text-center text-xs text-gray-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vedant Web. All rights reserved.</p>
          <div className="flex items-center gap-4 font-semibold text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="/estimate" className="hover:text-blue-600 transition-colors">Cost Calculator</Link>
            <Link href="/book-meeting" className="hover:text-blue-600 transition-colors">Book Google Meet</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
