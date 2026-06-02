import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    <main className="min-h-screen text-white" style={{ background: "#070D1F" }}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b fixed top-0 left-0 right-0 z-50"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(7,13,31,0.85)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg" style={{ background: "#2563EB" }}>
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">InterviewForge</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm px-5 h-9 font-medium" style={{ background: "#2563EB", color: "white" }}>
              Get Started Free
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero — reduced height */}
      <section className="relative flex flex-col items-center text-center px-6 pt-32 pb-12 overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }} />

        {/* Badge */}
        <div className="flex items-center gap-2 text-xs px-4 py-2 rounded-full mb-6 border font-medium"
          style={{ background: "rgba(37,99,235,0.15)", borderColor: "rgba(37,99,235,0.4)", color: "#93C5FD" }}>
          <Sparkles className="h-3 w-3" />
          AI-Powered · Real Interviews · Instant Feedback
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-5 max-w-4xl">
          Your Personal{" "}
          <span style={{
            background: "linear-gradient(135deg, #60A5FA 0%, #2563EB 50%, #93C5FD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            AI Interview Coach
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg max-w-2xl leading-relaxed mb-7"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          Practice with an AI that thinks like a senior engineer.
          Receive personalized feedback and improvement insights.
          Walk into every interview with unshakeable confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <Link href="/signup">
            <Button className="px-8 h-11 text-base font-semibold gap-2 rounded-xl"
              style={{ background: "#2563EB", color: "white", boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}>
              Start Practicing Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="px-8 h-11 text-base font-medium rounded-xl"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", background: "transparent" }}>
              Sign in to account
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3">
          {[
            { icon: <Mic className="h-3.5 w-3.5" />, text: "Voice Interviews" },
            { icon: <MessageSquare className="h-3.5 w-3.5" />, text: "AI Follow-up Questions" },
            { icon: <BarChart3 className="h-3.5 w-3.5" />, text: "Detailed Performance Reports" },
            { icon: <FileText className="h-3.5 w-3.5" />, text: "Resume-based Questions" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              <span style={{ color: "#10B981" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        <p className="text-xs mb-10" style={{ color: "rgba(255,255,255,0.2)" }}>
          Free forever · No credit card · Start in 30 seconds
        </p>

        {/* Interview Preview Card with glow behind it */}
        <div className="relative w-full max-w-4xl">

          {/* Glow behind demo */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "rgba(37,99,235,0.15)",
              filter: "blur(80px)",
              opacity: 0.8,
              transform: "scale(0.9) translateY(10px)"
            }} />

          <div className="relative rounded-2xl overflow-hidden border"
            style={{ background: "#0D1730", borderColor: "rgba(255,255,255,0.08)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>

            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b"
              style={{ background: "#0A1220", borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "#EF4444" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
              </div>
              <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(37,99,235,0.2)", color: "#93C5FD" }}>
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#10B981" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "#10B981" }} />
                </span>
                Live Session — Senior Frontend Engineer @ Google
              </div>
              {/* Blinking REC */}
              <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded"
                style={{ background: "rgba(239,68,68,0.15)", color: "#FCA5A5" }}>
                <span className="animate-pulse">●</span> REC 12:34
              </div>
            </div>

            {/* Chat */}
            <div className="p-8 flex flex-col gap-6 text-left">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "#2563EB" }}>AI</div>
                <div className="rounded-2xl rounded-tl-none px-5 py-4 text-sm max-w-lg leading-relaxed"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  Walk me through how you'd architect a real-time collaborative document editor — like Google Docs — from scratch. Focus on the data consistency model.
                </div>
              </div>

              <div className="flex gap-4 items-start justify-end">
                <div className="rounded-2xl rounded-tr-none px-5 py-4 text-sm max-w-lg leading-relaxed"
                  style={{ background: "rgba(37,99,235,0.25)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(37,99,235,0.3)" }}>
                  I'd use Operational Transformation or CRDTs for conflict resolution, WebSockets for real-time sync, and split the architecture into a presence layer and a persistence layer...
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>You</div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "#2563EB" }}>AI</div>
                <div className="rounded-2xl rounded-tl-none px-5 py-4 text-sm max-w-lg leading-relaxed"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  Good thinking. Between OT and CRDTs — what are the specific tradeoffs, and which would you pick at Google's scale?
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-4 items-start justify-end">
                <div className="rounded-2xl rounded-tr-none px-5 py-4"
                  style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.2)" }}>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#60A5FA", animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#60A5FA", animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#60A5FA", animationDelay: "300ms" }} />
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>You</div>
              </div>
            </div>

            {/* Live feedback bar */}
            <div className="px-8 py-4 border-t"
              style={{ background: "#0A1220", borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Live Performance Analysis
                </span>
                <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>
                  <span className="animate-pulse">●</span> Session active
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Technical Depth", score: 82, color: "#10B981" },
                  { label: "Communication", score: 76, color: "#60A5FA" },
                  { label: "Structure", score: 88, color: "#A78BFA" },
                  { label: "Confidence", score: 71, color: "#F59E0B" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{m.label}</span>
                      <span className="text-xs font-semibold" style={{ color: m.color }}>{m.score}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${m.score}%`, background: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role pills — replacing fake stats */}
      <section className="border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4">
          {[
            { label: "Voice Powered", icon: <Mic className="h-4 w-4" /> },
            { label: "Adaptive Follow-ups", icon: <MessageSquare className="h-4 w-4" /> },
            { label: "Detailed Scorecards", icon: <BarChart3 className="h-4 w-4" /> },
            { label: "Resume Aware", icon: <FileText className="h-4 w-4" /> },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium"
              style={{ borderColor: "rgba(37,99,235,0.3)", color: "#93C5FD", background: "rgba(37,99,235,0.08)" }}>
              <span style={{ color: "#60A5FA" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: "#2563EB" }}>
            Why InterviewForge
          </p>
          <h2 className="text-4xl font-bold mb-4">Built for candidates who are serious</h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
            Not just another chatbot. A complete interview preparation engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: <MessageSquare className="h-5 w-5" />, title: "Real AI Interviewer", desc: "Asks follow-up questions, challenges vague answers, and adapts in real time — just like a senior engineer at FAANG.", color: "#2563EB", glow: "rgba(37,99,235,0.15)" },
            { icon: <Zap className="h-5 w-5" />, title: "Instant Scorecard", desc: "Get scored on technical depth, communication, structure, and confidence. Know exactly what to improve after every session.", color: "#7C3AED", glow: "rgba(124,58,237,0.15)" },
            { icon: <Target className="h-5 w-5" />, title: "Role-Specific Questions", desc: "Frontend, Backend, System Design, Behavioral — questions tailored by role, company, and difficulty level.", color: "#0891B2", glow: "rgba(8,145,178,0.15)" },
            { icon: <TrendingUp className="h-5 w-5" />, title: "Track Progress", desc: "See your scores improve session by session. Identify weak spots before they cost you an offer.", color: "#059669", glow: "rgba(5,150,105,0.15)" },
            { icon: <Mic className="h-5 w-5" />, title: "Voice Interviews", desc: "Speak your answers out loud just like a real interview. Practice your delivery, not just your knowledge.", color: "#D97706", glow: "rgba(217,119,6,0.15)" },
            { icon: <FileText className="h-5 w-5" />, title: "Resume-Based Questions", desc: "Upload your resume and get questions tailored to your exact background, projects, and experience.", color: "#DC2626", glow: "rgba(220,38,38,0.15)" },
          ].map((f, i) => (
            <div key={i} className="feature-card rounded-2xl p-6 border flex flex-col gap-4"
              style={{ background: "#111827", borderColor: "rgba(255,255,255,0.09)" }}>
              <div className="feature-icon w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: f.glow, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-base">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: "#2563EB" }}>
              Simple Process
            </p>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
              From signup to scorecard in under 5 minutes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(37,99,235,0.6), rgba(37,99,235,0.05))" }} />
            <div className="flex flex-col gap-6">
              {[
                { step: "01", title: "Upload Your Resume", desc: "Paste your resume or LinkedIn profile. InterviewForge reads your background and tailors every question to your exact experience.", color: "#2563EB" },
                { step: "02", title: "Select Role & Difficulty", desc: "Choose the job role you're targeting — Frontend, Backend, System Design, or Behavioral. Set difficulty from Beginner to FAANG level.", color: "#7C3AED" },
                { step: "03", title: "Start Your Interview", desc: "The AI interviewer asks you questions. Answer by typing or using your voice. It listens, then asks intelligent follow-up questions.", color: "#0891B2" },
                { step: "04", title: "Get Your Scorecard", desc: "After the session, receive a full scorecard — technical depth, communication, structure, confidence — with specific tips to improve.", color: "#059669" },
                { step: "05", title: "Track Your Growth", desc: "Every session is saved. Watch your scores trend upward. See exactly which areas you've mastered and what needs work.", color: "#D97706" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2 font-bold text-sm"
                    style={{ background: "#070D1F", borderColor: item.color, color: item.color }}>
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-2xl p-6 border"
                    style={{ background: "#111827", borderColor: "rgba(255,255,255,0.07)" }}>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-semibold tracking-widest mb-10 uppercase" style={{ color: "#2563EB" }}>
            Early Feedback
          </p>
          <div className="rounded-2xl p-8 border relative"
            style={{ background: "#111827", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="text-4xl mb-4" style={{ color: "#2563EB" }}>"</div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              The follow-up questions felt surprisingly realistic. It pushed me on vague answers
              exactly like a real interviewer would. I felt way more confident going into my actual interview.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(37,99,235,0.3)", color: "#93C5FD" }}>R</div>
              <div className="text-left">
                <p className="text-sm font-medium">Rahul M.</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Beta Tester · SDE Intern @ Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563EB" }}>
            Your next chapter starts here
          </p>
          <h2 className="text-5xl font-bold tracking-tight leading-tight">
            Stop hoping.<br />
            <span style={{
              background: "linear-gradient(135deg, #60A5FA, #2563EB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Start winning.
            </span>
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
            Every great engineer you admire once sat nervously in that interview chair.
            The difference? They prepared. Now it's your turn.
          </p>
          <Link href="/signup">
            <Button className="px-10 h-12 text-base font-semibold gap-2 rounded-xl mt-2"
              style={{ background: "#2563EB", color: "white", boxShadow: "0 0 50px rgba(37,99,235,0.5)" }}>
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            {["Voice Interviews", "AI Follow-up Questions", "Detailed Performance Reports", "Resume-based Questions"].map((t, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                <CheckCircle className="h-3.5 w-3.5" style={{ color: "#10B981" }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-8 py-8"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg" style={{ background: "#2563EB" }}>
              <Brain className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm">InterviewForge</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Built with Next.js · PostgreSQL · Prisma · Claude AI &nbsp;·&nbsp; © 2026 InterviewForge
          </p>
          <div className="flex items-center gap-3">
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="h-8 px-4 text-xs"
      style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", background: "transparent" }}>
      View Source
    </Button>
  </a>
  <Link href="/signup">
    <Button className="h-8 px-4 text-xs"
      style={{ background: "#2563EB", color: "white" }}>
      Live Demo
    </Button>
  </Link>
</div>
        </div>
      </footer>

    </main>
  )
}