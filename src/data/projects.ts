import {
  Project,
  MajorProject,
  ProjectHighlight,
  BarrierFreeProject,
  ProjectImage,
  LocalizedData,
} from "./types";

// Slug 생성 함수
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// 잇츠밀 디자인 이미지
export const itsmealDesignImages = {
  pos: [
    { src: "/images/itsmeal/pos1.png", alt: "POS Main" },
    { src: "/images/itsmeal/pos2.png", alt: "POS Order" },
    { src: "/images/itsmeal/pos3.png", alt: "POS Payment" },
  ],
  kiosk: [
    { src: "/images/itsmeal/kiosk1.png", alt: "Kiosk Main" },
    { src: "/images/itsmeal/kiosk2.png", alt: "Kiosk Menu" },
    { src: "/images/itsmeal/kiosk3.png", alt: "Kiosk Options" },
    { src: "/images/itsmeal/kiosk4.png", alt: "Kiosk Payment" },
  ],
};

// 잇츠미 앱 디자인 이미지
export const itsmeDesignImages: ProjectImage[] = [
  { src: "/images/itsme/itsme1.png", alt: "ItsMe Screen 1" },
  { src: "/images/itsme/itsme2.png", alt: "ItsMe Screen 2" },
  { src: "/images/itsme/itsme3.png", alt: "ItsMe Screen 3" },
  { src: "/images/itsme/itsme4.png", alt: "ItsMe Screen 4" },
  { src: "/images/itsme/itsme5.png", alt: "ItsMe Screen 5" },
  { src: "/images/itsme/itsme6.png", alt: "ItsMe Screen 6" },
];

// 베리어프리 키오스크 링크
export const barrierFreeLinks = {
  landing: "https://barrierfree.itsme.id/",
  manual: "/files/itsmeal/붙임3_사용자 취급 설명서_(주)화이트블록_잇츠미 배리어프리 키오스크_ITSME-BK1.pdf",
};

// 베리어프리 키오스크 NIA 검증
export const barrierFreeProjectData: LocalizedData<BarrierFreeProject> = {
  ko: {
    title: "베리어프리 키오스크 NIA 검증",
    period: "10개월 (초도미팅 ~ 검증서 발급)",
    certification: "NIA 한국지능정보사회진흥원 검증 통과",
    description:
      "시험평가기관 적합 판정 및 NIA(한국지능정보사회진흥원) 검증시험을 통과하여 검증서를 발급받은 베리어프리 키오스크입니다. 초도미팅부터 검증서 발급까지 전 과정을 리드하여 10개월간 개발을 진행했습니다.",
    features: [
      {
        category: "음성 안내 시스템",
        items: [
          "TTS 기반 전체 UI 음성 피드백",
          "페이지별 음성 안내 및 포커스 관리",
          "버튼/옵션 선택 시 실시간 음성 피드백",
          "결제 프로세스 단계별 음성 가이드",
        ],
      },
      {
        category: "시각 접근성",
        items: [
          "고대비 모드 (색상 반전, 외곽선 강화)",
          "화면 확대 기능",
          "폰트 크기 조절",
          "일러스트/아이콘 고대비 적용",
        ],
      },
      {
        category: "신체 접근성",
        items: [
          "낮은 자세 모드 (휠체어 사용자 대응)",
          "터치 영역 확대",
          "근접 센서 연동 (1m 이내 접근 감지)",
          "외곽선 두께 강화 (0.5→1, 1.5→2)",
        ],
      },
      {
        category: "검증 프로세스",
        items: ["시험평가기관 적합 판정", "NIA 검증시험 통과", "검증서 발급 완료", "전 과정 리드"],
      },
    ],
  },
  en: {
    title: "Barrier-Free Kiosk NIA Certification",
    period: "10 months (Initial meeting ~ Certification)",
    certification: "NIA Korea Certification Passed",
    description:
      "A barrier-free kiosk that passed the NIA (National Information Society Agency) certification test. Led the entire process from initial meeting to certification issuance over 10 months.",
    features: [
      {
        category: "Voice Guidance",
        items: [
          "TTS-based full UI voice feedback",
          "Page-specific voice guide & focus management",
          "Real-time voice feedback on button/option selection",
          "Step-by-step voice guide for payment process",
        ],
      },
      {
        category: "Visual Accessibility",
        items: [
          "High contrast mode (color inversion, outline enhancement)",
          "Screen magnification",
          "Font size adjustment",
          "High contrast for illustrations/icons",
        ],
      },
      {
        category: "Physical Accessibility",
        items: [
          "Low posture mode (wheelchair user support)",
          "Enlarged touch areas",
          "Proximity sensor (1m detection)",
          "Enhanced outline thickness (0.5→1, 1.5→2)",
        ],
      },
      {
        category: "Certification Process",
        items: [
          "Test agency compliance approval",
          "NIA certification test passed",
          "Certificate issued",
          "Led entire process",
        ],
      },
    ],
  },
};

