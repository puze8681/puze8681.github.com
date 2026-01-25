"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { experiencesData, experienceSectionTexts } from "@/data";

export default function Experience() {
  const { language } = useLanguage();
  const experiences = experiencesData[language];
  const texts = experienceSectionTexts[language];

  return (
    <section id="experience" className="flex flex-col gap-10 md:gap-14 section-padding py-16 md:py-24 w-full">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)] uppercase">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          {texts.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {texts.description}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex flex-col gap-5 md:gap-6 p-5 sm:p-6 md:p-8 rounded-xl bg-[var(--bg-surface)]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                  {exp.company}
                </h3>
                <p className="text-sm md:text-base text-[var(--accent-cyan)] font-mono mt-1">
                  {exp.role}
                </p>
              </div>
              <span className="font-mono text-sm text-[var(--text-tertiary)]">
                {exp.period}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {exp.projects.map((project) => (
                <div
                  key={project.name}
                  className="flex flex-col gap-3 p-4 md:p-5 rounded-lg bg-[var(--bg-inset)]"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h4 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                      {project.name}
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 text-sm text-[var(--text-tertiary)]">
                    {project.tasks.map((task, idx) => (
                      <li key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--accent-cyan)]">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
