import { NextRequest } from "next/server"
import Groq from "groq-sdk"

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { messages, role, difficulty, round } = await request.json()

    const isLastRound = round >= 5

    const systemPrompt = `You are a strict but fair technical interviewer at a top tech company.
You are interviewing a candidate for a ${role} position at ${difficulty} level.

Rules you must follow:
- Ask ONE question at a time. Never explain the answer.
- After the candidate responds, ask a natural follow-up that probes deeper.
- If the answer is vague, push back: "Can you be more specific about X?"
- Keep your responses short — 2-4 sentences maximum.
- NEVER break character. You are the interviewer only.
- Match difficulty: ${difficulty === "easy" ? "ask beginner friendly questions" : difficulty === "medium" ? "ask intermediate level questions" : "ask advanced FAANG level questions"}
${isLastRound ? '- This is the LAST round. End your response with exactly: "That concludes our interview."' : `- This is round ${round} of 5.`}
- Start by introducing yourself briefly and asking the first question.`

    const openaiMessages = [
      { role: "system" as const, content: systemPrompt },
      ...(messages.length > 0
        ? messages.map((m: { role: string; content: string }) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          }))
        : [{ role: "user" as const, content: "Hello, I am ready for the interview. Please start." }]),
    ]

    const stream = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: openaiMessages,
      stream: true,
      max_tokens: 1024,
    })

    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || ""
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(readableStream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    })

  } catch (error) {
    console.error("API Error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}