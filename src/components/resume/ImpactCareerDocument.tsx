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

const styles = StyleSheet.create({
  page: { paddingTop: 38, paddingBottom: 36, paddingHorizontal: 42, fontFamily: "Pretendard", fontSize: 9, lineHeight: 1.62, color: "#334155", backgroundColor: "#FFF" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 13, borderBottom: "2px solid #0F172A", marginBottom: 18 },
  name: { fontSize: 23, fontWeight: 700, color: "#0F172A", lineHeight: 1.15 },
  role: { fontSize: 10.6, color: "#0891B2", marginTop: 5, lineHeight: 1.4 },
  contact: { fontSize: 8, color: "#64748B", textAlign: "right", lineHeight: 1.7 },
  link: { color: "#0891B2", textDecoration: "none" },
  eyebrow: { fontSize: 8, fontWeight: 700, color: "#0891B2", marginBottom: 6 },
  pageTitle: { fontSize: 20, fontWeight: 700, color: "#0F172A", lineHeight: 1.28, marginBottom: 9 },
  pageIntro: { fontSize: 9.5, color: "#64748B", lineHeight: 1.7, marginBottom: 18 },
  metricRow: { flexDirection: "row", gap: 8, marginBottom: 6 },
  metric: { flex: 1, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#F1F5F9", borderTop: "3px solid #0891B2", borderRadius: 4 },
  metricValue: { fontSize: 16, fontWeight: 700, color: "#0F172A" },
  metricLabel: { fontSize: 7.3, color: "#64748B", marginTop: 2, lineHeight: 1.4 },
  metricBasis: { fontSize: 6.9, color: "#64748B", textAlign: "right", marginBottom: 17 },
  sectionTitle: { fontSize: 13.5, fontWeight: 700, color: "#0F172A", paddingBottom: 5, borderBottom: "1px solid #CBD5E1", marginBottom: 10 },
  competencyGrid: { flexDirection: "row", flexWrap: "wrap", gap: 9, marginBottom: 18 },
  competency: { width: "48.9%", minHeight: 78, padding: 11, backgroundColor: "#F8FAFC", borderTop: "2px solid #0F172A", borderRadius: 3 },
  competencyTitle: { fontSize: 10.2, fontWeight: 700, color: "#0F172A", marginBottom: 5 },
  competencyText: { fontSize: 8.1, color: "#475569", lineHeight: 1.68 },
  timelineItem: { flexDirection: "row", marginBottom: 7 },
  timelinePeriod: { width: 104, fontSize: 8, color: "#64748B" },
  timelineCompany: { width: 103, fontSize: 8.7, fontWeight: 700, color: "#0F172A" },
  timelineRole: { flex: 1, fontSize: 8.2, color: "#475569" },
  companyHeader: { paddingBottom: 13, marginBottom: 14, borderBottom: "1px solid #CBD5E1" },
  companyTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  companyName: { fontSize: 20, fontWeight: 700, color: "#0F172A", lineHeight: 1.25 },
  companyPeriod: { fontSize: 8.2, color: "#64748B", paddingTop: 4 },
  companyRole: { fontSize: 9.2, color: "#0891B2", marginTop: 4 },
  companySummary: { fontSize: 8.7, color: "#475569", lineHeight: 1.68, marginTop: 8 },
  project: { padding: 12, marginBottom: 11, backgroundColor: "#F8FAFC", borderLeft: "3px solid #0891B2", borderRadius: 4 },
  projectHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 },
  projectTitle: { fontSize: 11.5, fontWeight: 700, color: "#0F172A", maxWidth: "77%", lineHeight: 1.35 },
  projectPeriod: { fontSize: 7.6, color: "#64748B", textAlign: "right", paddingTop: 2 },
  projectContext: { fontSize: 8.2, color: "#64748B", lineHeight: 1.62, marginBottom: 8 },
  projectGrid: { flexDirection: "row", gap: 12 },
  projectColumn: { flex: 1 },
  label: { fontSize: 7.5, fontWeight: 700, color: "#0F172A", marginBottom: 3 },
  body: { fontSize: 8.15, color: "#475569", lineHeight: 1.64 },
  bullet: { fontSize: 8, color: "#475569", lineHeight: 1.58, marginBottom: 3 },
  resultBox: { marginTop: 7, padding: 7, backgroundColor: "#E6F7FB", borderRadius: 3 },
  resultText: { fontSize: 8.15, fontWeight: 700, color: "#0E7490", lineHeight: 1.58 },
  compactGrid: { flexDirection: "row", flexWrap: "wrap", gap: 9 },
  compactCard: { width: "48.9%", padding: 11, backgroundColor: "#F8FAFC", borderTop: "2px solid #0F172A", borderRadius: 3 },
  compactTitle: { fontSize: 10.4, fontWeight: 700, color: "#0F172A", marginBottom: 2 },
  compactMeta: { fontSize: 7.5, color: "#0891B2", marginBottom: 6 },
  compactText: { fontSize: 8, color: "#475569", lineHeight: 1.62, marginBottom: 6 },
  companyStrip: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 8, marginTop: 11, marginBottom: 9, borderBottom: "1px solid #CBD5E1" },
  companyStripName: { fontSize: 13.5, fontWeight: 700, color: "#0F172A" },
  companyStripRole: { fontSize: 8, color: "#0891B2", marginTop: 2 },
  education: { marginTop: 16, paddingTop: 9, borderTop: "1px solid #E2E8F0" },
  footer: { position: "absolute", left: 42, right: 42, bottom: 18, flexDirection: "row", justifyContent: "flex-end", fontSize: 7.2, color: "#94A3B8" },
});

