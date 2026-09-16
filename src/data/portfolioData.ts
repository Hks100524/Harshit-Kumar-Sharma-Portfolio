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
      "Full-stack AI Interview Preparation Platform using Next.js 15, TypeScript, MongoDB Atlas, and Gemini AI that helps users practice interviews, receive AI-generated feedback, and track performance.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB Atlas",
      "Gemini AI",
      "JWT",
      "Google OAuth",
      "Cloudinary",
      "Vercel",
    ],
    liveUrl: "https://intervo-demo.vercel.app",
    githubUrl: "https://github.com/Hks100524/intervo",
    highlights: [
      "Built full-stack AI Interview Preparation Platform using Next.js 15, TypeScript, MongoDB Atlas, and Gemini AI to practice interviews & track performance.",
      "Implemented secure JWT Authentication, Google OAuth, protected routes, REST APIs, and MongoDB data models.",
      "Integrated AI Readiness Test module generating company-specific assessments from uploaded resumes or custom topics using Gemini AI.",
      "Deployed on Vercel with Cloudinary image management and cloud infrastructure optimizations.",
    ],
  },
  {
    id: "skillup",
    title: "SkillUP",
    subtitle: "Career Preparation Platform",
    category: "EdTech & MERN",
    featured: true,
    description:
      "Full-stack Career Preparation Platform using the MERN stack that helps users practice aptitude, access technical learning resources, and prepare for job opportunities.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT Auth",
      "MERN",
    ],
    liveUrl: "https://skillup-demo.vercel.app",
    githubUrl: "https://github.com/Hks100524/skillup",
    highlights: [
      "Built full-stack Career Preparation Platform using the MERN stack for aptitude practice, technical learning, and career growth.",
      "Implemented secure JWT Authentication, role-based authorization, protected routes, and MongoDB data models.",
      "Developed core interactive modules including Aptitude, Learning, DevHub, Job Portal, Dashboard, and AI-powered Ask feature.",
      "Designed responsive UI using React.js and Tailwind CSS with CRUD workflows and optimized user experience.",
    ],
  },
  {
    id: "adfit",
    title: "Ad-Fit Analyzer",
    subtitle: "AI Landing Page Analysis Platform",
    category: "AI & Web Scraping",
    featured: true,
    description:
      "AI-powered platform using Next.js, TypeScript, Gemini AI, Axios, and Cheerio to analyze alignment between ad copy and landing pages to fix conversion mismatches.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemini AI",
      "Axios",
      "Cheerio",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://adfit-analyzer.vercel.app",
    githubUrl: "https://github.com/Hks100524/adfit-analyzer",
    highlights: [
      "Built AI-powered platform to analyze alignment between advertisement copy and landing pages, identifying conversion-impacting mismatches.",
      "Implemented automated landing page fetching and HTML parsing using Axios and Cheerio for structured content extraction.",
      "Integrated Gemini AI to evaluate persona alignment, offer consistency, product framing, social proof, and above-the-fold continuity.",
      "Generated structured fit scores and optimization recommendations through responsive Next.js & Tailwind CSS dashboard.",
    ],
  },
  {
    id: "employee-shift",
    title: "Employee Shift & Attendance",
    subtitle: "Management System",
    category: "Enterprise System",
    featured: false,
    description:
      "Full-stack Employee Shift & Attendance Management System using the MERN stack to streamline employee records, shift scheduling, attendance tracking, and leave management.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "RBAC",
      "REST API",
    ],
    liveUrl: "https://shift-attendance.vercel.app",
    githubUrl: "https://github.com/Hks100524/employee-shift-system",
    highlights: [
      "Built full-stack Employee Shift & Attendance System using MERN stack to streamline workforce operations.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC) for Admin, Manager, and Employee modules.",
      "Developed core modules for employee management, attendance, shifts, leave requests, and dashboard statistics.",
      "Designed responsive management interfaces using React.js and MongoDB CRUD integrations.",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ducat-india",
    role: "MERN Stack Development Trainee",
    company: "Ducat India, Noida, Sector 16",
    period: "Sep 2025 – Present",
    location: "Noida, India (Remote)",
    type: "Traineeship",
    points: [
      "Undergoing structured MERN Stack Development training with hands-on learning in MongoDB, Express.js, React.js, and Node.js.",
      "Developing practical understanding of full-stack web development, including responsive frontend development, backend APIs, database integration, and client-server communication.",
      "Strengthening skills in JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and CRUD operations through project-based development and practical assignments.",
      "Applying software development practices including Git/GitHub, API testing, debugging, authentication, and responsive UI development while building web applications.",
    ],
  },
  {
    id: "techiguru",
    role: "Full Stack Developer Intern",
    company: "Techiguru",
    period: "April 2024 – June 2024",
    location: "Remote",
    type: "Internship",
    points: [
      "Gained hands-on experience with the MERN stack by working with React.js, Node.js, Express.js, and MongoDB in a practical development environment.",
      "Strengthened full-stack development skills through responsive frontend development, REST APIs, database integration, authentication, CRUD operations, and client-server communication.",
      "Collaborated in a remote development environment while applying Git/GitHub workflows, debugging, API integration, code organization, and deployment concepts through project-based development tasks.",
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