// 잇츠밀 주요 개발 내역
export const itsmealHighlightsData: LocalizedData<ProjectHighlight[]> = {
  ko: [
    {
      category: "키오스크 시스템",
      commits: "209+",
      features: [
        "베리어프리 키오스크 (NIA 검증 통과)",
        "다국어 지원 (한국어/영어/중국어)",
        "전화번호 멤버십 인증 및 NFC 카드 태그 인증",
        "포인트 분할결제 및 충전 기능",
        "알림톡 수신 기능 연동",
      ],
    },
    {
      category: "POS 시스템",
      commits: "145+",
      features: [
        "실물 카드 결제 모듈 연동 (NVCAT, WVCAT, JTNET)",
        "현금영수증 발행/취소",
        "매출 통계 및 정산서 기능",
        "듀얼 디스플레이 제어",
      ],
    },
    {
      category: "결제 시스템",
      commits: "430+",
      features: [
        "카드/바코드/QR 결제 처리",
        "Payco, 네이버페이, 위챗페이 연동",
        "멤버십 포인트/쿠폰 결제",
        "환불 및 망취소 로직",
      ],
    },
    {
      category: "하드웨어 연동",
      commits: "150+",
      features: [
        "영수증/식권 프린터 연동 (USB, 내장, Bluetooth)",
        "NFC 리더기 (ACR1252U, ACR1552)",
        "바코드/QR 스캐너",
        "듀얼 디스플레이 (K2, D2, T2s)",
      ],
    },
    {
      category: "DevOps",
      commits: "50+",
      features: [
        "GitHub Actions APK 자동 빌드 및 배포",
        "Slack 알림 (빌드 성공/실패)",
        "Sentry/Mixpanel 에러 추적",
        "버전 히스토리 관리",
      ],
    },
  ],
  en: [
    {
      category: "Kiosk System",
      commits: "209+",
      features: [
        "Barrier-free kiosk (NIA certified)",
        "Multi-language support (Korean/English/Chinese)",
        "Phone membership & NFC card authentication",
        "Point split payment & charging",
        "KakaoTalk notification integration",
      ],
    },
    {
      category: "POS System",
      commits: "145+",
      features: [
        "Card payment module integration (NVCAT, WVCAT, JTNET)",
        "Cash receipt issue/cancel",
        "Sales statistics & settlement reports",
        "Dual display control",
      ],
    },
    {
      category: "Payment System",
      commits: "430+",
      features: [
        "Card/Barcode/QR payment processing",
        "Payco, NaverPay, WeChatPay integration",
        "Membership point/coupon payment",
        "Refund & network cancel logic",
      ],
    },
    {
      category: "Hardware Integration",
      commits: "150+",
      features: [
        "Receipt/meal ticket printer (USB, built-in, Bluetooth)",
        "NFC reader (ACR1252U, ACR1552)",
        "Barcode/QR scanner",
        "Dual display (K2, D2, T2s)",
      ],
    },
    {
      category: "DevOps",
      commits: "50+",
      features: [
        "GitHub Actions APK auto build & deploy",
        "Slack notifications (build success/failure)",
        "Sentry/Mixpanel error tracking",
        "Version history management",
      ],
    },
  ],
};

// 잇츠미 주요 개발 내역
export const itsmeHighlightsData: LocalizedData<ProjectHighlight[]> = {
  ko: [
    {
      category: "결제/장바구니",
      commits: "240+",
      features: [
        "장바구니 로직 전면 개선 (cart_bloc, local_cart_bloc)",
        "멤버십 포인트/쿠폰 결제 시스템",
        "오프라인 결제 및 네트워크 끊김 처리",
        "결제수단 동적 관리 (Cart Manager)",
      ],
    },
    {
      category: "멤버십 시스템",
      commits: "133+",
      features: [
        "멤버십 인증 및 포인트 적립",
        "쿠폰 사용/취소 로직",
        "멤버십별 할인 정책 적용",
        "바코드/QR 멤버십 처리",
      ],
    },
    {
      category: "CI/CD 구축",
      commits: "29+",
      features: [
        "Fastlane 배포 자동화 (iOS/Android)",
        "내부 테스터 배포 파이프라인",
        "빌드넘버 자동 증가",
        "멀티 환경 설정 (Dev/Staging/Prod)",
      ],
    },
    {
      category: "앱 개선",
      commits: "200+",
      features: [
        "딥링크 시스템 구현",
        "다국어(i18n) 지원 시스템",
        "Sentry 에러 추적 일원화",
        "GetX 충돌 해결 및 빌드 환경 업그레이드",
      ],
    },
  ],
  en: [
    {
      category: "Payment/Cart",
      commits: "240+",
      features: [
        "Cart logic overhaul (cart_bloc, local_cart_bloc)",
        "Membership point/coupon payment system",
        "Offline payment & network disconnect handling",
        "Dynamic payment method management (Cart Manager)",
      ],
    },
    {
      category: "Membership System",
      commits: "133+",
      features: [
        "Membership auth & point accumulation",
        "Coupon use/cancel logic",
        "Membership-specific discount policies",
        "Barcode/QR membership processing",
      ],
    },
    {
      category: "CI/CD Setup",
      commits: "29+",
      features: [
        "Fastlane deployment automation (iOS/Android)",
        "Internal tester deployment pipeline",
        "Auto build number increment",
        "Multi-environment config (Dev/Staging/Prod)",
      ],
    },
    {
      category: "App Improvements",
      commits: "200+",
      features: [
        "Deep link system implementation",
        "i18n multi-language support",
        "Sentry error tracking unification",
        "GetX conflict resolution & build upgrade",
      ],
    },
  ],
};

