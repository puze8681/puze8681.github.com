"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  language: "ko" | "en";
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
  const viewDetailsText = language === "ko" ? "상세 보기" : "View Details";

  // 첫 번째 이미지 가져오기
  const firstImage = project.images?.[0] || project.portfolioImages?.[0];

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col gap-4 p-5 md:p-6 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-inset)] transition-colors"
    >
      {/* 이미지 */}
      {firstImage ? (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-inset)]">
          <Image
            src={firstImage.src}
            alt={firstImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-inset)] border border-[var(--bg-surface)] flex items-center justify-center">
          <div className="absolute -top-10 -right-6 w-32 h-32 rounded-full bg-[var(--accent-cyan)]/10" />
          <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-[var(--accent-cyan)]/5" />
          <div className="relative flex flex-col items-center gap-2 text-center px-6">
            <span className="font-mono text-4xl md:text-5xl font-bold text-[var(--accent-cyan)]/70">
              {project.title.charAt(0).toUpperCase()}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              {project.tag}
            </span>
          </div>
        </div>
      )}

      {/* 태그와 핵심 성과 */}
      <div className="flex items-center justify-between gap-2">
        <span className="px-3 py-1.5 rounded bg-[var(--bg-inset)] font-mono text-xs font-semibold text-[var(--accent-cyan)]">
          {project.tag}
        </span>
        {project.stats && (
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.stats.primary} · {project.stats.primaryLabel}
            </span>
          </div>
        )}
      </div>

      {/* 제목 */}
      <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
        {project.title}
      </h3>

      {/* 기간 */}
      <span className="font-mono text-xs text-[var(--text-muted)]">
        {project.period}
      </span>

      {/* 설명 */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* 기술 스택 */}
      <div className="flex items-center gap-2 flex-wrap mt-auto">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded bg-[var(--bg-inset)] font-mono text-xs text-[var(--text-tertiary)]"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-xs text-[var(--text-muted)]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* 상세 보기 링크 */}
      <div className="flex items-center gap-1 text-sm text-[var(--accent-cyan)] group-hover:underline mt-2">
        <ExternalLink className="w-3.5 h-3.5" />
        {viewDetailsText}
      </div>
    </Link>
  );
}
