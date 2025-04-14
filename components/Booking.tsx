"use client";

import { useState } from "react";
import { Calendar } from "../components/UI/Calender";

export default function Booking() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4">
        
        {/* image "B" */}
        <div className="relative hidden lg:flex items-center justify-left -ml-80">
          <img
            src="/B.png"
            alt="Background letter B"
            className="w-auto h-[950px] object-contain"
          />
        </div>


        {/* Booking Form */}
        <div className="z-10 space-y-8 px-2">
          <h2 className="text-2xl font-light text-[#e15f5f]">
            <span className="font-bold">Bookings</span> & Contact
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
            />
            <input
              type="number"
              placeholder="Number of people"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
            />

            <div>
              <p className="text-xs text-gray-400 mb-1">Date & Time</p>
              <Calendar
                selected={date}
                onSelect={setDate}
                className="bg-black border border-gray-700 rounded-md text-sm"
              />
            </div>

            <button
              type="submit"
              className="mt-4 border border-white text-white px-5 py-1.5 text-sm hover:bg-white hover:text-black transition-colors"
            >
              SUBMIT
            </button>
          </form>

          {/* Contact Info */}
          <div className="pt-10 space-y-2">
            <h3 className="text-base font-semibold text-[#e15f5f]">Contact info</h3>
            <div>
              <p className="text-xs">Phone</p>
              <p className="text-sm">(555) 123-4567</p>
            </div>
            <div className="mt-3">
              <p className="text-xs">Email</p>
              <p className="text-sm underline">info@liquidmaestro.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
