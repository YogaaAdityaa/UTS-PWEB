import Image from "next/image";
import React from "react";
import LoginForm from "../../../components/molecules/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Welcome */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-black via-red-900 to-red-400 items-center justify-center relative">
        <div className="absolute top-8 left-8">
          <Link href="/">
            <div className="flex flex-col items-center space-y-1 cursor-pointer">
              <Image src="/logo.png" alt="Logo" width={20} height={20} />
              <span className="text-xs tracking-widest leading-3">LIQUID<br />MAESTRO</span>
            </div>
          </Link>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white z-10">Welcome<br/>Back!</h1>
      </div>
      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-black font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Welcome back! Please login to your account.</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}