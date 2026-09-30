import { Experience, LocalizedData } from "./types";

export const experiencesData: LocalizedData<Experience[]> = {
  ko: [
    {
      company: "하이퍼노바",
      role: "Product Engineer",
      period: "2026.07 - 2026.09",
      projects: [
        {
          name: "헤이링(Heyring) AI",
          period: "2026.07 - 2026.09",
          description: "예약된 시간에 AI 튜터와 통화하고 맞춤형 피드백을 받는 AI 전화 기반 언어 학습 서비스",
          tasks: [
            "입사 직후 모바일 CI/CD를 구축·개선해 빌드 시간을 21분대에서 6분대로 약 71% 단축",
            "영어 전용 학습 경험을 일본어까지 확장하고, 단어·표현을 드래그해 저장·학습하는 기능 개발",
            "예약 통화 처리의 병목을 분석하고 스케줄러·디스패처·큐·통화 실행 워커로 역할을 분리한 인프라 개선 설계",
            "Flutter 앱부터 백엔드·인프라까지 제품 요구사항을 통합 구현",
          ],
        },
      ],
    },
    {
      company: "화이트블록",
      role: "서비스 개발팀 / Developer",
      period: "2021.12 - 2026.02",
      projects: [
        {
          name: "잇츠미 - It'sMe 대학 생활 통합 서비스 2.0",
          period: "2021.12 - 2026.02",
          description: "서비스와 고객사가 없던 단계에서 시작해 첫 대학 고객 도입으로 이어진 대학 생활 통합 서비스",
          tasks: [
            "입사 직후 2개월간 Flutter 기반 앱을 개발해 첫 버전을 출시",
            "출시와 함께 한국외국어대학교를 첫 고객사로 확보하는 제품 기반 마련",
            "퇴사 시점(2026.02) 13개 대학으로 확장, 도입 대학 증가분을 반영한 추정치 기준 전체 사용자 11만 명 이상·MAU 6만 명 이상",
            "EPAY 결제를 포함한 멤버십·포인트·쿠폰·결제 기능 개발",
            "외부 투자 없이 사업을 이어온 회사가 흑자 전환하는 과정에서 핵심 제품 개발·운영을 담당",
          ],
        },
        {
          name: "잇츠밀 - It's Meal",
          period: "2022.02 - 2026.02",
          description: "외부 POS·키오스크 연동 과제에서 출발해 자체 제품으로 구축한 매장 운영 통합 솔루션",
          tasks: [
            "외부 솔루션 연동보다 자체 구축이 적합하다고 판단해 신규 제품으로 설계·개발",
            "잇츠미와 함께 13개 대학에 도입되고 100개 이상 매장·300대 이상 기기에서 운영 (2026.02 기준)",
            "POS·상품관리·KDS·호출기·식권인식기·매출집계·키오스크를 하나의 운영 체계로 구축",
            "ANDNVCAT 결제와 USB·LAN·Bluetooth 프린터, 네이버 FaceSign 얼굴인식 결제 연동",
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
          period: "2019.12 - 2020.08",
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
      company: "Hypernova",
      role: "Product Engineer",
      period: "2026.07 - 2026.09",
      projects: [
        {
          name: "Heyring AI",
          period: "2026.07 - 2026.09",
          description: "AI phone-based language-learning service with scheduled tutor calls and personalized feedback",
          tasks: [
            "Introduced and optimized mobile CI/CD immediately after joining, reducing build time from 21 minutes to 6 minutes (about 71%)",
            "Expanded the English-only experience to Japanese and built drag-to-save learning for words and expressions",
            "Designed a scheduled-call architecture separating the scheduler, dispatcher, queue, and call-execution workers to remove bottlenecks",
            "Delivered product requirements across Flutter, backend, and infrastructure",
          ],
        },
      ],
    },
    {
      company: "Whiteblock",
      role: "Service Dev Team / Developer",
      period: "2021.12 - 2026.02",
      projects: [
        {
          name: "ItsMe - Campus Life Platform 2.0",
          period: "2021.12 - 2026.02",
          description: "A zero-to-one campus-life platform that grew from no service or customers to its first university customer",
          tasks: [
            "Built and launched the first Flutter app within two months of joining",
            "Established the product foundation that secured HUFS as the first customer",
            "Expanded to 13 universities; estimates adjusted for that university growth indicate 110K+ total users and 60K+ MAU at departure (Feb 2026)",
            "Built membership, points, coupons, and EPAY-integrated payments",
            "Owned core product development and operations through the company's bootstrapped path to profitability",
          ],
        },
        {
          name: "ItsMeal - It's Meal",
          period: "2022.02 - 2026.02",
          description: "An integrated store-operations product created from an external POS and kiosk integration task",
          tasks: [
            "Chose to build in-house instead of depending on external integrations and designed the new product",
            "Deployed alongside ItsMe across 13 universities, 100+ stores, and 300+ installed devices (as of Feb 2026)",
            "Unified POS, catalog management, KDS, pagers, meal-ticket readers, sales reporting, and kiosks",
            "Integrated ANDNVCAT payments, USB/LAN/Bluetooth printers, and Naver FaceSign payments",
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
          period: "2019.12 - 2020.08",
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
    description: "7년간 다양한 프로젝트를 수행하며 쌓아온 개발 경험",
  },
  en: {
    label: "Experience",
    title: "Experience",
    description: "Development experience built through various projects since 2018",
  },
};
