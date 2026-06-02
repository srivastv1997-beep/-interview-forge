"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Brain,
  ArrowRight,
  Sparkles,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Mic,
  FileText,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "#FAFAFA", color: "#111827" }}>

      {/* Soft gradient top accent */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #F59E0B, #10B981)" }} />

      {/* Background */}
<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

  {/* Base gradient */}
  <div className="absolute inset-0"
    style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #F5F3FF 40%, #FDF2F8 70%, #ECFDF5 100%)" }} />

  {/* Large soft blobs */}
  <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full"
    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(60px)" }} />
  <div className="absolute -top-40 -left-60 w-[500px] h-[500px] rounded-full"
    style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08), transparent 70%)", filter: "blur(60px)" }} />
  <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full"
    style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)", filter: "blur(60px)" }} />
  <div className="absolute bottom-1/3 -right-40 w-[450px] h-[450px] rounded-full"
    style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)", filter: "blur(60px)" }} />
  <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
    style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07), transparent 70%)", filter: "blur(60px)" }} />

  {/* Subtle dot grid */}
  <div className="absolute inset-0"
    style={{
      backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }} />

</div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 py-4 border-b fixed top-0 left-0 right-0 z-50"
        style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(250,250,250,0.9)", backdropFilter: "blur(20px)" }}>
        <div className="flex items-center gap-2.5">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="p-1.5 rounded-lg"
            style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            <Brain className="h-4 w-4 text-white" />
          </motion.div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "#111827" }}>
            InterviewForge
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium" style={{ color: "#6B7280" }}>
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="text-sm px-5 h-9 font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 4px 15px rgba(99,102,241,0.4)" }}>
                Get Started Free
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-36 pb-16 z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-xs px-4 py-2 rounded-full mb-8 font-semibold"
          style={{ background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: "1px solid #C7D2FE", color: "#6366F1" }}>
          <Sparkles className="h-3 w-3" />
          AI-Powered · Real Interviews · Instant Feedback
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl"
          style={{ color: "#111827" }}>
          Your Personal{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 40%, #EC4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            AI Interview Coach
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl max-w-2xl leading-relaxed mb-8 font-medium"
          style={{ color: "#6B7280" }}>
          Practice with an AI that thinks like a senior engineer.
          Receive personalized feedback and improvement insights.
          Walk into every interview with unshakeable confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-6">
          <Link href="/signup">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button className="px-8 h-12 text-base font-semibold gap-2 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.4)"
                }}>
                Start Practicing Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
          <Link href="/login">
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button variant="outline" className="px-8 h-12 text-base font-semibold rounded-xl"
                style={{ borderColor: "#E5E7EB", color: "#374151", background: "white" }}>
                Sign in to account
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3">
          {[
            { icon: <Mic className="h-3.5 w-3.5" />, text: "Voice Interviews", color: "#10B981" },
            { icon: <MessageSquare className="h-3.5 w-3.5" />, text: "AI Follow-up Questions", color: "#6366F1" },
            { icon: <BarChart3 className="h-3.5 w-3.5" />, text: "Detailed Performance Reports", color: "#F59E0B" },
            { icon: <FileText className="h-3.5 w-3.5" />, text: "Resume-based Questions", color: "#EC4899" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "#9CA3AF" }}>
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>

        <p className="text-xs mb-12" style={{ color: "#D1D5DB" }}>
          Free forever · No credit card · Start in 30 seconds
        </p>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative w-full max-w-4xl">

          {/* Glow behind */}
          <div className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(20px)" }} />

          <div className="relative rounded-2xl overflow-hidden border"
            style={{
              background: "white",
              borderColor: "rgba(0,0,0,0.08)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(99,102,241,0.08)"
            }}>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b"
              style={{ background: "#F9FAFB", borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ background: "#EEF2FF", color: "#6366F1", border: "1px solid #C7D2FE" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#10B981" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10B981" }} />
                </span>
                Live Session — Senior Frontend Engineer @ Google
              </div>
              <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded font-medium"
                style={{ background: "#FEF2F2", color: "#EF4444", border: "1px solid #FECACA" }}>
                <span className="animate-pulse">●</span> REC 12:34
              </div>
            </div>

            {/* Chat */}
            <div className="p-8 flex flex-col gap-6 text-left">
              {[
                { role: "ai", text: "Walk me through how you'd architect a real-time collaborative document editor — like Google Docs — from scratch. Focus on the data consistency model." },
                { role: "user", text: "I'd use Operational Transformation or CRDTs for conflict resolution, WebSockets for real-time sync, and split the architecture into a presence layer and a persistence layer..." },
                { role: "ai", text: "Good thinking. Between OT and CRDTs — what are the specific tradeoffs, and which would you pick at Google's scale?" },
              ].map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "ai" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.15 }}
                  className={`flex gap-4 items-start ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "ai" && (
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>AI</div>
                  )}
                  <div className="rounded-2xl px-5 py-4 text-sm max-w-lg leading-relaxed"
                    style={msg.role === "ai"
                      ? { background: "#F3F4F6", color: "#374151", borderTopLeftRadius: 4 }
                      : { background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", color: "#4338CA", border: "1px solid #C7D2FE", borderTopRightRadius: 4 }
                    }>
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: "#EEF2FF", color: "#6366F1" }}>You</div>
                  )}
                </motion.div>
              ))}

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex gap-4 items-start justify-end">
                <div className="rounded-2xl px-5 py-4"
                  style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderTopRightRadius: 4 }}>
                  <div className="flex gap-1.5 items-center">
                    {[0, 150, 300].map((delay, i) => (
                      <div key={i} className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: "#6366F1", animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "#EEF2FF", color: "#6366F1" }}>You</div>
              </motion.div>
            </div>

            {/* Score bar */}
            <div className="px-8 py-5 border-t"
              style={{ background: "#F9FAFB", borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold" style={{ color: "#6B7280" }}>
                  Live Performance Analysis
                </span>
                <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: "#ECFDF5", color: "#10B981", border: "1px solid #A7F3D0" }}>
                  <span className="animate-pulse">●</span> Session active
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Technical Depth", score: 82, color: "#10B981" },
                  { label: "Communication", score: 76, color: "#6366F1" },
                  { label: "Structure", score: 88, color: "#8B5CF6" },
                  { label: "Confidence", score: 71, color: "#F59E0B" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs font-medium" style={{ color: "#9CA3AF" }}>{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.score}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "#F3F4F6" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.score}%` }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-2 rounded-full"
                        style={{ background: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature pills */}
      <section className="border-y z-10 relative" style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}>
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
          {[
            { label: "Voice Powered", icon: <Mic className="h-4 w-4" />, color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0" },
            { label: "Adaptive Follow-ups", icon: <MessageSquare className="h-4 w-4" />, color: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE" },
            { label: "Detailed Scorecards", icon: <BarChart3 className="h-4 w-4" />, color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
            { label: "Resume Aware", icon: <FileText className="h-4 w-4" />, color: "#EC4899", bg: "#FDF2F8", border: "#FBCFE8" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold cursor-default"
              style={{ borderColor: item.border, color: item.color, background: item.bg }}>
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest mb-4 uppercase" style={{ color: "#6366F1" }}>
            Why InterviewForge
          </p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            Built for candidates who are serious
          </h2>
          <p className="text-lg font-medium" style={{ color: "#9CA3AF" }}>
            Not just another chatbot. A complete interview preparation engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <MessageSquare className="h-5 w-5" />, title: "Real AI Interviewer", desc: "Asks follow-up questions, challenges vague answers, and adapts in real time — just like a senior engineer at FAANG.", color: "#6366F1", bg: "#EEF2FF", border: "#C7D2FE" },
            { icon: <Zap className="h-5 w-5" />, title: "Instant Scorecard", desc: "Get scored on technical depth, communication, structure, and confidence after every session.", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" },
            { icon: <Target className="h-5 w-5" />, title: "Role-Specific Questions", desc: "Frontend, Backend, System Design, Behavioral — questions tailored by role, company, and difficulty.", color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
            { icon: <TrendingUp className="h-5 w-5" />, title: "Track Progress", desc: "See your scores improve session by session. Identify weak spots before they cost you an offer.", color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0" },
            { icon: <Mic className="h-5 w-5" />, title: "Voice Interviews", desc: "Speak your answers out loud. Practice delivery and confidence, not just technical knowledge.", color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
            { icon: <FileText className="h-5 w-5" />, title: "Resume-Based Questions", desc: "Upload your resume and get questions tailored to your exact background and experience.", color: "#EC4899", bg: "#FDF2F8", border: "#FBCFE8" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 border flex flex-col gap-4 cursor-default"
              style={{
                background: "white",
                borderColor: "rgba(0,0,0,0.07)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.2s ease"
              }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{ background: f.bg, color: f.color, borderColor: f.border }}>
                {f.icon}
              </motion.div>
              <h3 className="font-bold text-base" style={{ color: "#111827" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: "#9CA3AF" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t z-10 relative" style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}>
        <div className="max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest mb-4 uppercase" style={{ color: "#6366F1" }}>
              Simple Process
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#111827" }}>How It Works</h2>
            <p className="text-lg font-medium" style={{ color: "#9CA3AF" }}>
              From signup to scorecard in under 5 minutes.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, #6366F1, rgba(99,102,241,0.05))" }} />
            <div className="flex flex-col gap-6">
              {[
                { step: "01", title: "Upload Your Resume", desc: "Paste your resume or LinkedIn profile. InterviewForge reads your background and tailors every question to your exact experience.", color: "#6366F1", bg: "#EEF2FF" },
                { step: "02", title: "Select Role & Difficulty", desc: "Choose the job role — Frontend, Backend, System Design, or Behavioral. Set difficulty from Beginner to FAANG level.", color: "#8B5CF6", bg: "#F5F3FF" },
                { step: "03", title: "Start Your Interview", desc: "The AI asks you questions. Answer by typing or voice. It listens, then asks intelligent follow-up questions.", color: "#0891B2", bg: "#ECFEFF" },
                { step: "04", title: "Get Your Scorecard", desc: "Receive a full scorecard — technical depth, communication, structure, confidence — with specific improvement tips.", color: "#10B981", bg: "#ECFDF5" },
                { step: "05", title: "Track Your Growth", desc: "Every session is saved. Watch your scores trend upward. See exactly which areas you've mastered.", color: "#F59E0B", bg: "#FFFBEB" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2 font-bold text-sm"
                    style={{ background: item.bg, borderColor: item.color, color: item.color }}>
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-2xl p-6 border"
                    style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#111827" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed font-medium" style={{ color: "#9CA3AF" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t z-10 relative" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-widest mb-10 uppercase" style={{ color: "#6366F1" }}>
              Early Feedback
            </p>
            <div className="rounded-2xl p-8 border relative"
              style={{
                background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)",
                borderColor: "#C7D2FE",
                boxShadow: "0 4px 24px rgba(99,102,241,0.1)"
              }}>
              <div className="text-5xl mb-4 font-serif" style={{ color: "#6366F1" }}>"</div>
              <p className="text-lg leading-relaxed mb-6 font-medium" style={{ color: "#374151" }}>
                The follow-up questions felt surprisingly realistic. It pushed me on vague answers
                exactly like a real interviewer would. I felt way more confident going into my actual interview.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>R</div>
                <div className="text-left">
                  <p className="text-sm font-bold" style={{ color: "#111827" }}>Rahul M.</p>
                  <p className="text-xs font-medium" style={{ color: "#9CA3AF" }}>Beta Tester · SDE Intern @ Amazon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t z-10"
        style={{ borderColor: "rgba(0,0,0,0.06)", background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #FDF2F8 100%)" }}>
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6">
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#6366F1" }}>
              Your next chapter starts here
            </p>
            <h2 className="text-5xl font-bold tracking-tight leading-tight" style={{ color: "#111827" }}>
              Stop hoping.<br />
              <span style={{
                background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Start winning.
              </span>
            </h2>
            <p className="text-lg max-w-xl font-medium" style={{ color: "#6B7280" }}>
              Every great engineer you admire once sat nervously in that interview chair.
              The difference? They prepared. Now it's your turn.
            </p>
            <Link href="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="px-10 h-12 text-base font-semibold gap-2 rounded-xl text-white mt-2"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
                    boxShadow: "0 8px 30px rgba(99,102,241,0.4)"
                  }}>
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
              {["Voice Interviews", "AI Follow-up Questions", "Detailed Performance Reports", "Resume-based Questions"].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                  <CheckCircle className="h-3.5 w-3.5" style={{ color: "#10B981" }} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-8 py-8 z-10 relative"
        style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              <Brain className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-bold text-sm" style={{ color: "#111827" }}>InterviewForge</span>
          </div>
          <p className="text-xs font-medium" style={{ color: "#9CA3AF" }}>
            Built with Next.js · PostgreSQL · Prisma · Claude AI · © 2026 InterviewForge
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/srivastv1997-beep/-interview-forge" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-8 px-4 text-xs font-medium"
                style={{ borderColor: "#E5E7EB", color: "#6B7280", background: "white" }}>
                View Source
              </Button>
            </a>
            <Link href="/signup">
              <Button className="h-8 px-4 text-xs font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
                Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </footer>

    </main>
  )
}