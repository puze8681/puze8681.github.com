"use client";

import { Smartphone, Code, Server, GitBranch, Wrench, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillsData, skillsSectionTexts, awardsData, certificationsData, activitiesData } from "@/data";

// 아이콘 매핑
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Code,
  Server,
  Wrench,
  GitBranch,
  Award,
};

export default function Skills() {
  const { language } = useLanguage();
  const skills = skillsData[language];
  const awards = awardsData[language];
  const certifications = certificationsData[language];
  const activities = activitiesData[language];
  const texts = skillsSectionTexts[language];

  return (
    <section id="skills" className="flex flex-col items-center gap-8 md:gap-12 section-padding py-12 md:py-20 w-full bg-[var(--bg-surface)]">
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)]">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          {texts.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)]">
          {texts.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl">
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <div
              key={skill.title}
              className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-[var(--bg-inset)]"
            >
              {IconComponent && <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent-cyan)]" />}
              <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                {skill.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                {skill.description}
              </p>
              <div className="flex gap-1.5 md:gap-2 flex-wrap">
                {skill.details.map((detail) => (
                  <span
                    key={detail}
                    className="px-2 py-1 rounded bg-[var(--bg-surface)] text-xs text-[var(--text-tertiary)]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-6xl mt-4 md:mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          {texts.awards}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col gap-1.5 md:gap-2 p-3 md:p-5 rounded-xl bg-[var(--bg-inset)]"
            >
              <span className="text-xs md:text-sm font-semibold text-[var(--accent-cyan)]">
                {award.award}
              </span>
              <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] leading-snug">
                {award.title}
              </h4>
              <p className="text-xs md:text-sm text-[var(--text-muted)]">
                {award.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mt-2 md:mt-4">
        <div className="flex flex-col gap-4 md:gap-6 flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.activities}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex flex-col gap-1.5 md:gap-2 p-4 md:p-5 rounded-xl bg-[var(--bg-inset)]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
                    {activity.title}
                  </h4>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {activity.period}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[300px] shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.certifications}
          </h3>
          <div className="flex flex-col gap-2 md:gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex justify-between items-center p-3 md:p-4 rounded-lg bg-[var(--bg-inset)]"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs md:text-sm font-semibold text-[var(--text-primary)]">
                    {cert.name}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--text-tertiary)]">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
