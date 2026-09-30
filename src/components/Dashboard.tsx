"use client";

import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Layers3, Rocket, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const overviewData = {
  ko: {
    eyebrow: "HOW I BUILD",
    title: "제품의 시작부터 운영까지 연결합니다",
    description:
      "특정 기술이나 한 제품에 머무르지 않고, 문제를 정의한 뒤 필요한 기술을 연결해 실제 사용되는 제품으로 완성합니다.",
    proof: ["개발 경력 7년", "프로젝트 20+", "모바일 · 웹 · 백엔드", "AI/AX · 인프라"],
    capabilities: [
      {
        icon: Rocket,
        title: "0→1 제품 구축",
        description: "요구사항이 정리되지 않은 단계에서 구조를 설계하고, 사용자가 만나는 첫 버전까지 빠르게 출시합니다.",
      },
      {
        icon: Layers3,
        title: "모바일 중심 End-to-End 개발",
        description: "Flutter 앱을 중심으로 웹·백엔드·인프라까지 제품에 필요한 영역을 연결해 개발합니다.",
      },
      {
        icon: BrainCircuit,
        title: "AI/AX 운영 전환",
        description: "상담·학사 행정·기업 운영처럼 사람이 반복하던 업무를 실제 사용 가능한 AI 시스템으로 전환합니다.",
      },
      {
        icon: Wrench,
        title: "출시 이후 운영 개선",
        description: "CI/CD, 장애 구조, 성능과 현장 장비까지 운영 단계에서 드러나는 병목을 찾아 개선합니다.",
      },
    ],
    selectedEyebrow: "SELECTED WORK",
    selectedTitle: "역량을 증명하는 대표 작업",
    selectedDescription: "현재의 전문성과 경력의 깊이를 가장 잘 보여주는 세 가지 사례입니다.",
    works: [
      {
        index: "01",
        category: "현재 제품 · Product Engineering",
        title: "헤이링(Heyring) AI",
        summary: "모바일 제품 개선부터 학습 기능 출시, 배포 파이프라인과 예약 전화 인프라 설계까지 연결합니다.",
        outcome: "모바일 빌드 21분대 → 6분대 · 약 71% 단축",
        action: "사례 자세히 보기",
        href: "/portfolio/heyring-ai",
      },
      {
        index: "02",
        category: "장기 제품 · 0→1 & Scale",
        title: "잇츠미 · 잇츠밀",
        summary: "서비스와 고객이 없던 단계에서 두 제품을 구축하고 첫 고객 확보부터 다수 대학의 장기 운영까지 기여했습니다.",
        outcome: "첫 고객 → 13개 대학 · 외부 투자 없이 흑자 전환 기여",
        action: "관련 프로젝트 보기",
        href: "#whiteblock-products",
      },
      {
        index: "03",
        category: "외부 프로젝트 · AI/AX",
        title: "한국외대 AI 학사 챗봇",
        summary: "학사 규정과 행정 정보를 근거와 함께 답변하고, 낮은 신뢰도의 답변을 검토하는 운영 흐름을 설계했습니다.",
        outcome: "오픈 2주차 DAU 약 80명 · 하루 질문 약 300건",
        action: "사례 자세히 보기",
        href: "/portfolio/hufs-ai-chatbot",
      },
    ],
  },
  en: {
    eyebrow: "HOW I BUILD",
    title: "From product zero to reliable operations",
    description:
      "I define the problem, connect the technologies it needs, and turn it into a product people can actually use and operate.",
    proof: ["7 years building products", "20+ projects", "Mobile · Web · Backend", "AI/AX · Infrastructure"],
    capabilities: [
      {
        icon: Rocket,
        title: "Zero-to-One Products",
        description: "I shape ambiguous requirements, design the structure, and ship the first usable version quickly.",
      },
      {
        icon: Layers3,
        title: "Mobile-Led, End to End",
        description: "Starting with Flutter, I connect web, backend, and infrastructure into one coherent product.",
      },
      {
        icon: BrainCircuit,
        title: "AI for Real Operations",
        description: "I turn repetitive work in consulting, academic administration, and business operations into usable AI systems.",
      },
      {
        icon: Wrench,
        title: "Operational Improvement",
        description: "I improve CI/CD, failure boundaries, performance, and on-site hardware after products reach production.",
      },
    ],
    selectedEyebrow: "SELECTED WORK",
    selectedTitle: "Work that demonstrates how I build",
    selectedDescription: "Three cases that best represent my current focus and the depth of my experience.",
    works: [
      {
        index: "01",
        category: "Current Product · Product Engineering",
        title: "Heyring AI",
        summary: "Connecting mobile product improvements, learning features, delivery pipelines, and scheduled-call infrastructure design.",
        outcome: "Mobile build time: 21 min → 6 min · about 71% faster",
        action: "View case study",
        href: "/portfolio/heyring-ai",
      },
      {
        index: "02",
        category: "Long-Term Product · 0→1 & Scale",
        title: "ItsMe · ItsMeal",
        summary: "Built both products before the company had a live service or customer, then helped scale them into long-term university operations.",
        outcome: "First customer → 13 universities · contributed to profitability without outside funding",
        action: "View related projects",
        href: "#whiteblock-products",
      },
      {
        index: "03",
        category: "External Project · AI/AX",
        title: "HUFS Academic AI Chatbot",
        summary: "Designed a grounded academic-information assistant and an operational review flow for low-confidence answers.",
        outcome: "Week 2: about 80 DAU · about 300 questions per day",
        action: "View case study",
        href: "/portfolio/hufs-ai-chatbot",
      },
    ],
  },
};

export default function Dashboard() {
  const { language } = useLanguage();
  const content = overviewData[language];

  return (
    <section className="section-padding w-full bg-[var(--bg-surface)] py-14 md:py-20">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-[var(--accent-cyan)]">{content.eyebrow}</span>
            <h2 className="max-w-xl text-3xl font-bold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {content.title}
            </h2>
            <p className="max-w-xl text-base leading-[1.75] text-[var(--text-secondary)] md:text-lg">
              {content.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {content.proof.map((item) => (
                <span key={item} className="rounded-full border border-[var(--bg-inset)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs text-[var(--text-tertiary)] md:text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {content.capabilities.map((capability) => (
              <article key={capability.title} className="flex flex-col gap-3 rounded-xl bg-[var(--bg-inset)] p-5 md:p-6">
                <capability.icon className="h-5 w-5 text-[var(--accent-cyan)]" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{capability.title}</h3>
                <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="selected-work" className="scroll-mt-20 flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[var(--accent-cyan)]">{content.selectedEyebrow}</span>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {content.selectedTitle}
            </h2>
            <p className="max-w-2xl text-base leading-[1.75] text-[var(--text-secondary)] md:text-lg">
              {content.selectedDescription}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {content.works.map((work) => (
              <Link key={work.title} href={work.href} className="group flex min-h-full flex-col gap-5 rounded-xl bg-[var(--bg-inset)] p-5 transition-colors hover:bg-[var(--bg-primary)] md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-[var(--accent-cyan)]">{work.index}</span>
                    <span className="text-xs leading-[1.5] text-[var(--text-muted)]">{work.category}</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-cyan)]" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-cyan)] md:text-2xl">{work.title}</h3>
                  <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">{work.summary}</p>
                </div>
                <div className="border-t border-[var(--bg-surface)] pt-4">
                  <p className="text-sm font-semibold leading-[1.6] text-[var(--text-primary)]">{work.outcome}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--accent-cyan)]">
                    {work.action}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
