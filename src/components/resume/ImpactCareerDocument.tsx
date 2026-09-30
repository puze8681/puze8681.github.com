"use client";

import React from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { profile } from "@/data/profile";

const fontBaseUrl = typeof window !== "undefined" ? window.location.origin : `${process.cwd()}/public`;
Font.register({ family: "Pretendard", fonts: [{ src: `${fontBaseUrl}/fonts/Pretendard-Regular.otf`, fontWeight: 400 }, { src: `${fontBaseUrl}/fonts/Pretendard-Bold.otf`, fontWeight: 700 }] });
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: { paddingTop: 40, paddingBottom: 38, paddingHorizontal: 42, fontFamily: "Pretendard", fontSize: 8.5, lineHeight: 1.56, color: "#334155", backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 12, borderBottom: "2px solid #0F172A", marginBottom: 18 },
  name: { fontSize: 21, fontWeight: 700, color: "#0F172A", lineHeight: 1.22 },
  role: { fontSize: 9.5, color: "#0891B2", marginTop: 6, lineHeight: 1.4 },
  contact: { fontSize: 7.4, color: "#64748B", textAlign: "right", lineHeight: 1.65 },
  link: { color: "#0E7490", textDecoration: "none" },
  eyebrow: { fontSize: 7.4, fontWeight: 700, color: "#0891B2", marginBottom: 6 },
  pageTitle: { fontSize: 19, fontWeight: 700, color: "#0F172A", lineHeight: 1.25, marginBottom: 8 },
  pageIntro: { fontSize: 9.1, color: "#64748B", lineHeight: 1.68, marginBottom: 16 },
  metricRow: { flexDirection: "row", gap: 8, marginBottom: 17 },
  metric: { flex: 1, paddingVertical: 10, paddingHorizontal: 9, backgroundColor: "#F1F5F9", borderTop: "3px solid #0891B2", borderRadius: 4 },
  metricValue: { fontSize: 13.5, fontWeight: 700, color: "#0F172A", lineHeight: 1.2 },
  metricLabel: { fontSize: 7.1, color: "#64748B", marginTop: 3 },
  sectionTitle: { fontSize: 12.5, fontWeight: 700, color: "#0F172A", paddingBottom: 5, borderBottom: "1px solid #CBD5E1", marginBottom: 9 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 9 },
  capability: { width: "48.9%", minHeight: 72, padding: 10, backgroundColor: "#F8FAFC", borderTop: "2px solid #0F172A", borderRadius: 3 },
  cardTitle: { fontSize: 9.8, fontWeight: 700, color: "#0F172A", marginBottom: 4, lineHeight: 1.35 },
  cardText: { fontSize: 7.8, color: "#475569", lineHeight: 1.58 },
  selected: { width: "48.9%", padding: 10, backgroundColor: "#ECFEFF", borderRadius: 3 },
  selectedMeta: { fontSize: 7.2, color: "#0891B2", marginBottom: 4 },
  timelineItem: { flexDirection: "row", marginBottom: 7 },
  timelinePeriod: { width: 100, fontSize: 7.7, color: "#64748B" },
  timelineCompany: { width: 102, fontSize: 8.4, fontWeight: 700, color: "#0F172A" },
  timelineRole: { fontSize: 7.9, color: "#475569", marginBottom: 2 },
  companyHeader: { paddingBottom: 12, marginBottom: 13, borderBottom: "1px solid #CBD5E1" },
  companyTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  companyName: { fontSize: 19, fontWeight: 700, color: "#0F172A", lineHeight: 1.22 },
  companyPeriod: { fontSize: 7.7, color: "#64748B", paddingTop: 4 },
  companyRole: { fontSize: 8.8, color: "#0891B2", marginTop: 4, lineHeight: 1.4 },
  companySummary: { fontSize: 8.4, color: "#475569", lineHeight: 1.62, marginTop: 8 },
  project: { padding: 11, marginBottom: 10, backgroundColor: "#F8FAFC", borderLeft: "3px solid #0891B2", borderRadius: 4 },
  projectHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 5 },
  projectTitle: { fontSize: 10.7, fontWeight: 700, color: "#0F172A", flex: 1, lineHeight: 1.3 },
  projectPeriod: { fontSize: 7.1, color: "#64748B", paddingTop: 2 },
  context: { fontSize: 7.8, color: "#475569", lineHeight: 1.56, marginBottom: 7 },
  columns: { flexDirection: "row", gap: 12 },
  column: { flex: 1 },
  label: { fontSize: 7.1, fontWeight: 700, color: "#0F172A", marginBottom: 3, lineHeight: 1.35 },
  body: { fontSize: 7.75, color: "#475569", lineHeight: 1.58 },
  bullet: { fontSize: 7.65, color: "#475569", lineHeight: 1.52, marginBottom: 2.5 },
  result: { marginTop: 7, padding: 7, backgroundColor: "#E6F7FB", borderRadius: 3 },
  resultText: { fontSize: 7.8, fontWeight: 700, color: "#0E7490", lineHeight: 1.52 },
  compact: { width: "48.9%", padding: 10, backgroundColor: "#F8FAFC", borderTop: "2px solid #0F172A", borderRadius: 3 },
  compactMeta: { fontSize: 7.2, color: "#0891B2", marginBottom: 5 },
  compactText: { fontSize: 7.65, color: "#475569", lineHeight: 1.55, marginBottom: 5 },
  footer: { position: "absolute", left: 42, right: 42, bottom: 18, flexDirection: "row", justifyContent: "space-between", fontSize: 7, color: "#94A3B8" },
});

