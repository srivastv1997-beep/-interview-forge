"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Brain, ArrowRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = [
  { id: "frontend", label: "Frontend Engineer", icon: "⚛️", desc: "React, CSS, JavaScript, Performance" },
  { id: "backend", label: "Backend Engineer", icon: "⚙️", desc: "APIs, Databases, System Architecture" },
  { id: "system", label: "System Design", icon: "🏗️", desc: "Scalability, Architecture, Trade-offs" },
  { id: "behavioral", label: "Behavioral", icon: "🧠", desc: "Leadership, Teamwork, Problem Solving" },
]

const difficulties = [
  { id: "easy", label: "Beginner", desc: "Entry level / Internship", color: "#10B981", bg: "#ECFDF5", border: "#A7F3D0" },
  { id: "medium", label: "Intermediate", desc: "1-3 years experience", color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
  { id: "hard", label: "Advanced", desc: "Senior / FAANG level", color: "#EF4444", bg: "#FEF2F2", border: "#FECACA" },
]

export default function InterviewSetupPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")

  function handleStart() {
    if (!selectedRole || !selectedDifficulty) return
    router.push(`/interview/session?role=${selectedRole}&difficulty=${selectedDifficulty}`)
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
          <Button variant="ghost" className="gap-2 text-sm" style={{ color: "#6B7280" }}>
            <ChevronLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#111827" }}>
            Set Up Your Interview
          </h1>
          <p className="text-lg" style={{ color: "#9CA3AF" }}>
            Choose a role and difficulty to get started
          </p>
        </motion.div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#6366F1" }}>
            Select Role
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRole(role.id)}
                className="p-5 rounded-2xl border cursor-pointer transition-all"
                style={{
                  background: selectedRole === role.id ? "#EEF2FF" : "white",
                  borderColor: selectedRole === role.id ? "#6366F1" : "rgba(0,0,0,0.07)",
                  boxShadow: selectedRole === role.id ? "0 0 0 2px rgba(99,102,241,0.2)" : "0 2px 8px rgba(0,0,0,0.04)"
                }}>
                <div className="text-3xl mb-3">{role.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#111827" }}>{role.label}</h3>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Difficulty Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#6366F1" }}>
            Select Difficulty
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {difficulties.map((diff) => (
              <motion.div
                key={diff.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDifficulty(diff.id)}
                className="p-5 rounded-2xl border cursor-pointer transition-all text-center"
                style={{
                  background: selectedDifficulty === diff.id ? diff.bg : "white",
                  borderColor: selectedDifficulty === diff.id ? diff.color : "rgba(0,0,0,0.07)",
                  boxShadow: selectedDifficulty === diff.id ? `0 0 0 2px ${diff.color}33` : "0 2px 8px rgba(0,0,0,0.04)"
                }}>
                <h3 className="font-bold text-sm mb-1"
                  style={{ color: selectedDifficulty === diff.id ? diff.color : "#111827" }}>
                  {diff.label}
                </h3>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <Button
            onClick={handleStart}
            disabled={!selectedRole || !selectedDifficulty}
            className="w-full h-12 text-base font-semibold gap-2 rounded-xl text-white"
            style={{
              background: selectedRole && selectedDifficulty
                ? "linear-gradient(135deg, #6366F1, #8B5CF6)"
                : "#E5E7EB",
              color: selectedRole && selectedDifficulty ? "white" : "#9CA3AF",
              boxShadow: selectedRole && selectedDifficulty ? "0 8px 30px rgba(99,102,241,0.3)" : "none",
              cursor: selectedRole && selectedDifficulty ? "pointer" : "not-allowed"
            }}>
            Start Interview
            <ArrowRight className="h-5 w-5" />
          </Button>

          {(!selectedRole || !selectedDifficulty) && (
            <p className="text-center text-xs mt-3" style={{ color: "#9CA3AF" }}>
              Please select both a role and difficulty to continue
            </p>
          )}
        </motion.div>
      </div>
    </main>
  )
}