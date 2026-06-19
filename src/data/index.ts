// Types
export * from "./types";

// Profile
export { profile, socialLinks } from "./profile";

// Experience
export { experiencesData, experienceSectionTexts } from "./experience";

// Projects
export {
  majorProjectsData,
  otherProjectsData,
  itsmealDesignImages,
  itsmeDesignImages,
  barrierFreeProjectData,
  barrierFreeLinks,
  itsmealHighlightsData,
  itsmeHighlightsData,
  projectSectionTexts,
  getAllProjects,
  getProjectBySlug,
  generateSlug,
} from "./projects";

// Skills
export { skillsData, skillsSectionTexts } from "./skills";

// Awards, Certifications, Activities
export { awardsData, certificationsData, activitiesData } from "./awards";

// Education
export {
  educationData,
  strengthsData,
  statsData,
  aboutSectionTexts,
} from "./education";

// Retrospectives
export {
  retrospectivesData,
  barrierFreeRetrospective,
  retrospectiveTexts,
  getRetrospective,
} from "./retrospectives";
export type { Retrospective } from "./retrospectives";
