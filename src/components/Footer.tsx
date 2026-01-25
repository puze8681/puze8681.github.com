"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const navLinksData = {
  ko: [
    { label: "경력", href: "#experience" },
    { label: "프로젝트", href: "#projects" },
    { label: "기술 스택", href: "#skills" },
    { label: "연락처", href: "#contact" },
  ],
  en: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

const connectLinks = [
  { label: "GitHub", href: "https://github.com/puze8681" },
  { label: "RocketPunch", href: "https://www.rocketpunch.com/@puze8681" },
  { label: "Email", href: "mailto:puze8681@gmail.com" },
];

const sectionTexts = {
  ko: {
    tagline1: "모바일과 웹을 아우르는",
    tagline2: "풀스택 개발자",
    navigation: "NAVIGATION",
    connect: "CONNECT",
    rights: "All rights reserved.",
    built: "Built with Next.js & Tailwind CSS",
  },
  en: {
    tagline1: "Full-Stack Developer",
    tagline2: "for Mobile & Web",
    navigation: "NAVIGATION",
    connect: "CONNECT",
    rights: "All rights reserved.",
    built: "Built with Next.js & Tailwind CSS",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navLinks = navLinksData[language];
  const texts = sectionTexts[language];
  const name = language === "ko" ? "박태준" : "Taejun Park";

  return (
    <footer className="flex flex-col gap-8 md:gap-12 section-padding py-10 md:py-16 w-full bg-[var(--bg-inset)]">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="font-mono text-lg md:text-xl font-bold text-[var(--accent-cyan)]">
            &gt; taejun_
          </span>
          <p className="text-xs md:text-sm text-[var(--text-tertiary)] leading-relaxed">
            {texts.tagline1}<br />
            {texts.tagline2}
          </p>
        </div>
        <div className="flex gap-12 md:gap-16">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)]">
              {texts.navigation}
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs md:text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)]">
              {texts.connect}
            </span>
            {connectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs md:text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 pt-4 md:pt-6">
        <span className="font-mono text-xs text-[var(--text-muted)]">
          &copy; {currentYear} {name}. {texts.rights}
        </span>
        <span className="font-mono text-xs text-[var(--text-muted)]">
          {texts.built}
        </span>
      </div>
    </footer>
  );
}
