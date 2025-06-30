"use client";
import React, { useState } from "react";
import TextInput from "../atoms/TextInput";
import PrimaryButton from "../atoms/PrimaryButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabaseClient";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      console.error("Login Error:", error);
      setError(error.message);
      return;
    }

    const user = data?.user;
    if (!user) {
      setError("Login gagal: akun tidak ditemukan.");
      return;
    }

    
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role")
      .eq("email", user.email?.toLowerCase()) 
      .maybeSingle(); 

    if (userError) {
      console.error("Role Fetch Error:", userError);
      setError("Terjadi kesalahan saat mengambil peran pengguna.");
      return;
    }

    if (!userData) {
      console.warn("User not found in users table:", user.email);
      setError("Akun tidak ditemukan dalam data pengguna. Hubungi admin.");
      return;
    }

   
    if (userData.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/"); // home booking page
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-black bg-opacity-80 p-8 rounded-xl shadow-lg">
      <div>
        <label className="block text-red-400 mb-1">User Name (Email)</label>
        <TextInput type="email" placeholder="username@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="block text-red-400 mb-1">Password</label>
        <TextInput type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <PrimaryButton type="submit" className="bg-gradient-to-r from-black via-red-900 to-red-400 hover:from-red-900 hover:to-red-500 shadow" disabled={loading}>
        {loading ? "Logging In..." : "Login"}
      </PrimaryButton>
      <div className="mt-6 text-center text-sm text-gray-400">
        New User? <Link href="/signup" className="text-red-400 hover:underline">Signup</Link>
      </div>
    </form>
  );
};

export default LoginForm;