type Language = "ko" | "en";
type Project = { title: string; period: string; context: string; role: string; actions: readonly string[]; result: string };

const competencies = [
  ["0→1 제품화", "요구사항 정리와 아키텍처 설계부터 구현, 출시, 첫 고객 도입까지 연결합니다."],
  ["모바일·멀티채널 개발", "Flutter·Kotlin 모바일 앱과 웹·백엔드·키오스크를 하나의 제품 흐름으로 설계합니다."],
  ["AI/AX 운영 전환", "상담, 학사 안내, 재무·영업처럼 반복되는 업무를 RAG와 자동화 워크플로우로 전환합니다."],
  ["인프라·배포 개선", "CI/CD와 큐 기반 처리 구조를 설계해 빌드와 운영 병목을 줄이고 안정성을 높입니다."],
  ["결제·하드웨어 연동", "결제 단말, 프린터, NFC, 스캐너와 현장 운영 소프트웨어를 통합합니다."],
  ["제품 오너십", "기술 범위를 한정하지 않고 운영에 필요한 영역을 맡아 검증 가능한 결과까지 완성합니다."],
] as const;

const hypernova: Project[] = [
  { title: "모바일 CI/CD와 빌드 과정 개선", period: "2026.07 - 현재", context: "수동 단계와 긴 대기 시간이 포함된 모바일 빌드 과정이 개발·검증 속도를 제한하고 있었습니다.", role: "입사 직후 모바일 CI/CD를 적용하고 빌드 단계를 분석해 캐시와 의존성 처리, 배포 흐름을 개선했습니다.", actions: ["Flutter 모바일 빌드·배포 자동화", "병목 구간을 분리해 반복 작업과 대기 시간 축소", "팀이 동일한 방식으로 검증·배포할 수 있는 흐름 정리"], result: "빌드 시간을 21분대에서 6분대로 단축 · 약 71% 개선" },
  { title: "영어 중심 학습 경험을 일본어까지 확장", period: "2026.07 - 현재", context: "기존 제품은 영어 학습만 지원해 다른 언어와 개인화 학습으로 확장할 수 있는 기능이 필요했습니다.", role: "언어별 학습 흐름을 확장하고, 콘텐츠 속 단어·표현을 직접 저장해 반복 학습하는 모바일 기능을 개발했습니다.", actions: ["일본어 학습 기능 추가", "드래그 기반 단어·표현 저장 인터랙션 구현", "저장한 표현을 학습으로 연결하는 사용자 흐름 개발"], result: "지원 언어 확장 · 콘텐츠 소비와 개인 학습 데이터를 연결" },
  { title: "예약 전화 발송 인프라 재설계", period: "2026.07 - 현재", context: "단일 EC2에서 API와 푸시 발송을 함께 처리하면서 자원은 남아도 커넥션 한도 때문에 예약 발송이 지연되는 문제가 발생했습니다.", role: "예약 데이터 생성부터 발송 판단과 실제 처리까지 역할을 나누고, 각 단계에 적합한 관리형 제품을 조합한 구조를 설계했습니다.", actions: ["1분 주기 스케줄러와 발송 판단 디스패처 분리", "큐 기반 비동기 처리와 발송 워커 설계", "API 서버와 대량 발송의 장애 영향 범위 분리"], result: "스케줄러·디스패처·큐·워커로 책임 분리 · 확장성과 장애 격리 개선" },
];

