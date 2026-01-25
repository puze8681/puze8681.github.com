import { Experience, LocalizedData } from "./types";

export const experiencesData: LocalizedData<Experience[]> = {
  ko: [
    {
      company: "화이트블록",
      role: "서비스 개발팀 / Developer",
      period: "2021.12 - 현재 재직중",
      projects: [
        {
          name: "잇츠밀 - It's Meal",
          period: "2022.02 ~",
          description: "POS/KIOSK 등 식음료/유통 매장의 전체 인프라 통합 솔루션 어플리케이션",
          tasks: [
            "Flutter 기반 크로스플랫폼 앱 개발 및 유지보수",
            "POS, 키오스크, 주방 디스플레이 등 매장 운영 시스템 개발",
            "결제 연동, 주문 관리, 재고 관리 기능 구현",
            "지속적인 서비스 안정화 및 신규 기능 개선",
          ],
        },
        {
          name: "잇츠미 - It'sMe 종합소비플랫폼 2.0",
          period: "2021.12 ~",
          description: "크로스 플랫폼 기반 서비스 전면 리뉴얼",
          tasks: [
            "기존 네이티브 앱을 Flutter 기반 크로스플랫폼으로 전면 리뉴얼",
            "멤버십, 포인트 적립/사용, 쿠폰, 결제 등 핵심 기능 개발",
            "CI/CD 파이프라인 구축으로 배포 자동화 및 개발 효율성 향상",
            "앱 성능 최적화 및 사용자 경험 개선",
          ],
        },
        {
          name: "베리어프리 키오스크",
          period: "2024.10 ~ 2025.08",
          description: "NIA(한국지능정보사회진흥원) 검증 통과 베리어프리 키오스크",
          tasks: [
            "초도미팅부터 검증서 발급까지 전 과정 리드",
            "시각/청각/신체 접근성 기능 구현 (TTS, 수어 안내, 휠체어 높이 조절 등)",
            "시험평가기관 적합 판정 및 NIA 검증시험 통과",
          ],
        },
        {
          name: "윤잇 - yunit",
          period: "2025.08 ~ 2025.11",
          description: "프리미엄 샐러드 브랜드 윤잇의 공식 어플리케이션",
          tasks: ["프리미엄 샐러드 브랜드 윤잇의 공식 어플리케이션 개발을 담당하여 출시"],
        },
      ],
    },
    {
      company: "로플랫",
      role: "Software Engineer",
      period: "2021.02 - 2021.12",
      projects: [
        {
          name: "캐시플레이스 유지보수",
          period: "2021.02 - 2021.12",
          description: "리워드형 라이프스타일 앱",
          tasks: [
            "Android 앱과 Flask 서버 유지보수",
            "매장 상세 정보 화면에 동적 지도 UI 적용",
            "룰렛 이벤트용 웹뷰 도입",
            "쿠폰 기능 도입 및 이벤트 진행",
          ],
        },
        {
          name: "React-Native 로플랫 SDK 샘플 앱",
          period: "2021.08",
          description: "고객사를 위한 SDK 탑재 샘플 앱",
          tasks: ["Native로 제작된 SDK를 탑재한 React-Native 샘플 앱의 Android 개발 담당"],
        },
      ],
    },
    {
      company: "주식회사옷깃",
      role: "Android 개발자",
      period: "2019.12 - 2020.08",
      projects: [
        {
          name: "OKIT - 라이프로깅 서비스",
          period: "2019.12 - 2020.09",
          description: "팀 프로젝트 (Android 1인, Backend 2인, PM 및 디자인 1인)",
          tasks: [
            "Kotlin을 사용하여 Android 앱 개발 (1인 개발)",
            "Google, Facebook 회원가입, 구글맵, 푸시알림, 채팅, 방문 장소 기록 등 개발",
            "Firebase Storage, Loplat SDK 사용",
          ],
        },
      ],
    },
    {
      company: "에브리웨어",
      role: "Android 개발자",
      period: "2019.08 - 2019.10",
      projects: [
        {
          name: "EVERYWEAR - 가상 피팅 서비스",
          period: "2019.08 - 2019.10",
          description: "딥러닝을 통한 가상 피팅 서비스",
          tasks: [
            "Kotlin을 사용하여 Android 앱 개발 (1인 개발)",
            "옷 목록, 가상 피팅룸, 코디 목록, 커스텀 카메라, 푸시알림 개발",
          ],
        },
      ],
    },
  ],
  en: [
    {
      company: "Whiteblock",
      role: "Service Dev Team / Developer",
      period: "2021.12 - Present",
      projects: [
        {
          name: "ItsMeal - It's Meal",
          period: "2022.02 ~",
          description: "Integrated POS/KIOSK solution for F&B and retail stores",
          tasks: [
            "Cross-platform app development and maintenance with Flutter",
            "Developed store operation systems including POS, kiosk, kitchen display",
            "Implemented payment integration, order management, inventory management",
            "Continuous service stabilization and new feature improvements",
          ],
        },
        {
          name: "ItsMe - Consumer Platform 2.0",
          period: "2021.12 ~",
          description: "Complete service renewal based on cross-platform",
          tasks: [
            "Full renewal of native app to Flutter-based cross-platform",
            "Developed core features: membership, points, coupons, payments",
            "Built CI/CD pipeline for deployment automation and dev efficiency",
            "App performance optimization and UX improvements",
          ],
        },
        {
          name: "Barrier-Free Kiosk",
          period: "2024.10 ~ 2025.08",
          description: "NIA (National Information Society Agency) certified barrier-free kiosk",
          tasks: [
            "Led entire process from initial meeting to certification",
            "Implemented accessibility features (TTS, sign language, wheelchair height adjustment)",
            "Passed testing agency evaluation and NIA certification",
          ],
        },
        {
          name: "Yooneat - yunit",
          period: "2025.08 ~ 2025.11",
          description: "Official app for premium salad brand Yooneat",
          tasks: ["Developed and launched the official app for premium salad brand Yooneat"],
        },
      ],
    },
    {
      company: "Loplat",
      role: "Software Engineer",
      period: "2021.02 - 2021.12",
      projects: [
        {
          name: "CashPlace Maintenance",
          period: "2021.02 - 2021.12",
          description: "Reward-based lifestyle app",
          tasks: [
            "Maintained Android app and Flask server",
            "Implemented dynamic map UI for store details",
            "Introduced webview for roulette events",
            "Implemented coupon features and events",
          ],
        },
        {
          name: "React-Native Loplat SDK Sample App",
          period: "2021.08",
          description: "SDK sample app for clients",
          tasks: ["Developed Android part of React-Native sample app with native SDK"],
        },
      ],
    },
    {
      company: "Otgit Inc.",
      role: "Android Developer",
      period: "2019.12 - 2020.08",
      projects: [
        {
          name: "OKIT - Life Logging Service",
          period: "2019.12 - 2020.09",
          description: "Team project (Android 1, Backend 2, PM/Design 1)",
          tasks: [
            "Developed Android app using Kotlin (solo dev)",
            "Built Google/Facebook login, maps, push notifications, chat, location logging",
            "Used Firebase Storage, Loplat SDK",
          ],
        },
      ],
    },
    {
      company: "Everywear",
      role: "Android Developer",
      period: "2019.08 - 2019.10",
      projects: [
        {
          name: "EVERYWEAR - Virtual Fitting Service",
          period: "2019.08 - 2019.10",
          description: "Deep learning-based virtual fitting service",
          tasks: [
            "Developed Android app using Kotlin (solo dev)",
            "Built clothes list, virtual fitting room, outfit list, custom camera, push notifications",
          ],
        },
      ],
    },
  ],
};

export const experienceSectionTexts: LocalizedData<{
  label: string;
  title: string;
  description: string;
}> = {
  ko: {
    label: "Experience",
    title: "경력",
    description: "2018년부터 다양한 프로젝트를 수행하며 쌓아온 개발 경험",
  },
  en: {
    label: "Experience",
    title: "Experience",
    description: "Development experience built through various projects since 2018",
  },
};
