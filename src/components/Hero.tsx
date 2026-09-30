"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ResumeDownloadButton from "./resume/DownloadButton";
import PortfolioDownloadButton from "./resume/PortfolioDownloadButton";
import ImpactCareerDownloadButton from "./resume/ImpactCareerDownloadButton";

export default function Hero() {
  const { t, language } = useLanguage();
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
    <section className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-16 section-padding py-10 sm:py-14 md:py-20 lg:py-28 w-full">
      <div className="flex w-full min-w-0 flex-1 flex-col gap-5 md:gap-7">
        <div className="flex">
          <span className="px-4 py-2 rounded-full bg-[var(--bg-surface)] font-mono text-xs md:text-sm font-medium text-[var(--accent-cyan)]">
            {t("hero.badge")}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] tracking-[-0.01em]">
          {t("hero.name")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl leading-[1.75]">
          {t("hero.description1")}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t("hero.description2")}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-[var(--text-tertiary)] max-w-2xl leading-[1.75]">
          {t("hero.description3")}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t("hero.description4")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 max-w-2xl">
          <a
            href="#selected-work"
            className="flex items-center justify-center px-8 py-3.5 md:py-4 rounded-lg bg-[var(--accent-cyan)] font-mono text-sm md:text-base font-semibold text-[var(--bg-primary)] hover:opacity-90 transition-opacity text-center"
          >
            {t("hero.cta.projects")} &rarr;
          </a>
          <ImpactCareerDownloadButton className="justify-center px-8 py-3.5 md:py-4 font-mono text-sm md:text-base" />
        </div>
        <div
          className="flex max-w-2xl flex-wrap items-center gap-x-5 gap-y-2 px-1"
          role="group"
          aria-label={language === "ko" ? "문서 다운로드 및 연락" : "Document downloads and contact"}
        >
          <ResumeDownloadButton
            variant="secondary"
            className="border-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--text-tertiary)] hover:bg-transparent hover:text-[var(--accent-cyan)] md:text-sm"
          />
          <PortfolioDownloadButton
            variant="secondary"
            className="border-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--text-tertiary)] hover:bg-transparent hover:text-[var(--accent-cyan)] md:text-sm"
          />
          <a href="#contact" className="font-mono text-xs text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent-cyan)] md:text-sm">
            {t("hero.cta.contact")}
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <button
        onClick={toggleProfile}
        className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[var(--bg-surface)] border-4 border-[var(--accent-cyan)]/20 shrink-0 order-first lg:order-last cursor-pointer hover:border-[var(--accent-cyan)]/40 transition-all duration-300 hover:scale-105"
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
