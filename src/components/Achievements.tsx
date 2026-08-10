"use client";

import { certificationsData, researchPaperData } from "@/data/portfolioData";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="pt-32 pb-16 scroll-mt-20"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="section-heading">
          <h2>Achievements</h2>
          <div className="section-heading-line" />
        </div>

        {/* Research Paper */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[var(--fg)] mb-6">Research Paper</h3>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[var(--fg)] leading-snug mb-2">
                  {researchPaperData.title}
                </h4>
                <p className="text-sm font-semibold text-[var(--fg-muted)]">
                  {researchPaperData.journal}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="tag-pill">{researchPaperData.date}</span>
                <p className="text-xs text-[var(--fg-subtle)] mt-1">
                  {researchPaperData.volume} · {researchPaperData.issue}
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">
              {researchPaperData.abstract}
            </p>
            <p className="text-xs text-[var(--fg-subtle)]">{researchPaperData.pages}</p>
            {researchPaperData.link && (
              <a
                href={researchPaperData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 btn-primary text-sm"
              >
                View Paper
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--fg)] mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                style={{ background: "var(--card-bg)" }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--fg)]"
                  style={{ background: "var(--tag-bg)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[var(--fg)] leading-tight mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[var(--fg-muted)]">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-[var(--fg-subtle)]">{cert.date}</span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
