"use client";

import { experienceData, personalData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-32 pb-16 scroll-mt-20"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="section-heading">
          <h2>Experience</h2>
          <div className="section-heading-line" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Education timeline */}
          <div className="flex-shrink-0 w-full md:w-80">
            <h3 className="text-2xl font-bold text-[var(--fg)] mb-6">Education</h3>
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div
                className="absolute left-[7px] top-8 bottom-0 w-[2px]"
                style={{ background: "var(--fg)", opacity: 0.15 }}
              />
              <div
                className="absolute left-[7px] top-0 w-[2px] h-8"
                style={{ background: "var(--fg)", opacity: 0.15 }}
              />

              {personalData.education.map((edu, i) => (
                <div key={i} className="relative pl-9">
                  <div
                    className="absolute left-0 top-1.5"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "9999px",
                      background: i === 0 ? "transparent" : "var(--fg)",
                      border: i === 0 ? "3px solid var(--fg)" : "none",
                      opacity: i === 0 ? 0.35 : 1,
                    }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-[var(--fg)] uppercase leading-tight">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-medium text-[var(--fg-muted)] mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-xs italic text-[var(--fg-subtle)] whitespace-nowrap flex-shrink-0 mt-1">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume button */}
            <div className="mt-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Work experience */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-[var(--fg)] mb-6">Work</h3>
            {experienceData.length > 0 ? (
              experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--fg)]">{exp.role}</h4>
                      <p className="text-sm font-semibold text-[var(--fg-muted)]">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="tag-pill">{exp.type}</span>
                      <p className="text-xs text-[var(--fg-subtle)] mt-1">{exp.period} · {exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[var(--fg-muted)] leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--fg)", opacity: 0.4 }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="rounded-2xl p-8 text-center" style={{ background: "var(--card-bg)" }}>
                <p className="text-[var(--fg-muted)]">Work experience coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
