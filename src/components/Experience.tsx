"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const experiencesData = {
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
          tasks: ["지속적인 서비스 유지보수 및 기능 개선"],
        },
        {
          name: "잇츠미 - It'sMe 종합소비플랫폼 2.0",
          period: "2021.12 ~",
          description: "크로스 플랫폼 기반 서비스 전면 리뉴얼",
          tasks: ["크로스 플랫폼 기반 서비스 전면 리뉴얼 담당", "CI/CD 구축을 통한 배포 자동화 구성"],
        },
        {
          name: "윤잇 - yunit",
          period: "2024.08 ~ 2024.11",
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
    {
      company: "소프트웨어 마에스트로 9기",
      role: "Android 개발자",
      period: "2018.06 - 2018.12",
      projects: [
        {
          name: "도담도담 - 한국어 회화 학습 서비스",
          period: "2018.06 - 2018.12",
          description: "외국인을 위한 한국어 회화 학습 서비스",
          tasks: [
            "Kotlin을 사용하여 Android 앱 개발 (1인 개발)",
            "자모 학습, 표음 학습, 단어 학습, 채팅 등 개발",
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
          tasks: ["Continuous service maintenance and feature improvements"],
        },
        {
          name: "ItsMe - Consumer Platform 2.0",
          period: "2021.12 ~",
          description: "Complete service renewal based on cross-platform",
          tasks: ["Led cross-platform service renewal", "Set up CI/CD for deployment automation"],
        },
        {
          name: "Yooneat - yunit",
          period: "2024.08 ~ 2024.11",
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
    {
      company: "SW Maestro 9th",
      role: "Android Developer",
      period: "2018.06 - 2018.12",
      projects: [
        {
          name: "Dodamdodam - Korean Learning Service",
          period: "2018.06 - 2018.12",
          description: "Korean conversation learning service for foreigners",
          tasks: [
            "Developed Android app using Kotlin (solo dev)",
            "Built letter learning, pronunciation, vocabulary, chat features",
          ],
        },
      ],
    },
  ],
};

const sectionTexts = {
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

export default function Experience() {
  const { language } = useLanguage();
  const experiences = experiencesData[language];
  const texts = sectionTexts[language];

  return (
    <section id="experience" className="flex flex-col gap-10 md:gap-14 section-padding py-16 md:py-24 w-full">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)] uppercase">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          {texts.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {texts.description}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex flex-col gap-5 md:gap-6 p-5 sm:p-6 md:p-8 rounded-xl bg-[var(--bg-surface)]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                  {exp.company}
                </h3>
                <p className="text-sm md:text-base text-[var(--accent-cyan)] font-mono mt-1">
                  {exp.role}
                </p>
              </div>
              <span className="font-mono text-sm text-[var(--text-tertiary)]">
                {exp.period}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {exp.projects.map((project) => (
                <div
                  key={project.name}
                  className="flex flex-col gap-3 p-4 md:p-5 rounded-lg bg-[var(--bg-inset)]"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h4 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                      {project.name}
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 text-sm text-[var(--text-tertiary)]">
                    {project.tasks.map((task, idx) => (
                      <li key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--accent-cyan)]">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
