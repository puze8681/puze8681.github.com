"use client";

import { Smartphone, Code, Server, GitBranch, Wrench, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const skillsData = {
  ko: [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter • Dart • Kotlin • Java • Swift • React Native",
      details: ["Android SDK", "iOS Development", "Cross-platform"],
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "React • Next.js • TypeScript • Tailwind CSS • Cordova",
      details: ["Material Design", "Custom View", "Responsive UI"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Flask • Django • Python • Node.js • Firebase",
      details: ["REST API", "Database", "Server Architecture"],
    },
    {
      icon: Wrench,
      title: "Technical Skills",
      description: "Retrofit • Coroutine • NFC • Bluetooth • FCM",
      details: ["비동기 처리", "하드웨어 연동", "푸시 알림"],
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      description: "CI/CD • GitHub Actions • Fastlane • Docker",
      details: ["배포 자동화", "버전 관리", "테스트 자동화"],
    },
    {
      icon: Award,
      title: "Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["애자일", "PM 경험", "문서화"],
    },
  ],
  en: [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter • Dart • Kotlin • Java • Swift • React Native",
      details: ["Android SDK", "iOS Development", "Cross-platform"],
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "React • Next.js • TypeScript • Tailwind CSS • Cordova",
      details: ["Material Design", "Custom View", "Responsive UI"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Flask • Django • Python • Node.js • Firebase",
      details: ["REST API", "Database", "Server Architecture"],
    },
    {
      icon: Wrench,
      title: "Technical Skills",
      description: "Retrofit • Coroutine • NFC • Bluetooth • FCM",
      details: ["Async Processing", "Hardware Integration", "Push Notifications"],
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      description: "CI/CD • GitHub Actions • Fastlane • Docker",
      details: ["Deploy Automation", "Version Control", "Test Automation"],
    },
    {
      icon: Award,
      title: "Collaboration",
      description: "Jira • Figma • Slack • Notion • Zeplin • Trello",
      details: ["Agile", "PM Experience", "Documentation"],
    },
  ],
};

const awardsData = {
  ko: [
    { title: "SK Smarteen App Challenge 2018", award: "생활 부문 우수상", issuer: "SK 텔레콤" },
    { title: "SK Smarteen App Challenge 2017", award: "IoT 부문 장려상", issuer: "SK 텔레콤" },
    { title: "제 12회 SK Appjam", award: "생활부문 금상", issuer: "아산나눔재단" },
    { title: "시선추적 모바일 앱 해커톤", award: "대상", issuer: "Visual Camp" },
    { title: "제 5회 대한민국 SW 융합 해커톤", award: "경기도지사 상", issuer: "경기도" },
    { title: "K-water 시민참여혁신 해커톤", award: "K-water 사장상", issuer: "K-water" },
    { title: "Inapse 해커톤", award: "대상", issuer: "Inapse" },
    { title: "2018 불법스포츠도박 근절 해커톤", award: "이사장상", issuer: "서울올림픽기념국민체육진흥공단" },
  ],
  en: [
    { title: "SK Smarteen App Challenge 2018", award: "Excellence Award (Life)", issuer: "SK Telecom" },
    { title: "SK Smarteen App Challenge 2017", award: "Encouragement (IoT)", issuer: "SK Telecom" },
    { title: "12th SK Appjam", award: "Gold Award (Life)", issuer: "Asan Foundation" },
    { title: "Eye-tracking Mobile App Hackathon", award: "Grand Prize", issuer: "Visual Camp" },
    { title: "5th Korea SW Convergence Hackathon", award: "Governor Award", issuer: "Gyeonggi Province" },
    { title: "K-water Citizen Innovation Hackathon", award: "CEO Award", issuer: "K-water" },
    { title: "Inapse Hackathon", award: "Grand Prize", issuer: "Inapse" },
    { title: "2018 Anti-Gambling Hackathon", award: "Chairman Award", issuer: "KSPO" },
  ],
};

const certificationsData = {
  ko: [
    { name: "정보처리기능사", issuer: "한국산업인력공단", date: "2018.07" },
    { name: "ITQ 파워포인트", issuer: "한국생산성본부", date: "2010.11" },
    { name: "ITQ 아래한글", issuer: "한국생산성본부", date: "2011.06" },
    { name: "ITQ 한글엑셀", issuer: "한국생산성본부", date: "2012.03" },
  ],
  en: [
    { name: "Craftsman Info Processing", issuer: "HRD Korea", date: "2018.07" },
    { name: "ITQ PowerPoint", issuer: "KPC", date: "2010.11" },
    { name: "ITQ Hangul", issuer: "KPC", date: "2011.06" },
    { name: "ITQ Excel", issuer: "KPC", date: "2012.03" },
  ],
};

const activitiesData = {
  ko: [
    {
      title: "SmarteenAppClub 8기 회장",
      period: "2018.07 ~",
      description: "SK, IT동아, 중소벤처기업부 주관 고교 앱 개발 동아리 회장단",
    },
    {
      title: "소프트웨어 마에스트로 9기",
      period: "2018.06 - 2018.12",
      description: "과학기술정보통신부 주관 SW 인재 양성 프로그램 연수생",
    },
    {
      title: "선린인터넷고 '애플파이' 부장",
      period: "2017.04 - 2018.03",
      description: "교내 모바일 앱 개발 동아리 부장, 커리큘럼 수업 진행",
    },
    {
      title: "청계천꿈디딤장학금 장학생",
      period: "2017.06 - 2018.11",
      description: "서울장학재단, 서울시설공단 장학 프로그램",
    },
  ],
  en: [
    {
      title: "SmarteenAppClub 8th President",
      period: "2018.07 ~",
      description: "High school app dev club sponsored by SK, IT Donga, MSS",
    },
    {
      title: "SW Maestro 9th Trainee",
      period: "2018.06 - 2018.12",
      description: "SW talent program by Ministry of Science and ICT",
    },
    {
      title: "Sunrin 'ApplePie' Club Leader",
      period: "2017.04 - 2018.03",
      description: "Mobile app dev club leader, taught curriculum classes",
    },
    {
      title: "Cheonggyecheon Dream Scholarship",
      period: "2017.06 - 2018.11",
      description: "Seoul Scholarship Foundation program",
    },
  ],
};

const sectionTexts = {
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

export default function Skills() {
  const { language } = useLanguage();
  const skills = skillsData[language];
  const awards = awardsData[language];
  const certifications = certificationsData[language];
  const activities = activitiesData[language];
  const texts = sectionTexts[language];

  return (
    <section id="skills" className="flex flex-col items-center gap-8 md:gap-12 section-padding py-12 md:py-20 w-full bg-[var(--bg-surface)]">
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
        <span className="text-xs font-semibold tracking-widest text-[var(--accent-cyan)]">
          {texts.label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
          {texts.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)]">
          {texts.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-[var(--bg-inset)]"
          >
            <skill.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent-cyan)]" />
            <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
              {skill.title}
            </h3>
            <p className="font-mono text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
              {skill.description}
            </p>
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              {skill.details.map((detail) => (
                <span
                  key={detail}
                  className="px-2 py-1 rounded bg-[var(--bg-surface)] text-xs text-[var(--text-tertiary)]"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:gap-6 w-full max-w-6xl mt-4 md:mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
          {texts.awards}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col gap-1.5 md:gap-2 p-3 md:p-5 rounded-xl bg-[var(--bg-inset)]"
            >
              <span className="text-xs md:text-sm font-semibold text-[var(--accent-cyan)]">
                {award.award}
              </span>
              <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)] leading-snug">
                {award.title}
              </h4>
              <p className="text-xs md:text-sm text-[var(--text-muted)]">
                {award.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mt-2 md:mt-4">
        <div className="flex flex-col gap-4 md:gap-6 flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.activities}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex flex-col gap-1.5 md:gap-2 p-4 md:p-5 rounded-xl bg-[var(--bg-inset)]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm md:text-base font-bold text-[var(--text-primary)]">
                    {activity.title}
                  </h4>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {activity.period}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[300px] shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
            {texts.certifications}
          </h3>
          <div className="flex flex-col gap-2 md:gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex justify-between items-center p-3 md:p-4 rounded-lg bg-[var(--bg-inset)]"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs md:text-sm font-semibold text-[var(--text-primary)]">
                    {cert.name}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--text-tertiary)]">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
