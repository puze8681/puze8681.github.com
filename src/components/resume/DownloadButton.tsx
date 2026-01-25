"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export default function ResumeDownloadButton({
  className = "",
  variant = "primary",
}: DownloadButtonProps) {
  const { language } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Dynamic import to avoid SSR issues
      const { pdf } = await import("@react-pdf/renderer");
      const { default: ResumeDocument } = await import("./ResumeDocument");

      const blob = await pdf(<ResumeDocument language={language} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        language === "ko" ? "박태준_이력서.pdf" : "TaejunPark_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert(language === "ko" ? "PDF 생성에 실패했습니다." : "PDF generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  const buttonText = isGenerating
    ? language === "ko"
      ? "생성 중..."
      : "Generating..."
    : language === "ko"
      ? "이력서 다운로드"
      : "Download Resume";

  const baseStyles =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles =
    variant === "primary"
      ? "bg-[var(--accent-cyan)] text-[var(--bg-primary)] hover:opacity-90"
      : "border border-[var(--text-tertiary)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]";

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {buttonText}
    </button>
  );
}