const whiteblockCore: Project[] = [
  { title: "잇츠미 - 2개월 만에 0→1 출시", period: "2021.12 - 2026.02", context: "첫 대학 고객을 확보하려면 짧은 기간 안에 실제 사용할 수 있는 학생 종합 서비스를 처음부터 만들어야 했습니다.", role: "입사 직후 2개월 동안 Flutter 앱의 구조와 핵심 기능을 구현해 iOS·Android 첫 버전을 출시하고 장기 운영과 확장을 담당했습니다.", actions: ["멤버십·포인트·쿠폰·EPAY 결제와 QR·바코드 흐름 구현", "다중 환경·CI/CD·오류 추적 체계 구축", "대학별 요구사항을 공통 제품 구조로 흡수"], result: "첫 고객 한국외대 · 13개 대학 · 사용자 11만+·MAU 6만+ 추정 · 흑자 전환에 기여" },
  { title: "잇츠밀 - 외부 연동 과제를 자체 제품으로 전환", period: "2022.02 - 2026.02", context: "처음에는 외부 POS·키오스크를 잇츠미와 연동하는 과제였지만 확장성과 운영 효율을 검토한 결과 직접 만드는 편이 더 낫다고 판단했습니다.", role: "예정에 없던 제품의 구조를 처음부터 설계하고 Flutter 기반 POS·키오스크·매장 운영 클라이언트를 구축했습니다.", actions: ["POS·키오스크·주방 디스플레이·상품·주문·매출 흐름 개발", "결제 단말·USB/LAN/Bluetooth 프린터·NFC·스캐너 연동", "배포 자동화와 오류 추적 체계 구축"], result: "0→1 자체 제품 구축 · 13개 대학 · 100개 이상 매장 · 300대 이상 설치 기기" },
];

const barrier: Project = { title: "베리어프리 키오스크 - NIA 검증 통과", period: "2024.10 - 2025.08", context: "음성·시각·신체 접근성과 시험평가기관 기준을 제품 전체 흐름에 반영하고 실제 검증까지 통과해야 했습니다.", role: "초도 미팅부터 요구사항 해석, 기능 구현, 시험 대응과 검증서 발급까지 10개월의 전 과정을 리드했습니다.", actions: ["전체 UI TTS와 포커스·단계별 음성 안내", "고대비·확대·낮은 자세 모드와 접근 감지", "시험 이슈 수정과 평가기관 대응"], result: "시험평가기관 적합 판정 · NIA 검증시험 통과 · 검증서 발급" };

const whiteblockAdditional = [
  ["WVCAT 통합 라이브러리", "2024.07 - 2025.04", "서로 다른 결제 단말 프로토콜을 확장 가능한 Android 인터페이스로 통합했습니다.", "NVCAT·WVCAT·JTNET·AppPos 4개 프로토콜 통합"],
  ["현장형 키오스크", "2024.04 - 2025.09", "치지직 팝업스토어와 KLPGA 대회의 발권·결제·현장 운영 키오스크를 개발했습니다.", "결제·발권·FaceSign 얼굴인식의 현장 운영 연결"],
  ["윤잇 브랜드 앱", "2025.07 - 2025.11", "PG 결제, 구독 정기결제, 쿠폰, 푸시를 포함한 커머스 앱을 구현하고 출시했습니다.", "모바일 커머스 전 기능 개발·출시"],
  ["츄잉 결제·출결 앱", "2025.07 - 2025.09", "Jetpack Compose 앱에 결제 단말과 얼굴인식 결제를 연결했습니다.", "WVCAT·DeepPass·바코드 스캐너 연동"],
] as const;

