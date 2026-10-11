"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  Laptop,
  Smartphone,
  Database,
  Cpu,
  ExternalLink,
  ShieldCheck,
  Zap,
  RotateCw,
  Maximize2,
  Sliders,
  CheckCircle2,
  Lock,
  Compass,
} from "lucide-react";
import gsap from "gsap";
import { PROJECTS_DATA } from "@/data/projects";
import BookingModal from "./BookingModal";

export default function Interactive3DShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string>("exammarg");
  const [viewMode, setViewMode] = useState<"exploded" | "assembled" | "dual">("exploded");
  const [explodeDepth, setExplodeDepth] = useState<number>(70); // 0 to 100px
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stage3DRef = useRef<HTMLDivElement>(null);
  const baseLayerRef = useRef<HTMLDivElement>(null);
  const engineLayerRef = useRef<HTMLDivElement>(null);
  const uiLayerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const activeProject = PROJECTS_DATA.find((p) => p.id === activeProjectId) || PROJECTS_DATA[0];
  const encodedUrl = encodeURIComponent(activeProject.url);
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodedUrl}?w=1280&h=800`;

  // 3D Mouse & Touch Parallax Tilt with GSAP
  useEffect(() => {
    const stage = stage3DRef.current;
    if (!stage) return;

    // Ambient floating breath
    const floatAnim = gsap.to(stage, {
      y: "-=10",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Base angles depending on mode
      const baseRotY = viewMode === "exploded" ? 18 : 12;
      const baseRotX = viewMode === "exploded" ? -14 : -10;

      const tiltY = (x / rect.width) * 24 + baseRotY;
      const tiltX = -(y / rect.height) * 20 + baseRotX;

      gsap.to(stage, {
        rotateY: tiltY,
        rotateX: tiltX,
        duration: 0.65,
        ease: "power2.out",
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const touch = e.touches[0];
      const rect = stage.getBoundingClientRect();
      const x = touch.clientX - rect.left - rect.width / 2;
      const y = touch.clientY - rect.top - rect.height / 2;

      const tiltY = (x / rect.width) * 16 + 12;
      const tiltX = -(y / rect.height) * 14 - 10;

      gsap.to(stage, {
        rotateY: tiltY,
        rotateX: tiltX,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      const defaultRotY = viewMode === "exploded" ? 18 : 12;
      const defaultRotX = viewMode === "exploded" ? -14 : -10;

      gsap.to(stage, {
        rotateY: defaultRotY,
        rotateX: defaultRotX,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);
    stage.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      floatAnim.kill();
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
      stage.removeEventListener("touchmove", handleTouchMove);
    };
  }, [viewMode]);

  // Dynamic Z translation styles based on explode depth
  const currentDepth = viewMode === "assembled" ? 0 : explodeDepth;
  const uiZ = currentDepth;
  const engineZ = Math.round(currentDepth * 0.45);
  const baseZ = 0;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden select-none">
      {/* Ambient background atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive 3D Spatial Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Not Just A Flat Page. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
              A Living Multi-Layer 3D Experience.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Move your cursor or swipe on mobile to tilt and explore how we engineer high-performance web systems. Pull the layers apart to inspect the frontend glass, real-time engines, and cloud databases.
          </p>
        </div>

        {/* Interactive Control Console */}
        <div className="max-w-4xl mx-auto mb-8 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-between gap-4">
          
          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Project:
            </span>
            <button
              type="button"
              onClick={() => setActiveProjectId("exammarg")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeProjectId === "exammarg"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Exammarg.in
            </button>
            <button
              type="button"
              onClick={() => setActiveProjectId("suchnakendra")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeProjectId === "suchnakendra"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Suchnakendra.in
            </button>
            <button
              type="button"
              onClick={() => setActiveProjectId("kvstimetable")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeProjectId === "kvstimetable"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              KVS Timetable
            </button>
          </div>

          {/* View Modes & Depth Controls */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Mode Selector */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("exploded")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "exploded"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Deconstructed 3D Layers"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exploded 3D</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("assembled")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "assembled"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Unified 3D Browser"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Unified 3D</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("dual")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === "dual"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Mobile + Desktop 3D"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile 3D</span>
              </button>
            </div>

            {/* Depth Slider (visible when exploded) */}
            {viewMode === "exploded" && (
              <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-medium text-slate-400">Depth:</span>
                <input
                  type="range"
                  min="20"
                  max="110"
                  value={explodeDepth}
                  onChange={(e) => setExplodeDepth(Number(e.target.value))}
                  className="w-20 accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <span className="text-[11px] font-mono text-blue-400 w-8">{explodeDepth}px</span>
              </div>
            )}
          </div>

        </div>

        {/* ==============================================================
            THE 3D INTERACTIVE SPATIAL STAGE
            ============================================================== */}
        <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] flex items-center justify-center [perspective:1500px]">
          
          {/* Main 3D Stage Parent Canvas with Preserve-3D */}
          <div
            ref={stage3DRef}
            style={{
              transformStyle: "preserve-3d",
              transform: viewMode === "exploded" ? "rotateY(18deg) rotateX(-14deg)" : "rotateY(12deg) rotateX(-10deg)",
            }}
            className="relative w-[92%] sm:w-[580px] lg:w-[680px] aspect-[16/10] transition-transform duration-300"
          >
            {/* ==========================================================
                LAYER 3 (FOUNDATION): Database & Cloud Architecture
                ========================================================== */}
            <div
              ref={baseLayerRef}
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${baseZ}px) translate(-15px, 20px)`,
              }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-blue-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.85)] p-5 flex flex-col justify-between transition-transform duration-500"
            >
              {/* Layer Label */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Layer 01 · Supabase &amp; Edge Infrastructure
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">PostgreSQL 16 + Edge CDN</span>
              </div>

              {/* Architecture Blueprint Mock */}
              <div className="grid grid-cols-3 gap-3 my-auto py-2 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <Lock className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                  <div className="text-[11px] font-bold text-white">Row Level Security</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Zero Data Leakage</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
                  <div className="text-[11px] font-bold text-white">Edge Caching</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">&lt; 150ms TTFB</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-blue-400 mx-auto mb-1.5" />
                  <div className="text-[11px] font-bold text-white">Automated Backups</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Daily Snapshots</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
                <span>Location: Mumbai (ap-south-1)</span>
                <span className="text-emerald-400 font-bold">● 99.98% Uptime</span>
              </div>
            </div>

            {/* ==========================================================
                LAYER 2 (ENGINE): Next.js 15 & GSAP Animation Pipeline
                ========================================================== */}
            <div
              ref={engineLayerRef}
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${engineZ}px) translate(-5px, 8px)`,
                opacity: viewMode === "assembled" ? 0 : 0.95,
              }}
              className="absolute inset-0 rounded-2xl bg-slate-900/90 border border-indigo-400/30 backdrop-blur-md shadow-[0_20px_50px_rgba(30,58,138,0.3)] p-5 flex flex-col justify-between transition-all duration-500 pointer-events-none"
            >
              <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">
                    Layer 02 · Next.js 15 App Router &amp; GSAP Engine
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                  SSR + React 19
                </span>
              </div>

              {/* Wireframe matrix graphic */}
              <div className="my-auto font-mono text-[11px] text-indigo-200/90 space-y-2 p-3 bg-indigo-950/40 rounded-xl border border-indigo-500/20">
                <div className="flex items-center justify-between">
                  <span>renderPipeline.init(&#123; fps: 60, hardwareAccel: true &#125;)</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 text-[10px]">
                  <span>↳ GSAP ScrollTrigger + 3D Device Tilt Matrix</span>
                  <span>0.00ms drop</span>
                </div>
                <div className="flex items-center justify-between text-blue-300 text-[10px]">
                  <span>↳ Static Generation: 49 hyper-local routes indexed</span>
                  <span>SSG</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-indigo-300 pt-2 border-t border-indigo-500/20">
                <span>Bundle Size: Optimized (&lt;110kB)</span>
                <span>Hydration: 12ms</span>
              </div>
            </div>

            {/* ==========================================================
                LAYER 1 (SURFACE): Interactive Glass Frontend UI
                ========================================================== */}
            <div
              ref={uiLayerRef}
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${uiZ}px)`,
              }}
              className="absolute inset-0 rounded-2xl bg-slate-900 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.25)] overflow-hidden transition-transform duration-500 group"
            >
              {/* Glass glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-30" />

              {/* Browser Top Navigation Bar */}
              <div className="h-10 px-4 bg-slate-950 border-b border-white/10 flex items-center justify-between z-20 relative">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <div className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-300 font-mono flex items-center gap-1.5 max-w-[280px] truncate shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeProject.url.replace("https://", "")}</span>
                </div>

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* High-Resolution Project Preview Screenshot */}
              <div className="relative w-full h-[calc(100%-40px)] bg-slate-950 overflow-hidden">
                <Image
                  src={screenshotUrl}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  priority
                />

                {/* Bottom Overlay with Project Details */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-20 flex items-end p-5 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                        {activeProject.category}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Deployment
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white drop-shadow-md">
                      {activeProject.title}
                    </h3>
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ==========================================================
                FLOATING 3D MOBILE PREVIEW (Dual Mode or Exploded Mode)
                ========================================================== */}
            {(viewMode === "dual" || viewMode === "exploded") && (
              <div
                ref={mobileRef}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${uiZ + 45}px) translate(40px, 40px) rotateY(-8deg) rotateX(6deg)`,
                }}
                className="absolute -bottom-8 -right-4 sm:-right-8 lg:-right-12 w-[120px] sm:w-[160px] aspect-[9/18] rounded-[26px] bg-slate-950 border-4 border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(37,99,235,0.3)] overflow-hidden z-40 hidden xs:block sm:block transition-transform duration-500"
              >
                {/* Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-30" />
                
                {/* Mobile Screen */}
                <div className="relative w-full h-full bg-slate-900 overflow-hidden pt-5">
                  <Image
                    src={screenshotUrl}
                    alt={`${activeProject.title} mobile view`}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>

                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/40 rounded-full z-30" />
              </div>
            )}

            {/* ==========================================================
                HOLOGRAPHIC 3D POP-UP BADGES (Highest translateZ)
                ========================================================== */}
            {/* Badge 1: 501/- Guarantee */}
            <div
              style={{
                transform: `translateZ(${uiZ + 60}px)`,
              }}
              className="absolute -top-6 -left-4 sm:-left-8 z-50 p-3 sm:p-3.5 rounded-2xl bg-slate-900/95 border border-amber-400/40 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 transition-transform duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-slate-950 font-black text-xs shrink-0 shadow-md">
                <Zap className="w-4 h-4 text-slate-950" />
              </div>
              <div>
                <span className="block text-[9px] font-bold text-amber-300 uppercase tracking-wider">
                  Special Promotion
                </span>
                <span className="text-xs font-black text-white">
                  Website design in 501/- Only
                </span>
              </div>
            </div>

            {/* Badge 2: 99+ Performance */}
            <div
              style={{
                transform: `translateZ(${uiZ + 50}px)`,
              }}
              className="absolute bottom-12 -left-2 sm:-left-6 z-50 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 border border-emerald-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-2 transition-transform duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  PageSpeed Rating
                </span>
                <span className="text-xs font-black text-emerald-400">
                  99+ Core Web Vitals
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Feature Cards below the 3D Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-sm font-bold text-white">100% Touch &amp; Mobile Smooth</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every interface is built with responsive touch gestures, zero layout shifting, and hardware-accelerated animations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Database className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-sm font-bold text-white">Supabase Cloud Database</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              PostgreSQL storage with instant API access, real-time subscription streams, and enterprise Row Level Security.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Risk-Free ₹501/- Prototype</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Lock in your project prototype with just ₹501 token. Review the interactive design before paying any balance.
            </p>
          </div>
        </div>

        {/* Primary Call to Action */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-sm shadow-xl shadow-amber-400/20 transition-all hover:scale-105 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-slate-950" />
            <span>Website design in 501/- Only</span>
          </button>
        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPlan="3D Interactive Web Architecture (₹501 Special Promo)"
      />
    </section>
  );
}
