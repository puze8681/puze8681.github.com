import { Profile, LocalizedData } from "./types";

export const profile: Profile = {
  name: {
    ko: "박태준",
    en: "Taejun Park",
  },
  title: {
    ko: "Mobile & Full-Stack Developer",
    en: "Mobile & Full-Stack Developer",
  },
  email: "puze8681@gmail.com",
  phone: "010-9790-8310",
  github: "https://github.com/puze8681",
  linkedin: "https://linkedin.com/in/puze8681",
  portfolio: "https://puze8681.github.io",
  summary: {
    ko: "8년간 16개 이상의 프로젝트를 수행하며 모바일 앱 개발부터 백엔드, 프론트엔드까지 다양한 영역의 개발 경험을 쌓았습니다. 현재는 Flutter 기반 크로스 플랫폼 앱 개발을 주로 담당하고 있습니다.",
    en: "With 8 years of experience across 16+ projects, I've built expertise spanning mobile apps, backend, and frontend development. Currently focusing on Flutter-based cross-platform app development.",
  },
};

export const socialLinks = [
  { icon: "Github", href: "https://github.com/puze8681", label: "GitHub" },
];
