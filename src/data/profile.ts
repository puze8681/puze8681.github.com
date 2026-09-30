import { Profile, LocalizedData } from "./types";

export const profile: Profile = {
  name: {
    ko: "박태준",
    en: "Taejun Park",
  },
  title: {
    ko: "Product Engineer · Mobile Systems · AI/AX",
    en: "Product Engineer · Mobile Systems · AI/AX",
  },
  email: "puze8681@gmail.com",
  phone: "010-9790-8310",
  github: "https://github.com/puze8681",
  linkedin: "https://linkedin.com/in/puze8681",
  portfolio: "https://puze8681.github.io",
  summary: {
    ko: "모바일 제품을 중심으로 사용자 경험, 백엔드, 배포·운영, 현장 장비와 AI 워크플로를 연결하는 7년차 Product Engineer입니다. 요구사항이 불명확한 0→1 단계부터 출시, 고객 도입과 장기 운영까지 책임져 왔습니다. 하이퍼노바에서는 헤이링(Heyring) AI의 Flutter 앱과 학습 기능을 개발하고 예약 통화 처리 인프라 개선을 설계했습니다.",
    en: "A Product Engineer with 7 years of experience connecting mobile products with backend systems, delivery, field hardware, and AI workflows. I take ambiguous problems from zero-to-one definition through launch, customer adoption, and long-term operations. At Hypernova, I built Heyring AI's Flutter app and learning experience and designed improvements to its scheduled-call infrastructure.",
  },
};

export const socialLinks = [
  { icon: "Github", href: "https://github.com/puze8681", label: "GitHub" },
];
