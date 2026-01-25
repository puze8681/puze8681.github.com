import { Education, Strength, Stat, LocalizedData } from "./types";

export const educationData: LocalizedData<Education[]> = {
  ko: [
    {
      name: "소프트웨어 마에스트로 9기",
      major: "과학기술정보통신부 주관 SW 인재 양성 프로그램",
      period: "2018.06 - 2018.12",
    },
    {
      name: "한국외국어대학교",
      major: "컴퓨터 공학부",
      period: "2020.03 - 현재 재학중",
    },
    {
      name: "선린인터넷고등학교",
      major: "소프트웨어 개발 및 프로그래밍",
      period: "2016.03 - 2019.02",
    },
  ],
  en: [
    {
      name: "SW Maestro 9th",
      major: "SW Talent Program by Ministry of Science and ICT",
      period: "2018.06 - 2018.12",
    },
    {
      name: "Hankuk University of Foreign Studies",
      major: "Computer Science",
      period: "2020.03 - Present",
    },
    {
      name: "Sunrin Internet High School",
      major: "Software Development & Programming",
      period: "2016.03 - 2019.02",
    },
  ],
};

export const strengthsData: LocalizedData<Strength[]> = {
  ko: [
    {
      title: "모바일 개발 특화",
      description:
        "2017년부터 iOS, Android 네이티브 앱 개발을 시작했고, 현재는 주로 Flutter로 크로스 플랫폼 앱을 개발하고 있습니다. 필요한 경우 React 웹이나 Python 서버 작업도 진행합니다.",
    },
    {
      title: "프로젝트에 맞춰 기술 학습",
      description:
        "프로젝트 요구사항에 따라 Flutter, Kotlin, Swift, React 등 필요한 기술을 학습하며 적용해왔습니다. 새로운 기술이 필요하면 문서와 예제를 보며 빠르게 익히는 편입니다.",
    },
    {
      title: "혼자서도, 팀에서도",
      description:
        "소규모 프로젝트는 기획부터 배포까지 혼자 진행한 경험이 있고, 잇츠밀/잇츠미처럼 4년간 팀 단위로 개발한 경험도 있습니다. Jira, Figma, Slack 등 협업 툴 사용에 익숙합니다.",
    },
  ],
  en: [
    {
      title: "Mobile Development Specialist",
      description:
        "Started iOS and Android native development in 2017, now mainly building cross-platform apps with Flutter. Also work on React web and Python server when needed.",
    },
    {
      title: "Learning Tech for Projects",
      description:
        "I've learned and applied Flutter, Kotlin, Swift, React based on project needs. When new tech is required, I quickly pick it up through docs and examples.",
    },
    {
      title: "Solo or Team Player",
      description:
        "I've handled small projects from planning to deployment alone, and also worked in teams for 4 years on projects like ItsMeal/ItsMe. Comfortable with Jira, Figma, Slack.",
    },
  ],
};

export const statsData: LocalizedData<Stat[]> = {
  ko: [
    { value: "8+", label: "Years Experience" },
    { value: "16+", label: "Projects Completed" },
    { value: "8", label: "Awards Won" },
  ],
  en: [
    { value: "8+", label: "Years Experience" },
    { value: "16+", label: "Projects Completed" },
    { value: "8", label: "Awards Won" },
  ],
};

export const aboutSectionTexts: LocalizedData<{
  label: string;
  title: string;
  education: string;
}> = {
  ko: {
    label: "ABOUT ME",
    title: "소개",
    education: "학력/수료",
  },
  en: {
    label: "ABOUT ME",
    title: "About",
    education: "Education/Training",
  },
};