type Language = "ko" | "en";
type Case = { title: string; period: string; context: string; role: string; actions: string[]; result: string };
type Company = { name: string; period: string; role: string; summary: string; cases: Case[] };

const content = {
  ko: {
    title: "성과 기반 경력기술서",
    intro: "모바일 제품을 중심으로 0→1 출시, 고객 도입과 장기 운영, 현장 시스템 통합, AI/AX 업무 전환까지 제품 생애주기 전반을 책임져 왔습니다.",
    metrics: [["7년", "제품 개발 경력"], ["0→1", "출시·첫 고객·운영"], ["Mobile·Web", "Backend까지 연결"], ["AI/AX·Infra", "운영 전환과 개선 설계"]],
    capabilities: [["모바일 제품 오너십", "Flutter iOS·Android 앱의 구조, 기능, 배포와 운영 품질을 제품 단위로 책임집니다."], ["0→1 제품화와 확장", "불명확한 요구사항을 제품으로 정의하고 첫 출시, 고객 도입과 장기 운영까지 이어갑니다."], ["제품 경계를 넘는 실행", "웹·백엔드·인프라·결제·현장 장비를 문제 해결에 필요한 범위까지 연결합니다."], ["AI/AX 워크플로 전환", "기존 업무와 판단 지점을 분석해 AI가 보조·자동화하는 운영 흐름으로 재설계합니다."]],
    selected: [["헤이링 AI", "현재 회사", "모바일 CI/CD, 언어 학습 기능, 예약 전화 인프라 개선 설계"], ["잇츠미·잇츠밀", "핵심 성장 사례", "0→1 출시에서 13개 대학 운영과 흑자 전환까지"], ["한국외대 AI 챗봇", "외부 프로젝트", "구조적 RAG와 근거 인용, DAU 약 80명·하루 질문 약 300건"], ["댓츠원·PintaAI", "외부 프로젝트", "상담과 기업 운영 프로세스의 DX·AX 전환"]],
    labels: { context: "배경과 과제", role: "책임 범위", actions: "주요 실행", result: "성과 및 결과", career: "회사별 경력", selected: "대표 사례" },
    companies: [
      { name: "하이퍼노바", period: "2026.07 - 현재", role: "Product Engineer · 헤이링(Heyring) AI", summary: "AI 전화 기반 언어 학습 제품에서 Flutter 모바일 앱, 학습 기능, 배포 파이프라인과 예약 전화 인프라 개선 설계를 담당합니다.", cases: [
        { title: "모바일 CI/CD와 빌드 과정 개선", period: "2026.07 - 현재", context: "수동 단계와 긴 대기 시간이 개발·검증 속도를 제한하고 있었습니다.", role: "입사 직후 모바일 CI/CD를 적용하고 캐시, 의존성 처리와 배포 흐름의 병목을 개선했습니다.", actions: ["Flutter 모바일 빌드·배포 자동화", "반복 작업과 대기 구간 축소", "팀의 검증·배포 흐름 표준화"], result: "빌드 시간 21분대 → 6분대 · 약 71% 단축" },
        { title: "영어 중심 학습 경험을 일본어까지 확장", period: "2026.07 - 현재", context: "영어 전용 제품을 다른 언어와 개인화 학습으로 확장할 필요가 있었습니다.", role: "언어별 학습 흐름과 콘텐츠 속 표현을 저장·복습하는 모바일 경험을 개발했습니다.", actions: ["일본어 학습 지원 추가", "드래그 기반 단어·표현 저장", "저장한 표현의 반복 학습 흐름 구현"], result: "지원 언어 확장 · 콘텐츠 소비와 개인 학습 데이터 연결" },
        { title: "예약 전화 발송 인프라 개선 설계", period: "2026.07 - 현재", context: "단일 EC2에서 API와 발송을 함께 처리해 자원은 남아도 커넥션 한도로 예약 발송이 지연됐습니다.", role: "예약 생성, 발송 판단과 실제 처리의 책임을 나누고 각 단계에 적합한 관리형 제품을 조합했습니다.", actions: ["1분 주기 스케줄러와 디스패처 분리", "큐 기반 비동기 처리와 발송 워커 설계", "API와 대량 발송의 장애 영향 범위 분리"], result: "스케줄러·디스패처·큐·워커 책임 분리 구조와 장애 격리 개선안 설계" },
      ] },
      { name: "화이트블록", period: "2021.12 - 2026.02", role: "Developer · Flutter·결제·키오스크·현장 시스템", summary: "서비스와 고객사가 없던 시점에 합류해 잇츠미를 출시하고 잇츠밀을 새로 구축했습니다. 외부 투자 없이 성장한 회사가 흑자 전환하는 시점까지 핵심 제품을 개발·운영했습니다.", cases: [
        { title: "잇츠미 - 2개월 만에 0→1 출시", period: "2021.12 - 2026.02", context: "첫 대학 고객을 확보하려면 짧은 기간 안에 실제 사용할 학생 종합 서비스를 처음부터 만들어야 했습니다.", role: "Flutter 앱 구조와 핵심 기능을 구현해 iOS·Android 첫 버전을 출시하고 장기 운영과 확장을 담당했습니다.", actions: ["멤버십·포인트·쿠폰·EPAY 결제", "다중 환경·CI/CD·오류 추적", "대학별 요구사항을 공통 제품 구조에 반영"], result: "2개월 내 출시 · 한국외대 첫 고객 · 잇츠미·잇츠밀 통합 기준 13개 대학" },
        { title: "잇츠밀 - 외부 연동 과제를 자체 제품으로 전환", period: "2022.02 - 2026.02", context: "외부 POS·키오스크 연동보다 직접 만드는 편이 확장성과 운영 효율에 유리하다고 판단했습니다.", role: "예정에 없던 제품을 처음부터 설계하고 Flutter 기반 POS·키오스크·매장 운영 클라이언트를 구축했습니다.", actions: ["POS·KDS·키오스크·상품·주문·매출 흐름", "결제 단말·프린터·NFC·스캐너 연동", "배포 자동화와 오류 추적"], result: "0→1 자체 제품 · 통합 기준 13개 대학 · 100+ 매장 · 300+ 기기 · 흑자 전환 시점까지 개발·운영" },
      ] },
    ] as Company[],
    whiteblockExtra: [
      ["베리어프리 키오스크", "2024.10 - 2025.08", "접근성 요구사항 해석부터 기능 구현, 시험 대응과 검증서 발급까지 전 과정 리드", "시험평가기관 적합 판정 · NIA 검증시험 통과"],
      ["WVCAT 통합 라이브러리", "2024.07 - 2025.04", "서로 다른 결제 단말 프로토콜을 확장 가능한 Android 인터페이스로 설계·구현", "NVCAT·WVCAT·JTNET·AppPos 4개 프로토콜 통합"],
      ["현장 키오스크", "2024.05 · 2025", "치지직 팝업스토어와 KLPGA 대회의 결제·발권·현장 운영 흐름 개발", "FaceSign 얼굴인식과 현장 발권·결제 연결"],
      ["윤잇·츄잉 앱", "2025.07 - 2025.11", "브랜드 커머스 앱과 결제·출결 앱의 클라이언트 및 외부 장비 연동", "PG·구독 결제·WVCAT·DeepPass 연동과 앱 출시"],
    ],
    previous: [
      ["로플랫", "2021.02 - 2021.12", "Software Engineer", "Android 앱과 Flask 서버를 운영하고 지도·쿠폰·이벤트 기능, React Native SDK 샘플을 개발했습니다."],
      ["주식회사옷깃", "2019.12 - 2020.08", "Android Developer", "Android 개발자 1인으로 Kotlin 라이프로깅 앱 전체를 설계·구현했습니다."],
      ["에브리웨어", "2019.08 - 2019.10", "Android Developer", "Android 개발자 1인으로 딥러닝 기반 가상 피팅 사용자 앱을 구현했습니다."],
    ],
    external: [
      ["댓츠원 DX 플랫폼", "2026.05 - 2026.10 예정", "입시 컨설팅랩의 관리자 웹·학생용 PWA·내부 키오스크를 통합 구축하고 상담의 AI 전환을 진행", "3개 채널 통합 구축 진행 · 2026.10 마무리 예정"],
      ["한국외대 AI 학사 챗봇", "2026.08 - 현재 · 2026.09 PoC", "구조적 RAG, 근거 인용과 검증·회귀 테스트 기반 품질 체계 구축", "오픈 2주차 DAU 약 80명 · 하루 질문 약 300건 · PoC 진행 중"],
      ["PintaAI 내부 운영 AX", "2026.07 - 현재", "반복 운영 업무의 자동화 설계·구축과 클라우드 운영 전환", "일부 워크플로우를 운영 환경에 단계적으로 이관 · 진행 중"],
      ["레인타운쿠폰", "2025.02 - 현재", "디자인, Flutter 앱, Firebase 백엔드, React 관리자 웹과 배포·운영 담당", "앱·백엔드·관리자 웹을 연결한 실제 서비스 지속 운영"],
    ],
  },
  en: {
    title: "Impact Career Profile",
    intro: "From a mobile product core, I own the product lifecycle across zero-to-one launch, customer adoption, long-term operations, field-system integration, and AI/AX workflow transformation.",
    metrics: [["7 years", "Product engineering"], ["0→1", "Launch to operations"], ["Mobile·Web", "Connected to backend"], ["AI/AX·Infra", "Transformation and design"]],
    capabilities: [["Mobile product ownership", "Own Flutter iOS and Android architecture, features, delivery, and operational quality as one product."], ["Zero-to-one and scale", "Turn ambiguous requirements into a first launch, customer adoption, and long-term operations."], ["Execution across boundaries", "Connect web, backend, infrastructure, payments, and field hardware as the product problem requires."], ["AI/AX workflow transformation", "Map work and decision points, then redesign them into AI-assisted and automated operations."]],
    selected: [["Heyring AI", "Current company", "Mobile CI/CD, learning features, and scheduled-call infrastructure design"], ["ItsMe · ItsMeal", "Core growth case", "From zero-to-one launch to 13 universities and profitability"], ["HUFS AI Chatbot", "Client project", "Structural RAG, source citations, about 80 DAU and 300 daily questions"], ["That'sOne · PintaAI", "Client projects", "DX and AX transformation for consulting and business operations"]],
    labels: { context: "Context and Challenge", role: "Scope and Ownership", actions: "Key Actions", result: "Outcomes", career: "Career by Company", selected: "Selected Cases" },
    companies: [
      { name: "Hypernova", period: "2026.07 - Present", role: "Product Engineer · Heyring AI", summary: "I work across Flutter mobile, learning features, the delivery pipeline, and scheduled-call infrastructure improvement design for an AI phone-based language-learning product.", cases: [
        { title: "Mobile CI/CD and build improvement", period: "2026.07 - Present", context: "Manual build steps and long waits slowed development and release verification.", role: "Introduced mobile CI/CD and removed bottlenecks in caching, dependencies, and delivery.", actions: ["Automated Flutter build and delivery", "Cut repeated work and standardized verification"], result: "21 minutes → 6 minutes · about 71% faster" },
        { title: "Expanded learning from English to Japanese", period: "2026.07 - Present", context: "The English-only product needed multilingual and personalized learning.", role: "Built Japanese flows and save-and-review interactions for expressions.", actions: ["Added Japanese learning", "Connected saved expressions to repeated practice"], result: "Expanded language support and personal learning data" },
        { title: "Scheduled-call infrastructure improvement design", period: "2026.07 - Present", context: "API and call delivery shared one EC2 instance; connection limits delayed scheduled calls.", role: "Separated scheduling, dispatch, queueing, and delivery into suitable managed components.", actions: ["Split the scheduler and dispatcher", "Designed queue-based workers and failure isolation"], result: "Designed clearer ownership, scaling, and failure boundaries" },
      ] },
      { name: "Whiteblock", period: "2021.12 - 2026.02", role: "Developer · Flutter, payments, kiosks, field systems", summary: "Joined before a live service or customer existed, launched ItsMe, and created ItsMeal. Owned core product development until the bootstrapped company reached profitability.", cases: [
        { title: "ItsMe - zero-to-one launch in two months", period: "2021.12 - 2026.02", context: "The company needed a usable student platform quickly to secure its first university customer.", role: "Built the Flutter architecture and core flows, launched iOS and Android, and owned long-term expansion.", actions: ["Membership, points, coupons, and EPAY", "Multi-environment CI/CD and error tracking", "Absorbed university needs into a shared product"], result: "Launched in two months · HUFS as first customer · 13 universities combined with ItsMeal" },
        { title: "ItsMeal - turned integration into an in-house product", period: "2022.02 - 2026.02", context: "Building in-house was more scalable and operationally efficient than depending on external POS and kiosk integration.", role: "Designed the unplanned product from scratch and built Flutter POS, kiosk, and store-operation clients.", actions: ["POS, KDS, kiosk, catalog, orders, sales", "Terminals, printers, NFC, and scanners", "Delivery automation and error tracking"], result: "Zero-to-one product · 13 universities combined · 100+ stores · 300+ devices · owned development through the point of profitability" },
      ] },
    ] as Company[],
    whiteblockExtra: [["Barrier-free kiosk", "2024.10 - 2025.08", "Led accessibility interpretation, implementation, testing, and certification", "Passed testing-agency evaluation and NIA verification"], ["WVCAT integration library", "2024.07 - 2025.04", "Designed a scalable Android interface for multiple terminal protocols", "Unified NVCAT, WVCAT, JTNET, and AppPos"], ["Field kiosks", "2024.05 · 2025", "Built payment, issuing, and field operations for Chzzk pop-up and KLPGA", "Connected FaceSign, ticket issuing, and payments"], ["Yooneat · Chewing apps", "2025.07 - 2025.11", "Built commerce and payment/attendance clients with hardware integrations", "PG, subscriptions, WVCAT, DeepPass, and app launches"]],
    previous: [["Loplat", "2021.02 - 2021.12", "Software Engineer", "Operated Android and Flask; built maps, coupons, events, and a React Native SDK sample."], ["Otgit", "2019.12 - 2020.08", "Android Developer", "Designed and built the complete Kotlin life-logging app as the sole Android developer."], ["Everywear", "2019.08 - 2019.10", "Android Developer", "Built the Android client for a deep-learning virtual-fitting product as the sole Android developer."]],
    external: [["That'sOne DX Platform", "2026.05 - planned 2026.10", "Building an integrated admin web app, student PWA, and kiosk while converting consulting into an AI workflow", "Three-channel platform in progress · planned to close in Oct 2026"], ["HUFS AI Academic Chatbot", "2026.08 - Present · PoC since 2026.09", "Built structural RAG, citations, validation, and regression quality systems", "About 80 DAU · about 300 daily questions in week two · PoC ongoing"], ["PintaAI Operations AX", "2026.07 - Present", "Designing automation for recurring operations and cloud execution", "Selected workflows moving gradually into production · ongoing"], ["Raintown Coupon", "2025.02 - Present", "Own design, Flutter, Firebase backend, React admin, delivery, and operations", "Complete product operated as a live service"]],
  },
} as const;