const previous = [
  { name: "로플랫", period: "2021.02 - 2021.12", role: "Software Engineer", projects: [
    { title: "캐시플레이스 운영 및 기능 개발", period: "2021.02 - 2021.12", context: "리워드형 라이프스타일 앱의 Android 클라이언트와 Flask 서버를 운영했습니다.", role: "앱과 서버 양쪽의 유지보수 및 사용자 기능 개발을 담당했습니다.", actions: ["매장 상세 화면 동적 지도 UI", "룰렛 이벤트 웹뷰와 쿠폰 기능", "운영 이슈 대응과 서버 유지보수"], result: "모바일·서버를 함께 운영하며 기능 출시와 안정화 수행" },
    { title: "React Native SDK 샘플 앱", period: "2021.08", context: "고객사가 네이티브 위치 SDK를 React Native 환경에서 검증할 수 있는 예제가 필요했습니다.", role: "Android 네이티브 모듈을 연결한 React Native 샘플 앱을 개발했습니다.", actions: ["네이티브 SDK 브리지 구성", "고객사 적용을 위한 실행 예제 제공"], result: "React Native 환경의 SDK 도입 경로 제공" },
  ] },
  { name: "주식회사옷깃", period: "2019.12 - 2020.08", role: "Android Developer", projects: [
    { title: "OKIT 라이프로깅 앱", period: "2019.12 - 2020.09", context: "방문 장소를 기록하고 같은 장소를 방문한 사용자를 연결하는 라이프로깅 서비스였습니다.", role: "Android 개발자 1인으로 Kotlin 앱 전체를 담당했습니다.", actions: ["Google·Facebook 로그인, 지도, 푸시, 채팅", "방문 장소 기록과 사용자 매칭", "Firebase Storage와 Loplat SDK 연동"], result: "Android 앱 전체 기능을 단독 설계·구현" },
  ] },
  { name: "에브리웨어", period: "2019.08 - 2019.10", role: "Android Developer", projects: [
    { title: "EVERYWEAR 가상 피팅", period: "2019.08 - 2019.10", context: "사용자 사진에 다양한 의류를 합성해 보는 딥러닝 기반 가상 피팅 서비스였습니다.", role: "Android 개발자 1인으로 사용자 앱을 개발했습니다.", actions: ["의류 목록과 가상 피팅룸", "코디 목록·커스텀 카메라", "서버 API와 푸시 알림 연동"], result: "Kotlin 기반 모바일 제품을 단독 구현" },
  ] },
] as const;

const external = [
  ["댓츠원 DX 플랫폼", "2026.05 - 2026.10", "입시 컨설팅랩의 분산된 운영과 상담 흐름을 하나의 플랫폼으로 전환했습니다.", "관리자 웹·학생용 PWA·내부 키오스크를 구축하고 실장 중심 상담을 AI 워크플로우로 전환", "웹·앱·키오스크 3개 채널 통합 · 2026.10 마무리 예정"],
  ["한국외대 AI 학사 챗봇", "2026.08 - 현재", "전자규정집과 학사 데이터를 근거로 답변하는 교육 AX PoC를 구축했습니다.", "구조적 RAG, 근거 인용, 검증 Q&A와 회귀 테스트 기반 품질 체계 구축", "오픈 2주차 DAU 약 80명 · 하루 질문 약 300건 · PoC 진행 중"],
  ["PintaAI 내부 운영 AX", "2026.07 - 현재", "미국 법인 AI 보안기업의 반복적인 재무·영업·운영 업무를 자동화했습니다.", "증빙 수집·지원사업 문서·CRM 워크플로우 자동화와 로컬 도구의 클라우드 운영 전환", "자동화 결과를 실제 운영 환경으로 이관 · 진행 중"],
  ["레인타운쿠폰", "2025.02 - 현재", "지역 매장 쿠폰 서비스의 제품 전체를 구축하고 지속 운영하고 있습니다.", "디자인, Flutter 앱, Firebase 백엔드, React 관리자 웹, 배포와 운영 담당", "앱·백엔드·관리자 웹을 단독 연결해 실제 서비스 운영"],
] as const;

function Header({ language }: { language: Language }) {
  return <View style={styles.header}><View><Text style={styles.name}>{profile.name[language]}</Text><Text style={styles.role}>{profile.title[language]}</Text></View><View><Text style={styles.contact}>{profile.email} · {profile.phone}</Text><Link style={[styles.contact, styles.link]} src={profile.portfolio ?? ""}>puze8681.github.io</Link><Link style={[styles.contact, styles.link]} src={profile.github}>github.com/puze8681</Link></View></View>;
}

function Footer({ pageNumber }: { pageNumber: number }) { return <View style={styles.footer}><Text>{pageNumber} / 7</Text></View>; }

function PageHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <><Text style={styles.eyebrow}>{eyebrow}</Text><Text style={styles.pageTitle}>{title}</Text><Text style={styles.pageIntro}>{intro}</Text></>;
}

function CompanyHeader({ index, name, period, role, summary }: { index: string; name: string; period: string; role: string; summary: string }) {
  return <View style={styles.companyHeader}><Text style={styles.eyebrow}>COMPANY {index}</Text><View style={styles.companyTop}><View><Text style={styles.companyName}>{name}</Text><Text style={styles.companyRole}>{role}</Text></View><Text style={styles.companyPeriod}>{period}</Text></View><Text style={styles.companySummary}>{summary}</Text></View>;
}

function ProjectCase({ item, language }: { item: Project; language: Language }) {
  const labels = language === "ko" ? ["담당 역할", "주요 실행", "성과"] : ["Role", "Key Actions", "Outcome"];
  return <View style={styles.project} wrap={false}><View style={styles.projectHeader}><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectPeriod}>{item.period}</Text></View><Text style={styles.projectContext}>{item.context}</Text><View style={styles.projectGrid}><View style={styles.projectColumn}><Text style={styles.label}>{labels[0]}</Text><Text style={styles.body}>{item.role}</Text></View><View style={styles.projectColumn}><Text style={styles.label}>{labels[1]}</Text>{item.actions.map((action) => <Text key={action} style={styles.bullet}>• {action}</Text>)}<View style={styles.resultBox}><Text style={styles.label}>{labels[2]}</Text><Text style={styles.resultText}>{item.result}</Text></View></View></View></View>;
}

function CompactCard({ title, meta, context, role, result, language }: { title: string; meta: string; context: string; role: string; result: string; language: Language }) {
  return <View style={styles.compactCard} wrap={false}><Text style={styles.compactTitle}>{title}</Text><Text style={styles.compactMeta}>{meta}</Text><Text style={styles.compactText}>{context}</Text><Text style={styles.label}>{language === "ko" ? "담당 역할" : "Role"}</Text><Text style={styles.compactText}>{role}</Text><View style={styles.resultBox}><Text style={styles.resultText}>{result}</Text></View></View>;
}

