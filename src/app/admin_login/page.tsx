"use client";
import { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, Shield, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Placeholder: replace with real auth
    await new Promise((r) => setTimeout(r, 1000));
    if (form.email === "admin@bhfti.gov.in" && form.password === "admin123") {
      window.location.href = "/admin";
    } else {
      setError("Invalid credentials. Please check your email and password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/5"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-white/5"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-white/5"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/30">
            <span className="text-black font-black text-2xl">BH</span>
          </div>
          <h1 className="text-white font-bold text-xl">Dr. Bhupen Hazarika RGFTI</h1>
          <p className="text-gray-400 text-sm mt-1">Content Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-[#0f3460] p-5 flex items-center gap-3">
            <Shield size={20} className="text-yellow-400" />
            <div>
              <h2 className="text-white font-bold">Admin Login</h2>
              <p className="text-gray-400 text-xs">Authorized personnel only</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg flex items-center gap-2">
                <Shield size={14} />
                {error}
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="admin@bhfti.gov.in"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-9 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3460] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#0f3460] hover:text-yellow-600 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0f3460] hover:bg-[#1a1a2e] disabled:opacity-70 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In to CMS <ArrowRight size={16} />
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400 pt-2 border-t border-gray-100">
              Access restricted to authorized institute personnel.
              <br />
              <Link href="/" className="text-[#0f3460] hover:text-yellow-600 transition-colors">
                ← Back to Institute Website
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Dr. Bhupen Hazarika RGFTI | Government of Assam
        </p>
      </div>
    </div>
  );
}
