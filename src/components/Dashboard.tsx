"use client";

import { Activity, Calendar, Code, GraduationCap, Store, UsersRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const statsData = {
  ko: [
    { icon: Calendar, value: "7", label: "Years", description: "개발 경력" },
    { icon: Code, value: "20+", label: "Projects", description: "프로젝트 수행" },
    { icon: GraduationCap, value: "13", label: "Universities", description: "잇츠미·잇츠밀 도입 대학" },
    { icon: UsersRound, value: "11만+", label: "Users", description: "퇴사 시점 전체 사용자 추정*" },
    { icon: Activity, value: "6만+", label: "MAU", description: "퇴사 시점 월간 활성 사용자 추정*" },
    { icon: Store, value: "100+", label: "Stores", description: "잇츠밀 도입 매장*" },
  ],
  en: [
    { icon: Calendar, value: "7", label: "Years", description: "Development career" },
    { icon: Code, value: "20+", label: "Projects", description: "Projects completed" },
    { icon: GraduationCap, value: "13", label: "Universities", description: "ItsMe & ItsMeal adoption" },
    { icon: UsersRound, value: "110K+", label: "Users", description: "Estimated total users at departure*" },
    { icon: Activity, value: "60K+", label: "MAU", description: "Estimated MAU at departure*" },
    { icon: Store, value: "100+", label: "Stores", description: "ItsMeal stores*" },
  ],
};

const currentWorkData = {
  ko: [
    {
      company: "하이퍼노바",
      role: "Product Engineer",
      period: "2026.07 ~ 현재",
      projects: ["헤이링(Heyring) AI", "Flutter 모바일 앱 개발", "서비스 인프라 설계"],
    },
  ],
  en: [
    {
      company: "Hypernova",
      role: "Product Engineer",
      period: "2026.07 ~ Present",
      projects: ["Heyring AI", "Flutter mobile app", "Service infrastructure design"],
    },
  ],
};

const techHighlights = [
  { category: "Mobile", techs: ["Flutter", "Kotlin", "Swift"] },
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript"] },
  { category: "Backend", techs: ["Spring Boot", "FastAPI", "Firebase"] },
  { category: "AI / Infra", techs: ["RAG", "GCP", "Docker"] },
];

const achievementsData = {
  ko: [
    { label: "헤이링 AI", value: "21→6분", description: "모바일 빌드 약 71% 단축" },
    { label: "댓츠원", value: "DX", description: "웹·학생 앱·키오스크 통합" },
    { label: "한국외대", value: "DAU ~80", description: "일 질문 약 300건 · 오픈 2주차" },
    { label: "화이트블록", value: "흑자 전환", description: "외부 투자 없는 제품 성장에 기여" },
  ],
  en: [
    { label: "Heyring AI", value: "21→6 min", description: "Mobile builds about 71% faster" },
    { label: "That's One", value: "DX", description: "Web, student app, and kiosk" },
    { label: "HUFS", value: "DAU ~80", description: "About 300 questions/day · Week 2" },
    { label: "Whiteblock", value: "Profitable", description: "Contributed to bootstrapped growth" },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2.5 p-4 md:p-5 rounded-xl bg-[var(--bg-inset)] border border-[var(--bg-surface)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--bg-surface)]">
                <stat.icon className="w-5 h-5 text-[var(--accent-cyan)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-[-0.01em]">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{stat.label}</span>
              </div>
            </div>
            <span className="text-xs md:text-sm leading-[1.55] text-[var(--text-tertiary)] hidden sm:block">{stat.description}</span>
          </div>
        ))}
      </div>
      <p className="-mt-5 text-right text-[11px] leading-[1.55] text-[var(--text-muted)]">
        * {language === "ko" ? "2025년 여름 10개 대학 실측치를 2026.02의 13개 대학 기준으로 보수 환산" : "Conservative Feb 2026 estimate from measured summer 2025 figures at 10 universities"}
      </p>

      {/* 하단 상세 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {/* 최근 경력 */}
        <div className="flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
            <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)] uppercase">
              {language === "ko" ? "최근 경력" : "Latest Experience"}
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
