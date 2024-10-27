import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aziz Gabitov",
  initials: "AG",
  url: "https://google.com",
  location: "Aktobe, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/aktobe",
  description:
    "I'm a 16 year-old aerospace & software engineer, serial tech founder.",
  summary: "Future Forbes Under30. Supporter of FC Barcelona since infancy. ...",
  avatarUrl: "/azekowka.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
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
    "bs4",
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

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CandyData",
      href: "https://candydata-front-landing.vercel.app",
      badges: [],
      location: "",
      title: "CEO & Founder",
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
      title: "COO & Engineer",
      logoUrl: "/aqylab.svg",
      start: "Sep 2024",
      end: "Present",
      description:
        "Aqylab is a game-changing lab kit designed for hands-on chemistry experiments, perfectly aligned with school curriculums in Kazakhstan. We're disrupting traditional science education by bringing interactive, IoT-powered learning directly to students and institutes. My role is to develop the startup, participate in competitions, incubators and accelerators, apply for grant programs and sell the startup product.",
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
      company: "The New York Academy of Sciences",
      href: "",
      badges: [],
      location: "",
      title: "Research Scholar",
      logoUrl: "/nyas.png",
      start: "Sep 2023",
      end: "Nov 2023",
      description:
        "Developed an adaptive educational tool for the cognitive classroom to improve learning and create more inclusive, equitable and accessible educational experiences. The project completed by my team was highly appreciated by NEOM. Managed the team of 5 peers from the countries of the USA, Uzbekistan and Kyrgyzstan.",
    },
    {
      company: "Stargate Rocketry CLub",
      href: "",
      badges: [],
      location: "",
      title: "Founder & Chief Engineer",
      logoUrl: "",
      start: "Apr 2022",
      end: "Present",
      description:
        "Demonstrated activities of the club to the US Ambassador to Kazakhstan Daniel N. Rosenblum, CEO of Chevron Eurasia Derek Magness (23.06.2023). Received $1,000 sponsorship from Chevron Corporation to implement 3 projects involving the assembly and launch of model rockets. Invited 2 astrophysicists from Heriot-Watt University as the guest speakers (30 people came to listen to a lecture about the evolution of stars). Conducted 3 courses in rocket science and 2 courses in astrophysics (50+ people enrolled).",
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
  
  hackathons: [
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
      title: "XXIII Kazakhstan Bilim Olympiad in Physics",
      dates: "2021",
      location: "Remote",
      description:
        "I was the only representative from NIS and was awarded a Silver Medal among 70 olympians.",
      image:
        "/bil.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: []
    },
    {
      title: "Decentrathon 2.0",
      dates: "Oct 18-19, 2024",
      location: "Central Asia",
      description:
        "The largest multivenue hackathon in Central Asia (50,000$ prize fund). We created The HealHunter An AI-driven telehealth SaaS for preliminary diagnosis.",
      image:
        "/dec.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://decentrathon.ai/",
        },
      ],
    },
  ],
} as const;
