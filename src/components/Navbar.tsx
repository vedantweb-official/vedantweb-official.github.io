"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowDownRight, Video, UserPlus, LogIn } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Left: Clean Brand Logo & Identity matching Codeair styling */}
            <Link href="/" className="flex items-center group py-1">
              <Image
                src="/images/logo-light.png"
                alt="Vedant Web Logo"
                width={100}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </Link>

            {/* Center: Navigation Links inspired by Codeair */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-gray-700">
              <Link
                href="/#services"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
              >
                <span>Services</span>
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <ArrowDownRight className="w-2.5 h-2.5 text-gray-500 group-hover:text-blue-600" />
                </div>
              </Link>
              <Link
                href="/#work"
                className="hover:text-blue-600 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/#timeline"
                className="hover:text-blue-600 transition-colors"
              >
                Process
              </Link>
              <Link
                href="/estimate"
                className="hover:text-blue-600 transition-colors"
              >
                Cost Calculator
              </Link>
              <Link
                href="/#why-us"
                className="hover:text-blue-600 transition-colors"
              >
                Why Us
              </Link>
              <Link
                href="/#faq"
                className="hover:text-blue-600 transition-colors"
              >
                FAQ
              </Link>
            </nav>

            {/* Right: Divider + Login + Register + Book Google Meet (With deep shadow) */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="h-7 w-[1px] bg-gray-200 mx-1 hidden lg:block" />

              <Link
                href="/login"
                className="px-3.5 py-2 text-xs font-bold text-gray-700 hover:text-gray-950 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5 text-gray-500" />
                <span>Login</span>
              </Link>

              <Link
                href="/login"
                className="px-4 py-2 text-xs font-bold text-gray-900 border border-gray-300 hover:border-gray-900 rounded-full transition-colors flex items-center gap-1.5"
              >
                <UserPlus className="w-3.5 h-3.5 text-gray-500" />
                <span>Register</span>
              </Link>

              {/* Book a Google Meet Button linking to Google Calendar page */}
              <Link
                href="/book-meeting"
                className="px-5 py-2.5 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-xs shadow-cta-black flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span>Book a Google Meet</span>
                <Video className="w-3.5 h-3.5 text-blue-400" />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/book-meeting"
                className="px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-bold shadow-cta-black"
              >
                Book Meet
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-gray-200 bg-white px-4 pt-3 pb-5 space-y-2 text-sm font-semibold text-gray-700 shadow-lg">
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Work
            </Link>
            <Link
              href="/#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Process
            </Link>
            <Link
              href="/estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Cost Calculator
            </Link>
            <Link
              href="/#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Why Us
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              FAQ
            </Link>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <div className="flex gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-xs font-bold text-gray-700 bg-gray-100 rounded-full"
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-xs font-bold text-gray-900 border border-gray-300 rounded-full"
                >
                  Register
                </Link>
              </div>
              <Link
                href="/book-meeting"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-black text-white text-xs font-bold shadow-cta-black flex items-center justify-center gap-2"
              >
                <span>Book a Google Meet</span>
                <Video className="w-3.5 h-3.5 text-blue-400" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="google_meet"
      />
    </>
  );
}
