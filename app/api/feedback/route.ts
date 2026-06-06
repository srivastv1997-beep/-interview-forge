import { NextRequest } from "next/server"
import Groq from "groq-sdk"

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { messages, role, difficulty } = await request.json()

    const transcript = messages
      .map((m: { role: string; content: string }) =>
        `${m.role === "user" ? "Candidate" : "Interviewer"}: ${m.content}`
      )
      .join("\n\n")

    const prompt = `You are an expert interview evaluator. Analyze this interview transcript and provide detailed feedback.

Role: ${role}
Difficulty: ${difficulty}

Transcript:
${transcript}

Respond with ONLY a valid JSON object, no markdown, no backticks, just pure JSON:
{
  "overallScore": <number 0-100>,
  "technicalScore": <number 0-100>,
  "communicationScore": <number 0-100>,
  "structureScore": <number 0-100>,
  "confidenceScore": <number 0-100>,
  "fillerWordCount": <number>,
  "strengths": "<2-3 specific strengths>",
  "improvements": "<2-3 specific areas to improve>",
  "sampleAnswer": "<A better sample answer for the weakest response>"
}`

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1024,
    })

    const text = response.choices[0].message.content || ""
    const cleaned = text.replace(/```json|```/g, "").trim()
    const feedback = JSON.parse(cleaned)

    return Response.json({ feedback })

  } catch (error) {
    console.error("Feedback Error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to generate feedback" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}