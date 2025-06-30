import Link from 'next/link';
import SignupForm from '../../../components/molecules/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Welcome Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-black via-red-900 to-red-400 items-center justify-center">
        <div className="text-center">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-2 w-16 h-16" />
          <span className="text-xs tracking-widest leading-3">LIQUID<br />MAESTRO</span>
          <h1 className="text-5xl font-bold text-white mb-4">Join Us!</h1>
          <p className="text-lg text-white">Create your account and start your journey.</p>
        </div>
      </div>
      {/* Right Side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-12 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl text-black font-bold mb-2 text-center">Sign Up</h2>
          <p className="mb-6 text-gray-500 text-center">Create a new account to get started.</p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}