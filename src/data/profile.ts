import { Profile, LocalizedData } from "./types";

export const profile: Profile = {
  name: {
    ko: "박태준",
    en: "Taejun Park",
  },
  title: {
    ko: "Product Engineer · Mobile & AI",
    en: "Product Engineer · Mobile & AI",
  },
  email: "puze8681@gmail.com",
  phone: "010-9790-8310",
  github: "https://github.com/puze8681",
  linkedin: "https://linkedin.com/in/puze8681",
  portfolio: "https://puze8681.github.io",
  summary: {
    ko: "7년간 20개 이상의 프로젝트를 수행하며 모바일 앱, 웹, 백엔드, AI/AX, 인프라까지 제품 전반을 개발했습니다. 현재 하이퍼노바에서 헤이링(Heyring) AI의 Flutter 앱과 인프라를 설계·개발하고 있습니다.",
    en: "With 7 years of experience across 20+ projects, I build products spanning mobile apps, web, backend, AI/AX, and infrastructure. I currently design and develop the Flutter app and infrastructure for Heyring AI at Hypernova.",
  },
};

export const socialLinks = [
  { icon: "Github", href: "https://github.com/puze8681", label: "GitHub" },
];
