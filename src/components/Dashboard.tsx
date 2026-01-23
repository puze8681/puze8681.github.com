"use client";

import { Briefcase, Code, Trophy, GitCommit, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const statsData = {
  ko: [
    { icon: Calendar, value: "8+", label: "Years", description: "개발 경력 (2017~)" },
    { icon: Briefcase, value: "4", label: "Companies", description: "재직 경험" },
    { icon: Code, value: "16+", label: "Projects", description: "프로젝트 수행" },
    { icon: GitCommit, value: "4,500+", label: "Commits", description: "주요 프로젝트 기여" },
    { icon: Trophy, value: "8", label: "Awards", description: "수상 내역" },
  ],
  en: [
    { icon: Calendar, value: "8+", label: "Years", description: "Dev career (2017~)" },
    { icon: Briefcase, value: "4", label: "Companies", description: "Work experience" },
    { icon: Code, value: "16+", label: "Projects", description: "Projects completed" },
    { icon: GitCommit, value: "4,500+", label: "Commits", description: "Major contributions" },
    { icon: Trophy, value: "8", label: "Awards", description: "Awards won" },
  ],
};

const currentWorkData = {
  ko: [
    {
      company: "화이트블록",
      role: "Mobile Developer",
      period: "2021.12 ~ 현재",
      projects: ["잇츠밀 (POS/KIOSK)", "잇츠미 2.0 (소비 플랫폼)", "윤잇/KLPGA/치지직 외 다수"],
    },
  ],
  en: [
    {
      company: "Whiteblock",
      role: "Mobile Developer",
      period: "2021.12 ~ Present",
      projects: ["ItsMeal (POS/KIOSK)", "ItsMe 2.0 (Consumer Platform)", "Yooneat/KLPGA/Chzzk & more"],
    },
  ],
};

const techHighlights = [
  { category: "Mobile", techs: ["Flutter", "Kotlin", "Swift"] },
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript"] },
  { category: "Backend", techs: ["Flask", "Django", "Firebase"] },
  { category: "DevOps", techs: ["GitHub Actions", "Fastlane", "Sentry"] },
];

const achievementsData = {
  ko: [
    { label: "잇츠밀", value: "2,656 commits", description: "POS/키오스크 앱 개발" },
    { label: "잇츠미", value: "1,317 commits", description: "크로스 플랫폼 앱 개발" },
    { label: "베리어프리", value: "NIA 검증", description: "접근성 키오스크 단독 개발" },
    { label: "레인타운쿠폰", value: "1인 개발", description: "앱 + 관리자 웹 개발" },
  ],
  en: [
    { label: "ItsMeal", value: "2,656 commits", description: "POS/Kiosk app development" },
    { label: "ItsMe", value: "1,317 commits", description: "Cross-platform app" },
    { label: "Barrier-Free", value: "NIA Certified", description: "Accessible kiosk (solo dev)" },
    { label: "RaintownCoupon", value: "Solo dev", description: "App + Admin web" },
  ],
};

const quickLinksData = {
  ko: [
    { label: "경력", href: "#experience" },
    { label: "프로젝트", href: "#projects" },
    { label: "기술 스택", href: "#skills" },
    { label: "소개", href: "#about" },
    { label: "연락처", href: "#contact" },
  ],
  en: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Dashboard() {
  const { language } = useLanguage();
  const stats = statsData[language];
  const currentWork = currentWorkData[language];
  const keyAchievements = achievementsData[language];
  const quickLinks = quickLinksData[language];

  return (
    <section className="flex flex-col gap-8 md:gap-10 section-padding py-10 md:py-14 w-full bg-[var(--bg-surface)]">
      {/* 상단 통계 카드 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-3 p-5 rounded-xl bg-[var(--bg-inset)] border border-[var(--bg-surface)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--bg-surface)]">
                <stat.icon className="w-5 h-5 text-[var(--accent-cyan)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[var(--text-primary)]">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
              </div>
            </div>
            <span className="text-sm text-[var(--text-tertiary)] hidden sm:block">{stat.description}</span>
          </div>
        ))}
      </div>

      {/* 하단 상세 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {/* 현재 근무 */}
        <div className="flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)] uppercase">
              Currently Working
            </span>
          </div>
          {currentWork.map((work) => (
            <div key={work.company} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <span className="text-lg font-bold text-[var(--text-primary)]">
                  {work.company}
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {work.period}
                </span>
              </div>
              <span className="text-sm text-[var(--accent-cyan)]">{work.role}</span>
              <div className="flex flex-col gap-1.5 mt-1">
                {work.projects.map((project) => (
                  <span key={project} className="text-sm text-[var(--text-secondary)]">
                    • {project}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 기술 스택 하이라이트 */}
        <div className="flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)]">
          <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)] uppercase">
            Tech Stack
          </span>
          <div className="flex flex-col gap-3">
            {techHighlights.map((item) => (
              <div key={item.category} className="flex items-center gap-3">
                <span className="w-16 text-sm font-semibold text-[var(--text-primary)]">
                  {item.category}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-[var(--bg-surface)] font-mono text-xs text-[var(--accent-cyan)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 주요 성과 */}
        <div className="flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)] md:col-span-2 lg:col-span-1">
          <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)] uppercase">
            Key Achievements
          </span>
          <div className="grid grid-cols-2 gap-3">
            {keyAchievements.map((achievement) => (
              <div
                key={achievement.label}
                className="flex flex-col gap-1.5 p-3 rounded-lg bg-[var(--bg-surface)]"
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {achievement.label}
                  </span>
                  <span className="font-mono text-xs text-[var(--accent-cyan)]">
                    {achievement.value}
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  {achievement.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 빠른 네비게이션 - 모바일에서는 숨김 */}
      <div className="hidden md:flex items-center justify-center gap-4 pt-2">
        <span className="text-sm text-[var(--text-muted)]">
          {language === "ko" ? "바로가기:" : "Quick links:"}
        </span>
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-lg bg-[var(--bg-inset)] text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