function Header({ language }: { language: Language }) { return <View style={styles.header}><View><Text style={styles.name}>{profile.name[language]}</Text><Text style={styles.role}>{profile.title[language]}</Text></View><View><Text style={styles.contact}>{profile.email} · {profile.phone}</Text><Link style={[styles.contact, styles.link]} src={profile.portfolio ?? ""}>puze8681.github.io</Link></View></View>; }
function Footer() { return <View style={styles.footer} fixed><Text>박태준 · Impact Career Profile</Text><Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} /></View>; }
function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) { return <><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.pageTitle}>{title}</Text><Text style={styles.pageIntro}>{intro}</Text></>; }
function CompanyHeader({ company, index }: { company: Company; index: string }) { return <View style={styles.companyHeader}><Text style={styles.eyebrow}>COMPANY {index}</Text><View style={styles.companyTop}><View><Text style={styles.companyName}>{company.name}</Text><Text style={styles.companyRole}>{company.role}</Text></View><Text style={styles.companyPeriod}>{company.period}</Text></View><Text style={styles.companySummary}>{company.summary}</Text></View>; }
function ProjectCase({ item, labels }: { item: Case; labels: { context: string; role: string; actions: string; result: string } }) { return <View style={styles.project} wrap={false}><View style={styles.projectHeader}><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectPeriod}>{item.period}</Text></View><Text style={styles.label}>{labels.context}</Text><Text style={styles.context}>{item.context}</Text><View style={styles.columns}><View style={styles.column}><Text style={styles.label}>{labels.role}</Text><Text style={styles.body}>{item.role}</Text></View><View style={styles.column}><Text style={styles.label}>{labels.actions}</Text>{item.actions.map((action) => <Text key={action} style={styles.bullet}>• {action}</Text>)}<View style={styles.result}><Text style={styles.label}>{labels.result}</Text><Text style={styles.resultText}>{item.result}</Text></View></View></View></View>; }
function Compact({ item, roleLabel, resultLabel }: { item: readonly [string, string, string, string]; roleLabel: string; resultLabel: string }) { return <View style={styles.compact} wrap={false}><Text style={styles.cardTitle}>{item[0]}</Text><Text style={styles.compactMeta}>{item[1]}</Text><Text style={styles.label}>{roleLabel}</Text><Text style={styles.compactText}>{item[2]}</Text><View style={styles.result}><Text style={styles.label}>{resultLabel}</Text><Text style={styles.resultText}>{item[3]}</Text></View></View>; }

