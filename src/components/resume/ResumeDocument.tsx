"use client";

import React from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { profile } from "@/data/profile";

const fontBaseUrl = typeof window !== "undefined" ? window.location.origin : `${process.cwd()}/public`;

Font.register({
  family: "Pretendard",
  fonts: [
    { src: `${fontBaseUrl}/fonts/Pretendard-Regular.otf`, fontWeight: 400 },
    { src: `${fontBaseUrl}/fonts/Pretendard-Bold.otf`, fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: { paddingTop: 38, paddingBottom: 30, paddingHorizontal: 42, fontFamily: "Pretendard", fontSize: 8.7, lineHeight: 1.55, color: "#334155", backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 14, borderBottom: "2px solid #0F172A", marginBottom: 18 },
  name: { fontSize: 24, fontWeight: 700, color: "#0F172A", lineHeight: 1.15 },
  title: { fontSize: 10.8, color: "#0891B2", marginTop: 6, lineHeight: 1.35 },
  contact: { fontSize: 7.6, color: "#64748B", textAlign: "right", lineHeight: 1.7 },
  link: { color: "#0E7490", textDecoration: "none" },
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 12.8, fontWeight: 700, color: "#0F172A", paddingBottom: 5, borderBottom: "1px solid #CBD5E1", marginBottom: 10 },
  summary: { fontSize: 9.4, lineHeight: 1.7, color: "#334155" },
  capabilityRow: { flexDirection: "row", gap: 8 },
  capability: { flex: 1, padding: 10, backgroundColor: "#F8FAFC", borderTop: "2px solid #0891B2", borderRadius: 3 },
  capabilityTitle: { fontSize: 9.2, fontWeight: 700, color: "#0F172A", marginBottom: 4, lineHeight: 1.35 },
  capabilityText: { fontSize: 7.8, color: "#475569", lineHeight: 1.55 },
  company: { marginBottom: 9 },
  companyTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 },
  companyName: { fontSize: 11.8, fontWeight: 700, color: "#0F172A" },
  companyPeriod: { fontSize: 7.8, color: "#64748B", paddingTop: 2 },
  companyRole: { fontSize: 8.4, color: "#0891B2", marginTop: 1, marginBottom: 6, lineHeight: 1.4 },
  project: { marginBottom: 6, paddingLeft: 9, borderLeft: "2px solid #CBD5E1" },
  projectTop: { flexDirection: "row", justifyContent: "space-between", gap: 12, marginBottom: 3 },
  projectName: { fontSize: 9.3, fontWeight: 700, color: "#0F172A", flex: 1 },
  projectPeriod: { fontSize: 7.2, color: "#64748B" },
  bullet: { fontSize: 8.05, color: "#475569", lineHeight: 1.52, marginBottom: 2.5 },
  twoCol: { flexDirection: "row", gap: 16 },
  col: { flex: 1 },
  compactItem: { marginBottom: 5 },
  compactTitle: { fontSize: 9.1, fontWeight: 700, color: "#0F172A", marginBottom: 2 },
  compactMeta: { fontSize: 7.4, color: "#0891B2", marginBottom: 3 },
  compactText: { fontSize: 7.9, color: "#475569", lineHeight: 1.5 },
  skillGroup: { marginBottom: 4 },
  skillTitle: { fontSize: 8.4, fontWeight: 700, color: "#0F172A", marginBottom: 2 },
  skillText: { fontSize: 8, color: "#475569", lineHeight: 1.55 },
  note: { position: "absolute", left: 42, right: 42, bottom: 33, padding: 5, backgroundColor: "#ECFEFF", borderRadius: 3, fontSize: 6.4, color: "#0E7490", lineHeight: 1.35 },
  footer: { position: "absolute", left: 42, right: 42, bottom: 18, flexDirection: "row", justifyContent: "space-between", fontSize: 7, color: "#94A3B8" },
});

type Language = "ko" | "en";
type Copy = {
  summary: string;
  capabilities: Array<[string, string]>;
  sections: { capabilities: string; experience: string; selected: string; skills: string; education: string; awards: string };
  companies: Array<{ name: string; role: string; period: string; projects: Array<{ name: string; period: string; bullets: string[] }> }>;
  selected: Array<[string, string, string]>;
  skills: Array<[string, string]>;
  education: Array<[string, string, string]>;
  awards: string[];
  metricNote: string;
};

