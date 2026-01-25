"use client";

import Link from "next/link";
import Image from "next/image";
import { GitCommit, ExternalLink } from "lucide-react";
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
      {firstImage && (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-inset)]">
          <Image
            src={firstImage.src}
            alt={firstImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* 태그와 커밋 */}
      <div className="flex items-center justify-between gap-2">
        <span className="px-3 py-1.5 rounded bg-[var(--bg-inset)] font-mono text-xs font-semibold text-[var(--accent-cyan)]">
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
        {project.stats && (
          <div className="flex items-center gap-1">
            <GitCommit className="w-3 h-3 text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.stats.commits} commits
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
