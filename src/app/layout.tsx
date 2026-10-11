import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vedantweb.in"),
  title: "Vedant Web — High-Performance Websites & Web Apps | Plans from ₹501/-",
  description: "High-performance, modern, and mobile-ready web applications, SaaS platforms, mock test engines, and business websites starting from just ₹501/- only.",
  keywords: [
    "premium websites in budget",
    "web development in india",
    "website from 501",
    "low cost web developers",
    "mocktest portal development",
    "school management website",
    "Next.js developer India",
    "React developer",
    "Vedant Web",
  ],
  authors: [{ name: "Vedant Web" }],
  openGraph: {
    title: "Vedant Web — High-Performance Websites & Web Apps | Plans from ₹501/-",
    description: "Affordable, lightning-fast web apps & business portals with transparent pricing starting @ ₹501/- only.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://vedantweb.in",
    siteName: "Vedant Web",
    images: [
      {
        url: "/images/logo-light.png",
        width: 800,
        height: 600,
        alt: "Vedant Web Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Web — High-Performance Websites & Web Apps | From ₹501/-",
    description: "High-performance web apps, mock test portals & business websites starting from ₹501/-.",
    images: ["/images/logo-light.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
