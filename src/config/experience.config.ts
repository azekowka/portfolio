import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Freelance Developer",
    employmentType: "Freelance",
    company: {
      name: "Self-employed",
      url: "#",
    },
    location: {
      name: "Remote",
    }, 
    start: "January 2025",
    end: "Present",
    description: [
      "Out-sourcely developed an Arbitrage Futures Screener that displays long/short spreads of coins by directly collecting real-time data from the API of cryptocurrency exchanges, and integrated TradingView UI components;",
      "Improved client's codebase consisted of Replit-generated React App using Knip.dev library by removing unused dependencies, files, exports and export types, for 47%;",
      "Currently, accepting the offers. Please, book a call with me.",
    ],
  },
  {
    title: "Full-Stack Developer & AI Engineer",
    employmentType: "Full time",
    company: {
      name: "nFactorial Incubator (Tarly AI)",
      url: "https://projects.nfactorial.school/year/2025",
    },
    location: {
      name: "Almaty, Kazakhstan",
    },
    start: "June 2025",
    end: "August 2025",
    description: [
      "Shipping a B2C SaaS AI-agent that edits resumes using text prompts (similar to Cursor), and automatically generates portfolio websites from PDF resumes: www.tarly.works;",
      "Implemented AWS S3 Bucket and PostgreSQL Supabase Database for storing images, structured data, and PDFs;",
      "Integrated Upstash Redis for caching, improving backend's performance by 61%;",
      "Connected Google AI Studio, TogetherAI, & Azure AI Foundry as multi-provider LLM orchestration;",
      "Configured DevOps, Azure VM, SSL certificates, HTTPS servers, CORS, and Railway with LaTeX distributor for PDF rendering;",
      "Deployed frontend on Vercel with secure environment variable handling;",
      "Built a fully responsive user interface (UI) on top of TailwindCSS, ShadcnUI, Framer Motion, and 21st.dev;",
      "Engineered the frontend using Next.js framework and React library, zustand, TanStack Query;",
      "Architected backend services using FastAPI (Python) and Express.js (Node);",
      "Led marketing and sales, securing 3.0K users from 100+ countries;",
      "Tech: NodeJS, Express, SQL, Supabase, ClerkAuth, Polar Payments, NextJS, TypeScript, React, Tailwind, AWS S3"
    ],
  },
    {
    title: "Python Instructor",
    employmentType: "Part time",
    company: {
      name: "Baishev University (Tech Orda)",
      url: "#",
    },
    location: {
      name: "On-site",
    }, 
    start: "January 2024",
    end: "June 2024",
    description: [
      "10/10 of my students achieved ”Junior Python Developer” certificates under the Tech Orda program from Astana Hub;",
      "Conducted a total of 90 hours of lectures, and prepared 50+ lesson materials."
    ],
  }
  
];