"use client";

import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-32 pb-20 scroll-mt-20 overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Heading — Exactly matches all other sections on the site */}
        <div className="section-heading">
          <h2>Experience</h2>
          <div className="section-heading-line" />
        </div>

        {/* Clean Timeline Architecture */}
        <div className="relative pl-4 sm:pl-8 lg:pl-10 space-y-10">
          {/* Vertical Stem Line */}
          <div
            className="absolute left-[7px] sm:left-[15px] lg:left-[19px] top-4 bottom-4 w-[2px]"
            style={{
              background: "linear-gradient(to bottom, var(--fg) 0%, var(--border) 100%)",
              opacity: 0.2,
            }}
          />

          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Point */}
              <div
                className="absolute -left-[14px] sm:-left-[22px] lg:-left-[26px] top-7 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10"
                style={{
                  background: "var(--bg-section)",
                  border: "2px solid var(--fg)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: idx === 0 ? "var(--fg)" : "var(--fg-subtle)",
                  }}
                />
              </div>

              {/* Main Content Box */}
              <div
                className="rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Header Row: Company, Role, Date & Location */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--border)]">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
                        {exp.company}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--fg-subtle)",
                          background: "var(--pill-bg)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--fg)] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Period & Location Badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-bold border shrink-0 self-start md:self-center"
                    style={{
                      background: "var(--pill-bg)",
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{exp.period}</span>
                    <span className="opacity-30">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Key Accomplishments Bullets */}
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3.5 text-sm text-[var(--fg-muted)] leading-relaxed">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--fg)", opacity: 0.5 }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Resume CTA Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          <div>
            <h4 className="text-base font-bold text-[var(--fg)] mb-1">
              Want to see my full professional & academic background?
            </h4>
            <p className="text-xs text-[var(--fg-muted)]">
              Download or view my complete resume detailing skills, education, and projects.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold shrink-0 transition-transform duration-300 hover:scale-105"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
            }}
          >
            <span>View Full Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
