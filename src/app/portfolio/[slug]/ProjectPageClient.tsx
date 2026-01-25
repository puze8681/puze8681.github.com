"use client";

import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectBySlug } from "@/data";

interface ProjectPageClientProps {
  slug: string;
}

export default function ProjectPageClient({ slug }: ProjectPageClientProps) {
  const { language } = useLanguage();
  const project = getProjectBySlug(slug, language);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col w-full">
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