// 주요 프로젝트 데이터
export const majorProjectsData: LocalizedData<MajorProject[]> = {
  ko: [
    {
      id: 1,
      slug: "itsmeal",
      tag: "Flutter",
      title: "잇츠밀 - It's Meal",
      period: "2022.02 ~ 2026.02",
      description:
        "식음료/유통 매장의 POS, 키오스크, 식권 리더기 통합 솔루션. 4년간 2,656 commits으로 지속적인 기능 개발과 유지보수를 담당했습니다.",
      tech: ["Flutter", "Dart", "Sentry", "GitHub Actions", "Slack"],
      links: [],
      stats: { commits: "2,656", years: "4년", features: "키오스크/POS/리더기" },
      hasDesignImages: true,
      hasHighlights: "itsmeal",
    },
    {
      id: 2,
      slug: "itsme",
      tag: "Flutter",
      title: "잇츠미 - It'sMe 2.0",
      period: "2021.12 ~ 2026.02",
      description:
        "종합소비플랫폼의 Flutter 기반 크로스 플랫폼 서비스. 4년간 1,317 commits으로 결제/장바구니 시스템 전면 개선, iOS/Android CI/CD 구축을 담당했습니다.",
      tech: ["Flutter", "Dart", "Fastlane", "Firebase", "BLoC"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=id.itsme.mobile" },
        { label: "App Store", url: "https://apps.apple.com/kr/app/잇츠미-itsme/id1512735891" },
      ],
      stats: { commits: "1,317", years: "4년", features: "iOS/Android 크로스 플랫폼" },
      hasAppDesignImages: true,
      hasHighlights: "itsme",
    },
  ],
  en: [
    {
      id: 1,
      slug: "itsmeal",
      tag: "Flutter",
      title: "ItsMeal - It's Meal",
      period: "2022.02 ~ 2026.02",
      description:
        "Integrated POS, kiosk, and meal ticket reader solution for F&B/retail stores. Led continuous feature development and maintenance with 2,656 commits over 4 years.",
      tech: ["Flutter", "Dart", "Sentry", "GitHub Actions", "Slack"],
      links: [],
      stats: { commits: "2,656", years: "4 yrs", features: "Kiosk/POS/Reader" },
      hasDesignImages: true,
      hasHighlights: "itsmeal",
    },
    {
      id: 2,
      slug: "itsme",
      tag: "Flutter",
      title: "ItsMe - It'sMe 2.0",
      period: "2021.12 ~ 2026.02",
      description:
        "Flutter-based cross-platform service for consumer platform. Led payment/cart system overhaul and iOS/Android CI/CD setup with 1,317 commits over 4 years.",
      tech: ["Flutter", "Dart", "Fastlane", "Firebase", "BLoC"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=id.itsme.mobile" },
        { label: "App Store", url: "https://apps.apple.com/kr/app/잇츠미-itsme/id1512735891" },
      ],
      stats: { commits: "1,317", years: "4 yrs", features: "iOS/Android Cross-platform" },
      hasAppDesignImages: true,
      hasHighlights: "itsme",
    },
  ],
};

