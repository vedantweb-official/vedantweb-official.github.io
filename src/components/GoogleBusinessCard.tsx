import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";

export default function GoogleBusinessCard() {
  const googleLink = "https://local.google.com/place?placeid=ChIJHVnB5ekTAUURsnBZJ1oXi3g";

  return (
    <div className="p-6 rounded-3xl bg-white border border-gray-200/90 shadow-lg hover:shadow-xl transition-all max-w-sm w-full text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-3">
        {/* Google 4-color G logo */}
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      </div>

      <h4 className="text-base font-black text-gray-950">
        Check Us Out on Google
      </h4>
      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 justify-center">
        <MapPin className="w-3.5 h-3.5 text-blue-600" />
        <span>Vedant Web · Verified Business Profile</span>
      </p>

      {/* Official QR Code Badge */}
      <a
        href={googleLink}
        target="_blank"
        rel="noopener noreferrer"
        className="my-4 relative w-48 h-48 rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:scale-105 transition-transform block group"
      >
        <Image
          src="/images/google-qr-card.png"
          alt="Vedant Web Google Business QR Code"
          fill
          className="object-contain p-2"
        />
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1 rounded-full bg-black/80 text-white text-[10px] font-bold backdrop-blur-xs">
            Open in Google Maps ↗
          </span>
        </div>
      </a>

      <a
        href={googleLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
      >
        <span>View Google Business Page</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
