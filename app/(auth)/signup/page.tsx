"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Brain, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSignup() {
    setLoading(true)
    setError("")

    if (!name || !email || !password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }
      }
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #F5F3FF 40%, #FDF2F8 100%)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center rounded-2xl border p-10"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "#ECFDF5" }}>
            <span className="text-3xl">✉️</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#111827" }}>Check your email!</h2>
          <p className="text-sm mb-6" style={{ color: "#9CA3AF" }}>
            We sent a confirmation link to <strong style={{ color: "#6366F1" }}>{email}</strong>.
            Click it to activate your account then sign in.
          </p>
          <Link href="/login">
            <Button className="w-full h-11 font-semibold text-white rounded-xl"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              Go to Sign in
            </Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #F5F3FF 40%, #FDF2F8 100%)" }}>

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10">

        <div className="rounded-2xl border p-8"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg" style={{ color: "#111827" }}>InterviewForge</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold mb-1" style={{ color: "#111827" }}>Create your account</h1>
          <p className="text-sm mb-8" style={{ color: "#9CA3AF" }}>
            Start practicing interviews for free today
          </p>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ background: "#FEF2F2", color: "#EF4444", border: "1px solid #FECACA" }}>
              {error}
            </div>
          )}

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "#9CA3AF" }} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Anubhavi Srivastava"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                onFocus={(e) => e.target.style.borderColor = "#6366F1"}
                onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "#9CA3AF" }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                onFocus={(e) => e.target.style.borderColor = "#6366F1"}
                onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "#374151" }}>
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "#9CA3AF" }} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                className="w-full pl-10 pr-10 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", color: "#111827", background: "#F9FAFB" }}
                onFocus={(e) => e.target.style.borderColor = "#6366F1"}
                onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
                onKeyDown={(e) => e.key === "Enter" && handleSignup()}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: "#9CA3AF" }}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleSignup}
              disabled={loading}
              className="w-full h-11 font-semibold text-white gap-2 rounded-xl"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 4px 15px rgba(99,102,241,0.4)" }}>
              {loading ? "Creating account..." : (
                <>
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Terms */}
          <p className="text-xs text-center mt-4" style={{ color: "#D1D5DB" }}>
            By signing up you agree to our Terms of Service
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ background: "#F3F4F6" }} />
            <span className="text-xs font-medium" style={{ color: "#D1D5DB" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "#F3F4F6" }} />
          </div>

          {/* Login link */}
          <p className="text-center text-sm" style={{ color: "#9CA3AF" }}>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold" style={{ color: "#6366F1" }}>
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "#9CA3AF" }}>
          <Link href="/" className="hover:underline">← Back to home</Link>
        </p>
      </motion.div>
    </main>
  )
}