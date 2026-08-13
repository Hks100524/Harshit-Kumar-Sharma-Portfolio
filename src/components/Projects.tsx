"use client";

import { projectsData } from "@/data/portfolioData";

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

// Gradient placeholder images for project cards
const gradients = [
  "from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700",
  "from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700",
  "from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700",
  "from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-32 pb-16 scroll-mt-20"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="section-heading">
          <h2>Projects</h2>
          <div className="section-heading-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              style={{ background: "var(--card-bg)" }}
              onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
            >
              {/* Image area — gradient placeholder */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}
                >
                  {/* Tech labels */}
                  <div className="flex flex-wrap gap-2 p-6 justify-center">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "var(--card-bg)", color: "var(--fg-muted)", opacity: 0.9 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                  <span className="text-white text-lg font-bold flex items-center gap-2">
                    View Project <ExternalLinkIcon />
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--fg)] mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-[var(--fg-muted)] mb-3">{project.subtitle}</p>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="tag-pill">{project.category}</span>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                      >
                        <GithubIcon />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
                      >
                        <ExternalLinkIcon />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
