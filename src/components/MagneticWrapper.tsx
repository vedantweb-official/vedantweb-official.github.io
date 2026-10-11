"use client";

import { useRef, useEffect } from "react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export default function MagneticWrapper({
  children,
  strength = 0.28,
  className = "",
  onClick,
}: MagneticWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check fine pointer support
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0px) scale3d(1.02, 1.02, 1)`;
      el.style.transition = "transform 0.08s ease-out";
    };

    const handleMouseLeave = () => {
      el.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
      el.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={elementRef}
      className={`inline-block ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
