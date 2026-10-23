import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function SignInForm() {
  const [mode, setMode] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full bg-[#111111] flex items-start justify-center p-6 sm:p-10">
      <div className="w-full max-w-sm">
        <p className="text-gray-400 text-sm mb-3">Sign In</p>

        <div className="bg-[#F4F1E8] rounded-3xl p-6 sm:p-7 shadow-xl">
          {/* Toggle */}
          <div className="relative flex bg-[#0F3D2E] rounded-full p-1 mb-6">
            <button
              type="button"
              onClick={() => setMode("signin")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                mode === "signin"
                  ? "bg-[#F5B942] text-[#0F3D2E]"
                  : "text-gray-300"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                mode === "signup"
                  ? "bg-[#F5B942] text-[#0F3D2E]"
                  : "text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-[#0F3D2E] mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Log in to check your idea reports and pick up where you left off.
          </p>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#0F3D2E]/40 rounded-full py-3 mb-5 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <GoogleIcon />
            Continue with google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-[#0F3D2E]/30" />
            <span className="text-xs font-semibold text-[#0F3D2E]">OR</span>
            <div className="flex-1 h-px bg-[#0F3D2E]/30" />
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#0F3D2E] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@gmail.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/40"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#0F3D2E]"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-[#0F3D2E] hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-11 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0F3D2E] text-white rounded-full py-3.5 text-sm font-semibold hover:bg-[#0c3226] transition-colors"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            New to Validator ?{" "}
            <a href="#" className="text-[#0F3D2E] font-semibold hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}