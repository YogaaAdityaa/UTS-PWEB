"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabaseClient";
import PrimaryButton from "../../../components/atoms/PrimaryButton";
import type { User } from "@supabase/supabase-js";

export default function AdminPage() {
  type Booking = {
    id: string;
    name: string;
    email: string;
    phone: string;
    people: number;
    date: string;
  };

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        console.error("User not logged in:", error);
        router.replace("/login");
        return;
      }

      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role")
        .eq("email", user.email)
        .single();

      if (userError || !userData || userData.role !== "admin") {
        console.error("Access denied or not an admin:", userData);
        router.replace("/login");
        return;
      }

      setUser(user);
    };

    checkAdmin();
  }, [router]);

  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Booking fetch error:", error);
        setError("Failed to fetch bookings");
      } else {
        setBookings(data || []);
      }

      setLoading(false);
    };

    fetchBookings();
  }, [user]);

  const handleReject = async (booking: Booking) => {
    if (!window.confirm(`Reject booking for ${booking.name}?`)) return;

    setLoading(true);

    const { error } = await supabase.from("bookings").delete().eq("id", booking.id);
    if (error) {
      console.error("Delete booking error:", error);
      setError("Failed to reject booking");
      setLoading(false);
      return;
    }

    // Simulasi pengiriman email
    await fetch("/api/send-reject-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: booking.email, name: booking.name }),
    });

    setBookings(bookings.filter((b) => b.id !== booking.id));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Booking List</h1>
      <button
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        onClick={async () => {
          await supabase.auth.signOut();
          router.replace("/login");
        }}
      >
        Logout
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && bookings.length === 0 && <p>No bookings found.</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">People</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{booking.name}</td>
                <td className="px-4 py-2">{booking.email}</td>
                <td className="px-4 py-2">{booking.phone}</td>
                <td className="px-4 py-2">{booking.people}</td>
                <td className="px-4 py-2">
                  {new Date(booking.date).toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-2">
                  <PrimaryButton onClick={() => handleReject(booking)} disabled={loading}>
                    Reject
                  </PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
