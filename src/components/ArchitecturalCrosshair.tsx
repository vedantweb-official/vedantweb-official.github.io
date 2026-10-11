"use client";

import { useEffect, useRef } from "react";

export default function ArchitecturalCrosshair() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on desktop / fine pointer devices
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    // Hide default OS cursor on HTML element
    document.documentElement.classList.add("hide-default-cursor");

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.style.display = "flex";

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Zero latency direct hardware transform (no React re-render, no CSS transition delay)
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          "a, button, input, textarea, select, [role='button'], [tabindex='0'], label"
        );
        if (isInteractive) {
          cursor.classList.add("cursor-interactive");
        } else {
          cursor.classList.remove("cursor-interactive");
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("hide-default-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 -mt-3.5 -ml-3.5 w-7 h-7 rounded-full border border-gray-950/70 bg-white/20 backdrop-blur-xs pointer-events-none z-[99999] items-center justify-center select-none hidden will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        transition: "width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s ease-out, background-color 0.15s ease-out, margin 0.15s ease-out, opacity 0.15s ease-out",
      }}
    >
      <div
        ref={dotRef}
        className="w-1.5 h-1.5 rounded-full bg-gray-950 pointer-events-none"
      />
    </div>
  );
}
