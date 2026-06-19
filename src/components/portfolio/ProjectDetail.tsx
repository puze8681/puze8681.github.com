"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GitCommit, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project, MajorProject, ProjectHighlight } from "@/data/types";
import ImageGallery from "./ImageGallery";
import StoreBadges from "../StoreBadges";
import RetrospectiveModal from "../RetrospectiveModal";
import {
  itsmealDesignImages,
  itsmeDesignImages,
  itsmealHighlightsData,
  itsmeHighlightsData,
  getRetrospective,
  retrospectiveTexts,
} from "@/data";

interface ProjectDetailProps {
  project: Project | MajorProject;
}

const sectionTexts = {
  ko: {
    back: "프로젝트 목록",
    overview: "프로젝트 개요",
    techStack: "기술 스택",
    features: "주요 기능",
    links: "링크",
    screenshots: "스크린샷",
    highlights: "개발 내역",
    relatedArticle: "관련 기사",
  },
  en: {
    back: "All Projects",
    overview: "Project Overview",
    techStack: "Tech Stack",
    features: "Key Features",
    links: "Links",
    screenshots: "Screenshots",
    highlights: "Development Highlights",
    relatedArticle: "Related Article",
  },
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { language } = useLanguage();
  const texts = sectionTexts[language];
  const retroTexts = retrospectiveTexts[language];
  const [isRetroModalOpen, setIsRetroModalOpen] = useState(false);

  // 회고 데이터 가져오기
  const retrospective = getRetrospective(project.slug, language);

  // 이미지 통합
  const allImages = [
    ...(project.images || []),
    ...(project.portfolioImages || []),
  ];

  // 하이라이트 데이터 가져오기
  const getHighlights = (): ProjectHighlight[] => {
    if (project.hasHighlights === "itsmeal") return itsmealHighlightsData[language];
    if (project.hasHighlights === "itsme") return itsmeHighlightsData[language];
    return [];
  };

  const highlights = getHighlights();

  // 디자인 이미지 가져오기
  const getDesignImages = () => {
    if (project.hasDesignImages) {
      return [...itsmealDesignImages.pos, ...itsmealDesignImages.kiosk];
    }
    if (project.hasAppDesignImages) {
      return itsmeDesignImages;
    }
    return [];
  };

  const designImages = getDesignImages();

  return (
    <article className="flex flex-col gap-8 md:gap-12 section-padding py-8 md:py-16 w-full max-w-5xl mx-auto">
      {/* 뒤로가기 */}
      <Link
        href="/portfolio"
        className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        {texts.back}
      </Link>

      {/* 헤더 */}
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1.5 rounded bg-[var(--bg-surface)] font-mono text-xs font-semibold text-[var(--accent-cyan)]">
            {project.tag}
          </span>
          {(project.commits || (project as MajorProject).stats?.commits) && (
            <div className="flex items-center gap-1">
              <GitCommit className="w-4 h-4 text-[var(--accent-cyan)]" />
              <span className="font-mono text-sm text-[var(--text-muted)]">
                {project.commits || (project as MajorProject).stats?.commits} commits
              </span>
            </div>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-sm">{project.period}</span>
            {(project as MajorProject).stats?.years && (
              <span className="text-sm">
                ({(project as MajorProject).stats.years})
              </span>
            )}
          </div>
          {retrospective && (
            <button
              onClick={() => setIsRetroModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">{retroTexts.button}</span>
            </button>
          )}
        </div>
      </header>

      {/* 스토어 배지 */}
      {project.links && project.links.length > 0 && (
        <StoreBadges
          playStoreUrl={project.links.find((link) => link.label === "Play Store")?.url}
          appStoreUrl={project.links.find((link) => link.label === "App Store")?.url}
        />
      )}

      {/* 프로젝트 개요 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          {texts.overview}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* 스크린샷 */}
      {allImages.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.screenshots}
          </h2>
          <ImageGallery images={allImages} title={project.title} />
        </section>
      )}

      {/* 디자인 이미지 (주요 프로젝트) */}
      {designImages.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.screenshots}
          </h2>
          <ImageGallery images={designImages} title={project.title} />
        </section>
      )}

      {/* 주요 기능 */}
      {project.features && project.features.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.features}
          </h2>
          <div className="flex flex-col gap-3 p-5 rounded-xl bg-[var(--bg-surface)]">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="text-base text-[var(--text-secondary)] pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--accent-cyan)]"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 개발 내역 (하이라이트) */}
      {highlights.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.highlights}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.category}
                className="flex flex-col gap-3 p-4 rounded-lg bg-[var(--bg-surface)]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {highlight.category}
                  </h4>
                  <span className="font-mono text-xs text-[var(--accent-cyan)]">
                    {highlight.commits} commits
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {highlight.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--accent-cyan)]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 기술 스택 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          {texts.techStack}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-lg bg-[var(--bg-surface)] font-mono text-sm text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 링크 */}
      {project.links && project.links.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.links}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-surface)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {link.label === "관련 기사" ? texts.relatedArticle : link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 회고 모달 */}
      {retrospective && (
        <RetrospectiveModal
          retrospective={retrospective}
          projectTitle={project.title}
          language={language}
          isOpen={isRetroModalOpen}
          onClose={() => setIsRetroModalOpen(false)}
        />
      )}
    </article>
  );
}
