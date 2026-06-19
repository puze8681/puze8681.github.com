"use client";

import { X, AlertCircle, Lightbulb, Wrench, TrendingUp, GraduationCap } from "lucide-react";
import { useEffect, useCallback } from "react";
import { Retrospective, retrospectiveTexts } from "@/data/retrospectives";

interface RetrospectiveModalProps {
  retrospective: Retrospective | Omit<Retrospective, "slug">;
  projectTitle: string;
  language: "ko" | "en";
  isOpen: boolean;
  onClose: () => void;
}

export default function RetrospectiveModal({
  retrospective,
  projectTitle,
  language,
  isOpen,
  onClose,
}: RetrospectiveModalProps) {
  const texts = retrospectiveTexts[language];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const sections = [
    {
      key: "problem",
      icon: AlertCircle,
      title: texts.problem,
      content: retrospective.problem,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      key: "solution",
      icon: Lightbulb,
      title: texts.solution,
      content: retrospective.solution,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      key: "challenges",
      icon: Wrench,
      title: texts.challenges,
      content: retrospective.challenges,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      key: "results",
      icon: TrendingUp,
      title: texts.results,
      content: retrospective.results,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      key: "lessons",
      icon: GraduationCap,
      title: texts.lessons,
      content: retrospective.lessons,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[var(--bg-surface)] rounded-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--bg-inset)] shrink-0">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)] uppercase">
              {texts.title}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
              {projectTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[var(--bg-inset)] transition-colors"
          >
            <X className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>

        {/* 콘텐츠 */}
        <div className="flex flex-col gap-4 p-5 overflow-y-auto">
          {sections.map((section) => (
            <div
              key={section.key}
              className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--bg-inset)]"
            >
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${section.bgColor}`}>
                  <section.icon className={`w-4 h-4 ${section.color}`} />
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {section.title}
                </h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
