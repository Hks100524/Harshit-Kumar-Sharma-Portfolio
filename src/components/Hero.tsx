"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/data/portfolioData";

const titles = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Web App Specialist",
  "Next.js & MERN Expert",
];

// High-end Stripe/Vercel Style Ambient Spotlight & Constellation Grid Background
function AmbientSpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create 3D constellation stars
    const starCount = 65;
    const stars: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      maxAlpha: number;
    }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        maxAlpha: Math.random() * 0.6 + 0.3,
      });
    }

    const render = () => {
      // Smooth interpolation for mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const primaryColor = isDark ? "255, 255, 255" : "20, 20, 20";
      const glowColor = isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.05)";

      // 1. Ambient Radial Cursor Spotlight Glow
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.45
      );
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Perspective Tech Grid Lines
      const gridSize = 60;
      ctx.strokeStyle = `rgba(${primaryColor}, ${isDark ? 0.03 : 0.04})`;
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Render Constellation Stars & Links
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Draw Star node
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${s.alpha})`;
        ctx.fill();
      });

      // 4. Draw Connecting Lines between nearby stars & cursor
      for (let i = 0; i < stars.length; i++) {
        // Link to mouse cursor
        const distMouse = Math.hypot(stars[i].x - mouse.x, stars[i].y - mouse.y);
        if (distMouse < 180) {
          const alphaMouse = (1 - distMouse / 180) * 0.25;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${primaryColor}, ${alphaMouse})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Link to other stars
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Vercel/Stripe Ambient Cursor Spotlight & Tech Grid Constellation Background */}
      <AmbientSpotlightBackground />

      {/* Left social icons */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-4 z-20">
        {[
          { icon: <LinkedinIcon />, href: personalData.linkedin, label: "LinkedIn" },
          { icon: <GithubIcon />, href: personalData.github, label: "GitHub" },
          { icon: <MailIcon />, href: `mailto:${personalData.email}`, label: "Email" },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-[var(--fg)] hover:opacity-50 transition-opacity duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Center Hero Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        role="main"
      >
        {/* Name in SINGLE LINE */}
        <div className="relative mb-6 w-full max-w-7xl mx-auto">
          {/* SVG Outline Ghost Text in single line */}
          <svg
            className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-[8rem] w-full hidden lg:block opacity-60"
            viewBox="0 0 1200 150"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="40%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-black fill-transparent"
              stroke="url(#strokeGrad)"
              strokeWidth="2"
              style={{ fontSize: "110px", fontFamily: "inherit" }}
            >
              Harshit Kumar Sharma
            </text>
          </svg>

          {/* Single-Line Giant Heading */}
          <h1 className="font-extrabold text-center text-[var(--fg)] tracking-tight whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Harshit Kumar Sharma
          </h1>
        </div>

        {/* Animated Motion Title & Availability */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 h-12">
          {/* Motion Animated Title text */}
          <div className="relative h-8 overflow-hidden min-w-[260px] sm:min-w-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute text-base sm:text-xl font-bold text-[var(--fg-muted)] uppercase tracking-wider"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="hidden sm:inline text-[var(--fg-subtle)]">·</span>

          {/* Availability Badge */}
          <span className="available-badge">
            <span className="ping-dot w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
            Available for Work
          </span>
        </div>
      </div>

      {/* Scroll Down Button */}
      <a
        href="#skills"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6 text-[var(--fg)] opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
