<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Groq_AI-powered-F55036?style=for-the-badge" alt="Groq AI" />
</p>

# Portfolio Hub

A modern portfolio platform built for **Lexicon Frontend G6** — showcasing students, practicing interviews with AI, and tracking job applications. All in one place.

<p align="center">
  <a href="https://slictor.github.io/portfolio-hub/frame1.html">View Interactive Wireframe</a>
</p>

---

## Features

### Student Portfolios
Browse the cohort's developers in a responsive grid. Filter by competence — Frontend, Backend, Fullstack, UX, or Design. Click any profile to see their full bio, tech stack, and links.

### AI Interview Training
Practice technical interviews powered by **Groq AI**. Choose your difficulty level (Praktik / Junior / Senior), pick a topic (Frontend, Backend, Fullstack, .NET, React, or General), set the number of questions, and get realistic interview practice with detailed feedback.

### Job Tracker
Share and manage job opportunities across the class. Track application status (Active, Applied, Interview, Closed) and maintain a database of company contacts.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TailwindCSS 4 |
| Language | TypeScript 5 |
| AI | Vercel AI SDK + Groq |
| Markdown | react-markdown |
| Code Quality | Biome |
| Fonts | DM Serif Display, Geist Sans, Geist Mono |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Groq API key](https://console.groq.com/) (for the interview feature)

### Installation

```bash
git clone https://github.com/Slictor/portfolio-hub.git
cd portfolio-hub
npm install
```

### Environment

Create a `.env.local` file in the root:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Check code with Biome |
| `npm run format` | Format code with Biome |

---

## Project Structure

```
app/
├── api/
│   ├── chat/          # AI interview endpoint
│   ├── jobs/          # Job CRUD
│   └── contacts/      # Contact CRUD
├── intervju/          # Interview training page
├── jobb/              # Job tracker page
├── layout.tsx         # Root layout
└── page.tsx           # Home — student grid

components/
├── interview/         # Chat, topics, level selector
├── jobs/              # Job cards, forms, contacts
├── ProfileCard.tsx    # Student card
├── ProfileGrid.tsx    # Responsive grid
├── ProfileModal.tsx   # Expanded profile view
└── header.tsx         # Navigation

data/                  # JSON data (students, jobs, contacts)
types/                 # TypeScript interfaces
```

---

## Contributors

**Lexicon Frontend G6** — a cohort of aspiring developers building the future, one component at a time.
