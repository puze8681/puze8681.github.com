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
      title: "제품 전반을 만드는 엔지니어",
      description:
        "Flutter 모바일 앱부터 Next.js 웹, Spring Boot·FastAPI 백엔드, 인프라까지 제품에 필요한 영역을 연결해 개발합니다.",
    },
    {
      title: "AI/AX를 실제 운영에 연결",
      description:
        "입시 상담, 학사 행정, 기업 재무·운영처럼 사람이 반복하던 업무를 AI와 자동화 시스템으로 전환하고 실제 사용 흐름에 안착시킵니다.",
    },
    {
      title: "0→1부터 운영까지",
      description:
        "요구사항 정리와 아키텍처 설계부터 구현, 배포, 운영 개선까지 제품 생애주기 전체를 맡아왔으며 팀 개발과 단독 구축 모두에 익숙합니다.",
    },
  ],
  en: [
    {
      title: "End-to-End Product Engineer",
      description:
        "I connect the layers a product needs, from Flutter mobile apps and Next.js web interfaces to Spring Boot/FastAPI backends and infrastructure.",
    },
    {
      title: "AI/AX for Real Operations",
      description:
        "I turn repetitive workflows in admissions consulting, academic administration, and corporate finance and operations into AI-assisted, production-ready systems.",
    },
    {
      title: "From Zero to Operations",
      description:
        "I work across requirements, architecture, implementation, deployment, and operational improvement, both independently and as part of a product team.",
    },
  ],
};

export const statsData: LocalizedData<Stat[]> = {
  ko: [
    { value: "7", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "8", label: "Awards Won" },
  ],
  en: [
    { value: "7", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
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
