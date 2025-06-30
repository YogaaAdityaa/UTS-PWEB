"use client";

import { useState } from "react";
import { Calendar } from "../atoms/Calender";
import { supabase } from "../../utils/supabaseClient";

export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

          <form className="space-y-5" onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setSuccess("");
            setError("");
            const bookingDate = date.toISOString().split("T")[0];
            const bookingTime = time;
            const { error } = await supabase.from("bookings").insert([
              {
                name,
                email,
                phone,
                people: Number(people),
                date: bookingDate,
                time: bookingTime,
              },
            ]);
            setLoading(false);
            if (error) {
              setError("Failed to submit booking: " + error.message);
              console.error("Supabase booking insert error:", error);
            } else {
              setSuccess("Booking submitted successfully!");
              setName("");
              setEmail("");
              setPhone("");
              setPeople("");
              setTime("");
            }
          }}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Number of people"
              className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />

            <div>
              <p className="text-xs text-gray-400 mb-1">Date & Time</p>
              <Calendar
                selected={date}
                onSelect={setDate}
                className="bg-black border border-gray-700 rounded-md text-sm"
              />
              <input
                type="time"
                className="w-full bg-transparent border-b border-gray-600 py-1 placeholder-gray-400 focus:outline-none text-sm mt-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 border border-white text-white px-5 py-1.5 text-sm hover:bg-white hover:text-black transition-colors"
              disabled={loading}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
            {success && <p className="text-green-400 text-xs mt-2">{success}</p>}
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
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