const copy: Record<Language, Copy> = {
  ko: {
    summary: "모바일 제품을 중심으로 백엔드, 배포·운영, 현장 시스템과 AI 워크플로를 연결하는 7년차 Product Engineer입니다. 불명확한 요구사항을 제품으로 정의하고 0→1 출시부터 고객 도입, 장기 운영과 개선까지 책임져 왔습니다.",
    capabilities: [["모바일 제품 오너십", "Flutter iOS·Android 앱의 설계, 출시, CI/CD와 운영 개선을 맡고 플랫폼·현장 제약을 해결합니다."], ["0→1 제품화와 확장", "고객과 제품이 없는 단계에서 첫 버전을 만들고 실제 도입과 확장 가능한 운영 구조까지 연결합니다."], ["AI/AX 워크플로 전환", "상담·학사·기업 운영의 흐름을 분석해 웹·앱·키오스크와 AI 자동화 시스템으로 재설계합니다."]],
    sections: { capabilities: "핵심 역량", experience: "경력", selected: "선별 프로젝트", skills: "핵심 기술", education: "학력 및 수료", awards: "대표 수상" },
    companies: [
      { name: "하이퍼노바", role: "Product Engineer · 헤이링(Heyring) AI", period: "2026.07 - 현재", projects: [{ name: "AI 언어 학습 모바일 제품", period: "2026.07 - 현재", bullets: ["모바일 CI/CD를 적용하고 빌드 과정을 개선해 21분대에서 6분대로 약 71% 단축", "영어 전용 학습 경험을 일본어까지 확장하고 단어·표현 저장 및 반복 학습 기능 개발", "예약 전화 처리 병목을 분석하고 스케줄러·디스패처·큐·발송 워커로 책임을 분리한 개선 구조 설계"] }] },
      { name: "화이트블록", role: "Developer · Flutter·결제·키오스크·현장 시스템", period: "2021.12 - 2026.02", projects: [
        { name: "잇츠미·잇츠밀", period: "2021.12 - 2026.02", bullets: ["서비스와 고객사가 없던 시점에 합류해 2개월 만에 잇츠미를 출시하고 한국외대를 첫 고객으로 연결", "외부 POS·키오스크 연동 과제를 자체 제품 잇츠밀로 전환해 0→1 설계·개발", "두 제품 통합 기준 13개 대학·100+ 매장·300+ 기기 운영, 외부 투자 없이 흑자 전환한 시점까지 핵심 제품 개발·운영"] },
        { name: "베리어프리 키오스크", period: "2024.10 - 2025.08", bullets: ["초도 미팅부터 접근성 요구사항 구현, 시험 대응과 검증서 발급까지 전 과정 리드", "시험평가기관 적합 판정 및 NIA 검증시험 통과"] },
      ] },
      { name: "로플랫", role: "Software Engineer", period: "2021.02 - 2021.12", projects: [{ name: "캐시플레이스·SDK 샘플", period: "2021.02 - 2021.12", bullets: ["Android 앱과 Flask 서버 운영, 지도·쿠폰·이벤트 기능 개발", "고객사 SDK 도입을 위한 React Native 샘플 앱 개발"] }] },
      { name: "주식회사옷깃", role: "Android Developer", period: "2019.12 - 2020.08", projects: [{ name: "OKIT", period: "2019.12 - 2020.08", bullets: ["Kotlin 기반 라이프로깅 앱 전체를 Android 개발자 1인으로 설계·구현"] }] },
      { name: "에브리웨어", role: "Android Developer", period: "2019.08 - 2019.10", projects: [{ name: "EVERYWEAR", period: "2019.08 - 2019.10", bullets: ["딥러닝 기반 가상 피팅 앱을 Android 개발자 1인으로 설계·구현"] }] },
    ],
    selected: [["한국외대 AI 학사 챗봇", "2026.08 - 현재 · 2026.09 PoC", "구조적 RAG와 근거 인용, 검증·회귀 테스트 체계를 구축했습니다. 오픈 2주차 DAU 약 80명, 하루 질문 약 300건을 기록했습니다."], ["댓츠원 DX 플랫폼", "2026.05 - 2026.10 예정", "입시 컨설팅랩의 관리자 웹·학생용 PWA·내부 키오스크를 통합 구축하고 상담 흐름의 AI 전환을 진행하고 있습니다."], ["PintaAI 내부 운영 AX", "2026.07 - 현재", "미국 법인 AI 보안기업의 반복 운영 업무를 자동화하고 일부 워크플로우를 운영 환경에 단계적으로 이관하고 있습니다."], ["레인타운쿠폰", "2025.02 - 현재", "디자인, Flutter 앱, Firebase 백엔드, React 관리자 웹과 배포·운영을 연결해 서비스를 지속 운영하고 있습니다."]],
    skills: [["Mobile", "Flutter · Dart · Kotlin · Java · Swift · React Native"], ["Web", "React · Next.js · TypeScript · Tailwind CSS"], ["Backend", "Spring Boot · FastAPI · Python · Node.js · Firebase · PostgreSQL"], ["AI & Automation", "LLM · RAG · Agentic Workflow · Playwright"], ["Infrastructure & CI/CD", "GCP · Docker · GitHub Actions · Fastlane · Queue-based Architecture"]],
    education: [["한국외국어대학교", "컴퓨터공학부 · 재학 중", "2020.03 - 현재"], ["소프트웨어 마에스트로 9기", "과학기술정보통신부 주관", "2018.06 - 2018.12"]],
    awards: ["SK Smarteen App Challenge 2018 · 생활 부문 우수상", "시선추적 모바일 앱 해커톤 · 대상"],
    metricNote: "상세 화면과 문제 해결 과정은 포트폴리오에서, 회사별 과제·역할·성과는 성과 경력기술서에서 확인할 수 있습니다.",
  },
  en: {
    summary: "Product Engineer with 7 years of experience connecting mobile products with backend systems, delivery, field operations, and AI workflows. I turn ambiguous requirements into products and own them from zero-to-one launch through adoption and long-term improvement.",
    capabilities: [["Mobile product ownership", "Own Flutter iOS and Android architecture, release, CI/CD, and operational improvement across platform and field constraints."], ["Zero-to-one and scale", "Build the first usable product before customers exist, then carry it into adoption and scalable operations."], ["AI/AX workflow transformation", "Redesign consulting, academic, and business workflows through connected web, mobile, kiosk, and AI systems."]],
    sections: { capabilities: "Core Capabilities", experience: "Experience", selected: "Selected Projects", skills: "Core Technologies", education: "Education & Training", awards: "Selected Awards" },
    companies: [
      { name: "Hypernova", role: "Product Engineer · Heyring AI", period: "2026.07 - Present", projects: [{ name: "AI language-learning mobile product", period: "2026.07 - Present", bullets: ["Introduced mobile CI/CD and reduced build time from 21 minutes to 6 minutes, about 71%", "Expanded the English-only experience to Japanese and built save-and-review learning for words and expressions", "Designed a scheduled-call architecture separating scheduler, dispatcher, queue, and delivery workers"] }] },
      { name: "Whiteblock", role: "Developer · Flutter, payments, kiosks, field systems", period: "2021.12 - 2026.02", projects: [
        { name: "ItsMe and ItsMeal", period: "2021.12 - 2026.02", bullets: ["Joined before a live service or customer existed, launched ItsMe in two months, and enabled HUFS as the first customer", "Turned an external POS/kiosk integration task into the zero-to-one ItsMeal product", "Scaled the combined products to 13 universities, 100+ stores, and 300+ devices and owned core development through profitability"] },
        { name: "Barrier-free kiosk", period: "2024.10 - 2025.08", bullets: ["Led requirements, implementation, test response, and certification end to end", "Passed the testing-agency evaluation and NIA verification"] },
      ] },
      { name: "Loplat", role: "Software Engineer", period: "2021.02 - 2021.12", projects: [{ name: "CashPlace and SDK sample", period: "2021.02 - 2021.12", bullets: ["Operated the Android app and Flask server; delivered maps, coupons, and events", "Built a React Native sample app for client SDK adoption"] }] },
      { name: "Otgit", role: "Android Developer", period: "2019.12 - 2020.08", projects: [{ name: "OKIT", period: "2019.12 - 2020.08", bullets: ["Designed and built the complete Kotlin life-logging app as the sole Android developer"] }] },
      { name: "Everywear", role: "Android Developer", period: "2019.08 - 2019.10", projects: [{ name: "EVERYWEAR", period: "2019.08 - 2019.10", bullets: ["Designed and built the deep-learning virtual-fitting app as the sole Android developer"] }] },
    ],
    selected: [["HUFS AI Academic Chatbot", "2026.08 - Present · PoC since 2026.09", "Built structural RAG, source citations, and regression validation. Reached about 80 DAU and 300 daily questions in its second week."], ["That'sOne DX Platform", "2026.05 - planned 2026.10", "Building an integrated admin web app, student PWA, and internal kiosk while converting consulting into an AI-assisted workflow."], ["PintaAI Operations AX", "2026.07 - Present", "Building automation for recurring operations and gradually moving selected workflows into production."], ["Raintown Coupon", "2025.02 - Present", "Operate the complete product across design, Flutter, Firebase, React admin, delivery, and support."]],
    skills: [["Mobile", "Flutter · Dart · Kotlin · Java · Swift · React Native"], ["Web", "React · Next.js · TypeScript · Tailwind CSS"], ["Backend", "Spring Boot · FastAPI · Python · Node.js · Firebase · PostgreSQL"], ["AI & Automation", "LLM · RAG · Agentic Workflow · Playwright"], ["Infrastructure & CI/CD", "GCP · Docker · GitHub Actions · Fastlane · Queue-based Architecture"]],
    education: [["Hankuk University of Foreign Studies", "Computer Science · Enrolled", "2020.03 - Present"], ["SW Maestro 9th", "Ministry of Science and ICT", "2018.06 - 2018.12"]],
    awards: ["SK Smarteen App Challenge 2018 · Excellence Award", "Eye-tracking Mobile App Hackathon · Grand Prize"],
    metricNote: "See the portfolio for visual case studies and the impact career profile for detailed company-level challenges, roles, and outcomes.",
  },
};

