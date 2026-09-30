"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import {
  profile,
  experiencesData,
  majorProjectsData,
  otherProjectsData,
  skillsData,
  awardsData,
  certificationsData,
  activitiesData,
  educationData,
  strengthsData,
  itsmealHighlightsData,
  itsmeHighlightsData,
  barrierFreeProjectData,
  itsmealDesignImages,
  itsmeDesignImages,
} from "@/data";

// 한글 폰트 등록
const fontBaseUrl = typeof window !== "undefined" ? window.location.origin : "";

Font.register({
  family: "Pretendard",
  fonts: [
    {
      src: `${fontBaseUrl}/fonts/Pretendard-Regular.otf`,
      fontWeight: 400,
    },
    {
      src: `${fontBaseUrl}/fonts/Pretendard-Bold.otf`,
      fontWeight: 700,
    },
  ],
});

// QR 코드 URL 생성 함수
const getQRCodeUrl = (url: string, size: number = 80) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&format=png`;
};

// 스타일
const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: "Pretendard",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333",
  },
  // 커버 페이지
  coverPage: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    fontFamily: "Pretendard",
    backgroundColor: "#0A0F1C",
  },
  coverContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  coverTitle: {
    fontSize: 42,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  coverSubtitle: {
    fontSize: 18,
    color: "#00D4FF",
    marginBottom: 40,
    textAlign: "center",
  },
  coverDivider: {
    width: 80,
    height: 3,
    backgroundColor: "#00D4FF",
    marginBottom: 40,
  },
  coverInfo: {
    alignItems: "center",
  },
  coverInfoText: {
    fontSize: 12,
    color: "#CCCCCC",
    marginBottom: 6,
  },
  coverQRSection: {
    flexDirection: "row",
    gap: 30,
    marginTop: 50,
  },
  coverQRItem: {
    alignItems: "center",
  },
  coverQRImage: {
    width: 60,
    height: 60,
    marginBottom: 6,
  },
  coverQRLabel: {
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  // 목차 페이지
  tocTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 30,
    paddingBottom: 10,
    borderBottom: "2px solid #0A0F1C",
  },
  tocItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottom: "1px dotted #DDD",
  },
  tocItemText: {
    fontSize: 12,
    color: "#333",
  },
  tocItemPage: {
    fontSize: 12,
    color: "#666",
  },
  // 헤더
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: "2px solid #0A0F1C",
  },
  headerLeft: {
    flexDirection: "column",
    maxWidth: "50%",
  },
  headerRight: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.2,
    paddingBottom: 8,
  },
  title: {
    fontSize: 12,
    color: "#0A0F1C",
    lineHeight: 1.2,
    paddingTop: 4,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    fontSize: 10,
    color: "#555",
  },
  // QR 코드 섹션
  qrSection: {
    alignItems: "center",
  },
  qrImage: {
    width: 45,
    height: 45,
    marginBottom: 2,
  },
  qrLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: "#333",
    textAlign: "center",
  },
  qrUrl: {
    fontSize: 6,
    color: "#666",
    textAlign: "center",
  },
  // 페이지 번호
  pageNumber: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
  // 섹션
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: "2px solid #0A0F1C",
  },
  sectionSubtitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#333",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "1px solid #E5E7EB",
  },
  // 소개
  introText: {
    fontSize: 11,
    color: "#444",
    lineHeight: 1.7,
    marginBottom: 16,
  },
  strengthsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  strengthItem: {
    width: "48%",
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderRadius: 6,
    borderLeft: "3px solid #00D4FF",
  },
  strengthTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 4,
  },
  strengthDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.5,
  },
  // 경력
  experienceItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#FAFAFA",
    borderRadius: 6,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 700,
    color: "#111",
  },
  period: {
    fontSize: 10,
    color: "#666",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  role: {
    fontSize: 11,
    color: "#0A0F1C",
    marginBottom: 8,
  },
  projectItem: {
    marginLeft: 8,
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: "2px solid #00D4FF",
  },
  projectName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 2,
  },
  projectPeriodSmall: {
    fontSize: 9,
    color: "#888",
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 10,
    color: "#555",
    marginBottom: 4,
  },
  taskItem: {
    fontSize: 9,
    color: "#666",
    marginLeft: 8,
    marginBottom: 2,
  },
  // 주요 프로젝트 카드
  majorProjectCard: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    borderLeft: "4px solid #0A0F1C",
  },
  majorProjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  majorProjectTag: {
    fontSize: 9,
    color: "#00D4FF",
    fontWeight: 700,
    backgroundColor: "#0A0F1C",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 6,
  },
  majorProjectTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111",
    marginBottom: 4,
  },
  majorProjectPeriod: {
    fontSize: 10,
    color: "#666",
  },
  majorProjectStats: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0A0F1C",
  },
  statLabel: {
    fontSize: 8,
    color: "#666",
  },
  majorProjectDesc: {
    fontSize: 10,
    color: "#444",
    lineHeight: 1.6,
    marginBottom: 10,
  },
  majorProjectTech: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  techBadge: {
    fontSize: 8,
    color: "#555",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  // 프로젝트 하이라이트
  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  highlightItem: {
    width: "48%",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    borderLeft: "3px solid #00D4FF",
  },
  highlightCategory: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 4,
  },
  highlightCommits: {
    fontSize: 8,
    color: "#00D4FF",
    marginBottom: 4,
  },
  highlightFeature: {
    fontSize: 8,
    color: "#666",
    marginBottom: 2,
  },
  // 베리어프리
  barrierFreeSection: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#F0FDF4",
    borderRadius: 6,
    borderLeft: "3px solid #22C55E",
  },
  barrierFreeTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#166534",
    marginBottom: 4,
  },
  barrierFreeCert: {
    fontSize: 9,
    color: "#22C55E",
    fontWeight: 700,
    marginBottom: 8,
  },
  barrierFreeDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.5,
    marginBottom: 8,
  },
  barrierFreeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  barrierFreeFeature: {
    width: "48%",
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  barrierFreeFeatureTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: "#166534",
    marginBottom: 4,
  },
  barrierFreeFeatureItem: {
    fontSize: 8,
    color: "#666",
    marginBottom: 1,
  },
  // 기타 프로젝트
  otherProjectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  otherProjectItem: {
    width: "48%",
    padding: 10,
    backgroundColor: "#FAFAFA",
    borderRadius: 6,
    borderLeft: "3px solid #6B7280",
  },
  otherProjectTag: {
    fontSize: 8,
    color: "#0A0F1C",
    fontWeight: 700,
    marginBottom: 3,
  },
  otherProjectTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 3,
  },
  otherProjectPeriod: {
    fontSize: 9,
    color: "#666",
    marginBottom: 4,
  },
  otherProjectDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.4,
  },
  otherProjectCommits: {
    fontSize: 8,
    color: "#00D4FF",
    fontWeight: 700,
    marginTop: 4,
  },
  // 기술 스택
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillCategory: {
    width: "48%",
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderRadius: 6,
    borderLeft: "3px solid #0A0F1C",
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 4,
  },
  skillDescription: {
    fontSize: 9,
    color: "#555",
    marginBottom: 4,
  },
  skillDetails: {
    fontSize: 8,
    color: "#888",
  },
  // 수상/자격증/활동
  achievementsGrid: {
    flexDirection: "column",
    gap: 8,
  },
  achievementItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderRadius: 6,
    borderLeft: "3px solid #FFB800",
  },
  achievementLeft: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 2,
  },
  achievementIssuer: {
    fontSize: 9,
    color: "#666",
  },
  achievementRight: {
    alignItems: "flex-end",
  },
  achievementAward: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0A0F1C",
  },
  achievementDate: {
    fontSize: 9,
    color: "#666",
  },
  // 학력
  educationItem: {
    padding: 10,
    backgroundColor: "#F8F9FA",
    borderRadius: 6,
    borderLeft: "3px solid #8B5CF6",
    marginBottom: 8,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 2,
  },
  major: {
    fontSize: 10,
    color: "#555",
  },
});

// 시각적 포트폴리오용 추가 스타일
const v = StyleSheet.create({
  sectionIntro: {
    fontSize: 9.5,
    color: "#777",
    marginBottom: 12,
    lineHeight: 1.5,
  },
  // 주요 프로젝트 스크린샷
  shotStrip: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
    marginBottom: 6,
  },
  shotItem: {
    alignItems: "center",
  },
  shotPhone: {
    width: 84,
    height: 172,
    objectFit: "contain",
    borderRadius: 4,
    border: "1px solid #E5E7EB",
    backgroundColor: "#fff",
  },
  shotWide: {
    width: 152,
    height: 98,
    objectFit: "contain",
    borderRadius: 4,
    border: "1px solid #E5E7EB",
    backgroundColor: "#fff",
  },
  shotCaption: {
    fontSize: 7,
    color: "#999",
    textAlign: "center",
    marginTop: 2,
  },
  shotGroupLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: "#0A0F1C",
    marginTop: 8,
    marginBottom: 2,
  },
  // 기타 프로젝트 (이미지 포함 카드)
  pCard: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 6,
    borderLeft: "3px solid #0A0F1C",
  },
  pThumbBox: {
    width: 96,
    height: 156,
    borderRadius: 4,
    backgroundColor: "#fff",
    border: "1px solid #E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  pThumb: {
    width: 94,
    height: 154,
    objectFit: "contain",
  },
  pThumbPlaceholder: {
    fontSize: 18,
    fontWeight: 700,
    color: "#D1D5DB",
  },
  pBody: {
    flex: 1,
  },
  pTag: {
    fontSize: 8,
    fontWeight: 700,
    color: "#0891b2",
    marginBottom: 2,
  },
  pTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#111",
    marginBottom: 1,
  },
  pPeriod: {
    fontSize: 8.5,
    color: "#888",
    marginBottom: 5,
  },
  pDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.45,
    marginBottom: 5,
  },
  pFeature: {
    fontSize: 8.5,
    color: "#666",
    marginBottom: 1.5,
  },
  pTechRow: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
    marginTop: 5,
  },
  pTechBadge: {
    fontSize: 7.5,
    color: "#0A0F1C",
    backgroundColor: "#EEF2F7",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  pCommits: {
    fontSize: 8.5,
    fontWeight: 700,
    color: "#0891b2",
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: 18,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 9,
    color: "#bbb",
  },
});

// PDF 용 경량 이미지(public/images-pdf) 사용 + webp -> png 매핑.
// react-pdf 는 png/jpg 만 지원하므로 webp 는 변환본(png)을 가리킨다.
const isUsableImage = (src: string) => /\.(png|jpe?g|webp)$/i.test(src);
const toImageUrl = (src: string) => {
  const pdfSrc = src.replace(/^\/images\//, "/images-pdf/").replace(/\.webp$/i, ".png");
  return `${fontBaseUrl}${encodeURI(pdfSrc)}`;
};
const firstThumb = (p: { images?: { src: string }[]; portfolioImages?: { src: string }[] }) => {
  const list = [...(p.images ?? []), ...(p.portfolioImages ?? [])];
  const found = list.find((i) => isUsableImage(i.src));
  return found ? toImageUrl(found.src) : null;
};

interface PortfolioDocumentProps {
  language: "ko" | "en";
}

export default function PortfolioDocument({ language }: PortfolioDocumentProps) {
  const experiences = experiencesData[language];
  const majorProjects = majorProjectsData[language];
  const otherProjects = otherProjectsData[language];
  const otherProjectPages = Array.from(
    { length: Math.ceil(otherProjects.length / 3) },
    (_, index) => otherProjects.slice(index * 3, index * 3 + 3),
  );
  const skills = skillsData[language];
  const awards = awardsData[language];
  const certifications = certificationsData[language];
  const activities = activitiesData[language];
  const education = educationData[language];
  const strengths = strengthsData[language];
  const itsmealHighlights = itsmealHighlightsData[language];
  const itsmeHighlights = itsmeHighlightsData[language];
  const barrierFree = barrierFreeProjectData[language];

  const texts = {
    ko: {
      portfolio: "포트폴리오",
      toc: "목차",
      intro: "소개",
      strengths: "핵심 역량",
      experience: "경력",
      majorProjects: "주요 프로젝트",
      projectDetails: "프로젝트 상세",
      otherProjects: "기타 프로젝트",
      skills: "기술 스택",
      awards: "수상 내역",
      certifications: "자격증",
      activities: "활동",
      education: "학력/수료",
      github: "GitHub",
      portfolioLink: "Portfolio",
      linkedin: "LinkedIn",
      devHighlights: "주요 개발 내역",
      barrierFree: "베리어프리 키오스크",
      commits: "commits",
      screenshots: "화면 미리보기",
      kioskPos: "키오스크 / POS",
      appScreens: "앱 화면",
      otherProjectsIntro: "위 주요 프로젝트 외에 다양한 도메인에서 진행한 프로젝트들입니다.",
      majorProjectsIntro: "가장 오래 기여하고 임팩트가 컸던 핵심 프로젝트입니다.",
      noImage: "No Image",
    },
    en: {
      portfolio: "Portfolio",
      toc: "Table of Contents",
      intro: "About",
      strengths: "Core Competencies",
      experience: "Experience",
      majorProjects: "Major Projects",
      projectDetails: "Project Details",
      otherProjects: "Other Projects",
      skills: "Tech Stack",
      awards: "Awards",
      certifications: "Certifications",
      activities: "Activities",
      education: "Education/Training",
      github: "GitHub",
      portfolioLink: "Portfolio",
      linkedin: "LinkedIn",
      devHighlights: "Development Highlights",
      barrierFree: "Barrier-Free Kiosk",
      commits: "commits",
      screenshots: "Screenshots",
      kioskPos: "Kiosk / POS",
      appScreens: "App Screens",
      otherProjectsIntro: "Projects across various domains beyond the major projects above.",
      majorProjectsIntro: "The core projects with the longest contribution and biggest impact.",
      noImage: "No Image",
    },
  };

  const t = texts[language];

  const tocItems = [
    { title: t.intro, page: "01" },
    { title: t.experience, page: "02" },
    { title: `${t.majorProjects} · ${majorProjects[0]?.title}`, page: "03" },
    { title: `${t.majorProjects} · ${majorProjects[1]?.title}`, page: "04" },
    { title: t.barrierFree, page: "05" },
    { title: t.otherProjects, page: "06" },
    { title: t.skills, page: "07" },
    { title: `${t.awards} / ${t.certifications} / ${t.activities} / ${t.education}`, page: "08" },
  ];

  return (
    <Document>
      {/* 1. 커버 페이지 */}
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverContent}>
          <Text style={styles.coverTitle}>{profile.name[language]}</Text>
          <Text style={styles.coverSubtitle}>{profile.title[language]}</Text>
          <View style={styles.coverDivider} />
          <View style={styles.coverInfo}>
            <Text style={styles.coverInfoText}>{profile.email}</Text>
            <Text style={styles.coverInfoText}>{profile.phone}</Text>
          </View>
          <View style={styles.coverQRSection}>
            <View style={styles.coverQRItem}>
              <Image style={styles.coverQRImage} src={getQRCodeUrl(profile.github)} />
              <Text style={styles.coverQRLabel}>{t.github}</Text>
            </View>
            {profile.portfolio && (
              <View style={styles.coverQRItem}>
                <Image style={styles.coverQRImage} src={getQRCodeUrl(profile.portfolio)} />
                <Text style={styles.coverQRLabel}>{t.portfolioLink}</Text>
              </View>
            )}
            {profile.linkedin && (
              <View style={styles.coverQRItem}>
                <Image style={styles.coverQRImage} src={getQRCodeUrl(profile.linkedin)} />
                <Text style={styles.coverQRLabel}>{t.linkedin}</Text>
              </View>
            )}
          </View>
        </View>
        <Text style={styles.pageNumber}>1</Text>
      </Page>

      {/* 2. 목차 페이지 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.tocTitle}>{t.toc}</Text>
        {tocItems.map((item, index) => (
          <View key={index} style={styles.tocItem}>
            <Text style={styles.tocItemText}>{item.title}</Text>
            <Text style={styles.tocItemPage}>{item.page}</Text>
          </View>
        ))}
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 3. 소개 페이지 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header} wrap={false}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{profile.name[language]}</Text>
            <Text style={styles.title}>{profile.title[language]}</Text>
            <View style={styles.contactRow}>
              <Text>{profile.email}</Text>
              <Text>|</Text>
              <Text>{profile.phone}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.qrSection}>
              <Image style={styles.qrImage} src={getQRCodeUrl(profile.github)} />
              <Text style={styles.qrLabel}>{t.github}</Text>
            </View>
            {profile.portfolio && (
              <View style={styles.qrSection}>
                <Image style={styles.qrImage} src={getQRCodeUrl(profile.portfolio)} />
                <Text style={styles.qrLabel}>{t.portfolioLink}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.intro}</Text>
          <Text style={styles.introText}>{profile.summary[language]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>{t.strengths}</Text>
          <View style={styles.strengthsGrid}>
            {strengths.map((strength, index) => (
              <View key={index} style={styles.strengthItem} wrap={false}>
                <Text style={styles.strengthTitle}>{strength.title}</Text>
                <Text style={styles.strengthDesc}>{strength.description}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 4. 경력 페이지 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.role}>{exp.role}</Text>
              {exp.projects.map((project, pIndex) => (
                <View key={pIndex} style={styles.projectItem}>
                  <Text style={styles.projectName}>{project.name}</Text>
                  <Text style={styles.projectPeriodSmall}>{project.period}</Text>
                  <Text style={styles.projectDesc}>{project.description}</Text>
                  {project.tasks.slice(0, 3).map((task, tIndex) => (
                    <Text key={tIndex} style={styles.taskItem}>• {task}</Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 5. 주요 프로젝트 1 - 잇츠밀 (스크린샷 + 개발 내역) */}
      <Page size="A4" style={styles.page} break>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.majorProjects}</Text>
          <Text style={v.sectionIntro}>{t.majorProjectsIntro}</Text>

          {majorProjects[0] && (
            <View style={styles.majorProjectCard} wrap={false}>
              <Text style={styles.majorProjectTag}>{majorProjects[0].tag}</Text>
              <View style={styles.majorProjectHeader}>
                <View>
                  <Text style={styles.majorProjectTitle}>{majorProjects[0].title}</Text>
                  <Text style={styles.majorProjectPeriod}>{majorProjects[0].period}</Text>
                </View>
                <View style={styles.majorProjectStats}>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{majorProjects[0].stats.primary}</Text>
                    <Text style={styles.statLabel}>{majorProjects[0].stats.primaryLabel}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{majorProjects[0].stats.secondary}</Text>
                    <Text style={styles.statLabel}>{majorProjects[0].stats.secondaryLabel}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.majorProjectDesc}>{majorProjects[0].description}</Text>
              <View style={styles.majorProjectTech}>
                {majorProjects[0].tech.map((tech, index) => (
                  <Text key={index} style={styles.techBadge}>{tech}</Text>
                ))}
              </View>
            </View>
          )}

          {/* 스크린샷 - 키오스크 / POS */}
          <Text style={v.shotGroupLabel}>{t.screenshots} · {t.kioskPos}</Text>
          <View style={v.shotStrip}>
            {[...itsmealDesignImages.kiosk, ...itsmealDesignImages.pos]
              .filter((img) => isUsableImage(img.src))
              .map((img, index) => (
                <View key={index} style={v.shotItem} wrap={false}>
                  <Image style={v.shotWide} src={toImageUrl(img.src)} />
                </View>
              ))}
          </View>

          <Text style={styles.sectionSubtitle}>{t.devHighlights}</Text>
          <View style={styles.highlightsGrid}>
            {itsmealHighlights.map((highlight, index) => (
              <View key={index} style={styles.highlightItem} wrap={false}>
                <Text style={styles.highlightCategory}>{highlight.category}</Text>
                {highlight.features.slice(0, 3).map((feature, fIndex) => (
                  <Text key={fIndex} style={styles.highlightFeature}>• {feature}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 6. 베리어프리 키오스크 */}
      <Page size="A4" style={styles.page} break>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.barrierFree}</Text>
          <View style={styles.barrierFreeSection} wrap={false}>
            <Text style={styles.barrierFreeTitle}>{barrierFree.title}</Text>
            <Text style={styles.barrierFreeCert}>{barrierFree.certification}</Text>
            <Text style={styles.barrierFreeDesc}>{barrierFree.description}</Text>
            <View style={styles.barrierFreeGrid}>
              {barrierFree.features.map((feature, index) => (
                <View key={index} style={styles.barrierFreeFeature}>
                  <Text style={styles.barrierFreeFeatureTitle}>{feature.category}</Text>
                  {feature.items.map((item, iIndex) => (
                    <Text key={iIndex} style={styles.barrierFreeFeatureItem}>• {item}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 7. 주요 프로젝트 2 - 잇츠미 (앱 스크린샷 + 개발 내역) */}
      <Page size="A4" style={styles.page} break>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.majorProjects}</Text>

          {majorProjects[1] && (
            <View style={styles.majorProjectCard} wrap={false}>
              <Text style={styles.majorProjectTag}>{majorProjects[1].tag}</Text>
              <View style={styles.majorProjectHeader}>
                <View>
                  <Text style={styles.majorProjectTitle}>{majorProjects[1].title}</Text>
                  <Text style={styles.majorProjectPeriod}>{majorProjects[1].period}</Text>
                </View>
                <View style={styles.majorProjectStats}>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{majorProjects[1].stats.primary}</Text>
                    <Text style={styles.statLabel}>{majorProjects[1].stats.primaryLabel}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{majorProjects[1].stats.secondary}</Text>
                    <Text style={styles.statLabel}>{majorProjects[1].stats.secondaryLabel}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.majorProjectDesc}>{majorProjects[1].description}</Text>
              <View style={styles.majorProjectTech}>
                {majorProjects[1].tech.map((tech, index) => (
                  <Text key={index} style={styles.techBadge}>{tech}</Text>
                ))}
              </View>
            </View>
          )}

          {/* 앱 화면 스크린샷 */}
          <Text style={v.shotGroupLabel}>{t.screenshots} · {t.appScreens}</Text>
          <View style={v.shotStrip}>
            {itsmeDesignImages
              .filter((img) => isUsableImage(img.src))
              .map((img, index) => (
                <View key={index} style={v.shotItem} wrap={false}>
                  <Image style={v.shotPhone} src={toImageUrl(img.src)} />
                </View>
              ))}
          </View>

          <Text style={styles.sectionSubtitle}>{t.devHighlights}</Text>
          <View style={styles.highlightsGrid}>
            {itsmeHighlights.map((highlight, index) => (
              <View key={index} style={styles.highlightItem} wrap={false}>
                <Text style={styles.highlightCategory}>{highlight.category}</Text>
                {highlight.features.slice(0, 3).map((feature, fIndex) => (
                  <Text key={fIndex} style={styles.highlightFeature}>• {feature}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 8. 기타 프로젝트 - 카드가 페이지 경계에서 잘리지 않도록 3개씩 분리 */}
      {otherProjectPages.map((projects, pageIndex) => (
        <Page key={pageIndex} size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.otherProjects}</Text>
            {pageIndex === 0 && <Text style={v.sectionIntro}>{t.otherProjectsIntro}</Text>}
            {projects.map((project, index) => {
              const thumb = firstThumb(project);
              return (
                <View key={index} style={v.pCard} wrap={false}>
                  <View style={v.pThumbBox}>
                    {thumb ? (
                      <Image style={v.pThumb} src={thumb} />
                    ) : (
                      <Text style={v.pThumbPlaceholder}>{project.tag.charAt(0)}</Text>
                    )}
                  </View>
                  <View style={v.pBody}>
                    <Text style={v.pTag}>{project.tag}</Text>
                    <Text style={v.pTitle}>{project.title}</Text>
                    <Text style={v.pPeriod}>{project.period}</Text>
                    <Text style={v.pDesc}>{project.description}</Text>
                    {project.features &&
                      project.features.slice(0, 4).map((feature, fIndex) => (
                        <Text key={fIndex} style={v.pFeature}>• {feature}</Text>
                      ))}
                    <View style={v.pTechRow}>
                      {project.tech.slice(0, 5).map((tech, tIndex) => (
                        <Text key={tIndex} style={v.pTechBadge}>{tech}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
        </Page>
      ))}

      {/* 9. 기술 스택 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.skills}</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillCategory} wrap={false}>
                <Text style={styles.skillCategoryTitle}>{skill.title}</Text>
                <Text style={styles.skillDescription}>{skill.description}</Text>
                <Text style={styles.skillDetails}>{skill.details.join(" • ")}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>

      {/* 10. 수상/자격증/활동/학력 */}
      <Page size="A4" style={styles.page}>
        {/* 수상 내역 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.awards}</Text>
          <View style={styles.achievementsGrid}>
            {awards.map((award, index) => (
              <View key={index} style={[styles.achievementItem, { borderLeftColor: "#FFB800" }]} wrap={false}>
                <View style={styles.achievementLeft}>
                  <Text style={styles.achievementTitle}>{award.title}</Text>
                  <Text style={styles.achievementIssuer}>{award.issuer}</Text>
                </View>
                <View style={styles.achievementRight}>
                  <Text style={styles.achievementAward}>{award.award}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 자격증 */}
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>{t.certifications}</Text>
          <View style={styles.achievementsGrid}>
            {certifications.map((cert, index) => (
              <View key={index} style={[styles.achievementItem, { borderLeftColor: "#3B82F6" }]} wrap={false}>
                <View style={styles.achievementLeft}>
                  <Text style={styles.achievementTitle}>{cert.name}</Text>
                  <Text style={styles.achievementIssuer}>{cert.issuer}</Text>
                </View>
                <View style={styles.achievementRight}>
                  <Text style={styles.achievementDate}>{cert.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 활동 */}
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>{t.activities}</Text>
          <View style={styles.achievementsGrid}>
            {activities.map((activity, index) => (
              <View key={index} style={[styles.achievementItem, { borderLeftColor: "#10B981" }]} wrap={false}>
                <View style={styles.achievementLeft}>
                  <Text style={styles.achievementTitle}>{activity.title}</Text>
                  <Text style={styles.achievementIssuer}>{activity.description}</Text>
                </View>
                <View style={styles.achievementRight}>
                  <Text style={styles.achievementDate}>{activity.period}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 학력 */}
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>{t.education}</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.schoolName}>{edu.name}</Text>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
              <Text style={styles.major}>{edu.major}</Text>
            </View>
          ))}
        </View>
        <Text style={v.footer} fixed render={({ pageNumber }) => String(pageNumber)} />
      </Page>
    </Document>
  );
}
