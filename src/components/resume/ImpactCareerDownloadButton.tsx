"use client";

import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImpactCareerDownloadButtonProps {
  className?: string;
}

export default function ImpactCareerDownloadButton({
  className = "",
}: ImpactCareerDownloadButtonProps) {
  const { language } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const { pdf } = await import("@react-pdf/renderer");
      const { default: ImpactCareerDocument } = await import("./ImpactCareerDocument");
      const blob = await pdf(<ImpactCareerDocument language={language} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        language === "ko"
          ? "박태준_성과_경력기술서.pdf"
          : "TaejunPark_Impact_Career_Profile.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Impact career PDF generation failed:", error);
      alert(
        language === "ko"
          ? "경력기술서 PDF 생성에 실패했습니다."
          : "Impact career PDF generation failed.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`flex items-center justify-center gap-2 rounded-lg border border-[var(--text-tertiary)] px-4 py-2 text-center text-sm font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {isGenerating ? (
        <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
      ) : (
        <FileText className="h-4 w-4 shrink-0" />
      )}
      {isGenerating
        ? language === "ko"
          ? "생성 중..."
          : "Generating..."
        : language === "ko"
          ? "성과 경력기술서"
          : "Impact Career Profile"}
    </button>
  );
}
