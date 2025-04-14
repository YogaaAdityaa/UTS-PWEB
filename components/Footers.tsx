"use client";

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footers() {
  return (
    <footer className="relative bg-black text-white h-[140px] w-full">
      {/* Background Image */}
      <img
        src="/background2.png" // Ganti dengan path gambar kamu
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        <div className="flex items-center justify-between px-6 md:px-12 text-xs md:text-sm">
          {/* Left Text */}
          <span className="text-white">Copyright © 2023 XIDE</span>

          {/* Center Logo + Tagline */}
          <div className="text-center space-y-1">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/logo.png"
                alt="Liquid Maestro Logo"
                className="h-10 object-contain mb-1"
              />
              <span className="text-xs tracking-widest leading-3 text-white">
                LIQUID<br />MAESTRO
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-white">
              World of extraordinary flavors & unrivaled mixology expertise
            </p>
          </div>

          {/* Right Socials + Credit */}
          <div className="flex flex-col items-end space-y-1">
            <div className="flex space-x-3 text-lg">
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
            </div>
            <span className="text-xs">
              Design by <span className="font-semibold">XIDE</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