// 기타 프로젝트 데이터
export const otherProjectsData: LocalizedData<Project[]> = {
  ko: [
    {
      id: 3,
      slug: "yunit",
      tag: "Flutter",
      title: "윤잇 - Yunit 브랜드 앱",
      period: "2025.07 - 2025.11",
      description:
        "윤잇 브랜드의 공식 모바일 앱입니다. PG 결제 연동, 구독 정기결제 시스템, 쿠폰 관리, 푸시 알림 설정 등 전체 커머스 기능을 개발했습니다.",
      tech: ["Flutter", "Dart", "PG결제", "FCM", "구독결제"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=co.whiteblock.yunit" },
        { label: "App Store", url: "https://apps.apple.com/us/app/%EC%9C%A4%EC%9E%87-u-need-it/id6746188854" },
      ],
      commits: "71",
      images: [
        { src: "/images/yunit/yunit1.png", alt: "Yunit App 1" },
        { src: "/images/yunit/yunit2.png", alt: "Yunit App 2" },
        { src: "/images/yunit/yunit3.png", alt: "Yunit App 3" },
      ],
    },
    {
      id: 4,
      slug: "klpga-kiosk",
      tag: "Flutter",
      title: "KLPGA 입장권 키오스크",
      period: "2025.04 - 2025.08",
      description:
        "KLPGA 골프 대회의 현장 입장권 발권 키오스크입니다. 티켓 선택, 수량 관리, 재고 연동, 결제 처리까지 전체 발권 플로우를 개발했습니다.",
      tech: ["Flutter", "Dart", "Kiosk", "결제연동"],
      links: [],
      commits: "16",
      features: ["1차: 수원CC (2024.05.09~05.12)", "2차: 포천힐스CC (2024.08.20~08.24)"],
      images: [
        { src: "/images/klpga/klpga1.png", alt: "KLPGA Kiosk 1" },
        { src: "/images/klpga/klpga2.png", alt: "KLPGA Kiosk 2" },
        { src: "/images/klpga/klpga3.png", alt: "KLPGA Kiosk 3" },
      ],
    },
    {
      id: 5,
      slug: "bankx",
      tag: "Flutter Windows",
      title: "BankX - Windows POS Agent",
      period: "2025.04 - 2025.08",
      description:
        "플레이플래닛 POS용 Windows 에이전트 앱입니다. 항상 위에 표시되는 플로팅 버튼 모드, USB 영수증 프린터 연동, 결제 내역 관리 기능을 제공합니다.",
      tech: ["Flutter", "Dart", "Windows", "ESC/POS", "Thermal Printer"],
      links: [],
      commits: "31",
      features: [
        "플로팅 버튼 모드 (Always on Top)",
        "USB 영수증 프린터 연동 (ESC/POS)",
        "한글 영수증 출력 (EUC-KR 인코딩)",
        "결제/환불 내역 관리",
      ],
      images: [
        { src: "/images/bankx/bankx1.png", alt: "BankX Main" },
        { src: "/images/bankx/bankx2.png", alt: "BankX History" },
        { src: "/images/bankx/bankx3.png", alt: "BankX Screen 3" },
      ],
    },
    {
      id: 6,
      slug: "raintown-coupon",
      tag: "Flutter / Web",
      title: "레인타운쿠폰",
      period: "2025.02 - 현재",
      description:
        "레인타운 쿠폰 서비스의 모바일 앱입니다. 디자인부터 Flutter 앱 개발, 배포, Firebase 기반 백엔드 연동까지 전체 개발을 담당했습니다.",
      tech: ["Flutter", "Dart", "Firebase", "React", "Next.js"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=kr.puze.couponmarket" },
        { label: "App Store", url: "https://apps.apple.com/app/id6744193169" },
      ],
      commits: "94",
      features: [
        "쿠폰 사용 시스템 (로그인/전화번호 인증)",
        "월별 매장당 1회 사용 제한",
        "PIN 코드 검증 및 재고 관리",
        "React 기반 관리자 웹 개발",
      ],
      images: [
        { src: "/images/raintown/raintown-mobile-1.jpeg", alt: "Raintown App 1" },
        { src: "/images/raintown/raintown-mobile-2.jpeg", alt: "Raintown App 2" },
        { src: "/images/raintown/raintown-mobile-3.jpeg", alt: "Raintown App 3" },
      ],
    },
    {
      id: 7,
      slug: "chewing",
      tag: "Android Native",
      title: "츄잉 - 학원 결제 솔루션",
      period: "2025.07 - 2025.09",
      description:
        "학원/교육기관용 결제 및 출결 관리 Android 앱입니다. Jetpack Compose 기반 UI, WVCAT 결제 모듈 연동, DeepPass 얼굴인식 결제를 지원합니다.",
      tech: ["Kotlin", "Jetpack Compose", "WVCAT", "DeepPass"],
      links: [],
      commits: "79",
      features: [
        "DeepPass 얼굴인식 결제",
        "WVCAT 결제 모듈 연동",
        "바코드 스캐너 연동",
        "출결 관리 및 전화번호 인증",
      ],
      images: [
        { src: "/images/chewing/chewing1.png", alt: "Chewing 1" },
        { src: "/images/chewing/chewing2.png", alt: "Chewing 2" },
        { src: "/images/chewing/chewing3.png", alt: "Chewing 3" },
      ],
    },
    {
      id: 8,
      slug: "wvcat",
      tag: "Android Module",
      title: "WVCAT - 결제 모듈 통합 라이브러리",
      period: "2024.07 - 2025.04",
      description:
        "나이스정보통신(NVCAT), 제이티넷(JTNET) 등 4개의 서로 다른 결제 단말기 프로토콜을 하나의 통합 인터페이스로 모듈화한 Android 라이브러리입니다.",
      tech: ["Kotlin", "Android Library", "결제 프로토콜"],
      links: [],
      commits: "61",
      features: [
        "NVCAT/WVCAT/JTNET/AppPos 4개 결제 모듈 통합",
        "카드/현금영수증/QR/카카오페이/위챗페이 지원",
        "망취소 로직 및 서명 입력 기능",
        "Provider 패턴 기반 확장 가능한 아키텍처",
      ],
    },
    {
      id: 9,
      slug: "chzzk-kiosk",
      tag: "Flutter",
      title: "치지직 팝업스토어 키오스크",
      period: "2024.04 - 2024.05",
      description:
        "네이버 치지직(Chzzk) 팝업스토어용 키오스크입니다. 치지직 브랜드 맞춤 UI, Face Sign 얼굴인식 결제, NR-100 시리얼 단말기 연동을 통한 잇츠미페이 결제 기능을 개발했습니다.",
      tech: ["Flutter", "Dart", "Face Sign", "Serial 통신"],
      links: [{ label: "관련 기사", url: "https://fficial.naver.com/contentDetail/81" }],
      commits: "59",
      features: [
        "치지직 브랜드 커스텀 UI/테마 개발",
        "Face Sign 얼굴인식 결제 연동",
        "NR-100 시리얼 단말기 잇츠미페이 연동",
        "영수증 없는 페이퍼리스 운영",
      ],
      images: [
        { src: "/images/chzzk/메인배너_로고시안_1_0416.png", alt: "Chzzk Banner" },
        { src: "/images/chzzk/Slide 16_9 - 2.png", alt: "Chzzk Kiosk 1" },
        { src: "/images/chzzk/Slide 16_9 - 9.png", alt: "Chzzk Kiosk 2" },
      ],
    },
    {
      id: 10,
      slug: "cashplace",
      tag: "Android / Flask",
      title: "캐시플레이스 - 리워드형 라이프스타일 앱",
      period: "2021.02 - 2021.12",
      description:
        "로플랫 재직 시 담당한 리워드형 라이프스타일 앱입니다. Android 앱과 Flask 서버 유지보수, 매장 상세 화면 동적 지도 UI, 룰렛 이벤트 웹뷰, 쿠폰 기능 등을 개발했습니다.",
      tech: ["Kotlin", "Flask", "Python", "WebView"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.loplat.cashplace" },
      ],
      images: [
        { src: "/images/cashplace/cashplace1.webp", alt: "CashPlace 1" },
        { src: "/images/cashplace/cashplace2.webp", alt: "CashPlace 2" },
        { src: "/images/cashplace/cashplace3.webp", alt: "CashPlace 3" },
      ],
    },
    {
      id: 11,
      slug: "okit",
      tag: "Android",
      title: "OKIT - 옷깃만 스쳐도 인연",
      period: "2019.12 - 2020.09",
      description:
        "Loplat SDK를 사용하여 방문한 장소를 기록하는 '라이프로깅' 서비스입니다. 같은 장소를 방문한 사용자를 매칭해주며 해당 장소에 대한 기록을 공유할 수 있습니다.",
      tech: ["Kotlin", "Firebase", "Google Maps", "Loplat SDK"],
      links: [
        {
          label: "관련 기사",
          url: "https://plus.hankyung.com/apps/newsinside.view?aid=202301206412d&category=&sns=y",
        },
      ],
      portfolioImages: [
        { src: "/images/okit/okit1.jpg", alt: "OKIT Portfolio 1" },
        { src: "/images/okit/okit2.jpg", alt: "OKIT Portfolio 2" },
      ],
    },
    {
      id: 12,
      slug: "athermo",
      tag: "Android",
      title: "에이써모 - 학원 등하원 출결 체온계",
      period: "2019.10 - 2019.12",
      description:
        "모바일 디바이스와 블루투스 방식의 RFID 출결 리더기, 체온계, NFC가 연동되어 출결 체크와 체온 측정을 동시에 할 수 있는 서비스입니다.",
      tech: ["Kotlin", "NFC", "Coroutine", "Retrofit"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=kr.co.amansystem.athermo" },
      ],
      portfolioImages: [
        { src: "/images/athermo/athermo1.jpg", alt: "Athermo Portfolio 1" },
        { src: "/images/athermo/athermo2.jpg", alt: "Athermo Portfolio 2" },
      ],
    },
    {
      id: 13,
      slug: "everywear",
      tag: "Android",
      title: "EVERYWEAR - 모든 옷을 입어보다",
      period: "2019.08 - 2019.10",
      description:
        "딥러닝을 통한 가상 피팅 서비스입니다. 사용자의 사진에 다양한 옷들을 골라서 입혀볼 수 있습니다.",
      tech: ["Kotlin", "Retrofit", "FCM", "Deep Learning"],
      links: [{ label: "관련 기사", url: "https://m.blog.naver.com/sw_maestro/221565858967" }],
      portfolioImages: [
        { src: "/images/everywear/everywear1.jpg", alt: "EVERYWEAR Portfolio 1" },
        { src: "/images/everywear/everywear2.jpg", alt: "EVERYWEAR Portfolio 2" },
      ],
    },
    {
      id: 14,
      slug: "dodamdodam",
      tag: "Android",
      title: "도담도담 - 꺼내 먹는 한국어",
      period: "2018.06 - 2018.11",
      description:
        "소프트웨어 마에스트로 연수 과정에서 진행한 프로젝트로 외국인을 위한 모바일 한국어 회화 학습 서비스입니다.",
      tech: ["Kotlin", "Retrofit", "Facebook API", "Chat Bot"],
      links: [
        { label: "YouTube", url: "https://www.youtube.com/watch?v=SdISusebco8" },
        { label: "관련 기사", url: "https://m.blog.naver.com/sw_maestro/221321798349" },
      ],
      portfolioImages: [
        { src: "/images/dodamdodam/dodamdodam1.jpg", alt: "Dodamdodam Portfolio 1" },
        { src: "/images/dodamdodam/dodamdodam2.jpg", alt: "Dodamdodam Portfolio 2" },
      ],
    },
    {
      id: 15,
      slug: "petfeed",
      tag: "PM / 기획",
      title: "PetFeed - 너와 나의 반려동물",
      period: "2018.05 - 2018.10",
      description:
        "반려동물 미디어를 공유하는 반려동물 SNS입니다. Material Design 2.0을 디자인 가이드로 UX를 설계했습니다.",
      tech: ["Android", "iOS", "Material Design 2.0"],
      links: [{ label: "관련 기사", url: "https://www.opinionnews.co.kr/news/articleView.html?idxno=11957" }],
      hasPdfFile: true,
      portfolioImages: [
        { src: "/images/petfeed/petfeed1.jpg", alt: "PetFeed Portfolio 1" },
        { src: "/images/petfeed/petfeed2.jpg", alt: "PetFeed Portfolio 2" },
      ],
    },
    {
      id: 16,
      slug: "safe-neck",
      tag: "iOS",
      title: "Safe Neck - 자세 교정 솔루션",
      period: "2017.05 - 2017.10",
      description:
        "올바른 자세 습관을 도와주는 IoT 자세 교정 솔루션으로 SK 스마틴 앱 챌린지 2017 대회의 IoT 부문에서 장려상을 수상하였습니다.",
      tech: ["Swift", "Alamofire", "Bluetooth 4.0", "IoT"],
      links: [],
      portfolioImages: [
        { src: "/images/safeneck/safeneck1.jpg", alt: "Safe Neck Portfolio 1" },
        { src: "/images/safeneck/safeneck2.jpg", alt: "Safe Neck Portfolio 2" },
      ],
    },
  ],
  en: [
    {
      id: 3,
      slug: "yunit",
      tag: "Flutter",
      title: "Yooneat - Yunit Brand App",
      period: "2025.07 - 2025.11",
      description:
        "Official mobile app for Yooneat brand. Developed full commerce features including PG payment integration, subscription billing system, coupon management, and push notification settings.",
      tech: ["Flutter", "Dart", "PG Payment", "FCM", "Subscription"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=co.whiteblock.yunit" },
        { label: "App Store", url: "https://apps.apple.com/us/app/%EC%9C%A4%EC%9E%87-u-need-it/id6746188854" },
      ],
      commits: "71",
      images: [
        { src: "/images/yunit/yunit1.png", alt: "Yunit App 1" },
        { src: "/images/yunit/yunit2.png", alt: "Yunit App 2" },
        { src: "/images/yunit/yunit3.png", alt: "Yunit App 3" },
      ],
    },
    {
      id: 4,
      slug: "klpga-kiosk",
      tag: "Flutter",
      title: "KLPGA Ticket Kiosk",
      period: "2025.04 - 2025.08",
      description:
        "On-site ticket issuing kiosk for KLPGA golf tournaments. Developed the entire ticketing flow including ticket selection, quantity management, inventory sync, and payment processing.",
      tech: ["Flutter", "Dart", "Kiosk", "Payment Integration"],
      links: [],
      commits: "16",
      features: ["1st: Suwon CC (2024.05.09~05.12)", "2nd: Pocheon Hills CC (2024.08.20~08.24)"],
      images: [
        { src: "/images/klpga/klpga1.png", alt: "KLPGA Kiosk 1" },
        { src: "/images/klpga/klpga2.png", alt: "KLPGA Kiosk 2" },
        { src: "/images/klpga/klpga3.png", alt: "KLPGA Kiosk 3" },
      ],
    },
    {
      id: 5,
      slug: "bankx",
      tag: "Flutter Windows",
      title: "BankX - Windows POS Agent",
      period: "2025.04 - 2025.08",
      description:
        "Windows agent app for PlayPlanet POS. Provides always-on-top floating button mode, USB receipt printer integration, and payment history management.",
      tech: ["Flutter", "Dart", "Windows", "ESC/POS", "Thermal Printer"],
      links: [],
      commits: "31",
      features: [
        "Floating button mode (Always on Top)",
        "USB receipt printer integration (ESC/POS)",
        "Korean receipt printing (EUC-KR encoding)",
        "Payment/refund history management",
      ],
      images: [
        { src: "/images/bankx/bankx1.png", alt: "BankX Main" },
        { src: "/images/bankx/bankx2.png", alt: "BankX History" },
        { src: "/images/bankx/bankx3.png", alt: "BankX Screen 3" },
      ],
    },
    {
      id: 6,
      slug: "raintown-coupon",
      tag: "Flutter / Web",
      title: "Raintown Coupon",
      period: "2025.02 - Present",
      description:
        "Mobile app for Raintown coupon service. Handled entire development from design to Flutter app development, deployment, and Firebase backend integration.",
      tech: ["Flutter", "Dart", "Firebase", "React", "Next.js"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=kr.puze.couponmarket" },
        { label: "App Store", url: "https://apps.apple.com/app/id6744193169" },
      ],
      commits: "94",
      features: [
        "Coupon system (login/phone verification)",
        "Once per store per month limit",
        "PIN code verification & inventory management",
        "React-based admin web development",
      ],
      images: [
        { src: "/images/raintown/raintown-mobile-1.jpeg", alt: "Raintown App 1" },
        { src: "/images/raintown/raintown-mobile-2.jpeg", alt: "Raintown App 2" },
        { src: "/images/raintown/raintown-mobile-3.jpeg", alt: "Raintown App 3" },
      ],
    },
    {
      id: 7,
      slug: "chewing",
      tag: "Android Native",
      title: "Chewing - Academy Payment Solution",
      period: "2025.07 - 2025.09",
      description:
        "Payment and attendance management Android app for academies/educational institutions. Features Jetpack Compose UI, WVCAT payment module, and DeepPass facial recognition payment.",
      tech: ["Kotlin", "Jetpack Compose", "WVCAT", "DeepPass"],
      links: [],
      commits: "79",
      features: [
        "DeepPass facial recognition payment",
        "WVCAT payment module integration",
        "Barcode scanner integration",
        "Attendance management & phone verification",
      ],
      images: [
        { src: "/images/chewing/chewing1.png", alt: "Chewing 1" },
        { src: "/images/chewing/chewing2.png", alt: "Chewing 2" },
        { src: "/images/chewing/chewing3.png", alt: "Chewing 3" },
      ],
    },
    {
      id: 8,
      slug: "wvcat",
      tag: "Android Module",
      title: "WVCAT - Payment Module Library",
      period: "2024.07 - 2025.04",
      description:
        "Android library that unifies 4 different payment terminal protocols (NICE NVCAT, JTNET, etc.) into a single integrated interface.",
      tech: ["Kotlin", "Android Library", "Payment Protocol"],
      links: [],
      commits: "61",
      features: [
        "Unified 4 payment modules (NVCAT/WVCAT/JTNET/AppPos)",
        "Card/Cash receipt/QR/KakaoPay/WeChatPay support",
        "Network cancel logic & signature input",
        "Provider pattern-based extensible architecture",
      ],
    },
    {
      id: 9,
      slug: "chzzk-kiosk",
      tag: "Flutter",
      title: "Chzzk Popup Store Kiosk",
      period: "2024.04 - 2024.05",
      description:
        "Kiosk for Naver Chzzk popup store. Developed Chzzk brand custom UI, Face Sign facial recognition payment, and ItsmePay payment via NR-100 serial terminal.",
      tech: ["Flutter", "Dart", "Face Sign", "Serial Communication"],
      links: [{ label: "Related Article", url: "https://fficial.naver.com/contentDetail/81" }],
      commits: "59",
      features: [
        "Chzzk brand custom UI/theme",
        "Face Sign facial recognition payment",
        "NR-100 serial terminal ItsmePay integration",
        "Paperless operation (no receipts)",
      ],
      images: [
        { src: "/images/chzzk/메인배너_로고시안_1_0416.png", alt: "Chzzk Banner" },
        { src: "/images/chzzk/Slide 16_9 - 2.png", alt: "Chzzk Kiosk 1" },
        { src: "/images/chzzk/Slide 16_9 - 9.png", alt: "Chzzk Kiosk 2" },
      ],
    },
    {
      id: 10,
      slug: "cashplace",
      tag: "Android / Flask",
      title: "CashPlace - Reward Lifestyle App",
      period: "2021.02 - 2021.12",
      description:
        "Reward-based lifestyle app maintained during Loplat tenure. Developed Android app and Flask server maintenance, dynamic map UI for store details, roulette event webview, and coupon features.",
      tech: ["Kotlin", "Flask", "Python", "WebView"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.loplat.cashplace" },
      ],
      images: [
        { src: "/images/cashplace/cashplace1.webp", alt: "CashPlace 1" },
        { src: "/images/cashplace/cashplace2.webp", alt: "CashPlace 2" },
        { src: "/images/cashplace/cashplace3.webp", alt: "CashPlace 3" },
      ],
    },
    {
      id: 11,
      slug: "okit",
      tag: "Android",
      title: "OKIT - Life Logging Service",
      period: "2019.12 - 2020.09",
      description:
        "Life logging service using Loplat SDK to record visited places. Matches users who visited the same locations and allows sharing records about those places.",
      tech: ["Kotlin", "Firebase", "Google Maps", "Loplat SDK"],
      links: [
        {
          label: "Related Article",
          url: "https://plus.hankyung.com/apps/newsinside.view?aid=202301206412d&category=&sns=y",
        },
      ],
      portfolioImages: [
        { src: "/images/okit/okit1.jpg", alt: "OKIT Portfolio 1" },
        { src: "/images/okit/okit2.jpg", alt: "OKIT Portfolio 2" },
      ],
    },
    {
      id: 12,
      slug: "athermo",
      tag: "Android",
      title: "Athermo - Academy Attendance Thermometer",
      period: "2019.10 - 2019.12",
      description:
        "Service that enables simultaneous attendance check and temperature measurement by integrating mobile device with Bluetooth RFID attendance reader, thermometer, and NFC.",
      tech: ["Kotlin", "NFC", "Coroutine", "Retrofit"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=kr.co.amansystem.athermo" },
      ],
      portfolioImages: [
        { src: "/images/athermo/athermo1.jpg", alt: "Athermo Portfolio 1" },
        { src: "/images/athermo/athermo2.jpg", alt: "Athermo Portfolio 2" },
      ],
    },
    {
      id: 13,
      slug: "everywear",
      tag: "Android",
      title: "EVERYWEAR - Virtual Fitting Service",
      period: "2019.08 - 2019.10",
      description:
        "Virtual fitting service using deep learning. Users can try on various clothes on their photos.",
      tech: ["Kotlin", "Retrofit", "FCM", "Deep Learning"],
      links: [{ label: "Related Article", url: "https://m.blog.naver.com/sw_maestro/221565858967" }],
      portfolioImages: [
        { src: "/images/everywear/everywear1.jpg", alt: "EVERYWEAR Portfolio 1" },
        { src: "/images/everywear/everywear2.jpg", alt: "EVERYWEAR Portfolio 2" },
      ],
    },
    {
      id: 14,
      slug: "dodamdodam",
      tag: "Android",
      title: "Dodamdodam - Korean Learning App",
      period: "2018.06 - 2018.11",
      description:
        "Mobile Korean conversation learning service for foreigners, developed during Software Maestro training program.",
      tech: ["Kotlin", "Retrofit", "Facebook API", "Chat Bot"],
      links: [
        { label: "YouTube", url: "https://www.youtube.com/watch?v=SdISusebco8" },
        { label: "Related Article", url: "https://m.blog.naver.com/sw_maestro/221321798349" },
      ],
      portfolioImages: [
        { src: "/images/dodamdodam/dodamdodam1.jpg", alt: "Dodamdodam Portfolio 1" },
        { src: "/images/dodamdodam/dodamdodam2.jpg", alt: "Dodamdodam Portfolio 2" },
      ],
    },
    {
      id: 15,
      slug: "petfeed",
      tag: "PM / Planning",
      title: "PetFeed - Pet SNS",
      period: "2018.05 - 2018.10",
      description:
        "Pet SNS for sharing pet media. Designed UX using Material Design 2.0 as design guide.",
      tech: ["Android", "iOS", "Material Design 2.0"],
      links: [
        { label: "Related Article", url: "https://www.opinionnews.co.kr/news/articleView.html?idxno=11957" },
      ],
      hasPdfFile: true,
      portfolioImages: [
        { src: "/images/petfeed/petfeed1.jpg", alt: "PetFeed Portfolio 1" },
        { src: "/images/petfeed/petfeed2.jpg", alt: "PetFeed Portfolio 2" },
      ],
    },
    {
      id: 16,
      slug: "safe-neck",
      tag: "iOS",
      title: "Safe Neck - Posture Correction Solution",
      period: "2017.05 - 2017.10",
      description:
        "IoT posture correction solution for healthy posture habits. Won Encouragement Award in IoT category at SK Smarteen App Challenge 2017.",
      tech: ["Swift", "Alamofire", "Bluetooth 4.0", "IoT"],
      links: [],
      portfolioImages: [
        { src: "/images/safeneck/safeneck1.jpg", alt: "Safe Neck Portfolio 1" },
        { src: "/images/safeneck/safeneck2.jpg", alt: "Safe Neck Portfolio 2" },
      ],
    },
  ],
};

