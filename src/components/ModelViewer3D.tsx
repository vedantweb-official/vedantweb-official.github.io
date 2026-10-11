"use client";

import { useEffect, useState, useRef } from "react";
import { RotateCw, ZoomIn, Eye, Smartphone, Layers, CheckCircle2 } from "lucide-react";

// React 19 compatible wrapper for custom web component <model-viewer>
const ModelViewer = "model-viewer" as any;

interface ModelViewer3DProps {
  modelSrc?: string;
  posterSrc?: string;
  className?: string;
  autoRotate?: boolean;
  showControls?: boolean;
}

export default function ModelViewer3D({
  modelSrc = "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  posterSrc = "",
  className = "w-full h-[450px] sm:h-[520px]",
  autoRotate = true,
  showControls = true,
}: ModelViewer3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRotating, setIsRotating] = useState(autoRotate);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"front" | "isometric" | "top">("isometric");
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load the Google Model Viewer web component on the client
    import("@google/model-viewer")
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load @google/model-viewer:", err);
      });
  }, []);

  // Quick camera angle presets
  const setCameraView = (view: "front" | "isometric" | "top") => {
    setActiveView(view);
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    if (view === "front") {
      viewer.cameraOrbit = "0deg 75deg 105%";
    } else if (view === "isometric") {
      viewer.cameraOrbit = "45deg 55deg 105%";
    } else if (view === "top") {
      viewer.cameraOrbit = "0deg 20deg 110%";
    }
  };

  const toggleAutoRotate = () => {
    setIsRotating(!isRotating);
    const viewer = modelViewerRef.current;
    if (viewer) {
      viewer.autoRotate = !isRotating;
    }
  };

  const resetCamera = () => {
    const viewer = modelViewerRef.current;
    if (viewer) {
      viewer.cameraOrbit = "45deg 55deg 105%";
      setActiveView("isometric");
    }
  };

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-blue-950/90 via-slate-900 to-indigo-950 p-2 sm:p-3 border border-blue-500/30 shadow-2xl overflow-hidden group">
      
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar inside 3D canvas */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
            <Layers className="w-3 h-3 text-blue-300" />
            <span>Interactive 3D Engine</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 pointer-events-auto">
          <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-medium text-blue-200 border border-white/5">
            Drag to Rotate · Pinch to Zoom
          </span>
        </div>
      </div>

      {/* Main 3D Canvas / Model-Viewer Container */}
      <div className={`relative ${className} flex items-center justify-center rounded-2xl overflow-hidden bg-slate-950/40`}>
        {!isLoaded ? (
          <div className="flex flex-col items-center justify-center gap-3 text-blue-200">
            <div className="w-10 h-10 border-3 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
            <p className="text-xs font-semibold tracking-wide">Initializing 3D Model Viewer...</p>
          </div>
        ) : (
          <ModelViewer
            ref={modelViewerRef}
            src={modelSrc}
            poster={posterSrc}
            alt="Vedant Web 3D Interactive Model"
            auto-rotate={isRotating ? "" : undefined}
            camera-controls=""
            touch-action="pan-y"
            shadow-intensity="1.5"
            shadow-softness="0.8"
            exposure="1.1"
            camera-orbit="45deg 55deg 105%"
            ar=""
            ar-modes="webxr scene-viewer quick-look"
            loading="lazy"
            style={{ width: "100%", height: "100%", outline: "none" }}
            class="cursor-grab active:cursor-grabbing"
          >
            {/* Interactive Hotspot 1: ₹501 Starter Offer */}
            <button
              slot="hotspot-promo"
              data-position="0m 1.5m 0.35m"
              data-normal="0m 0m 1m"
              onClick={() => setActiveHotspot(activeHotspot === "promo" ? null : "promo")}
              className="group/hotspot relative px-2.5 py-1 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 text-[10px] font-black tracking-wide border border-white/40 shadow-lg backdrop-blur-xs flex items-center gap-1 transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>₹501/- Starter</span>
            </button>

            {/* Interactive Hotspot 2: Next.js + GSAP Speed */}
            <button
              slot="hotspot-speed"
              data-position="0.3m 0.9m 0.2m"
              data-normal="1m 0m 0m"
              onClick={() => setActiveHotspot(activeHotspot === "speed" ? null : "speed")}
              className="group/hotspot relative px-2.5 py-1 rounded-full bg-blue-500/90 hover:bg-blue-400 text-white text-[10px] font-black tracking-wide border border-white/40 shadow-lg backdrop-blur-xs flex items-center gap-1 transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              <span>Next.js + GSAP</span>
            </button>

            {/* Interactive Hotspot 3: Mobile Touch Ready */}
            <button
              slot="hotspot-mobile"
              data-position="-0.3m 0.9m 0.2m"
              data-normal="-1m 0m 0m"
              onClick={() => setActiveHotspot(activeHotspot === "mobile" ? null : "mobile")}
              className="group/hotspot relative px-2.5 py-1 rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-white text-[10px] font-black tracking-wide border border-white/40 shadow-lg backdrop-blur-xs flex items-center gap-1 transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <Smartphone className="w-3 h-3 text-indigo-200" />
              <span>Mobile Touch 3D</span>
            </button>

            {/* AR Button (Appears automatically on AR-compatible mobile phones) */}
            <button
              slot="ar-button"
              className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border border-blue-400/40 pointer-events-auto"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View in AR Space</span>
            </button>
          </ModelViewer>
        )}
      </div>

      {/* Hotspot details bubble overlay */}
      {activeHotspot && (
        <div className="absolute top-16 left-4 right-4 z-30 p-3.5 rounded-2xl bg-slate-900/95 border border-blue-500/40 backdrop-blur-md text-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-xs font-medium text-slate-200">
              {activeHotspot === "promo" && "Special Promotion: Lock your prototype for just ₹501/- token advance with full money-back guarantee."}
              {activeHotspot === "speed" && "Built with Next.js 15, GSAP hardware-accelerated animations, and Google Model Viewer for sub-second page loads."}
              {activeHotspot === "mobile" && "Full multi-touch gesture support: pinch to zoom, single-finger rotate, and WebXR Augmented Reality on iOS & Android."}
            </p>
          </div>
          <button
            onClick={() => setActiveHotspot(null)}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md bg-white/5"
          >
            ✕
          </button>
        </div>
      )}

      {/* Bottom Interactive Control Toolbar */}
      {showControls && (
        <div className="mt-2.5 p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 flex flex-wrap items-center justify-between gap-2">
          
          {/* Camera Angles */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1.5 hidden sm:inline">
              Angles:
            </span>
            <button
              type="button"
              onClick={() => setCameraView("front")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === "front"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              Front
            </button>
            <button
              type="button"
              onClick={() => setCameraView("isometric")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === "isometric"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              3D Hero Angle
            </button>
            <button
              type="button"
              onClick={() => setCameraView("top")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeView === "top"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              Top-Down
            </button>
          </div>

          {/* Action Toggles (Auto-Rotate, Reset) */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleAutoRotate}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                isRotating
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
              title="Toggle Auto Rotation"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} />
              <span className="text-[10px]">{isRotating ? "Spinning" : "Paused"}</span>
            </button>

            <button
              type="button"
              onClick={resetCamera}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-bold transition-colors"
            >
              Reset View
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
