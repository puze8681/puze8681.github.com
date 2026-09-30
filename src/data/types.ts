// 다국어 지원 타입
export type Language = "ko" | "en";

export interface LocalizedData<T> {
  ko: T;
  en: T;
}

// 프로필 타입
export interface Profile {
  name: LocalizedData<string>;
  title: LocalizedData<string>;
  email: string;
  phone: string;
  github: string;
  linkedin?: string;
  portfolio?: string;
  summary: LocalizedData<string>;
}

// 경력 타입
export interface ExperienceProject {
  name: string;
  period: string;
  description: string;
  tasks: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
}

// 프로젝트 타입
export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectStats {
  primary: string;
  primaryLabel: string;
  secondary: string;
  secondaryLabel: string;
  features: string;
}

export interface ProjectHighlight {
  category: string;
  commits: string;
  features: string[];
}

export interface BarrierFreeFeature {
  category: string;
  items: string[];
}

export interface Project {
  id: number;
  slug: string;
  tag: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  commits?: string;
  images?: ProjectImage[];
  portfolioImages?: ProjectImage[];
  features?: string[];
  stats?: ProjectStats;
  hasDesignImages?: boolean;
  hasAppDesignImages?: boolean;
  hasHighlights?: string;
  hasPdfFile?: boolean;
}

export interface MajorProject extends Project {
  stats: ProjectStats;
}

// 기술 스택 타입
export interface Skill {
  icon: string; // 아이콘 이름
  title: string;
  description: string;
  details: string[];
}

// 수상 타입
export interface Award {
  title: string;
  award: string;
  issuer: string;
}

// 자격증 타입
export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

// 활동 타입
export interface Activity {
  title: string;
  period: string;
  description: string;
}

// 학력 타입
export interface Education {
  name: string;
  major: string;
  period: string;
}

// 강점 타입
export interface Strength {
  title: string;
  description: string;
}

// 통계 타입
export interface Stat {
  value: string;
  label: string;
}

// 베리어프리 프로젝트 타입
export interface BarrierFreeProject {
  title: string;
  period: string;
  certification: string;
  description: string;
  features: BarrierFreeFeature[];
}
