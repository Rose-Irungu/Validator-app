import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Field({ id, label, type = "text", value, onChange, placeholder, autoComplete, extra }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-black">
          {label}
        </label>
        {extra}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder:text-gray-400 focus:border-[#004B38] focus:outline-none focus:ring-1 focus:ring-[#004B38]"
      />
    </div>
  );
}

export default function AuthCard({ mode = "signin", onSubmit, onGoogleClick, isLoading = false }) {
  const isSignUp = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (isSignUp && !form.agree) return;
    if (!onSubmit) return;
    if (isSignUp) {
      onSubmit({
        mode,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        password: form.password,
      });
    } else {
      onSubmit({ mode, email: form.email.trim(), password: form.password });
    }
  };

  const tabBase = "py-3 text-center text-sm font-medium transition";
  const tabActive = "bg-[#FBB724] text-black";
  const tabInactive = "text-white/60 hover:text-white";

  return (
    <div className="w-full max-w-[460px] rounded-md bg-[#F6F6ED] p-5 shadow-md md:p-6">
      <div className="grid grid-cols-2 bg-[#004B38] p-1">
        <Link to="/signin" className={`${tabBase} ${!isSignUp ? tabActive : tabInactive}`}>
          Sign In
        </Link>
        <Link to="/signup" className={`${tabBase} ${isSignUp ? tabActive : tabInactive}`}>
          Sign Up
        </Link>
      </div>

      <h1 className="mt-6 text-xl font-bold text-black md:text-2xl">
        {isSignUp ? "Create your account" : "Welcome Back!"}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-900">
        {isSignUp
          ? "Start validating ideas in under two minutes."
          : "Log in to check your idea reports and pick up where you left off."}
      </p>

      <button
        type="button"
        onClick={onGoogleClick}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm border border-[#9DB8AC] bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-gray-50"
      >
        <GoogleIcon />
        Continue with google
      </button>

      <div className="my-5 flex items-center gap-4">
        <span className="h-px flex-1 bg-black/10" />
        <span className="text-xs font-bold text-[#004B38]">OR</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {isSignUp && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="firstName"
                label="First name"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Jane"
                autoComplete="given-name"
              />
              <Field
                id="lastName"
                label="Last name"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                autoComplete="family-name"
              />
            </div>
            <Field
              id="phone"
              label="Phone number"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 0712 345 678"
              autoComplete="tel"
            />
          </>
        )}

        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Example@gmail.com"
          autoComplete="email"
        />

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-black">
              Password
            </label>
            {!isSignUp && (
              <a
                href="/forgot-password"
                className="text-xs font-semibold text-[#004B38] hover:underline"
              >
                Forgot?
              </a>
            )}
          </div>
          <div className="relative mt-2">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              required
              minLength={isSignUp ? 8 : undefined}
              className="w-full rounded-md border border-gray-300 bg-white py-3 pl-3 pr-11 text-sm text-black placeholder:text-gray-400 focus:border-[#004B38] focus:outline-none focus:ring-1 focus:ring-[#004B38]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#004B38]"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {isSignUp && (
          <label className="flex items-start gap-3 text-sm text-gray-900">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#004B38]"
            />
            <span>
              I agree to Validator's{" "}
              <a href="#terms" className="font-semibold text-[#004B38] underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#privacy" className="font-semibold text-[#004B38] underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#004B38] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#003B2D] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
          {!isLoading && <ArrowRight size={18} />}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-black">
        {isSignUp ? "Already have an account ?" : "New to Validator ?"}{" "}
        <Link
          to={isSignUp ? "/signin" : "/signup"}
          className="font-semibold text-[#004B38] hover:underline"
        >
          {isSignUp ? "Sign In" : "Create Account"}
        </Link>
      </p>
    </div>
  );
}