export default function ImpactCareerDocument({ language }: { language: Language }) {
  const isKo = language === "ko";
  const career = [["2026.07 - 현재", "하이퍼노바", "Product Engineer · Heyring AI"], ["2021.12 - 2026.02", "화이트블록", "Developer · 잇츠미·잇츠밀"], ["2021.02 - 2021.12", "로플랫", "Software Engineer"], ["2019.12 - 2020.08", "주식회사옷깃", "Android Developer"], ["2019.08 - 2019.10", "에브리웨어", "Android Developer"]];
  return <Document title={`${profile.name[language]} - 성과 중심 경력기술서`} author={profile.name[language]}>
    <Page size="A4" style={styles.page}><Header language={language}/><PageHeading eyebrow="성과 중심 경력기술서 · 01" title={isKo ? "핵심 역량" : "Core Capabilities"} intro={isKo ? "제품이 없던 단계의 0→1 개발부터 장기 운영, AI/AX 전환, 인프라 개선까지 제품 생애주기 전반을 수행해 왔습니다." : "End-to-end product work spanning zero-to-one delivery, operations, AI transformation, and infrastructure."}/><View style={styles.metricRow}>{[["7년", "제품 개발 경력"], ["20+", "수행 프로젝트"], ["13개", "도입 대학"], ["100+", "도입 매장"]].map(([value,label]) => <View key={label} style={styles.metric}><Text style={styles.metricValue}>{value}</Text><Text style={styles.metricLabel}>{label}</Text></View>)}</View><Text style={styles.metricBasis}>* 사용자 11만+·MAU 6만+는 2025년 여름 실측치를 2026.02 기준으로 보수 환산</Text><View style={styles.competencyGrid}>{competencies.map(([title,text]) => <View key={title} style={styles.competency} wrap={false}><Text style={styles.competencyTitle}>{title}</Text><Text style={styles.competencyText}>{text}</Text></View>)}</View><Text style={styles.sectionTitle}>{isKo ? "회사별 경력" : "Career by Company"}</Text>{career.map(([period,company,role]) => <View key={company} style={styles.timelineItem}><Text style={styles.timelinePeriod}>{period}</Text><Text style={styles.timelineCompany}>{company}</Text><Text style={styles.timelineRole}>{role}</Text></View>)}<Footer pageNumber={1}/></Page>

    <Page size="A4" style={styles.page}><CompanyHeader index="01 · 02" name="하이퍼노바" period="2026.07 - 현재" role="Product Engineer · 헤이링(Heyring) AI" summary="AI 전화 기반 언어 학습 제품에서 Flutter 모바일 앱, 학습 기능, 배포 파이프라인과 예약 전화 인프라 개선을 함께 담당합니다."/>{hypernova.map((item) => <ProjectCase key={item.title} item={item} language={language}/>)}<Footer pageNumber={2}/></Page>

    <Page size="A4" style={styles.page}><CompanyHeader index="02 · 03" name="화이트블록" period="2021.12 - 2026.02" role="Developer · Flutter·결제·키오스크·현장 시스템" summary="고객사와 매출, 실제 운영 서비스가 없던 시점에 합류해 잇츠미를 출시하고 잇츠밀을 새로 구축했습니다. 외부 투자 없이 성장한 회사가 흑자 전환하는 시점까지 핵심 제품 개발과 운영을 담당했습니다."/>{whiteblockCore.map((item) => <ProjectCase key={item.title} item={item} language={language}/>)}<Footer pageNumber={3}/></Page>

    <Page size="A4" style={styles.page}><CompanyHeader index="02 · 04" name="화이트블록" period="2021.12 - 2026.02" role="Developer · 검증·결제·현장 제품" summary="핵심 플랫폼 외에도 접근성 검증, 결제 프로토콜, 커머스 앱과 현장 키오스크를 제품 단위로 설계하고 배포했습니다."/><ProjectCase item={barrier} language={language}/><Text style={styles.sectionTitle}>{isKo ? "상세 과제" : "Additional Projects"}</Text><View style={styles.compactGrid}>{whiteblockAdditional.map(([title,meta,context,result]) => <CompactCard key={title} title={title} meta={meta} context={context} role="제품 설계·클라이언트 개발·외부 장비 연동과 현장 운영 대응" result={result} language={language}/>)}</View><Footer pageNumber={4}/></Page>

    <Page size="A4" style={styles.page}><PageHeading eyebrow="COMPANY 03 · 05" title={isKo ? "로플랫" : "Loplat"} intro={isKo ? "Android 앱과 Flask 서버를 함께 운영하고, 고객사의 SDK 도입을 위한 React Native 샘플 앱까지 담당 범위를 넓혔습니다." : "Operated both the Android app and Flask server, and expanded into React Native SDK integration."}/><View wrap={false}>{previous[0].projects.map((item) => <ProjectCase key={item.title} item={item} language={language}/>)}</View><Footer pageNumber={5}/></Page>

    <Page size="A4" style={styles.page}><PageHeading eyebrow="COMPANY 04–05 · 06" title={isKo ? "초기 회사 경력" : "Early Company Experience"} intro={isKo ? "Android 개발자 1인으로 제품 전체를 맡으며 모바일 제품의 설계와 구현 경험을 쌓았습니다." : "Owned complete mobile products as the sole Android developer."}/>{previous.slice(1).map((company) => <View key={company.name} wrap={false}><View style={styles.companyStrip}><View><Text style={styles.companyStripName}>{company.name}</Text><Text style={styles.companyStripRole}>{company.role}</Text></View><Text style={styles.companyPeriod}>{company.period}</Text></View>{company.projects.map((item) => <ProjectCase key={item.title} item={item} language={language}/>)}</View>)}<Footer pageNumber={6}/></Page>

    <Page size="A4" style={styles.page}><PageHeading eyebrow="외부 프로젝트 · 07" title={isKo ? "외부 프로젝트" : "Client Projects"} intro={isKo ? "고객의 운영 프로세스를 제품과 AI 시스템으로 전환하고 실제 운영 가능한 상태까지 구축했습니다." : "Converted client operations into products and AI systems ready for real use."}/><View style={styles.compactGrid}>{external.map(([title,meta,context,role,result]) => <CompactCard key={title} title={title} meta={meta} context={context} role={role} result={result} language={language}/>)}</View><View style={styles.education}><Text style={styles.label}>{isKo ? "학력/수료" : "Education/Training"}</Text><Text style={styles.body}>한국외국어대학교 컴퓨터공학부 재학 · 소프트웨어 마에스트로 9기</Text></View><Footer pageNumber={7}/></Page>
  </Document>;
}