// 모든 프로젝트 통합 (slug로 조회용)
export function getAllProjects(language: "ko" | "en"): Project[] {
  return [...majorProjectsData[language], ...otherProjectsData[language]];
}

export function getProjectBySlug(slug: string, language: "ko" | "en"): Project | undefined {
  return getAllProjects(language).find((p) => p.slug === slug);
}

// 프로젝트 섹션 텍스트
export const projectSectionTexts: LocalizedData<{
  label: string;
  title: string;
  description: string;
  otherProjects: string;
  productDesign: string;
  appDesign: string;
  posSystem: string;
  kiosk: string;
  screens: string;
  devPeriod: string;
  commits: string;
  download: string;
  presentation: string;
  userManual: string;
  landingPage: string;
  relatedArticle: string;
  viewDetails: string;
}> = {
  ko: {
    label: "Projects",
    title: "주요 프로젝트",
    description: "4년 이상 지속적으로 개발/유지보수 중인 핵심 프로젝트",
    otherProjects: "기타 프로젝트",
    productDesign: "제품 디자인",
    appDesign: "앱 디자인",
    posSystem: "POS 시스템",
    kiosk: "키오스크",
    screens: "개 화면",
    devPeriod: "개발 기간",
    commits: "commits",
    download: "다운로드",
    presentation: "발표자료",
    userManual: "사용자 취급 설명서",
    landingPage: "제품 랜딩페이지",
    relatedArticle: "관련 기사",
    viewDetails: "상세 보기",
  },
  en: {
    label: "Projects",
    title: "Key Projects",
    description: "Core projects continuously developed and maintained for 4+ years",
    otherProjects: "Other Projects",
    productDesign: "Product Design",
    appDesign: "App Design",
    posSystem: "POS System",
    kiosk: "Kiosk",
    screens: " screens",
    devPeriod: "Dev Period",
    commits: "commits",
    download: "Download",
    presentation: "Presentation",
    userManual: "User Manual",
    landingPage: "Product Landing Page",
    relatedArticle: "Related Article",
    viewDetails: "View Details",
  },
};
