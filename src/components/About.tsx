"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { educationData, strengthsData, statsData, aboutSectionTexts } from "@/data";

export default function About() {
  const { language } = useLanguage();
  const stats = statsData[language];
  const strengths = strengthsData[language];
  const education = educationData[language];
  const texts = aboutSectionTexts[language];

  return (
    <section id="about" className="flex flex-col gap-8 md:gap-12 section-padding py-12 md:py-20 w-full">
      <div className="flex flex-col gap-3 md:gap-4">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)]">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          {texts.title}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
        <div className="flex flex-col gap-6 md:gap-8 flex-1">
          {strengths.map((strength) => (
            <div key={strength.title} className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                {strength.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}

          <div className="flex flex-wrap gap-6 md:gap-12 mt-2 md:mt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 md:gap-2">
                <span className="font-mono text-3xl md:text-5xl font-bold text-[var(--accent-cyan)]">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-[var(--text-tertiary)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 p-4 sm:p-6 md:p-8 rounded-xl bg-[var(--bg-surface)] w-full lg:w-[400px] shrink-0">
          <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">{texts.education}</h3>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div key={edu.name}>
                <div className="flex flex-col gap-1">
                  <span className="text-base md:text-lg font-semibold text-[var(--text-primary)]">{edu.name}</span>
                  <span className="text-xs md:text-sm text-[var(--text-secondary)]">{edu.major}</span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">{edu.period}</span>
                </div>
                {idx < education.length - 1 && <div className="h-px bg-[var(--bg-inset)] mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
