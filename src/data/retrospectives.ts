import { LocalizedData } from "./types";

export interface Retrospective {
  slug: string;
  problem: string;
  solution: string;
  challenges: string;
  results: string;
  lessons: string;
}

export const retrospectivesData: LocalizedData<Retrospective[]> = {
  ko: [
    {
      slug: "itsmeal",
      problem: "// 문제 상황을 작성해주세요",
      solution: "// 해결 과정을 작성해주세요",
      challenges: "// 기술적 도전을 작성해주세요",
      results: "// 성과/수치를 작성해주세요",
      lessons: "// 배운 점을 작성해주세요",
    },
    {
      slug: "itsme",
      problem: "// 문제 상황을 작성해주세요",
      solution: "// 해결 과정을 작성해주세요",
      challenges: "// 기술적 도전을 작성해주세요",
      results: "// 성과/수치를 작성해주세요",
      lessons: "// 배운 점을 작성해주세요",
    },
    {
      slug: "raintown-coupon",
      problem: "// 문제 상황을 작성해주세요",
      solution: "// 해결 과정을 작성해주세요",
      challenges: "// 기술적 도전을 작성해주세요",
      results: "// 성과/수치를 작성해주세요",
      lessons: "// 배운 점을 작성해주세요",
    },
    {
      slug: "wvcat",
      problem: "// 문제 상황을 작성해주세요",
      solution: "// 해결 과정을 작성해주세요",
      challenges: "// 기술적 도전을 작성해주세요",
      results: "// 성과/수치를 작성해주세요",
      lessons: "// 배운 점을 작성해주세요",
    },
    {
      slug: "cashplace",
      problem: "// 문제 상황을 작성해주세요",
      solution: "// 해결 과정을 작성해주세요",
      challenges: "// 기술적 도전을 작성해주세요",
      results: "// 성과/수치를 작성해주세요",
      lessons: "// 배운 점을 작성해주세요",
    },
  ],
  en: [
    {
      slug: "itsmeal",
      problem: "// Write the problem situation",
      solution: "// Write the solution process",
      challenges: "// Write the technical challenges",
      results: "// Write the results/metrics",
      lessons: "// Write the lessons learned",
    },
    {
      slug: "itsme",
      problem: "// Write the problem situation",
      solution: "// Write the solution process",
      challenges: "// Write the technical challenges",
      results: "// Write the results/metrics",
      lessons: "// Write the lessons learned",
    },
    {
      slug: "raintown-coupon",
      problem: "// Write the problem situation",
      solution: "// Write the solution process",
      challenges: "// Write the technical challenges",
      results: "// Write the results/metrics",
      lessons: "// Write the lessons learned",
    },
    {
      slug: "wvcat",
      problem: "// Write the problem situation",
      solution: "// Write the solution process",
      challenges: "// Write the technical challenges",
      results: "// Write the results/metrics",
      lessons: "// Write the lessons learned",
    },
    {
      slug: "cashplace",
      problem: "// Write the problem situation",
      solution: "// Write the solution process",
      challenges: "// Write the technical challenges",
      results: "// Write the results/metrics",
      lessons: "// Write the lessons learned",
    },
  ],
};

// 베리어프리는 barrierFreeProjectData에 포함되어 있으므로 별도 관리
export const barrierFreeRetrospective: LocalizedData<Omit<Retrospective, "slug">> = {
  ko: {
    problem: "// 문제 상황을 작성해주세요",
    solution: "// 해결 과정을 작성해주세요",
    challenges: "// 기술적 도전을 작성해주세요",
    results: "// 성과/수치를 작성해주세요",
    lessons: "// 배운 점을 작성해주세요",
  },
  en: {
    problem: "// Write the problem situation",
    solution: "// Write the solution process",
    challenges: "// Write the technical challenges",
    results: "// Write the results/metrics",
    lessons: "// Write the lessons learned",
  },
};

export const retrospectiveTexts: LocalizedData<{
  title: string;
  button: string;
  problem: string;
  solution: string;
  challenges: string;
  results: string;
  lessons: string;
}> = {
  ko: {
    title: "프로젝트 회고",
    button: "회고 보기",
    problem: "문제 상황",
    solution: "해결 과정",
    challenges: "기술적 도전",
    results: "성과/수치",
    lessons: "배운 점",
  },
  en: {
    title: "Project Retrospective",
    button: "View Retrospective",
    problem: "Problem",
    solution: "Solution",
    challenges: "Challenges",
    results: "Results",
    lessons: "Lessons Learned",
  },
};

export function getRetrospective(slug: string, language: "ko" | "en"): Retrospective | null {
  return retrospectivesData[language].find((r) => r.slug === slug) || null;
}
