"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does the Book Demo (Rs. 501/-) and Starter Token work?",
    a: "You begin by locking in your prototype for just ₹501/- token. We design and deploy an initial working interactive demo for your review. Once you test and approve it, we proceed with full feature integration. You only pay the balance upon complete satisfaction.",
  },
  {
    q: "Can we discuss our project on a Google Meet call before booking?",
    a: "Yes, absolutely! You can click 'Book Online Meeting' anywhere on our site to schedule a free 15-minute 1-on-1 strategy call on Google Meet directly with our technical lead to discuss architecture, timeline, and exact scope.",
  },
  {
    q: "What is your typical project delivery turnaround time?",
    a: "Starter and landing pages are typically delivered within 24 to 48 hours. Multi-page business sites take 3 to 5 days, while complex full-stack portals (such as custom mock test engines or SaaS web apps) take 1 to 2 weeks.",
  },
  {
    q: "Can I report bugs or request changes during development?",
    a: "Yes, 100%! With our dedicated Client Portal, you can track live project progress and use the built-in Bug & Feedback Tracker to report any tweaks or issues. Our admin marks each item as 'Done' with explanatory comments.",
  },
  {
    q: "Will my website rank on Google for local city searches?",
    a: "Yes. All our websites are built with semantic HTML5, Next.js Static Site Generation (SSG), mobile optimization, and LocalBusiness Schema markup. This makes it effortless for Google to index and rank your pages.",
  },
  {
    q: "Do I own the complete code and website after completion?",
    a: "Yes. Unlike agencies that lock you into proprietary platforms or high recurring monthly maintenance, you own 100% of your source code, domain, and database.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Everything you need to know about our plans, delivery process, and guarantee.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors focus:outline-hidden"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
