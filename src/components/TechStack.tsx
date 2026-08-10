"use client";

import { techCategories } from "@/data/portfolioData";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="pt-32 pb-16 scroll-mt-20"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="section-heading">
          <h2>Skills</h2>
          <div className="section-heading-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{ background: "var(--card-bg)" }}
            >
              <h3 className="text-lg font-bold text-[var(--fg)] mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
