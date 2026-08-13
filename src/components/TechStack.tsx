"use client";

import { techCategories } from "@/data/portfolioData";

const marqueeItems = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟩" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Express.js", icon: "🚀" },
  { name: "Gemini AI", icon: "✨" },
  { name: "Git & GitHub", icon: "📦" },
  { name: "REST APIs", icon: "🔌" },
  { name: "MySQL", icon: "🐬" },
  { name: "JWT Auth", icon: "🔑" },
  { name: "Figma", icon: "📐" },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="pt-32 pb-20 scroll-mt-20 overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Section Heading */}
        <div className="section-heading">
          <h2>Skills</h2>
          <div className="section-heading-line" />
        </div>

        {/* MY APPROACH Card */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-10 border"
          style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--fg-subtle)] block mb-4">
            MY APPROACH
          </span>
          <p className="text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-4xl mb-6">
            My core stack includes{" "}
            <span className="font-bold text-[var(--fg)]">Next.js, TypeScript, React</span>, and
            modern backend technologies. I focus on writing clean code, designing efficient systems,
            and delivering reliable user experiences with{" "}
            <span className="font-bold text-[var(--fg)]">production-level quality</span>.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["PERFORMANCE", "MAINTAINABILITY", "SCALABILITY"].map((pill) => (
              <span
                key={pill}
                className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest uppercase border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--fg-subtle)",
                  background: "var(--pill-bg)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid — Clean Minimal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {techCategories.map((cat) => (
            <div
              key={cat.name}
              className="skill-card group relative rounded-2xl border overflow-hidden"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              {/* Top thin line that brightens on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                style={{ background: "var(--fg)" }}
              />

              <div className="p-6">
                {/* Title */}
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--fg)" }}
                >
                  {cat.name}
                </h3>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all duration-200"
                      style={{
                        background: "var(--pill-bg)",
                        borderColor: "var(--border)",
                        color: "var(--fg-muted)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="mt-6 relative">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-center text-[var(--fg-subtle)] mb-5">
            TECHNOLOGIES &amp; TOOLS
          </p>

          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--bg-section), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--bg-section), transparent)" }}
          />

          <div className="overflow-hidden w-full flex">
            <div className="animate-marquee gap-4 pr-4">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-bold whitespace-nowrap transition-all duration-200 hover:scale-105"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
