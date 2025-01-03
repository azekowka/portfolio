import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdulaziz Gabitov",
  initials: "AG",
  url: "https://azekowka.vercel.app",
  location: "Aktobe, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/aktobe",
  description:
    "a 16 year-old serial tech startup founder, aerospace & software engineer.",
  summary: "A bit personally: Football fan. Podcast lover [n!, Outpeer, MOST Ventures, etc.]. Devoted admirer of George R. R. Martin's book series «A Song of Ice and Fire.»",
  avatarUrl: "/azekowka.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Git",
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Tkinter",
    "PyGame",
    "Scraping",
    "OpenRocket"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/azekowka",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/azizgabitov",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#gabjtov@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CandyData",
      href: "https://candydata-front-landing.vercel.app",
      badges: [],
      location: "",
      title: "Executive Officer & Founder",
      logoUrl: "/",
      start: "Sep 2024",
      end: "Present",
      description:
        "CandyData is an AI-driven recruitment SaaS platform designed to streamline the hiring process for HR & Enterprise. We deliver AI agents that pre-select top candidates and automate negotiations, boosting hiring efficiency effortlessly.\nWe have been accepted into the NURIS ABC Incubation program and won 1st place at the Pizza Pitch competition organized by AqtobeHub.\nAdditionally, became a part of Microsoft for Startups Founders Hub ($1000 Azure sponsorship).",
    }, 
    {
      company: "Aqylab",
      href: "",
      badges: [],
      location: "",
      title: "Operating Officer & Engineer",
      logoUrl: "/aqylab.svg",
      start: "Sep 2024",
      end: "Present",
      description:
        "Aqylab is an IoT-powered lab kit for interactive chemistry learning that turns learning into a game. Achieved 1st place in the Daryn Scientific Project Competition out of 100+ participants. Successfully implemented a pilot project for 450 users in AOO NIS. Won 1st place in the NURIS Hardware Challenge 3.0 and became a finalist in the Solve for Tomorrow by Samsung. Ranked in the top 40 out of 176 teams in Central Asia and the Caucasus in the TikTok Startup Academy. My role is to develop the startup, participate in competitions, incubators and accelerators, apply for grant programs and sell the product.",
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
      title: "Part-time Python Lecturer @ Baishev University",
      logoUrl: "/techorda.jpg",
      start: "Jan 2024",
      end: "June 2024",
      description:
        "Taught lectures in the Python programming language for a group of 14 adults aged 18 to 45 years old who are seeking to gain new skills or even change their current profession to the IT field. 10 / 10 of my students achieved 'Junior Python developer' certificates under the TechOrda program from the largest international technology park of IT startups in Central Asia, AstanaHub. Conducted a total of 90 hours of lectures.",
    },
    {
      company: "Stargate Rocketry Club",
      href: "",
      badges: [],
      location: "",
      title: "Founder & Chief Engineer",
      logoUrl: "https://qtap.kz/assets/img-users/658f200741db2.png",
      start: "Apr 2022",
      end: "Present",
      description:
        "Demonstrated rockets of the club to the US Ambassador to Kazakhstan Daniel N. Rosenblum, CEO of Chevron Eurasia Derek Magness (23.06.2023). Received ≈$1,000 sponsorship from Chevron Corporation to implement 3 projects involving the assembly and launch of model rockets. Invited 2 astrophysicists from Heriot-Watt University as the guest speakers (30 people came to listen to a lecture about the evolution of stars). Conducted 3 courses in rocket science and 2 courses in astrophysics (50+ people enrolled).",
    }
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
      school: "The New York Academy of Sciences",
      href: "",
      degree: "Developed an adaptive educational tool for the cognitive classroom to improve learning and create more inclusive, equitable and accessible educational experiences. The project completed by my team was highly appreciated by NEOM. Managed the team of 5 peers from the countries of the USA, Uzbekistan and Kyrgyzstan.",
      logoUrl: "/nyas.png",
      start: "Sep 2023",
      end: "Nov 2023",
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
        "3rd place (out of 426 teams) and 500,000 tenge cash prize in the AI ​​track! The largest multivenue hackathon in Central Asia (50,000$ prize fund). We created The HealHunter an AI-driven telehealth SaaS for preliminary diagnosis.",
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
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/azizgabitov_3-%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%B8%D0%B7-426-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4-%D0%BD%D0%B0-decentrathon-20-activity-7270821607659446273-RHWL/",
        },
      ],
    },
    {
      title: "NASA Space Apps Challenge",
      dates: "Oct 5-6, 2024",
      location: "Aktobe, Kazakhstan",
      description:
        "Our team developed all-in-one AI-driven platform for agriculture & farmers. Worked on the frontend, and was awarded 1st and 2nd place, as I was a member of two teams, total cash prize 400,000 tenge.",
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
      title: "HackTheBookShelf by Terricon Valley",
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
      title: "KazRockets Satellite Design Tournament",
      dates: "April 12, 2024",
      location: "Gharysh Sapary, Astana, Kazakhstan",
      description:
        "Awarded 1st place at the Republican Hackathon for assembling small satellites, supported by Nazarbayev University Research and Innovation System, National Space Center, and the Ministry of Digital Development, Innovation and Aerospace Industry. (out of 250 participants)",
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
        {
          title: "Winners",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instagram.com/kazrockets/p/C48r0jONrfi/?__d=1%3Futm_source%3Dig_embed&img_index=1",
        },
      ],
    },
    {
      title: "XXIII Kazakhstan Bilim Olympiad in Physics",
      dates: "2021",
      location: "Remote",
      description:
        "I was the only representative from NIS and was awarded a Silver Medal among 70 olympians.",
      image:
        "/bil.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: []
    }
  ],
} as const;
