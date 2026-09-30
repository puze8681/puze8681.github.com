import { Skill, LocalizedData } from "./types";

export const skillsData: LocalizedData<Skill[]> = {
  ko: [
    {
      icon: "Smartphone",
      title: "Mobile Development",
      description: "Flutter • Dart • Kotlin • Java • Swift • React Native",
      details: ["Android SDK", "iOS Development", "Cross-platform"],
    },
    {
      icon: "Code",
      title: "Frontend Development",
      description: "React • Next.js • TypeScript • Tailwind CSS • Cordova",
      details: ["Material Design", "Custom View", "Responsive UI"],
    },
    {
      icon: "Server",
      title: "Backend Development",
      description: "Spring Boot • FastAPI • Python • Node.js • Firebase",
      details: ["REST API", "PostgreSQL", "Server Architecture"],
    },
    {
      icon: "Wrench",
      title: "AI & Automation",
      description: "LLM • RAG • Agentic Workflow • Playwright",
      details: ["AI 서비스", "업무 자동화", "검증 워크플로우"],
    },
    {
      icon: "GitBranch",
      title: "Infrastructure & CI/CD",
      description: "GCP • Docker • CI/CD • GitHub Actions • Fastlane",
      details: ["인프라 설계", "배포 자동화", "운영 안정화"],
    },
    {
      icon: "Award",
      title: "Product & Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["제품 설계", "아키텍처", "문서화"],
    },
  ],
  en: [
    {
      icon: "Smartphone",
      title: "Mobile Development",
      description: "Flutter • Dart • Kotlin • Java • Swift • React Native",
      details: ["Android SDK", "iOS Development", "Cross-platform"],
    },
    {
      icon: "Code",
      title: "Frontend Development",
      description: "React • Next.js • TypeScript • Tailwind CSS • Cordova",
      details: ["Material Design", "Custom View", "Responsive UI"],
    },
    {
      icon: "Server",
      title: "Backend Development",
      description: "Spring Boot • FastAPI • Python • Node.js • Firebase",
      details: ["REST API", "PostgreSQL", "Server Architecture"],
    },
    {
      icon: "Wrench",
      title: "AI & Automation",
      description: "LLM • RAG • Agentic Workflow • Playwright",
      details: ["AI Products", "Workflow Automation", "Human-in-the-loop"],
    },
    {
      icon: "GitBranch",
      title: "Infrastructure & CI/CD",
      description: "GCP • Docker • CI/CD • GitHub Actions • Fastlane",
      details: ["Infrastructure Design", "Deploy Automation", "Operations"],
    },
    {
      icon: "Award",
      title: "Product & Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["Product Design", "Architecture", "Documentation"],
    },
  ],
};

export const skillsSectionTexts: LocalizedData<{
  label: string;
  title: string;
  description: string;
  awards: string;
  activities: string;
  certifications: string;
}> = {
  ko: {
    label: "TECH STACK",
    title: "기술 스택",
    description: "프로젝트 요구사항에 맞춰 빠르게 학습하고 실무에 적용해온 기술들",
    awards: "수상 내역",
    activities: "주요 활동",
    certifications: "자격증",
  },
  en: {
    label: "TECH STACK",
    title: "Tech Stack",
    description: "Technologies I've quickly learned and applied to meet project requirements",
    awards: "Awards",
    activities: "Activities",
    certifications: "Certifications",
  },
};
