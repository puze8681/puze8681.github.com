"use client";

import { Github, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/puze8681", label: "GitHub" },
];

const sectionTexts = {
  ko: {
    label: "CONTACT",
    title: "연락하기",
    description1: "프로젝트 문의나 협업 제안을 환영합니다.",
    description2: "언제든지 연락 주세요.",
  },
  en: {
    label: "CONTACT",
    title: "Contact",
    description1: "I welcome project inquiries and collaboration proposals.",
    description2: "Feel free to reach out anytime.",
  },
};

export default function Contact() {
  const { t, language } = useLanguage();
  const texts = sectionTexts[language];

  return (
    <section id="contact" className="flex flex-col items-center gap-8 md:gap-12 section-padding py-12 md:py-20 w-full bg-[var(--bg-inset)]">
      <span className="text-xs font-semibold tracking-widest text-[var(--text-tertiary)]">
        {texts.label}
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] text-center">
        {texts.title}
      </h2>
      <p className="text-base md:text-lg text-[var(--text-tertiary)] text-center leading-relaxed max-w-xl">
        {texts.description1}<br />
        {texts.description2}
      </p>

      <div className="flex flex-col gap-3 md:gap-4 items-center w-full max-w-md">
        <a
          href="mailto:puze8681@gmail.com"
          className="flex items-center justify-center gap-2 md:gap-3 w-full px-6 md:px-8 py-3 md:py-4 rounded-lg bg-[var(--accent-cyan)] font-mono text-sm md:text-lg font-semibold text-[var(--bg-primary)] hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
          puze8681@gmail.com
        </a>
        <a
          href="tel:010-9790-8310"
          className="flex items-center justify-center gap-2 md:gap-3 w-full px-6 md:px-8 py-3 md:py-4 rounded-lg border border-[var(--text-muted)] font-mono text-sm md:text-lg text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
          010-9790-8310
        </a>
      </div>

      <div className="flex gap-4 md:gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[var(--bg-surface)] text-[var(--text-tertiary)] hover:text-[var(--accent-cyan)] transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        ))}
      </div>

      {/* 푸터와의 구분선 */}
      <div className="w-full h-px bg-[var(--bg-surface)] mt-4" />
    </section>
  );
}
