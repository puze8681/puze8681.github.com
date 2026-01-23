"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Header
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",

    // Hero
    "hero.badge": "Mobile & Full-Stack Developer",
    "hero.name": "박태준",
    "hero.description1": "8년간 16개 이상의 프로젝트를 수행하며",
    "hero.description2": "모바일과 웹, 서버를 아우르는 풀스택 개발자입니다.",
    "hero.description3": "주로 Flutter와 Kotlin으로 모바일 앱을 개발하고,",
    "hero.description4": "필요에 따라 React 웹이나 서버 작업도 함께 진행합니다.",
    "hero.cta.projects": "프로젝트 보기",
    "hero.cta.contact": "연락하기",

    // Dashboard
    "dashboard.title": "한눈에 보기",
    "dashboard.experience": "경력",
    "dashboard.projects": "프로젝트",
    "dashboard.awards": "수상",
    "dashboard.years": "년차",
    "dashboard.count": "개",
    "dashboard.current": "현재 작업중",
    "dashboard.techHighlights": "기술 하이라이트",
    "dashboard.achievements": "최근 성과",

    // Experience
    "experience.label": "EXPERIENCE",
    "experience.title": "경력",
    "experience.present": "현재",

    // Projects
    "projects.label": "PROJECTS",
    "projects.title": "프로젝트",
    "projects.viewPdf": "PDF 보기",

    // Skills
    "skills.label": "TECH STACK",
    "skills.title": "기술 스택",
    "skills.description": "프로젝트 요구사항에 맞춰 빠르게 학습하고 실무에 적용해온 기술들",
    "skills.awards": "수상 내역",
    "skills.activities": "주요 활동",
    "skills.certifications": "자격증",

    // About
    "about.label": "ABOUT ME",
    "about.title": "소개",
    "about.education": "학력",
    "about.yearsExp": "Years Experience",
    "about.projectsCompleted": "Projects Completed",
    "about.awardsWon": "Awards Won",
    "about.strength1.title": "모바일 개발 중심",
    "about.strength1.desc": "2017년부터 iOS, Android 네이티브 앱 개발을 시작했고, 현재는 주로 Flutter로 크로스 플랫폼 앱을 개발하고 있습니다. 필요한 경우 React 웹이나 Python 서버 작업도 진행합니다.",
    "about.strength2.title": "프로젝트에 맞춰 기술 학습",
    "about.strength2.desc": "프로젝트 요구사항에 따라 Flutter, Kotlin, Swift, React 등 필요한 기술을 학습하며 적용해왔습니다. 새로운 기술이 필요하면 문서와 예제를 보며 빠르게 익히는 편입니다.",
    "about.strength3.title": "혼자서도, 팀에서도",
    "about.strength3.desc": "소규모 프로젝트는 기획부터 배포까지 혼자 진행한 경험이 있고, 잇츠밀/잇츠미처럼 4년간 팀 단위로 개발한 경험도 있습니다. Jira, Figma, Slack 등 협업 툴 사용에 익숙합니다.",
    "about.edu1.name": "한국외국어대학교",
    "about.edu1.major": "컴퓨터 공학부",
    "about.edu1.period": "2020.03 - 현재 재학중",
    "about.edu2.name": "선린인터넷고등학교",
    "about.edu2.major": "소프트웨어 개발 및 프로그래밍",
    "about.edu2.period": "2016.03 - 2019.02",

    // Contact
    "contact.label": "CONTACT",
    "contact.title": "연락하기",
    "contact.description1": "프로젝트 문의나 협업 제안을 환영합니다.",
    "contact.description2": "언제든지 연락 주세요.",

    // Footer
    "footer.tagline1": "모바일과 웹을 아우르는",
    "footer.tagline2": "풀스택 개발자",
    "footer.navigation": "NAVIGATION",
    "footer.connect": "CONNECT",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js & Tailwind CSS",
  },
  en: {
    // Header
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.skills": "skills",
    "nav.contact": "contact",

    // Hero
    "hero.badge": "Mobile & Full-Stack Developer",
    "hero.name": "Taejun Park",
    "hero.description1": "With 8 years of experience and 16+ projects,",
    "hero.description2": "I'm a full-stack developer covering mobile, web, and server.",
    "hero.description3": "I mainly develop mobile apps with Flutter and Kotlin,",
    "hero.description4": "and also work on React web and server projects as needed.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // Dashboard
    "dashboard.title": "At a Glance",
    "dashboard.experience": "Experience",
    "dashboard.projects": "Projects",
    "dashboard.awards": "Awards",
    "dashboard.years": "yrs",
    "dashboard.count": "",
    "dashboard.current": "Currently Working On",
    "dashboard.techHighlights": "Tech Highlights",
    "dashboard.achievements": "Recent Achievements",

    // Experience
    "experience.label": "EXPERIENCE",
    "experience.title": "Experience",
    "experience.present": "Present",

    // Projects
    "projects.label": "PROJECTS",
    "projects.title": "Projects",
    "projects.viewPdf": "View PDF",

    // Skills
    "skills.label": "TECH STACK",
    "skills.title": "Tech Stack",
    "skills.description": "Technologies I've quickly learned and applied to meet project requirements",
    "skills.awards": "Awards",
    "skills.activities": "Activities",
    "skills.certifications": "Certifications",

    // About
    "about.label": "ABOUT ME",
    "about.title": "About",
    "about.education": "Education",
    "about.yearsExp": "Years Experience",
    "about.projectsCompleted": "Projects Completed",
    "about.awardsWon": "Awards Won",
    "about.strength1.title": "Mobile-First Development",
    "about.strength1.desc": "Started iOS and Android native development in 2017, now mainly building cross-platform apps with Flutter. Also work on React web and Python server when needed.",
    "about.strength2.title": "Learning Tech for Projects",
    "about.strength2.desc": "I've learned and applied Flutter, Kotlin, Swift, React based on project needs. When new tech is required, I quickly pick it up through docs and examples.",
    "about.strength3.title": "Solo or Team Player",
    "about.strength3.desc": "I've handled small projects from planning to deployment alone, and also worked in teams for 4 years on projects like ItsMeal/ItsMe. Comfortable with Jira, Figma, Slack.",
    "about.edu1.name": "Hankuk University of Foreign Studies",
    "about.edu1.major": "Computer Science",
    "about.edu1.period": "2020.03 - Present",
    "about.edu2.name": "Sunrin Internet High School",
    "about.edu2.major": "Software Development & Programming",
    "about.edu2.period": "2016.03 - 2019.02",

    // Contact
    "contact.label": "CONTACT",
    "contact.title": "Contact",
    "contact.description1": "I welcome project inquiries and collaboration proposals.",
    "contact.description2": "Feel free to reach out anytime.",

    // Footer
    "footer.tagline1": "Full-Stack Developer",
    "footer.tagline2": "for Mobile & Web",
    "footer.navigation": "NAVIGATION",
    "footer.connect": "CONNECT",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js & Tailwind CSS",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("language") as Language | null;
    if (stored) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("lang", language);
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values for SSR/static generation
    return {
      language: "ko" as const,
      toggleLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
}
