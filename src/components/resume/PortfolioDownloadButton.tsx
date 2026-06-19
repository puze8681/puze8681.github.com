"use client";

import { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PortfolioDownloadButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export default function PortfolioDownloadButton({
  className = "",
  variant = "primary",
}: PortfolioDownloadButtonProps) {
  const { language } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Dynamic import to avoid SSR issues
      const { pdf } = await import("@react-pdf/renderer");
      const { default: PortfolioDocument } = await import("./PortfolioDocument");

      const blob = await pdf(<PortfolioDocument language={language} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        language === "ko" ? "박태준_포트폴리오.pdf" : "TaejunPark_Portfolio.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Portfolio PDF generation failed:", error);
      alert(
        language === "ko"
          ? "포트폴리오 PDF 생성에 실패했습니다."
          : "Portfolio PDF generation failed."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const buttonText = isGenerating
    ? language === "ko"
      ? "생성 중..."
      : "Generating..."
    : language === "ko"
      ? "포트폴리오 다운로드"
      : "Download Portfolio";

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
        <FileText className="w-4 h-4" />
      )}
      {buttonText}
    </button>
  );
}
