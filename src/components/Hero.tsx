"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Dark mode default: profile1, Light mode default: profile2
  const [currentProfile, setCurrentProfile] = useState<1 | 2>(theme === "light" ? 2 : 1);

  // When theme changes, change to theme's default if not already matching
  useEffect(() => {
    const themeDefault = theme === "light" ? 2 : 1;
    if (currentProfile !== themeDefault) {
      setCurrentProfile(themeDefault);
    }
  }, [theme]);

  const toggleProfile = () => {
    setCurrentProfile((prev) => (prev === 1 ? 2 : 1));
  };

  const showProfile2 = currentProfile === 2;

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 section-padding py-16 md:py-24 lg:py-32 w-full">
      <div className="flex flex-col gap-6 md:gap-8 flex-1">
        <div className="flex">
          <span className="px-4 py-2 rounded-full bg-[var(--bg-surface)] font-mono text-xs md:text-sm font-medium text-[var(--accent-cyan)]">
            {t("hero.badge")}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] tracking-tight">
          {t("hero.name")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {t("hero.description1")}
          <br className="hidden sm:block" />
          {t("hero.description2")}
        </p>
        <p className="text-base md:text-lg text-[var(--text-tertiary)] max-w-2xl leading-relaxed">
          {t("hero.description3")}
          <br className="hidden sm:block" />
          {t("hero.description4")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-[var(--accent-cyan)] font-mono text-sm md:text-base font-semibold text-[var(--bg-primary)] hover:opacity-90 transition-opacity text-center"
          >
            {t("hero.cta.projects")} &rarr;
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-[var(--text-tertiary)] font-mono text-sm md:text-base font-semibold text-[var(--text-primary)] hover:border-[var(--accent-cyan)] transition-colors text-center"
          >
            {t("hero.cta.contact")}
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <button
        onClick={toggleProfile}
        className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[var(--bg-surface)] border-4 border-[var(--accent-cyan)]/20 shrink-0 order-first lg:order-last cursor-pointer hover:border-[var(--accent-cyan)]/40 transition-all duration-300 hover:scale-105"
        aria-label="프로필 사진 전환"
      >
        <Image
          src={showProfile2 ? "/images/profile/profile2.jpeg" : "/images/profile/profile1.jpeg"}
          alt="박태준 프로필 사진"
          fill
          className="object-cover"
          priority
        />
      </button>
    </section>
  );
}
