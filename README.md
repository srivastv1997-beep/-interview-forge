# 🚀 InterviewForge

**AI-Powered Mock Interview Platform for Students, Freshers, and Aspiring Software Engineers**

InterviewForge is a full-stack AI interview preparation platform that helps users practice technical and behavioral interviews, receive personalized feedback, track readiness scores, and prepare for dream companies through realistic AI-driven interview simulations.

Built with modern web technologies and powered by AI, InterviewForge provides a personalized interview experience that adapts to a user's resume, skills, and career goals.

---

## ✨ Features

### 🤖 AI-Powered Mock Interviews

* Technical Interviews
* Behavioral Interviews
* Frontend, Backend, and System Design roles
* Dynamic follow-up questioning
* Realistic interview experience

### 📄 Resume-Based Interviews

* Upload your resume
* AI extracts skills, projects, and experience
* Generates personalized interview questions
* Asks project-specific technical questions

### 📊 Career Command Center

* Interview Readiness Score
* Skill Breakdown Analytics
* Performance Tracking
* Confidence Metrics
* Progress Visualization

### 📈 Detailed Feedback Reports

* Technical Score
* Communication Score
* Structure Score
* Overall Performance Rating
* AI-generated recommendations

### 👤 User Profiles

* Profile Management
* Career Goals
* Dream Companies
* Interview History
* Performance Insights

### 🔐 Secure Authentication

* User Sign Up / Login
* Session Management
* Protected Routes

---

## 🏗️ Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL

### Database & Auth

* Supabase
* PostgreSQL

### AI

* Groq API
* Llama Models

### Storage

* Supabase Storage

---

## 📸 Screenshots

### Landing Page

Add screenshot here

### Dashboard

Add screenshot here

### Resume-Based Interview

Add screenshot here

### Career Command Center

Add screenshot here

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/interviewforge.git
cd interviewforge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=
DIRECT_URL=

GROQ_API_KEY=
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

```bash
npx prisma db push
```

### 6. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧠 How Resume-Based Interviews Work

```text
Upload Resume
      ↓
Extract Resume Content
      ↓
AI Identifies Skills & Projects
      ↓
Personalized Interview Generation
      ↓
Project-Specific Questions
      ↓
Feedback & Analytics
```

Example:

Instead of asking:

"Explain React."

InterviewForge can ask:

"Why did you choose Next.js and TypeScript while building InterviewForge, and what tradeoffs did you consider?"

---

## 📊 Project Architecture

```text
User
 ↓
Next.js Frontend
 ↓
API Routes
 ↓
Groq AI
 ↓
Prisma ORM
 ↓
PostgreSQL (Supabase)
```

---

## 🎯 Problem Solved

Many students prepare for interviews using static question lists and generic AI chatbots.

InterviewForge provides:

* Personalized interview experiences
* Resume-aware questioning
* Real-time feedback
* Readiness analytics
* Progress tracking

This helps candidates prepare more effectively for internships and full-time software engineering roles.

---

## 🚀 Future Enhancements

* Voice-based Interviews
* Company-Specific Interview Modes
* AI Career Coach
* PDF Report Generation
* Interview Replay System
* Team/College Leaderboards
* Mock HR Simulations

---

## 👨‍💻 Author

### Anubhavi Srivastava

Computer Science Student | Full Stack Developer | AI Enthusiast

**Tech Interests**

* Software Engineering
* Artificial Intelligence
* Machine Learning
* Full Stack Development
* System Design



---

## ⭐ Support

If you found this project interesting, consider giving it a star ⭐ on GitHub.

It motivates continued development and helps more students discover InterviewForge.
