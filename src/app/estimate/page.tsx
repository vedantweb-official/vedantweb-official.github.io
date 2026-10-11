import ProgressiveCostEstimator from "@/components/ProgressiveCostEstimator";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Video, Zap } from "lucide-react";

export const metadata = {
  title: "Website Cost Estimator India — Progressive Project Calculator | Vedant Web",
  description: "Configure your exact website scope with our progressive project cost estimator. Transparent breakdown with instant options to Book Demo (₹501/-) or Book Google Meet.",
};

export default function EstimatePage() {
  return (
    <div className="py-12 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressiveCostEstimator />
      </div>

      {/* Trust & Guarantees info */}
      <section className="py-16 bg-white border-t border-gray-100 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-black text-gray-950 text-center mb-8">
            Why Our Transparent Development Model Wins
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Zap className="w-5 h-5 text-amber-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Risk-Free ₹501/- Demo</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Test our code quality and responsiveness with a ₹501 token prototype. Review the live URL before committing any project balance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Video className="w-5 h-5 text-blue-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Direct Google Meet</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Speak directly with the lead engineer over a 15-minute Google Meet call to align on tech stack, database schemas, and delivery timeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">100% Code Ownership</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Full production Next.js repository handed over without platform lock-in. Deployed on modern edge infrastructure with Supabase database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
