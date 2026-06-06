"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Send, StopCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function InterviewSessionPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const role = searchParams.get("role") || "frontend"
  const difficulty = searchParams.get("difficulty") || "medium"

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [round, setRound] = useState(0)
  const [isEnded, setIsEnded] = useState(false)
  const [generatingFeedback, setGeneratingFeedback] = useState(false)
  const [streamingText, setStreamingText] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  const roleLabels: Record<string, string> = {
    frontend: "Frontend Engineer",
    backend: "Backend Engineer",
    system: "System Design",
    behavioral: "Behavioral",
  }

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, streamingText])

  // Start interview automatically
  useEffect(() => {
    startInterview()
  }, [])

  async function startInterview() {
    setLoading(true)
    await sendToAI([], 0)
  }

  async function sendToAI(currentMessages: Message[], currentRound: number) {
    setLoading(true)
    setStreamingText("")

    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: currentMessages,
          role: roleLabels[role],
          difficulty,
          round: currentRound,
        }),
      })

      if (!response.body) return

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        fullText += chunk
        setStreamingText(fullText)
      }

      const newMessages: Message[] = [
        ...currentMessages,
        { role: "assistant", content: fullText },
      ]

      setMessages(newMessages)
      setStreamingText("")
      setRound(currentRound + 1)

      // Check if interview ended
      if (fullText.includes("concludes our interview")) {
        setIsEnded(true)
      }

    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSend() {
    if (!input.trim() || loading || isEnded) return

    const userMessage: Message = { role: "user", content: input.trim() }
    const newMessages = [...messages, userMessage]

    setMessages(newMessages)
    setInput("")
    await sendToAI(newMessages, round)
  }

  async function handleEndInterview() {
    setGeneratingFeedback(true)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages,
          role: roleLabels[role],
          difficulty,
        }),
      })

      const data = await response.json()

      // Store feedback in sessionStorage temporarily
      sessionStorage.setItem("feedback", JSON.stringify(data.feedback))
      sessionStorage.setItem("role", roleLabels[role])
      sessionStorage.setItem("difficulty", difficulty)

      router.push("/feedback")

    } catch (error) {
      console.error("Error generating feedback:", error)
      setGeneratingFeedback(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "#F8FAFC" }}>

      {/* Header */}
      <div className="border-b bg-white px-6 py-4 flex items-center justify-between"
        style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: "#111827" }}>
              {roleLabels[role]} Interview
            </p>
            <p className="text-xs" style={{ color: "#9CA3AF" }}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} level · Round {round}/5
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Round indicators */}
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((r) => (
              <div key={r} className="w-2 h-2 rounded-full"
                style={{ background: r <= round ? "#6366F1" : "#E5E7EB" }} />
            ))}
          </div>

          <Button
            onClick={handleEndInterview}
            disabled={messages.length < 4 || generatingFeedback}
            variant="outline"
            className="gap-2 text-sm font-medium h-9"
            style={{ borderColor: "#EF4444", color: "#EF4444" }}>
            {generatingFeedback ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating feedback...
              </>
            ) : (
              <>
                <StopCircle className="h-4 w-4" />
                End Interview
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 max-w-3xl mx-auto w-full">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 mb-6 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>

              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
                  AI
                </div>
              )}

              <div className="max-w-lg rounded-2xl px-5 py-4 text-sm leading-relaxed"
                style={msg.role === "assistant"
                  ? { background: "white", color: "#374151", border: "1px solid rgba(0,0,0,0.07)", borderTopLeftRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }
                  : { background: "linear-gradient(135deg, #6366F1, #8B5CF6)", color: "white", borderTopRightRadius: 4 }
                }>
                {msg.content}
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "#EEF2FF", color: "#6366F1" }}>
                  You
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Streaming text */}
        {streamingText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              AI
            </div>
            <div className="max-w-lg rounded-2xl px-5 py-4 text-sm leading-relaxed"
              style={{ background: "white", color: "#374151", border: "1px solid rgba(0,0,0,0.07)", borderTopLeftRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              {streamingText}
              <span className="inline-block w-1 h-4 ml-1 animate-pulse"
                style={{ background: "#6366F1", verticalAlign: "middle" }} />
            </div>
          </motion.div>
        )}

        {/* Loading dots */}
        {loading && !streamingText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              AI
            </div>
            <div className="rounded-2xl px-5 py-4"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)", borderTopLeftRadius: 4 }}>
              <div className="flex gap-1.5 items-center">
                {[0, 150, 300].map((delay, i) => (
                  <div key={i} className="w-2 h-2 rounded-full animate-bounce"
                    style={{ background: "#6366F1", animationDelay: `${delay}ms` }} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Interview ended message */}
        {isEnded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#111827" }}>
              Interview Complete!
            </h3>
            <p className="text-sm mb-6" style={{ color: "#9CA3AF" }}>
              Great job! Click below to see your detailed feedback and score.
            </p>
            <Button
              onClick={handleEndInterview}
              disabled={generatingFeedback}
              className="font-semibold text-white gap-2 px-8 h-11 rounded-xl"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", boxShadow: "0 4px 15px rgba(99,102,241,0.4)" }}>
              {generatingFeedback ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating your scorecard...
                </>
              ) : (
                "View My Feedback →"
              )}
            </Button>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      {!isEnded && (
        <div className="border-t bg-white px-6 py-4"
          style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <div className="max-w-3xl mx-auto flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              placeholder="Type your answer here... (Press Enter to send)"
              rows={3}
              className="flex-1 rounded-xl border px-4 py-3 text-sm outline-none resize-none"
              style={{
                borderColor: "#E5E7EB",
                color: "#111827",
                background: "#F9FAFB",
              }}
              disabled={loading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="h-auto px-4 rounded-xl text-white self-end"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-center mt-2" style={{ color: "#D1D5DB" }}>
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      )}
    </main>
  )
}