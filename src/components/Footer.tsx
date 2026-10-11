import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";

export default function Footer() {
  const googleLink = "https://local.google.com/place?placeid=ChIJHVnB5ekTAUURsnBZJ1oXi3g";

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      {/* Top Banner: Limited Time Offer */}
      <div className="bg-blue-600/20 border-b border-blue-500/20 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm font-semibold text-white">
              Launch Your Business Online — Special Promotion: <span className="text-emerald-400 underline font-extrabold">Website design in 501/- Only</span>
            </p>
          </div>
          <a
            href="https://wa.me/919140448004?text=Hi%20Vedant%20Web%2C%20I%20want%20to%20claim%20the%20Website%20design%20in%20501%2F-%20offer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-gray-950 text-xs font-bold transition-transform hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp: +91 9140448004</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block group py-1">
                <Image
                  src="/images/logo-dark.png"
                  alt="Vedant Web Logo"
                  width={110}
                  height={60}
                  className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              We engineer high-converting, modern, and lightning-fast websites and custom web applications on Next.js 15 and Supabase on transparent budgets.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+919140448004" className="hover:text-white transition-colors">+91 9140448004</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:vedantwebofficial@gmail.com" className="hover:text-white transition-colors">vedantwebofficial@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Pan-India Remote Delivery (UP, NCR, Nationwide)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Client Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-white transition-colors text-amber-400">
                  Interactive Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">Client Portal (In Dev)</Link>
              </li>
              <li>
                <Link href="/book-meeting" className="hover:text-white transition-colors">Book Google Meet</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>UI/UX Design &amp; Figma</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mobile Apps (iOS &amp; Android)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Full Stack Next.js Web Apps</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Logo Design &amp; Branding</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rapid 7-Day MVP Development</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>AI Powered Products &amp; LLMs</span>
              </li>
            </ul>
          </div>

          {/* Google Business Profile Verified Card */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Verified Business</h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Google Business Profile</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Verified Listing</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400">
                Check our official presence, verified location, and client reviews on Google.
              </p>

              <a
                href={googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Check us out on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>


        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Vedant Web. All rights reserved. Handcrafted with Next.js &amp; Supabase.</p>
          <div className="flex items-center gap-6">
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Google Business Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-gray-700">|</span>
            <span>Website design in 501/- Only</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
