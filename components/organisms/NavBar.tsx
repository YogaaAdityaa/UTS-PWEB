"use client";
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../utils/supabaseClient';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { User } from "@supabase/supabase-js";

export default function NavBar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
    router.push('/');
  };
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-serif">
      <Image
        src="/bg_wine.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between px-12 py-8">
        {/* Logo and Menu */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center space-y-1">
            <Image src="/logo.png" alt="Logo" width={20} height={20} />
            <span className="text-xs tracking-widest leading-3">LIQUID<br />MAESTRO</span>
          </div>
          <div className="flex items-center space-x-4">
            {!user && (
              <Link href="/login">
                <button className="border border-white px-4 py-1 text-xs rounded hover:bg-white hover:text-black transition duration-300">Login</button>
              </Link>
            )}
            {user && (
              <button className="border border-white px-4 py-1 text-xs rounded hover:bg-white hover:text-black transition duration-300" onClick={handleLogout} disabled={loading}>Logout</button>
            )}
            <button className="text-white text-3xl">≡</button>
          </div>
        </div>

        {/* Main Text */}
        <div className="flex flex-col items-start max-w-2xl space-y-4 mt-24 ml-12">
          <p className="text-xs uppercase tracking-wider text-gray-200 ">Indulge in</p>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Liquid<br />Artistry
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Step into a world of <span className="text-red-300">extraordinary flavors</span> and<br />
            unrivaled mixology expertise
          </p>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="border border-white px-6 py-2 text-xs tracking-wider hover:bg-white hover:text-black transition duration-300">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}