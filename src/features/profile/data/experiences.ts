import type { Experience } from "@/types/nav";

export const experiencesConfig: Experience[] = [
    {
        title: "Freelance Developer",
        employmentType: "Freelance",
        company: {
            name: "Self-employed",
            url: "#",
            image:
                "https://www.citypng.com/public/uploads/preview/upwork-round-black-and-white-logo-icon-735811696609924y4knq1epak.png",
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
            image: "https://framerusercontent.com/assets/lX5QcegD928dZZ7u51ccCsTJHU.png",
        },
        location: {
            name: "Almaty, Kazakhstan",
        },
        start: "June 2025",
        end: "August 2025",
        description: [
            "Selected for Central Asia’s top AI bootcamp (2.5% acceptance rate) focused on web, mobile and AI technologies.",
            "Ranked Top #2 in the nFactorial incubator among 75 participants.",
            "Shipped a B2C SaaS AI agent that edits resumes using text prompts (like Cursor) and generates portfolio websites: tarly.works.",
            "Led marketing and sales, securing more than 3,000 users from 100+ countries;",
            "Integrated AWS S3, Supabase Serverless PostgreSQL, and Upstash Redis for caching, improving backend’s performance by 61%;",
            "Connected Google AI Studio, TogetherAI, and OpenAI’s leading LLM models in Azure AI Foundry for multi-provider orchestration.",
            "Configured DevOps on Azure Virtual Machine (SSL, HTTPS, nginx, LaTeX distributor).",
            "Engineered frontend using Next.js framework and React library, ShadcnUI, Framer Motion, zustand, TanStack Query;",
        ],
    },
    {
        title: "Python Instructor",
        employmentType: "Part time",
        company: {
            name: "Baishev University (Tech Orda)",
            url: "#",
            image: "https://site.bu.edu.kz/wp-content/uploads/2024/10/logo-1.png",
        },
        location: {
            name: "On-site",
        },
        start: "January 2024",
        end: "June 2024",
        description: [
            "10/10 of my students achieved “Junior Python Developer” certificates under Tech Orda (Astana Hub).",
            "Delivered 90 hours of lectures covering Python, algorithms, data structures, machine learning, and OOP.",
        ],
    },
];
