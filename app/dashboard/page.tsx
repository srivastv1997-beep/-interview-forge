"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Brain,
  Plus,
  TrendingUp,
  Clock,
  Award,
  BarChart2,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Flame,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const progressData = [
  { name: "Interview 1", score: 65 },
  { name: "Interview 2", score: 72 },
  { name: "Interview 3", score: 76 },
  { name: "Interview 4", score: 84 },
]

const recentInterviews = [
  { date: "Jun 4", role: "Frontend Engineer", score: 82, type: "frontend" },
  { date: "Jun 3", role: "System Design", score: 75, type: "system" },
  { date: "Jun 1", role: "Backend Engineer", score: 88, type: "backend" },
]

const skills = [
  { label: "Technical Depth", score: 82, color: "#6366F1" },
  { label: "Communication", score: 76, color: "#8B5CF6" },
  { label: "Structure", score: 88, color: "#10B981" },
  { label: "Confidence", score: 71, color: "#F59E0B" },
  { label: "Problem Solving", score: 80, color: "#EC4899" },
]

const categories = [
  { label: "Frontend", icon: "⚛️", color: "#6366F1", bg: "#EEF2FF" },
  { label: "Backend", icon: "⚙️", color: "#0891B2", bg: "#ECFEFF" },
  { label: "System Design", icon: "🏗️", color: "#8B5CF6", bg: "#F5F3FF" },
  { label: "Behavioral", icon: "🧠", color: "#10B981", bg: "#ECFDF5" },
]

const navItems = [
  { label: "Dashboard", icon: <BarChart2 className="h-4 w-4" />, active: true },
  { label: "Interviews", icon: <Brain className="h-4 w-4" />, active: false },
  { label: "Reports", icon: <FileText className="h-4 w-4" />, active: false },
  { label: "Progress", icon: <TrendingUp className="h-4 w-4" />, active: false },
  { label: "Settings", icon: <Settings className="h-4 w-4" />, active: false },
]

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Dashboard")

  return (
    <div className="min-h-screen flex" style={{ background: "#F8FAFC" }}>

      {/* Sidebar */}
      <aside className="w-60 border-r flex flex-col fixed top-0 left-0 bottom-0"
        style={{ background: "white", borderColor: "rgba(0,0,0,0.07)" }}>

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b"
          style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-base" style={{ color: "#111827" }}>InterviewForge</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left transition-all"
              style={{
                background: activeNav === item.label ? "#EEF2FF" : "transparent",
                color: activeNav === item.label ? "#6366F1" : "#6B7280",
              }}>
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-left"
            style={{ color: "#EF4444" }}>
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-60 p-8">

        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-8 mb-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
            boxShadow: "0 8px 30px rgba(99,102,241,0.3)"
          }}>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl opacity-20">🎯</div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Welcome back, Anubhavi 👋
          </h1>
          <p className="text-white/70 mb-5">Ready for your next interview? Keep up the streak!</p>
          <Link href="/interview">
            <Button className="bg-white font-semibold gap-2 rounded-xl h-10"
              style={{ color: "#6366F1" }}>
              <Plus className="h-4 w-4" />
              Start New Interview
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Interviews", value: "12", icon: <Brain className="h-5 w-5" />, color: "#6366F1", bg: "#EEF2FF" },
            { label: "Average Score", value: "78%", icon: <Target className="h-5 w-5" />, color: "#8B5CF6", bg: "#F5F3FF" },
            { label: "Best Score", value: "91%", icon: <Award className="h-5 w-5" />, color: "#10B981", bg: "#ECFDF5" },
            { label: "Hours Practiced", value: "8.4 hrs", icon: <Clock className="h-5 w-5" />, color: "#F59E0B", bg: "#FFFBEB" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-5 border"
              style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold mb-0.5" style={{ color: "#111827" }}>{stat.value}</p>
              <p className="text-xs font-medium" style={{ color: "#9CA3AF" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Progress Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-2 rounded-2xl p-6 border"
            style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <h2 className="font-bold text-base mb-1" style={{ color: "#111827" }}>Performance Over Time</h2>
            <p className="text-xs mb-5" style={{ color: "#9CA3AF" }}>Your score trend across sessions</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: "#9CA3AF" }} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  labelStyle={{ color: "#111827", fontWeight: 600 }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6366F1"
                  strokeWidth={2.5}
                  dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 border flex flex-col"
            style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <h2 className="font-bold text-base mb-1" style={{ color: "#111827" }}>Practice Streak</h2>
            <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Keep it going!</p>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-6xl mb-3">🔥</div>
              <p className="text-4xl font-bold mb-1" style={{ color: "#F59E0B" }}>6</p>
              <p className="text-sm font-medium" style={{ color: "#9CA3AF" }}>Days in a row</p>
            </div>
            <div className="mt-4 p-3 rounded-xl text-center"
              style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
              <p className="text-xs font-semibold" style={{ color: "#F59E0B" }}>
                🏆 Personal best! Keep going!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Skill Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6 border"
            style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <h2 className="font-bold text-base mb-1" style={{ color: "#111827" }}>Skill Breakdown</h2>
            <p className="text-xs mb-5" style={{ color: "#9CA3AF" }}>Based on your last 3 sessions</p>
            <div className="flex flex-col gap-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-semibold" style={{ color: "#374151" }}>{skill.label}</span>
                    <span className="text-xs font-bold" style={{ color: skill.color }}>{skill.score}%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: "#F3F4F6" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.score}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="h-2 rounded-full"
                      style={{ background: skill.color }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Interviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 rounded-2xl p-6 border"
            style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-bold text-base" style={{ color: "#111827" }}>Recent Interviews</h2>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>Your last 3 sessions</p>
              </div>
              <Button variant="outline" className="h-8 px-3 text-xs font-medium"
                style={{ borderColor: "#E5E7EB", color: "#6B7280" }}>
                View all
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              {recentInterviews.map((interview, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl"
                  style={{ background: "#F9FAFB", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}>
                      {interview.type === "frontend" ? "⚛️" : interview.type === "system" ? "🏗️" : "⚙️"}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111827" }}>{interview.role}</p>
                      <p className="text-xs" style={{ color: "#9CA3AF" }}>{interview.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        background: interview.score >= 80 ? "#ECFDF5" : "#FFFBEB",
                        color: interview.score >= 80 ? "#10B981" : "#F59E0B"
                      }}>
                      {interview.score}%
                    </span>
                    <Button variant="outline" className="h-8 px-3 text-xs font-medium gap-1"
                      style={{ borderColor: "#E5E7EB", color: "#6366F1" }}>
                      View Report
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interview Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-6 border"
          style={{ background: "white", borderColor: "rgba(0,0,0,0.07)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h2 className="font-bold text-base mb-1" style={{ color: "#111827" }}>Start a New Interview</h2>
          <p className="text-xs mb-5" style={{ color: "#9CA3AF" }}>Choose a category to practice</p>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all"
                style={{ background: cat.bg, borderColor: "rgba(0,0,0,0.07)" }}>
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-semibold" style={{ color: cat.color }}>{cat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  )
}