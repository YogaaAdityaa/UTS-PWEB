"use client";
import React, { useState } from "react";
import TextInput from "../atoms/TextInput";
import PrimaryButton from "../atoms/PrimaryButton";
import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signup successful! Please check your email to verify your account.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      window.location.href = "/";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-black bg-opacity-80 p-8 rounded-xl shadow-lg">
      <div>
        <label className="block mb-1 font-medium text-red-400">User Name (Email)</label>
        <TextInput type="email" placeholder="username@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="block mb-1 font-medium text-red-400">Password</label>
        <TextInput type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <label className="block mb-1 font-medium text-red-400">Confirm Password</label>
        <TextInput type="password" placeholder="********" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">{success}</div>}
      <PrimaryButton type="submit" className="bg-gradient-to-r from-black via-red-900 to-red-400 hover:from-red-900 hover:to-red-500 shadow" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</PrimaryButton>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-400">Already have an account?</span>
        <Link href="/login" className="text-red-400 hover:underline font-medium">Login</Link>
      </div>
    </form>
  );
};

export default SignupForm;