import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdulaziz Gabitov",
  initials: "AG",
  url: "https://azekowka.vercel.app",
  email: "gabjtov@gmail.com",
  linkedin: "azizgabitov",
  github: "azekowka",
  description:
    "a 16-year-old serial tech startup founder, aerospace and full-stack software engineer.",
  summary: "A bit personally: Football fan. Podcast lover [n!, Outpeer, MOST Ventures, etc.]. Devoted admirer of George R. R. Martin's book series «A Song of Ice and Fire.»",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEUP3GvMP6Neg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690810642419?e=1748476800&v=beta&t=CSiwdYmJ9MB1elfK2aF1ERvjScSeAh4IfxNP8Uhr0sc",
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML", "CSS",
    "Tailwind CSS",
    "lucide",
    "shadcn/ui",
    "Kokonut UI",
    "Magic UI",
    "Motion Primitives",

  ],
  backend: [
    "Python",
    "FastAPI",
    "Flask",
    "Django",
    "Node.js",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Supabase",
    "Firebase",
    "NeonDB",
    "Prisma",
    "Golang",
  ],
  ai: [
    "TensorFlow",
    "Scikit-learn",
    "Keras",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Azure AI Foundry",
    "Google AI Studio",
    "OpenAI Whisper",
    "Groq AI Inference",
    "LangChain",
  ],
  tools: ["Git", "Vercel", "v0", "Stripe", "Polar", "Clerk", "SingleStore", "Uploadthing", "VS Code", "Cursor", "OpenRocket"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/azekowka",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/azizgabitov",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gabjtov@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "",
      title: "Full-stack Developer",
      logoUrl: "https://www.citypng.com/public/uploads/preview/upwork-round-black-and-white-logo-icon-735811696609924y4knq1epak.png",
      start: "Feb 2025",
      end: "Present",
      description:
        "Founded a SaaS freelance agency for the development of IT products of any complexity. We accept orders regularly, contact me and see the portfolio of projects below.",
    }, 
    {
      company: "Aqylab",
      href: "",
      badges: [],
      location: "",
      title: "Operating Officer & Founding Engineer",
      logoUrl: "/aqylab.svg",
      start: "Sep 2024",
      end: "Present",
      description:
        "Aqylab is an IoT-powered lab kit for interactive chemistry learning that turns learning into a game. Conducted a pilot in 7 schools, reaching 5000+ users. Became a part of the Microsoft Founders Hub, securing $1000 Azure sponsorship. Achieved 1st place in the NURIS Hardware Challenge 3.0 and in the Daryn Scientific Project Competition out of 500+ participants, respectively. Undergoing an Incubation program at the Terricon Valley.",
    },   
    {
      company: "Genomix",
      href: "",
      badges: [],
      location: "",
      title: "Software Engineer Intern",
      logoUrl: "/genomix.png",
      start: "Aug 2024",
      end: "Sep 2024",
      description:
        "Developed a gamified video course platform using Django, HTML5, CSS, JS, turning a bioacademy into an EdTech startup.",
    },
    {
      company: "Tech Orda",
      href: "",
      badges: [],
      location: "",
      title: "Part-time Python Instructor @ Baishev University",
      logoUrl: "/techorda.jpg",
      start: "Jan 2024",
      end: "June 2024",
      description:
        "Taught lectures in the Python programming language for a group of 14 adults aged 18 to 45 years old. 10 / 10 of my students achieved 'Junior Python developer' certificates under the Tech Orda program from the Astana Hub. Conducted a total of 90 hours of lectures.",
    },
  ],
  education: [
    {
      school: "NIS PhMD Aqtobe",
      href: "",
      degree: "High School Diploma, Physics, Computer Science and Advanced Mathematics",
      logoUrl: "/nis.jpg",
      start: "2020",
      end: "2026",
    },
    {
      school: "AWS AI & ML Scholarship",
      href: "",
      degree: "Awarded a scholarship ($4,000 USD value) to work on real-world projects, learn artificial intelligence and machine learning, and receive access to exclusive events and mentoring.",
      logoUrl: "/aws.png",
      start: "Jun 2024",
      end: "Nov 2024",
    },
    {
      school: "Samsung Innovation Campus'23",
      href: "",
      degree: "Learned all the basic concepts of the Python language, mastered sequences, functions, classes, data structures, sorting algorithms, dynamic programming. Worked with the following libraries: Pandas, NumPy, Seaborn, MatplotLib, Math, PyGame, Folium.",
      logoUrl: "/sic.svg",
      start: "Oct 2022",
      end: "Apr 2023",
    },
    
  ],
  
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
  hackathons: [
    {
      title: "NURIS Hardware Challenge 4.0 - AeroSpace Tech",
      dates: "December 13, 2024",
      location: "Nazarbayev University",
      description:
        "Awarded 1st place & 500,000 tenge cash prize for the creation of the fire forecasting machine learning model based on the CNN.",
      image:
        "https://static.tildacdn.pro/tild3163-3235-4364-b437-356462306130/NURIS_logo_new__-_Co.png",
      win: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nuris.nu.edu.kz/hardwarechallenge4",
        }
      ],
    },
    {
      title: "BICAP Hackathon",
      dates: "December 12, 2024",
      location: "Astana, Kazakhstan",
      description:
        "Awarded 2nd place for the creation of the EventHunt - a smart platform for tracking city events.",
      image:
        "https://optim.tildacdn.pro/tild6630-3864-4235-a630-393232373239/-/resize/90x/-/format/webp/cap.png",
      win: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://capedu.kz/bicaprus",
        }
      ],
    },
    {
      title: "Decentrathon 2.0",
      dates: "Oct 18-19, 2024",
      location: "Central Asia",
      description:
        "3rd place (out of 426 teams) and $ 1,000 cash prize in the AI ​​track! The largest multivenue hackathon in Central Asia (50,000$ prize fund). We created The HealHunter an AI-driven telehealth SaaS for preliminary diagnosis.",
      image:
        "/dec.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://decentrathon.ai/",
        },
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/azizgabitov_3-%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%B8%D0%B7-426-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4-%D0%BD%D0%B0-decentrathon-20-activity-7270821607659446273-RHWL/",
        },
      ],
    },
    {
      title: "NASA Space Apps Challenge",
      dates: "Oct 5-6, 2024",
      location: "Remote, Worldwide",
      description:
        "Awarded 1st place & USD 1,000 cash prize. Our team built an AI-driven platform for agriculture & farmers.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/azekowka",
        },
      ],
    },
    {
      title: "Hack The BookShelf by Terricon Valley",
      dates: "Sep 6-8, 2024",
      location: "Karaganda,  Kazakhstan",
      description:
        "Awarded 2nd place & 200,000 tenge cash prize (out of 65 teams). Developed a social network for libraries, game and a Tinder analogue for book lovers.",
      image:
        "/terriconvalley.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Press release",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://the-tech.kz/opredeleny-pobediteli-hakatona-hackthebookshelf/",
        },
      ],
    },
    {
      title: "Kaz Rockets Satellite Design Tournament",
      dates: "April 12, 2024",
      location: "Gharysh Sapary, Astana, Kazakhstan",
      description:
        "Awarded 1st place (out of 250 participants) at the Republican Hackathon for assembling small satellites, supported by Nazarbayev University Research and Innovation System, National Space Center, and the Ministry of Digital Development, Innovation and Aerospace Industry.",
      image:
        "/kazrockets.png",
      win: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Press release",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://astanahub.com/ru/event/kazrockets-satellite-design-tournament-2024/",
        },
      ],
    },
    {
      title: "XXIII Kazakhstan Bilim Olympiad in Physics",
      dates: "2021",
      location: "Remote",
      description:
        "Was the only representative from NIS and was awarded a Silver Medal among 70 olympians.",
      image:
        "/bil.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: []
    }
  ],
} as const;
