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
      description: "Flask • Django • Python • Node.js • Firebase",
      details: ["REST API", "Database", "Server Architecture"],
    },
    {
      icon: "Wrench",
      title: "Technical Skills",
      description: "Retrofit • Coroutine • NFC • Bluetooth • FCM",
      details: ["비동기 처리", "하드웨어 연동", "푸시 알림"],
    },
    {
      icon: "GitBranch",
      title: "DevOps & Tools",
      description: "CI/CD • GitHub Actions • Fastlane • Docker",
      details: ["배포 자동화", "버전 관리", "테스트 자동화"],
    },
    {
      icon: "Award",
      title: "Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["애자일", "PM 경험", "문서화"],
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
      description: "Flask • Django • Python • Node.js • Firebase",
      details: ["REST API", "Database", "Server Architecture"],
    },
    {
      icon: "Wrench",
      title: "Technical Skills",
      description: "Retrofit • Coroutine • NFC • Bluetooth • FCM",
      details: ["Async Processing", "Hardware Integration", "Push Notifications"],
    },
    {
      icon: "GitBranch",
      title: "DevOps & Tools",
      description: "CI/CD • GitHub Actions • Fastlane • Docker",
      details: ["Deploy Automation", "Version Control", "Test Automation"],
    },
    {
      icon: "Award",
      title: "Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["Agile", "PM Experience", "Documentation"],
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
