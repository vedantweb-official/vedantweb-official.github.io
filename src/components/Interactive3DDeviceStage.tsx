"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Zap, Lock, Globe, Smartphone, Laptop } from "lucide-react";
import gsap from "gsap";
import { PROJECTS_DATA } from "@/data/projects";

export default function Interactive3DDeviceStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const card3DRef = useRef<HTMLDivElement>(null);
  const mobile3DRef = useRef<HTMLDivElement>(null);
  const floatBadge1Ref = useRef<HTMLDivElement>(null);
  const floatBadge2Ref = useRef<HTMLDivElement>(null);
  const floatBadge3Ref = useRef<HTMLDivElement>(null);

  // Active showcased project on the 3D screen
  const [selectedProjectId, setSelectedProjectId] = useState<string>("exammarg");
  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const encodedUrl = encodeURIComponent(activeProject.url);
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodedUrl}?w=1280&h=800`;

  useEffect(() => {
    const stage = stageRef.current;
    const card = card3DRef.current;
    if (!stage || !card) return;

    // 1. Continuous ambient floating motion via GSAP
    const floatAnim = gsap.to(card, {
      y: "-=12",
      rotateZ: "-=1",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    if (mobile3DRef.current) {
      gsap.to(mobile3DRef.current, {
        y: "+=10",
        rotateZ: "+=1.5",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });
    }

    if (floatBadge1Ref.current && floatBadge2Ref.current && floatBadge3Ref.current) {
      gsap.to(floatBadge1Ref.current, {
        y: "-=8",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(floatBadge2Ref.current, {
        y: "+=9",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });
      gsap.to(floatBadge3Ref.current, {
        y: "-=7",
        duration: 2.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.8,
      });
    }

    // 2. Interactive 3D Cursor Tilt with realistic inertia
    const handleMouseMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = (x / rect.width) * 26 - 12; // base offset -12deg
      const rotateX = -(y / rect.height) * 20 + 8; // base offset +8deg

      gsap.to(card, {
        rotateY: rotateY,
        rotateX: rotateX,
        duration: 0.7,
        ease: "power2.out",
      });

      if (mobile3DRef.current) {
        gsap.to(mobile3DRef.current, {
          rotateY: rotateY * 1.3 + 10,
          rotateX: rotateX * 1.2 - 5,
          duration: 0.75,
          ease: "power2.out",
        });
      }
    };

    // 3. Mobile Touch Tilt
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const touch = e.touches[0];
      const rect = stage.getBoundingClientRect();
      const x = touch.clientX - rect.left - rect.width / 2;
      const y = touch.clientY - rect.top - rect.height / 2;

      const rotateY = (x / rect.width) * 18 - 8;
      const rotateX = -(y / rect.height) * 14 + 6;

      gsap.to(card, {
        rotateY: rotateY,
        rotateX: rotateX,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: -14,
        rotateX: 10,
        duration: 1.2,
        ease: "power3.out",
      });
      if (mobile3DRef.current) {
        gsap.to(mobile3DRef.current, {
          rotateY: 8,
          rotateX: 5,
          duration: 1.2,
          ease: "power3.out",
        });
      }
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
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative w-full h-[480px] sm:h-[560px] lg:h-[600px] flex items-center justify-center [perspective:1400px] select-none cursor-pointer"
    >
      {/* 3D Ambient Glowing Light Disk behind the devices */}
      <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-teal-400/20 blur-3xl pointer-events-none -z-10" />

      {/* Interactive Project Switcher Bar */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-xl max-w-[95%] overflow-x-auto">
        <button
          type="button"
          onClick={() => setSelectedProjectId("exammarg")}
          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
            selectedProjectId === "exammarg"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Exammarg.in
        </button>
        <button
          type="button"
          onClick={() => setSelectedProjectId("suchnakendra")}
          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
            selectedProjectId === "suchnakendra"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Suchnakendra.in
        </button>
        <button
          type="button"
          onClick={() => setSelectedProjectId("kvstimetable")}
          className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
            selectedProjectId === "kvstimetable"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          KVS Timetable
        </button>
      </div>

      {/* ==============================================================
          MAIN 3D FLOATING BROWSER / DESKTOP VIEWPORT
          ============================================================== */}
      <div
        ref={card3DRef}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-14deg) rotateX(10deg) rotateZ(-1.5deg)",
        }}
        className="relative w-[92%] sm:w-[480px] lg:w-[540px] aspect-[16/10] rounded-2xl bg-slate-900/95 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-xl transition-shadow duration-300 group hover:shadow-[0_30px_70px_-10px_rgba(37,99,235,0.35)] overflow-hidden"
      >
        {/* Specular glass reflection diagonal sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />

        {/* Chrome Browser Header Bar */}
        <div className="h-10 px-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between z-10 relative">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* URL Bar */}
          <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[10px] sm:text-xs text-slate-300 font-mono flex items-center gap-1.5 max-w-[240px] truncate shadow-inner">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{activeProject.url.replace("https://", "")}</span>
          </div>

          {/* Live indicator */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Browser Viewport with Live Screenshot */}
        <div className="relative w-full h-[calc(100%-40px)] bg-slate-950 overflow-hidden">
          <Image
            src={screenshotUrl}
            alt={activeProject.title}
            fill
            sizes="600px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            unoptimized
            priority
          />

          {/* Live Gradient Fade at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10 flex items-end p-4 justify-between">
            <div>
              <span className="px-2 py-0.5 rounded-md bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                {activeProject.category}
              </span>
              <h3 className="text-sm font-black text-white mt-1 drop-shadow-md">
                {activeProject.title}
              </h3>
            </div>

            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1 shadow-lg"
            >
              <span>Visit Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ==============================================================
          FLOATING 3D MOBILE DEVICE (Overlapping with independent parallax depth)
          ============================================================== */}
      <div
        ref={mobile3DRef}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(8deg) rotateX(5deg) translateZ(60px)",
        }}
        className="absolute bottom-6 right-2 sm:right-6 lg:-right-4 w-[130px] sm:w-[170px] aspect-[9/18] rounded-[28px] bg-slate-950 border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(37,99,235,0.25)] overflow-hidden z-20 hidden xs:block sm:block"
      >
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-20" />

        {/* Mobile Viewport Screen */}
        <div className="relative w-full h-full bg-slate-900 overflow-hidden pt-6">
          <Image
            src={screenshotUrl}
            alt={`${activeProject.title} mobile preview`}
            fill
            sizes="200px"
            className="object-cover object-top"
            unoptimized
          />
          {/* Glass glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        </div>

        {/* Subtle home indicator bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/40 rounded-full z-20" />
      </div>

      {/* ==============================================================
          3D HOLOGRAPHIC FLOATING BADGES (High Z-Index & Depth)
          ============================================================== */}
      
      {/* Badge 1: 501 Offer Lock */}
      <div
        ref={floatBadge1Ref}
        style={{ transform: "translateZ(85px)" }}
        className="absolute top-16 left-0 sm:-left-6 z-30 p-3 sm:p-3.5 rounded-2xl bg-slate-900/95 border border-amber-400/40 backdrop-blur-xl shadow-2xl flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-black text-xs shrink-0 shadow-md">
          <Zap className="w-4 h-4 text-slate-950" />
        </div>
        <div>
          <span className="block text-[10px] font-bold text-amber-300 uppercase tracking-wider">
            Special Launch Promo
          </span>
          <span className="text-xs font-black text-white">
            Design in ₹501/- Only
          </span>
        </div>
      </div>

      {/* Badge 2: 99.8% Speed Score */}
      <div
        ref={floatBadge2Ref}
        style={{ transform: "translateZ(75px)" }}
        className="absolute bottom-12 left-4 sm:-left-2 z-30 p-3 rounded-2xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            PageSpeed Rating
          </span>
          <span className="text-xs font-black text-emerald-400">
            99+ Mobile &amp; Desktop
          </span>
        </div>
      </div>

      {/* Badge 3: Google Business Verified */}
      <div
        ref={floatBadge3Ref}
        style={{ transform: "translateZ(90px)" }}
        className="absolute -top-3 right-4 sm:right-12 z-30 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-400/40 backdrop-blur-xl shadow-xl flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-bold text-slate-200">
          Google Business Verified Profile
        </span>
      </div>

    </div>
  );
}
