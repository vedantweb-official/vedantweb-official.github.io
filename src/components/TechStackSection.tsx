"use client";

import { Layers } from "lucide-react";

interface TechItem {
  name: string;
  slug: string;
  category: string;
  color?: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: "React", slug: "react", category: "Frontend" },
  { name: "Next.js 15", slug: "nextdotjs", category: "Full-Stack" },
  { name: "TypeScript", slug: "typescript", category: "Language" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "Styling" },
  { name: "Node.js", slug: "nodedotjs", category: "Runtime" },
  { name: "Supabase", slug: "supabase", category: "Database" },
  { name: "PostgreSQL", slug: "postgresql", category: "Database" },
  { name: "GSAP Animations", slug: "greensock", category: "Animation" },
  { name: "Express.js", slug: "express", category: "Backend" },
  { name: "MongoDB", slug: "mongodb", category: "Database" },
  { name: "JavaScript", slug: "javascript", category: "Language" },
  { name: "Vercel", slug: "vercel", category: "Deployment" },
  { name: "Git", slug: "git", category: "Version Control" },
  { name: "GitHub", slug: "github", category: "Repository" },
];

export default function TechStackSection() {
  // Duplicate array to achieve seamless infinite looping from left to right
  const marqueeList = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="py-8 sm:py-10 border-b border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        
        {/* Subtle Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold mb-2">
          <Layers className="w-3 h-3" />
          <span>Production Tech Stack</span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-gray-950 tracking-tight">
          Modern Frameworks &amp; Tools We Build With
        </h3>
        
        <p className="mt-1 text-xs text-gray-500 max-w-xl mx-auto">
          Hover over any logo to reveal colors. We engineer high-speed systems using modern enterprise tools.
        </p>
      </div>

      {/* Infinite Moving Slider Track: Left-to-Right with Soft Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] group py-2">
        
        <div className="animate-marquee-ltr flex items-center gap-3.5 sm:gap-5">
          {marqueeList.map((tech, idx) => (
            <div
              key={`${tech.slug}-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs transition-all duration-300 cursor-pointer shrink-0 group/card hover:border-blue-400 hover:shadow-md hover:scale-105"
            >
              {/* Logo: Greyscale by default, colorful on hover */}
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="w-6 h-6 object-contain filter grayscale opacity-55 contrast-75 transition-all duration-300 group-hover/card:filter-none group-hover/card:opacity-100 group-hover/card:scale-110"
                />
              </div>

              {/* Text: Subtle grey by default, dark bold on hover */}
              <div className="text-left">
                <div className="text-xs font-bold text-gray-700 group-hover/card:text-gray-950 transition-colors whitespace-nowrap">
                  {tech.name}
                </div>
                <div className="text-[10px] font-medium text-gray-400 group-hover/card:text-blue-600 transition-colors whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
