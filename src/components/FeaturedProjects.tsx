import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, CheckCircle2, Globe, Laptop } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import MagneticWrapper from "./MagneticWrapper";

export default function FeaturedProjects() {
  // Grab the top 3 projects designated by the user
  const featured = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="py-12 sm:py-16 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Corner cross-marks (+) */}
      <div className="absolute top-3 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute top-3 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-3 left-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute bottom-3 right-6 text-gray-300 font-mono text-xs select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Laptop className="w-3 h-3" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Featured Client Platforms
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Real platforms engineered for speed, clean UX, and high conversions. Deployed live in production.
            </p>
          </div>

          <div className="shrink-0">
            <MagneticWrapper>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-900 shadow-2xs hover:border-gray-400 transition-all group"
              >
                <span>View All 8+ Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticWrapper>
          </div>
        </div>

        {/* 3-Column Grid for the 3 priority projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, idx) => {
            const encodedUrl = encodeURIComponent(project.url);
            const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodedUrl}?w=1280&h=800`;

            return (
              <article
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Screenshot Media Container */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden border-b border-gray-100">
                  <Image
                    src={screenshotUrl}
                    alt={`${project.title} live screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  
                  {/* Status Indicator Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white flex items-center gap-1.5 shadow-md border border-white/10 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live in Production</span>
                  </div>

                  {/* Sliding Action Overlay */}
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-transform hover:scale-105"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-black text-gray-950 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{project.url.replace("https://", "").replace("/", "")}</span>
                    </a>

                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                      #{idx + 1}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 sm:mt-10 text-center">
          <MagneticWrapper>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-xs font-black shadow-2xs hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              <span>Explore All Client Work (Kshitiz, KVK, Ved Water, Vedaa, etc.)</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
            </Link>
          </MagneticWrapper>
        </div>

      </div>
    </section>
  );
}
