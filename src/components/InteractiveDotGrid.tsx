"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const SPACING = 36; // Optimized spacing for smooth 60fps+ rendering
    let time = 0;

    const render = () => {
      time += 0.015; // Smooth slow hue cycle
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);

      for (let i = 0; i < cols; i++) {
        const x = i * SPACING;
        for (let j = 0; j < rows; j++) {
          const y = j * SPACING;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distSq = dx * dx + dy * dy;
          const isNear = distSq < 14400; // 120 * 120

          // Smooth slow color wave
          const hue = (215 + Math.sin(time * 0.4 + (i + j) * 0.08) * 55 + 360) % 360;

          let radius = 1.25;
          let alpha = 0.16 + Math.sin(time + i * 0.2 + j * 0.15) * 0.08;

          if (isNear) {
            const dist = Math.sqrt(distSq);
            const prox = 1 - dist / 120;
            radius = 1.25 + prox * 2.2;
            alpha = Math.min(0.85, alpha + prox * 0.6);
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-80"
      style={{ willChange: "transform" }}
    />
  );
}
