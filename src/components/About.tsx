"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data/portfolioData";

function IDCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      card.style.transform = `perspective(1000px) rotateY(${dx * 12}deg) rotateX(${-dy * 10}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={cardRef}
        className="relative w-full max-w-[340px] sm:max-w-[360px] transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ambient Glow behind ID card */}
        <div
          className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 pointer-events-none"
          style={{ background: "var(--fg)" }}
        />

        {/* Card Main Container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border transition-colors"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          {/* Top Bar Header Accent */}
          <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />

          <div className="p-6">
            {/* ID Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--fg-subtle)]">
                DEVELOPER ID CARD
              </span>
              <span className="text-[9px] font-mono text-[var(--fg-subtle)] px-2 py-0.5 rounded bg-[var(--tag-bg)]">
                #HKS-2026
              </span>
            </div>

            {/* Profile Photo in 3D Frame */}
            <div className="relative w-full h-72 rounded-xl overflow-hidden mb-5 border" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/profile.jpg"
                alt="Harshit Kumar Sharma"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full">
                <p className="text-[10px] text-white font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Developer
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="mb-4">
              <h4 className="text-xl font-bold text-[var(--fg)] leading-tight">
                Harshit Kumar Sharma
              </h4>
              <p className="text-xs font-semibold text-[var(--fg-muted)] mt-0.5">
                Full Stack Developer & AI Specialist
              </p>
            </div>

            {/* Quick Details Table */}
            <div className="space-y-2 pt-3 border-t border-[var(--border)] text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[var(--fg-subtle)]">Institution</span>
                <span className="font-medium text-[var(--fg)]">MIT, Moradabad (AKTU)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--fg-subtle)]">Degree</span>
                <span className="font-medium text-[var(--fg)]">B.Tech CSE (2023 - 2026)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--fg-subtle)]">Primary Stack</span>
                <span className="font-medium text-[var(--fg)]">Next.js · React · Node · MongoDB</span>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                  Open for Hiring
                </span>
              </div>
              {/* Barcode graphic effect */}
              <div className="flex gap-0.5 opacity-30">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 h-4 bg-[var(--fg)]"
                    style={{ opacity: i % 2 === 0 ? 1 : 0.4 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="pt-32 pb-16 scroll-mt-20"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <div className="section-heading">
          <h2>About</h2>
          <div className="section-heading-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive 3D ID Card with Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <IDCard3D />
          </div>

          {/* Right Column: Genuine Biography & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-2">
                Harshit Kumar Sharma
              </h3>
              <p className="text-lg font-semibold text-[var(--fg-muted)]">
                {personalData.role}
              </p>
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="tag-pill flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {personalData.location}
              </span>
              <span className="tag-pill">Full Stack Web Development</span>
              <span className="tag-pill">AI Integration & APIs</span>
              <span className="tag-pill">MERN & Next.js Architecture</span>
              <span className="tag-pill">UI/UX Design</span>
            </div>

            {/* Resume Bio */}
            <p className="text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed">
              {personalData.summary}
            </p>

            {/* Education Highlights */}
            <div className="pt-4 border-t border-[var(--border)]">
              <h4 className="text-lg font-bold text-[var(--fg)] mb-3">Academic Background</h4>
              <div className="space-y-3">
                {personalData.education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-bold text-[var(--fg)]">{edu.institution}</p>
                      <p className="text-[var(--fg-muted)]">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-[var(--fg-subtle)] italic whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Full Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
