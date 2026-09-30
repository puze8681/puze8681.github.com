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
} from "@/data";

// 한글 폰트 등록 (Pretendard - 로컬 파일)
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

// 스타일 - 보편적인 이력서 폰트 크기 적용
const styles = StyleSheet.create({
  page: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: "Pretendard",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#333",
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
    maxWidth: "40%",
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
  // 섹션
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#111",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "1px solid #0A0F1C",
  },
  // 소개
  introText: {
    fontSize: 10,
    color: "#444",
    lineHeight: 1.6,
    marginBottom: 10,
  },
  strengthItem: {
    marginBottom: 8,
  },
  strengthTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 2,
  },
  strengthDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.5,
  },
  // 경력
  experienceItem: {
    marginBottom: 12,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 700,
    color: "#111",
  },
  period: {
    fontSize: 10,
    color: "#666",
  },
  role: {
    fontSize: 10,
    color: "#0A0F1C",
    marginBottom: 4,
  },
  projectItem: {
    marginLeft: 10,
    marginBottom: 6,
    paddingLeft: 8,
    borderLeft: "2px solid #E5E7EB",
  },
  projectName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
  },
  taskItem: {
    fontSize: 9,
    color: "#666",
    marginLeft: 8,
    marginBottom: 1,
  },
  // 주요 프로젝트
  projectsGrid: {
    flexDirection: "column",
    gap: 10,
  },
  majorProjectItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 4,
    borderLeft: "3px solid #0A0F1C",
  },
  majorProjectTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#111",
    marginBottom: 2,
  },
  majorProjectPeriod: {
    fontSize: 9,
    color: "#666",
    marginBottom: 3,
  },
  majorProjectStats: {
    fontSize: 10,
    color: "#0A0F1C",
    fontWeight: 700,
    marginBottom: 3,
  },
  majorProjectDesc: {
    fontSize: 10,
    color: "#555",
    marginBottom: 4,
    lineHeight: 1.4,
  },
  majorProjectTech: {
    fontSize: 9,
    color: "#666",
  },
  // 기타 프로젝트
  otherProjectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  otherProjectItem: {
    width: "48%",
    padding: 8,
    backgroundColor: "#FAFAFA",
    borderRadius: 4,
  },
  otherProjectTag: {
    fontSize: 8,
    color: "#0A0F1C",
    fontWeight: 700,
    marginBottom: 2,
  },
  otherProjectTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 2,
  },
  otherProjectPeriod: {
    fontSize: 9,
    color: "#666",
    marginBottom: 3,
  },
  otherProjectDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.4,
  },
  // 기술 스택
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillCategory: {
    width: "48%",
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0A0F1C",
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 10,
    color: "#444",
    marginBottom: 2,
  },
  // 수상
  awardsGrid: {
    flexDirection: "column",
    gap: 6,
  },
  awardItem: {
    width: "100%",
    padding: 8,
    backgroundColor: "#F8F9FA",
    borderRadius: 4,
    borderLeft: "2px solid #0A0F1C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  awardName: {
    fontSize: 10,
    color: "#0A0F1C",
    fontWeight: 700,
  },
  awardTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 1,
  },
  awardIssuer: {
    fontSize: 9,
    color: "#666",
  },
  // 자격증
  certificationsGrid: {
    flexDirection: "column",
    gap: 6,
  },
  certItem: {
    width: "100%",
    padding: 8,
    backgroundColor: "#F8F9FA",
    borderRadius: 4,
    borderLeft: "2px solid #495057",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  certName: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 1,
  },
  certIssuer: {
    fontSize: 9,
    color: "#495057",
  },
  certDate: {
    fontSize: 10,
    color: "#666",
  },
  // 활동
  activitiesGrid: {
    flexDirection: "column",
    gap: 6,
  },
  activityItem: {
    width: "100%",
    padding: 8,
    backgroundColor: "#F8F9FA",
    borderRadius: 4,
    borderLeft: "2px solid #6C757D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#333",
    marginBottom: 1,
  },
  activityPeriod: {
    fontSize: 10,
    color: "#495057",
  },
  activityDesc: {
    fontSize: 9,
    color: "#666",
  },
  // 학력
  educationItem: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#F8F9FA",
    borderRadius: 4,
    borderLeft: "2px solid #868E96",
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

interface ResumeDocumentProps {
  language: "ko" | "en";
}

