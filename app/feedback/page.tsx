"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Brain, TrendingUp, MessageSquare, Target, Award, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Feedback {
  overallScore: number
  technicalScore: number
  communicationScore: number
  structureScore: number
  confidenceScore: number
  fillerWordCount: number
  strengths: string
  improvements: string
  sampleAnswer: string
}

export default function FeedbackPage() {
  const router = useRouter()
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [role, setRole] = useState("")
  const [difficulty, setDifficulty] = useState("")

  useEffect(() => {
    const storedFeedback = sessionStorage.getItem("feedback")
    const storedRole = sessionStorage.getItem("role")
    const storedDifficulty = sessionStorage.getItem("difficulty")

    if (!storedFeedback) {
      router.push("/dashboard")
      return
    }

    setFeedback(JSON.parse(storedFeedback))
    setRole(storedRole || "")
    setDifficulty(storedDifficulty || "")
  }, [])

  if (!feedback) return null

  const scores = [
    { label: "Technical Depth", score: feedback.technicalScore, color: "#6366F1", icon: <Target className="h-4 w-4" /> },
    { label: "Communication", score: feedback.communicationScore, color: "#8B5CF6", icon: <MessageSquare className="h-4 w-4" /> },
    { label: "Structure", score: feedback.structureScore, color: "#10B981", icon: <TrendingUp className="h-4 w-4" /> },
    { label: "Confidence", score: feedback.confidenceScore, color: "#F59E0B", icon: <Award className="h-4 w-4" /> },
  ]

  function getScoreColor(score: number) {
    if (score >= 80) return "#10B981"
    if (score >= 60) return "#F59E0B"
    return "#EF4444"
  }

  function getScoreLabel(score: number) {
    if (score >= 80) return "Excellent"
    if (score >= 70) return "Good"
    if (score >= 60) return "Average"
    return "Needs Work"
  }

  return (
    <main className="min-h-screen" style={{ background: "#F8FAFC" }}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b bg-white"
        style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg" style={{ color: "#111827" }}>InterviewForge</span>
        </div>
        <Link href="/dashboard">
          <Button variant="outline" className="text-sm font-medium"
            style={{ borderColor: "#E5E7EB", color: "#6B7280" }}>
            Back to Dashboard
          </Button>
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#111827" }}>
            Interview Complete!
          </h1>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            {role} · {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} level
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-8 border mb-6 text-center"
          style={{
            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
            boxShadow: "0 8px 30px rgba(99,102,241,0.3)"
          }}>
          <p className="text-white/70 text-sm font-medium mb-2">Overall Score</p>
          <p className="text-7xl font-bold text-white mb-2">{feedback.overallScore}</p>
          <p className="text-white/80 font-semibold">{getScoreLabel(feedback.overallScore)}</p>
        </motion.div>

        {/* Score Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-6 border mb-6"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 className="font-bold text-base mb-5" style={{ color: "#111827" }}>Score Breakdown</h2>
          <div className="flex flex-col gap-4">
            {scores.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <span className="text-sm font-semibold" style={{ color: "#374151" }}>{s.label}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: s.color }}>{s.score}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "#F3F4F6" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.score}%` }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-2 rounded-full"
                    style={{ background: s.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Filler words */}
          <div className="mt-4 p-3 rounded-xl flex items-center justify-between"
            style={{ background: "#F9FAFB", border: "1px solid rgba(0,0,0,0.05)" }}>
            <span className="text-sm font-medium" style={{ color: "#6B7280" }}>Filler words detected</span>
            <span className="text-sm font-bold px-3 py-1 rounded-full"
              style={{ background: feedback.fillerWordCount > 5 ? "#FEF2F2" : "#ECFDF5", color: feedback.fillerWordCount > 5 ? "#EF4444" : "#10B981" }}>
              {feedback.fillerWordCount} times
            </span>
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl p-6 border mb-6"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#111827" }}>
            <span>💪</span> Strengths
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{feedback.strengths}</p>
        </motion.div>

        {/* Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 border mb-6"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#111827" }}>
            <span>🎯</span> Areas to Improve
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{feedback.improvements}</p>
        </motion.div>

        {/* Sample Answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-6 border mb-8"
          style={{ background: "#F5F3FF", borderColor: "#DDD6FE", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#6366F1" }}>
            <span>✨</span> Sample Better Answer
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#4338CA" }}>{feedback.sampleAnswer}</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4">
          <Link href="/interview" className="flex-1">
            <Button className="w-full h-11 font-semibold gap-2 rounded-xl"
              variant="outline"
              style={{ borderColor: "#E5E7EB", color: "#6B7280" }}>
              <RotateCcw className="h-4 w-4" />
              Practice Again
            </Button>
          </Link>
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full h-11 font-semibold gap-2 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 4px 15px rgba(99,102,241,0.3)" }}>
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </main>
  )
}