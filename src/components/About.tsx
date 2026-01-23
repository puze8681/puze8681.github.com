"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const statsData = {
  ko: [
    { value: "8+", label: "Years Experience" },
    { value: "16+", label: "Projects Completed" },
    { value: "8", label: "Awards Won" },
  ],
  en: [
    { value: "8+", label: "Years Experience" },
    { value: "16+", label: "Projects Completed" },
    { value: "8", label: "Awards Won" },
  ],
};

const strengthsData = {
  ko: [
    {
      title: "모바일 개발 중심",
      description: "2017년부터 iOS, Android 네이티브 앱 개발을 시작했고, 현재는 주로 Flutter로 크로스 플랫폼 앱을 개발하고 있습니다. 필요한 경우 React 웹이나 Python 서버 작업도 진행합니다.",
    },
    {
      title: "프로젝트에 맞춰 기술 학습",
      description: "프로젝트 요구사항에 따라 Flutter, Kotlin, Swift, React 등 필요한 기술을 학습하며 적용해왔습니다. 새로운 기술이 필요하면 문서와 예제를 보며 빠르게 익히는 편입니다.",
    },
    {
      title: "혼자서도, 팀에서도",
      description: "소규모 프로젝트는 기획부터 배포까지 혼자 진행한 경험이 있고, 잇츠밀/잇츠미처럼 4년간 팀 단위로 개발한 경험도 있습니다. Jira, Figma, Slack 등 협업 툴 사용에 익숙합니다.",
    },
  ],
  en: [
    {
      title: "Mobile-First Development",
      description: "Started iOS and Android native development in 2017, now mainly building cross-platform apps with Flutter. Also work on React web and Python server when needed.",
    },
    {
      title: "Learning Tech for Projects",
      description: "I've learned and applied Flutter, Kotlin, Swift, React based on project needs. When new tech is required, I quickly pick it up through docs and examples.",
    },
    {
      title: "Solo or Team Player",
      description: "I've handled small projects from planning to deployment alone, and also worked in teams for 4 years on projects like ItsMeal/ItsMe. Comfortable with Jira, Figma, Slack.",
    },
  ],
};

const educationData = {
  ko: [
    {
      name: "한국외국어대학교",
      major: "컴퓨터 공학부",
      period: "2020.03 - 현재 재학중",
    },
    {
      name: "선린인터넷고등학교",
      major: "소프트웨어 개발 및 프로그래밍",
      period: "2016.03 - 2019.02",
    },
  ],
  en: [
    {
      name: "Hankuk University of Foreign Studies",
      major: "Computer Science",
      period: "2020.03 - Present",
    },
    {
      name: "Sunrin Internet High School",
      major: "Software Development & Programming",
      period: "2016.03 - 2019.02",
    },
  ],
};

const sectionTexts = {
  ko: {
    label: "ABOUT ME",
    title: "소개",
    education: "학력",
  },
  en: {
    label: "ABOUT ME",
    title: "About",
    education: "Education",
  },
};

export default function About() {
  const { language } = useLanguage();
  const stats = statsData[language];
  const strengths = strengthsData[language];
  const education = educationData[language];
  const texts = sectionTexts[language];

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