function Header({ language }: { language: Language }) {
  return <View style={styles.header}><View><Text style={styles.name}>{profile.name[language]}</Text><Text style={styles.title}>{profile.title[language]}</Text></View><View><Text style={styles.contact}>{profile.email} · {profile.phone}</Text><Link style={[styles.contact, styles.link]} src={profile.portfolio ?? ""}>puze8681.github.io</Link><Link style={[styles.contact, styles.link]} src={profile.github}>github.com/puze8681</Link><Link style={[styles.contact, styles.link]} src={profile.linkedin ?? ""}>linkedin.com/in/puze8681</Link></View></View>;
}

function Footer() {
  return <View style={styles.footer} fixed><Text>박태준 · Product Engineer</Text><Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} /></View>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <View style={styles.section}><Text style={styles.sectionTitle}>{title}</Text>{children}</View>;
}

export default function ResumeDocument({ language }: { language: Language }) {
  const t = copy[language];
  return <Document title={`${profile.name[language]} - Resume`} author={profile.name[language]}>
    <Page size="A4" style={styles.page}><Header language={language}/><Section title={language === "ko" ? "소개" : "Profile"}><Text style={styles.summary}>{t.summary}</Text></Section><Section title={t.sections.capabilities}><View style={styles.capabilityRow}>{t.capabilities.map(([title, text]) => <View key={title} style={styles.capability} wrap={false}><Text style={styles.capabilityTitle}>{title}</Text><Text style={styles.capabilityText}>{text}</Text></View>)}</View></Section><Section title={t.sections.experience}>{t.companies.slice(0, 2).map((company) => <View key={company.name} style={styles.company} wrap={false}><View style={styles.companyTop}><Text style={styles.companyName}>{company.name}</Text><Text style={styles.companyPeriod}>{company.period}</Text></View><Text style={styles.companyRole}>{company.role}</Text>{company.projects.map((project) => <View key={project.name} style={styles.project}><View style={styles.projectTop}><Text style={styles.projectName}>{project.name}</Text><Text style={styles.projectPeriod}>{project.period}</Text></View>{project.bullets.map((bullet) => <Text key={bullet} style={styles.bullet}>• {bullet}</Text>)}</View>)}</View>)}</Section><Footer/></Page>
    <Page size="A4" style={styles.page}><Header language={language}/><Section title={t.sections.experience}>{t.companies.slice(2).map((company) => <View key={company.name} style={styles.company} wrap={false}><View style={styles.companyTop}><Text style={styles.companyName}>{company.name}</Text><Text style={styles.companyPeriod}>{company.period}</Text></View><Text style={styles.companyRole}>{company.role}</Text>{company.projects.map((project) => <View key={project.name} style={styles.project}><View style={styles.projectTop}><Text style={styles.projectName}>{project.name}</Text><Text style={styles.projectPeriod}>{project.period}</Text></View>{project.bullets.map((bullet) => <Text key={bullet} style={styles.bullet}>• {bullet}</Text>)}</View>)}</View>)}</Section><Section title={t.sections.selected}><View style={styles.twoCol}>{[t.selected.slice(0, 2), t.selected.slice(2)].map((items, index) => <View key={index} style={styles.col}>{items.map(([title, period, text]) => <View key={title} style={styles.compactItem} wrap={false}><Text style={styles.compactTitle}>{title}</Text><Text style={styles.compactMeta}>{period}</Text><Text style={styles.compactText}>{text}</Text></View>)}</View>)}</View></Section><View style={styles.twoCol}><View style={styles.col}><Section title={t.sections.skills}>{t.skills.map(([title, value]) => <View key={title} style={styles.skillGroup} wrap={false}><Text style={styles.skillTitle}>{title}</Text><Text style={styles.skillText}>{value}</Text></View>)}</Section></View><View style={styles.col}><Section title={t.sections.education}>{t.education.map(([title, detail, period]) => <View key={title} style={styles.compactItem} wrap={false}><Text style={styles.compactTitle}>{title}</Text><Text style={styles.compactText}>{detail}</Text><Text style={styles.compactMeta}>{period}</Text></View>)}</Section><Section title={t.sections.awards}>{t.awards.map((award) => <Text key={award} style={styles.bullet}>• {award}</Text>)}</Section></View></View><Text style={styles.note}>{t.metricNote}</Text><Footer/></Page>
  </Document>;
}