export default function ImpactCareerDocument({ language }: { language: Language }) {
  const t = content[language];
  const career = language === "ko" ? [["2026.07 - 현재", "하이퍼노바", "Product Engineer"], ["2021.12 - 2026.02", "화이트블록", "Developer"], ["2021.02 - 2021.12", "로플랫", "Software Engineer"], ["2019.12 - 2020.08", "주식회사옷깃", "Android Developer"], ["2019.08 - 2019.10", "에브리웨어", "Android Developer"]] : [["2026.07 - Present", "Hypernova", "Product Engineer"], ["2021.12 - 2026.02", "Whiteblock", "Developer"], ["2021.02 - 2021.12", "Loplat", "Software Engineer"], ["2019.12 - 2020.08", "Otgit", "Android Developer"], ["2019.08 - 2019.10", "Everywear", "Android Developer"]];
  return <Document title={`${profile.name[language]} - ${t.title}`} author={profile.name[language]}>
    <Page size="A4" style={styles.page}><Header language={language}/><Heading eyebrow={t.title} title={language === "ko" ? "핵심 역량과 대표 사례" : "Capabilities and Selected Cases"} intro={t.intro}/><View style={styles.metricRow}>{t.metrics.map(([value, label]) => <View key={label} style={styles.metric}><Text style={styles.metricValue}>{value}</Text><Text style={styles.metricLabel}>{label}</Text></View>)}</View><View style={styles.grid}>{t.capabilities.map(([title, text]) => <View key={title} style={styles.capability} wrap={false}><Text style={styles.cardTitle}>{title}</Text><Text style={styles.cardText}>{text}</Text></View>)}</View><Text style={[styles.sectionTitle, { marginTop: 16 }]}>{t.labels.selected}</Text><View style={styles.grid}>{t.selected.map(([title, meta, text]) => <View key={title} style={styles.selected} wrap={false}><Text style={styles.cardTitle}>{title}</Text><Text style={styles.selectedMeta}>{meta}</Text><Text style={styles.cardText}>{text}</Text></View>)}</View><Text style={[styles.sectionTitle, { marginTop: 16 }]}>{t.labels.career}</Text>{career.map(([period, company, role]) => <View key={company} style={styles.timelineItem}><Text style={styles.timelinePeriod}>{period}</Text><Text style={styles.timelineCompany}>{company}</Text><Text style={styles.timelineRole}>{role}</Text></View>)}<Footer/></Page>
    <Page size="A4" style={styles.page}><Header language={language}/><CompanyHeader company={t.companies[0]} index="01"/>{t.companies[0].cases.map((item) => <ProjectCase key={item.title} item={item} labels={t.labels}/>)}<Footer/></Page>
    <Page size="A4" style={styles.page}><Header language={language}/><CompanyHeader company={t.companies[1]} index="02"/>{t.companies[1].cases.map((item) => <ProjectCase key={item.title} item={item} labels={t.labels}/>)}<Footer/></Page>
    <Page size="A4" style={styles.page}><Header language={language}/><Heading eyebrow="COMPANY 02" title={language === "ko" ? "화이트블록 · 확장 과제" : "Whiteblock · Expansion Work"} intro={language === "ko" ? "핵심 제품을 운영하면서 접근성 검증, 결제 프로토콜, 커머스 앱과 현장 키오스크까지 제품 범위를 확장했습니다." : "Expanded beyond the core products into accessibility verification, payment protocols, commerce apps, and field kiosks."}/><View style={styles.grid}>{t.whiteblockExtra.map((item) => <Compact key={item[0]} item={item} roleLabel={t.labels.role} resultLabel={t.labels.result}/>)}</View><Footer/></Page>
    <Page size="A4" style={styles.page}><Header language={language}/><Heading eyebrow={language === "ko" ? "이전 경력과 외부 프로젝트" : "PREVIOUS EXPERIENCE & CLIENT PROJECTS"} title={language === "ko" ? "모바일 제품의 기반에서 DX·AX까지" : "From Mobile Foundations to DX and AX"} intro={language === "ko" ? "Android 제품 전체를 맡은 초기 경험에서 모바일·서버 운영으로 범위를 넓혔고, 현재는 고객의 반복 업무를 웹·앱·키오스크와 AI 시스템으로 전환합니다." : "Grew from sole ownership of Android products into mobile/server operations and now transform client workflows through web, mobile, kiosks, and AI."}/><Text style={styles.sectionTitle}>{language === "ko" ? "이전 회사 경력" : "Previous Company Experience"}</Text>{t.previous.map(([name, period, role, text]) => <View key={name} style={styles.timelineItem}><Text style={styles.timelinePeriod}>{period}</Text><Text style={styles.timelineCompany}>{name}</Text><View style={{ flex: 1 }}><Text style={styles.timelineRole}>{role}</Text><Text style={styles.cardText}>{text}</Text></View></View>)}<Text style={[styles.sectionTitle, { marginTop: 12 }]}>{language === "ko" ? "외부 프로젝트" : "Client Projects"}</Text><View style={styles.grid}>{t.external.map((item) => <Compact key={item[0]} item={item} roleLabel={t.labels.role} resultLabel={t.labels.result}/>)}</View><View style={{ marginTop: 12, paddingTop: 8, borderTop: "1px solid #CBD5E1" }}><Text style={styles.label}>{language === "ko" ? "학력/수료" : "Education/Training"}</Text><Text style={styles.body}>{language === "ko" ? "한국외국어대학교 컴퓨터공학부 재학 중 · 소프트웨어 마에스트로 9기" : "Hankuk University of Foreign Studies, Computer Science · SW Maestro 9th"}</Text><Link style={[styles.body, styles.link]} src="https://chat.hufs.ac.kr/">chat.hufs.ac.kr</Link></View><Footer/></Page>
  </Document>;
}
