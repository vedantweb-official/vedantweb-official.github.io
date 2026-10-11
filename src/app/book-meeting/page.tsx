import Link from "next/link";
import { ArrowLeft, Video, CheckCircle2, MessageCircle, Calendar, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Book a Google Meet Call | Vedant Web",
  description: "Schedule a free 1-on-1 discovery call on Google Meet directly with the lead engineer at Vedant Web. Discuss website requirements, architecture, and timelines.",
};

export default function BookMeetingPage() {
  const scheduleUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10qC_YpogpHCMHlk98bzpJFSzYZ6ZYbnta9d1QxrmBzlaqcP2E3n4qfDBLYda5RwRBQ8moMV4s?gv=true";

  return (
    <div className="min-h-screen bg-canvas py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Video className="w-3.5 h-3.5 text-blue-600" />
            <span>Google Calendar Appointment Scheduling</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Schedule a Free Discovery Call
          </h1>
          
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Pick a date and convenient time slot on our official Google Calendar. We will connect 1-on-1 on Google Meet to discuss your project requirements, tech stack, and roadmap.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Free Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Direct Lead Full-Stack Engineer
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Instant Google Meet Invite
            </span>
          </div>
        </div>

        {/* Google Calendar Iframe Container */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden p-2 sm:p-4">
          <div className="w-full h-[680px] sm:h-[720px] rounded-2xl overflow-hidden relative bg-white">
            <iframe
              src={scheduleUrl}
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Google Calendar Appointment Scheduling"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>

        {/* Alternative WhatsApp Support Row */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-950">
                Prefer an instant WhatsApp chat instead?
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Message our technical team directly on WhatsApp for immediate replies.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20want%20to%20discuss%20a%20project%20via%20Google%20Meet%20or%20chat."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-cta-white transition-all hover:scale-105 shrink-0"
          >
            <span>Chat on WhatsApp (+91 9140448004)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
