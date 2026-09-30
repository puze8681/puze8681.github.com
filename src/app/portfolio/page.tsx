"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllProjects } from "@/data";

const sectionTexts = {
  ko: {
    label: "PORTFOLIO",
    title: "프로젝트",
    description: "7년간 진행한 20개 이상의 제품·프로젝트",
  },
  en: {
    label: "PORTFOLIO",
    title: "Projects",
    description: "20+ products and projects developed over 7 years",
  },
};

export default function PortfolioPage() {
  const { language } = useLanguage();
  const texts = sectionTexts[language];
  const allProjects = getAllProjects(language);

  return (
    <main className="min-h-screen flex flex-col w-full">
      <Header />

      <section className="flex flex-col gap-10 md:gap-14 section-padding py-16 md:py-24 w-full">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)] uppercase">
            {texts.label}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-[-0.01em]">
            {texts.title}
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {texts.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
