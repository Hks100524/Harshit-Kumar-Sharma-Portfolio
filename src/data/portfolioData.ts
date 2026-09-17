export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  points: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface ResearchPaper {
  title: string;
  journal: string;
  volume: string;
  issue: string;
  date: string;
  pages: string;
  abstract: string;
  link?: string;
}

export const personalData = {
  name: "Harshit Kumar Sharma",
  role: "Software Engineer | Full Stack Developer",
  status: "Available for Work",
  phone: "+91-8868801024",
  email: "harshitsharma363978@gmail.com",
  location: "Moradabad, Uttar Pradesh, India",
  github: "https://github.com/Hks100524",
  linkedin: "https://www.linkedin.com/in/harshit-kumar-sharma-1ba6a9302/",
  summary:
    "Full Stack Developer with hands-on experience building AI-powered web applications using Next.js, React.js, Node.js, Express.js, MongoDB, TypeScript, and JavaScript. Experienced in developing secure authentication systems, REST APIs, database-driven applications, and responsive user interfaces through real-world projects. Proficient in integrating AI services, deploying applications on cloud platforms, and building clean, scalable, and maintainable software.",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Moradabad Institute of Technology (AKTU)",
      period: "Aug 2023 – Jun 2026",
      location: "Moradabad, Uttar Pradesh",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Vikas Institute of Engineering & Technology (BTEUP)",
      period: "Aug 2021 – Jul 2023",
      location: "Gorakhpur, Uttar Pradesh",
    },
  ],
};