export default function ResumeDocument({ language }: ResumeDocumentProps) {
  const experiences = experiencesData[language];
  const majorProjects = majorProjectsData[language];
  const otherProjects = otherProjectsData[language];
  const skills = skillsData[language];
  const awards = awardsData[language];
  const certifications = certificationsData[language];
  const activities = activitiesData[language];
  const education = educationData[language];
  const strengths = strengthsData[language];

  const texts = {
    ko: {
      intro: "소개",
      experience: "경력",
      majorProjects: "주요 프로젝트",
      otherProjects: "기타 프로젝트",
      skills: "기술 스택",
      awards: "수상 내역",
      certifications: "자격증",
      activities: "활동",
      education: "학력/수료",
      github: "GitHub",
      portfolio: "Portfolio",
      linkedin: "LinkedIn",
    },
    en: {
      intro: "About",
      experience: "Experience",
      majorProjects: "Major Projects",
      otherProjects: "Other Projects",
      skills: "Tech Stack",
      awards: "Awards",
      certifications: "Certifications",
      activities: "Activities",
      education: "Education/Training",
      github: "GitHub",
      portfolio: "Portfolio",
      linkedin: "LinkedIn",
    },
  };

  const t = texts[language];

  return (
    <Document>
      {/* 단일 페이지 - 자동으로 페이지 나눔 */}
      <Page size="A4" style={styles.page} wrap>
        {/* 헤더 */}
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
              <Text style={styles.qrUrl}>github.com/puze8681</Text>
            </View>
            {profile.portfolio && (
              <View style={styles.qrSection}>
                <Image style={styles.qrImage} src={getQRCodeUrl(profile.portfolio)} />
                <Text style={styles.qrLabel}>{t.portfolio}</Text>
                <Text style={styles.qrUrl}>puze8681.github.io</Text>
              </View>
            )}
            {profile.linkedin && (
              <View style={styles.qrSection}>
                <Image style={styles.qrImage} src={getQRCodeUrl(profile.linkedin)} />
                <Text style={styles.qrLabel}>{t.linkedin}</Text>
                <Text style={styles.qrUrl}>linkedin.com/in/puze8681</Text>
              </View>
            )}
          </View>
        </View>

        {/* 소개 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.intro}</Text>
          <Text style={styles.introText}>{profile.summary[language]}</Text>
          {strengths.map((strength) => (
            <View key={strength.title} style={styles.strengthItem} wrap={false}>
              <Text style={styles.strengthTitle}>{strength.title}</Text>
              <Text style={styles.strengthDesc}>{strength.description}</Text>
            </View>
          ))}
        </View>

        {/* 경력 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {experiences.map((exp) => (
            <View key={exp.company} style={styles.experienceItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.role}>{exp.role}</Text>
              {exp.projects.map((project) => (
                <View key={project.name} style={styles.projectItem}>
                  <Text style={styles.projectName}>{project.name}</Text>
                  <Text style={styles.projectDesc}>{project.description}</Text>
                  {project.tasks.map((task, idx) => (
                    <Text key={idx} style={styles.taskItem}>
                      • {task}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* 주요 프로젝트 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.majorProjects}</Text>
          <View style={styles.projectsGrid}>
            {majorProjects.map((project) => (
              <View key={project.id} style={styles.majorProjectItem} wrap={false}>
                <Text style={styles.majorProjectTitle}>{project.title}</Text>
                <Text style={styles.majorProjectPeriod}>{project.period}</Text>
                <Text style={styles.majorProjectStats}>
                  {project.stats.primary} {project.stats.primaryLabel} | {project.stats.secondary} {project.stats.secondaryLabel}
                </Text>
                <Text style={styles.majorProjectDesc}>
                  {project.description}
                </Text>
                <Text style={styles.majorProjectTech}>
                  {project.tech.join(" • ")}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 기타 프로젝트 - 새 페이지에서 시작 */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>{t.otherProjects}</Text>
          <View style={styles.otherProjectsGrid}>
            {otherProjects
              .filter((project) => !["athermo", "petfeed"].includes(project.slug))
              .map((project) => (
              <View key={project.id} style={styles.otherProjectItem} wrap={false}>
                <Text style={styles.otherProjectTag}>{project.tag}</Text>
                <Text style={styles.otherProjectTitle}>{project.title}</Text>
                <Text style={styles.otherProjectPeriod}>{project.period}</Text>
                <Text style={styles.otherProjectDesc}>
                  {project.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 기술 스택 - 새 페이지에서 시작 */}
        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>{t.skills}</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill) => (
              <View key={skill.title} style={styles.skillCategory} wrap={false}>
                <Text style={styles.skillCategoryTitle}>{skill.title}</Text>
                <Text style={styles.skillItem}>{skill.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 수상 내역 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.awards}</Text>
          <View style={styles.awardsGrid}>
            {awards.map((award) => (
              <View key={award.title} style={styles.awardItem} wrap={false}>
                <View>
                  <Text style={styles.awardTitle}>{award.title}</Text>
                  <Text style={styles.awardIssuer}>{award.issuer}</Text>
                </View>
                <Text style={styles.awardName}>{award.award}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 활동 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.activities}</Text>
          <View style={styles.activitiesGrid}>
            {activities.map((activity) => (
              <View key={activity.title} style={styles.activityItem} wrap={false}>
                <View>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityDesc}>{activity.description}</Text>
                </View>
                <Text style={styles.activityPeriod}>{activity.period}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 자격증 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.certifications}</Text>
          <View style={styles.certificationsGrid}>
            {certifications.map((cert) => (
              <View key={cert.name} style={styles.certItem} wrap={false}>
                <View>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certIssuer}>{cert.issuer}</Text>
                </View>
                <Text style={styles.certDate}>{cert.date}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 학력 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.education}</Text>
          {education.map((edu) => (
            <View key={edu.name} style={styles.educationItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.schoolName}>{edu.name}</Text>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
              <Text style={styles.major}>{edu.major}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
