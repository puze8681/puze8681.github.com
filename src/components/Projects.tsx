"use client";

import { ExternalLink, GitCommit, Award, CheckCircle, Smartphone, Monitor, TabletSmartphone, FileText, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import StoreBadges from "./StoreBadges";
import ImageModal from "./ImageModal";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  majorProjectsData,
  otherProjectsData,
  itsmealDesignImages,
  itsmeDesignImages,
  barrierFreeProjectData,
  barrierFreeLinks,
  itsmealHighlightsData,
  itsmeHighlightsData,
  projectSectionTexts,
} from "@/data";

export default function Projects() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [petfeedPdfModalOpen, setPetfeedPdfModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<{ src: string; alt: string }[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

  const openImageModal = useCallback((images: { src: string; alt: string }[], index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  }, []);

  const closeImageModal = useCallback(() => {
    setImageModalOpen(false);
  }, []);

  const goToPrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  }, [currentImages.length]);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  }, [currentImages.length]);
  const texts = projectSectionTexts[language];
  const majorProjects = majorProjectsData[language];
  const otherProjects = otherProjectsData[language];
  const barrierFreeProject = barrierFreeProjectData[language];
  const itsmealHighlights = itsmealHighlightsData[language];
  const itsmeHighlights = itsmeHighlightsData[language];

  const getHighlights = (type: string) => {
    if (type === "itsmeal") return itsmealHighlights;
    if (type === "itsme") return itsmeHighlights;
    return [];
  };

  return (
    <>
    <section id="projects" className="flex flex-col gap-10 md:gap-14 section-padding py-16 md:py-24 w-full">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)] uppercase">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          {texts.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {texts.description}
        </p>
      </div>

      {/* 주요 프로젝트 */}
      <div className="flex flex-col gap-8">
        {majorProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-5 md:gap-6 p-5 sm:p-6 md:p-8 rounded-xl bg-[var(--bg-surface)]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="w-fit px-3 py-1.5 rounded bg-[var(--bg-inset)] font-mono text-xs font-semibold text-[var(--accent-cyan)]">
                  {project.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
              </div>
              <span className="font-mono text-sm text-[var(--text-muted)]">
                {project.period}
              </span>
            </div>

            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {project.stats && (
              <div className="flex flex-wrap gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-[var(--accent-cyan)]" />
                  <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
                    {project.stats.commits}
                  </span>
                  <span className="text-sm text-[var(--text-tertiary)]">commits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
                    {project.stats.years}
                  </span>
                  <span className="text-sm text-[var(--text-tertiary)]">{texts.devPeriod}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--text-tertiary)]">
                    {project.stats.features}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 flex-wrap">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded bg-[var(--bg-inset)] font-mono text-xs text-[var(--text-tertiary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <StoreBadges
              playStoreUrl={project.links?.find(link => link.label === "Play Store")?.url}
              appStoreUrl={project.links?.find(link => link.label === "App Store")?.url}
            />

            {project.hasHighlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {getHighlights(project.hasHighlights).map((highlight) => (
                  <div
                    key={highlight.category}
                    className="flex flex-col gap-3 p-4 rounded-lg bg-[var(--bg-inset)]"
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
            )}

            {project.hasDesignImages && (
              <div className="flex flex-col gap-5 mt-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)] border border-[var(--accent-cyan)]/20">
                <div className="flex items-center gap-3">
                  <TabletSmartphone className="w-5 h-5 text-[var(--accent-cyan)]" />
                  <h4 className="text-base md:text-lg font-bold text-[var(--text-primary)]">
                    {texts.productDesign}
                  </h4>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-[var(--accent-cyan)]" />
                    <h5 className="text-sm font-semibold text-[var(--text-primary)]">{texts.posSystem}</h5>
                    <span className="text-xs text-[var(--text-muted)]">({itsmealDesignImages.pos.length}{texts.screens})</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {itsmealDesignImages.pos.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-surface)] cursor-pointer"
                        onClick={() => openImageModal(itsmealDesignImages.pos, idx)}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <TabletSmartphone className="w-4 h-4 text-[var(--accent-cyan)]" />
                    <h5 className="text-sm font-semibold text-[var(--text-primary)]">{texts.kiosk}</h5>
                    <span className="text-xs text-[var(--text-muted)]">({itsmealDesignImages.kiosk.length}{texts.screens})</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {itsmealDesignImages.kiosk.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--bg-surface)] cursor-pointer"
                        onClick={() => openImageModal(itsmealDesignImages.kiosk, idx)}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {project.hasAppDesignImages && (
              <div className="flex flex-col gap-4 mt-4 p-5 md:p-6 rounded-xl bg-[var(--bg-inset)] border border-[var(--accent-cyan)]/20">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-[var(--accent-cyan)]" />
                  <h4 className="text-base md:text-lg font-bold text-[var(--text-primary)]">
                    {texts.appDesign}
                  </h4>
                  <span className="text-xs text-[var(--text-muted)]">({itsmeDesignImages.length}{texts.screens})</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {itsmeDesignImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[9/16] rounded-lg overflow-hidden bg-[var(--bg-surface)] cursor-pointer"
                      onClick={() => openImageModal(itsmeDesignImages, idx)}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end mt-2">
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-cyan)] hover:underline"
              >
                {texts.viewDetails}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 베리어프리 키오스크 */}
      <div className="flex flex-col gap-5 md:gap-6 p-5 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-inset)] border border-[var(--accent-cyan)]/30">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-cyan)]/10 shrink-0">
              <Award className="w-6 h-6 text-[var(--accent-cyan)]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                {barrierFreeProject.title}
              </h3>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">
                  {barrierFreeProject.certification}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1">
            <span className="font-mono text-sm text-[var(--text-muted)]">
              {barrierFreeProject.period}
            </span>
            <span className="font-mono text-xs text-[var(--accent-cyan)]">
              86+ commits
            </span>
          </div>
        </div>

        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl">
          {barrierFreeProject.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href={barrierFreeLinks.landing}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-cyan)]/10 hover:bg-[var(--accent-cyan)]/20 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span className="text-sm font-semibold text-[var(--accent-cyan)]">{texts.landingPage}</span>
          </a>
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-inset)] hover:bg-[var(--bg-primary)] transition-colors"
          >
            <FileText className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="text-sm font-semibold text-[var(--text-primary)]">{texts.userManual}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {barrierFreeProject.features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col gap-3 p-4 rounded-lg bg-[var(--bg-primary)]/50"
            >
              <h4 className="text-sm font-bold text-[var(--accent-cyan)]">
                {feature.category}
              </h4>
              <ul className="flex flex-col gap-2">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 기타 프로젝트 */}
      <div className="flex flex-col gap-6 mt-6">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          {texts.otherProjects}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-surface)]"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-fit px-3 py-1.5 rounded bg-[var(--bg-inset)] font-mono text-xs font-semibold text-[var(--accent-cyan)]">
                    {project.tag}
                  </span>
                  {project.commits && (
                    <div className="flex items-center gap-1">
                      <GitCommit className="w-3 h-3 text-[var(--accent-cyan)]" />
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {project.commits} commits
                      </span>
                    </div>
                  )}
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {project.period}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)]">
                {project.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                {project.description}
              </p>

              {project.images && (
                <div className="grid grid-cols-3 gap-2">
                  {project.images.slice(0, 3).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-inset)] cursor-pointer"
                      onClick={() => openImageModal(project.images!, idx)}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {project.portfolioImages && (
                <div className="grid grid-cols-2 gap-2">
                  {project.portfolioImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[var(--bg-inset)] cursor-pointer"
                      onClick={() => openImageModal(project.portfolioImages!, idx)}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {project.features && (
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-[var(--bg-inset)]">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-[var(--text-secondary)] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--accent-cyan)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-[var(--bg-inset)] font-mono text-xs text-[var(--text-tertiary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-1 flex-wrap">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[var(--accent-cyan)] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {link.label === "관련 기사" ? texts.relatedArticle : link.label}
                  </a>
                ))}
                {project.hasPdfFile && (
                  <button
                    onClick={() => setPetfeedPdfModalOpen(true)}
                    className="flex items-center gap-1.5 text-sm text-[var(--accent-cyan)] hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    {texts.presentation}
                  </button>
                )}
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="flex items-center gap-1.5 text-sm text-[var(--accent-cyan)] hover:underline"
                >
                  {texts.viewDetails}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PDF 모달 - 베리어프리 */}
    {isPdfModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="relative w-full max-w-6xl h-[90vh] bg-[var(--bg-surface)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-[var(--bg-inset)]">
            <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)] truncate pr-4">
              {texts.userManual}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={barrierFreeLinks.manual}
                download
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent-cyan)]/10 hover:bg-[var(--accent-cyan)]/20 transition-colors"
              >
                <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span className="text-sm text-[var(--accent-cyan)]">{texts.download}</span>
              </a>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[var(--bg-inset)] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
            </div>
          </div>
          <iframe
            src={barrierFreeLinks.manual}
            className="w-full h-[calc(90vh-64px)]"
            title={texts.userManual}
          />
        </div>
      </div>
    )}

    {/* PDF 모달 - PetFeed */}
    {petfeedPdfModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="relative w-full max-w-6xl h-[90vh] bg-[var(--bg-surface)] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-[var(--bg-inset)]">
            <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)]">
              PetFeed {texts.presentation}
            </h3>
            <div className="flex items-center gap-2">
              <a
                href="/files/petfeed/PetFeed_발표.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent-cyan)]/10 hover:bg-[var(--accent-cyan)]/20 transition-colors"
              >
                <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span className="text-sm text-[var(--accent-cyan)]">{texts.download}</span>
              </a>
              <button
                onClick={() => setPetfeedPdfModalOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[var(--bg-inset)] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
            </div>
          </div>
          <iframe
            src="/files/petfeed/PetFeed_발표.pdf"
            className="w-full h-[calc(90vh-64px)]"
            title={`PetFeed ${texts.presentation}`}
          />
        </div>
      </div>
    )}

    {/* 이미지 모달 */}
    <ImageModal
      images={currentImages}
      currentIndex={currentImageIndex}
      isOpen={imageModalOpen}
      onClose={closeImageModal}
      onPrev={goToPrevImage}
      onNext={goToNextImage}
    />
    </>
  );
}