export const techCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
  },
  {
    name: "Web Technologies",
    skills: [
      "Next.js",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Axios",
      "Context API",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "MySQL"],
  },
  {
    name: "Auth & Security",
    skills: [
      "JWT Authentication",
      "Google OAuth",
      "RBAC (Role-Based Access)",
      "Middleware",
    ],
  },
  {
    name: "AI, Tools & Platforms",
    skills: [
      "Gemini AI API",
      "OpenAI API",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Cloudinary",
      "Vercel",
      "Render",
      "Cheerio",
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "CRUD Operations",
      "MVC Architecture",
      "Responsive Design",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "intervo",
    title: "INTERVO",
    subtitle: "AI Interview Preparation Platform",
    category: "AI & Full Stack",
    featured: true,
    description:
      "Full-stack AI Interview Preparation Platform using Next.js 16, React 19, TypeScript, MongoDB Atlas, and Gemini AI. Allows candidates to practice technical interviews, receive AI evaluation with score breakdowns, and track progress.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "MongoDB Atlas",
      "Gemini AI",
      "JWT",
      "Google OAuth",
      "Cloudinary",
      "Tailwind CSS 4",
      "Vercel",
    ],
    liveUrl: "https://intervo-azure.vercel.app/",
    githubUrl: "https://github.com/Hks100524/INTERVO.git",
    image: "/projects/intervo.png",
    highlights: [
      "Built full-stack AI Interview Preparation Platform using Next.js 16 App Router, React 19, TypeScript, MongoDB Atlas, and Google Gemini AI.",
      "Implemented secure JWT Authentication, Google OAuth 2.0, protected routes, REST APIs, and MongoDB data models.",
      "Integrated AI Assessment engine generating topic- and resume-based interview questions with score breakdowns, feedback, strengths, and recommendations.",
      "Deployed on Vercel with Cloudinary image management, Three.js visual effects, and cloud infrastructure optimizations.",
    ],
  },
  {
    id: "skillup",
    title: "SkillUP",
    subtitle: "Career Preparation Platform",
    category: "EdTech & MERN",
    featured: true,
    description:
      "Full-stack career preparation platform for B.Tech students bringing aptitude practice, technical learning, DevHub project showcasing, AI job recommendations, and progress tracking into one application.",
    techStack: [
      "React 19",
      "Vite",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "Tailwind CSS",
      "OpenAI API",
      "Render",
    ],
    liveUrl: "https://skill-up-frontend.onrender.com/",
    githubUrl: "https://github.com/Hks100524/Skill_UP.git",
    image: "/projects/skillup.png",
    highlights: [
      "Built full-stack Career Preparation Platform using React 19, Vite, Node.js, Express 5, and MongoDB Atlas.",
      "Implemented JWT-based authentication, email OTP verification, password recovery, and protected client routes.",
      "Developed core modules including Aptitude practice by category, curated Learning courses, DevHub project management, Job portal, and AI chat workspace.",
      "Integrated PDF/DOC resume parsing and AI-powered job recommendations with Render backend and frontend deployment.",
    ],
  },
  {
    id: "adfit",
    title: "Ad-Fit Analyzer",
    subtitle: "AI Landing Page Analysis Platform",
    category: "AI & Web Scraping",
    featured: true,
    description:
      "AI-powered conversion auditing tool using Next.js 16, TypeScript, Gemini 2.5 Flash, Axios, and Cheerio to compare advertisement messaging with destination landing pages and fix conversion mismatches.",
    techStack: [
      "Next.js 16",
      "TypeScript 5",
      "Gemini 2.5 Flash",
      "Axios",
      "Cheerio",
      "Tailwind CSS 4",
      "React 19",
      "Vercel",
    ],
    liveUrl: "https://ad-fir-analyzer.vercel.app/",
    githubUrl: "https://github.com/Hks100524/ad-fir-analyzer.git",
    image: "/projects/adfit.png",
    highlights: [
      "Built AI-powered conversion auditing platform comparing advertisement copy with destination landing pages.",
      "Implemented automated landing page fetching with Axios and server-side HTML signal extraction using Cheerio.",
      "Integrated Gemini 2.5 Flash AI to evaluate persona alignment, offer consistency, product framing, proof, objections, and above-the-fold continuity.",
      "Generated structured JSON fit scores (0-100) and prioritized actionable optimization recommendations through a responsive analysis dashboard.",
    ],
  },
  {
    id: "employee-shift",
    title: "Employee Shift & Attendance",
    subtitle: "Management System",
    category: "Enterprise System",
    featured: false,
    description:
      "Full-stack MERN workforce management system with role-based access for Admin, Manager, and Employee to streamline employee records, shift scheduling, check-in/out attendance tracking, and leave management.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "RBAC",
      "Swagger API",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://employee-shift-management-snowy.vercel.app/",
    githubUrl: "https://github.com/Hks100524/employee-shift-management.git",
    image: "/projects/employee-shift.png",
    highlights: [
      "Built full-stack Employee Shift & Attendance Management System using React, Vite, Node.js, Express, and MongoDB.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC) for Admin, Manager, and Employee modules.",
      "Developed Shift Management with conflict-prevention locking mechanisms and Attendance Tracking with automatic working-hours calculation.",
      "Integrated Leave Request approval workflows, Swagger API documentation, and Render backend deployment.",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ducat-india",
    role: "MERN Stack Development Trainee",
    company: "Ducat India, Noida, Sector 16",
    period: "Dec 2025 – Sept 2026",
    location: "Noida, India / Remote",
    type: "Traineeship",
    points: [
      "Completed structured MERN Stack Development training with hands-on experience in MongoDB, Express.js, React.js, Node.js, and JavaScript, strengthening end-to-end full-stack development skills.",
      "Applied practical concepts including REST APIs, CRUD operations, database integration, authentication, responsive UI development, Git/GitHub, debugging, and client-server communication through project-based assignments.",
    ],
  },
  {
    id: "techiguru",
    role: "Full Stack Developer Intern",
    company: "Techiguru",
    period: "Apr 2024 – Jun 2024",
    location: "Remote",
    type: "Internship",
    points: [
      "Gained hands-on experience in MERN stack development, working with React.js, Node.js, Express.js, and MongoDB to strengthen practical full-stack development skills.",
      "Applied key development concepts including REST APIs, database integration, authentication, CRUD operations, responsive UI development, Git/GitHub workflows, debugging, and deployment through project-based tasks in a remote environment.",
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    id: "cert-python",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
    date: "Jul 2026",
  },
  {
    id: "cert-figma",
    title: "Figma UI/UX Design: Web and App Design with Projects",
    issuer: "Udemy",
    date: "Jul 2026",
  },
  {
    id: "cert-ibm-ai",
    title: "PBEL Equivalent to Virtual Internship – Artificial Intelligence",
    issuer: "IBM Developer Skills Network",
    date: "Jul 2025",
  },
  {
    id: "cert-ibm-sql",
    title: "SQL and Relational Databases 101",
    issuer: "IBM Skills Network (Cognitive Class)",
    date: "Feb 2026",
  },
];

export const researchPaperData: ResearchPaper = {
  title: "Skill-Up: An All-in-One Platform for Student Skill Development",
  journal: "International Journal of Sciences and Innovation Engineering (IJSCI)",
  volume: "Volume 3",
  issue: "Issue 4",
  date: "April 2026",
  pages: "Pages 2823–2837",
  abstract:
    "This research paper presents the design, architecture, and implementation of Skill-Up, a comprehensive digital platform designed to bridge the gap between student learning and career readiness. It details the integration of AI-driven assessments, structured aptitude modules, and career resource hubs.",
};
