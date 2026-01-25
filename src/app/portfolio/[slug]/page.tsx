import { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/data";
import ProjectPageClient from "./ProjectPageClient";

// Static export를 위한 경로 생성
export async function generateStaticParams() {
  const projects = getAllProjects("ko");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "ko");

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | 박태준 포트폴리오`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectPageClient slug={slug} />;
}
