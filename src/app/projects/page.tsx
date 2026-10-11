"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Filter, Code2, ArrowLeft } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

type CategoryFilter = "all" | "education" | "saas" | "business" | "portfolio";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div className="py-16 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Client Portfolio</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">
            Live Client Projects & Web Applications
          </h1>
          <p className="mt-3 text-base text-gray-600">
            A comprehensive showcase of custom web portals, mock test platforms, and business systems designed and shipped across industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>

          {[
            { id: "all", label: "All Works (8)" },
            { id: "education", label: "Education & Portals" },
            { id: "saas", label: "SaaS & Web Apps" },
            { id: "business", label: "Business Portals" },
            { id: "portfolio", label: "Entertainment & Portfolio" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as CategoryFilter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === tab.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const encodedUrl = encodeURIComponent(project.url);
            const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodedUrl}?w=1280&h=800`;

            return (
              <article
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Screenshot Container */}
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden border-b border-gray-100">
                  <Image
                    src={screenshotUrl}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />

                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-blue-600 text-[10px] font-black uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>Featured Work</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-transform hover:scale-105"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-xs">
          <h3 className="text-xl font-bold text-gray-950">
            Need a similar custom solution for your business or school?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-lg mx-auto">
            Book our starter development demo with ₹999 token advance or get an instant cost calculation.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/estimate"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              Calculate Cost
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs"
            >
              Book for ₹999
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
