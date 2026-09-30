import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

const siteUrl = "https://puze8681.github.io";

export const metadata: Metadata = {
  title: "박태준 | Product Engineer · Mobile & AI",
  description:
    "7년간 20개 이상의 프로젝트를 수행한 Product Engineer. Flutter 모바일 앱부터 웹, 백엔드, AI/AX, 인프라까지 제품 전반을 설계하고 개발합니다.",
  keywords: [
    "박태준",
    "개발자",
    "포트폴리오",
    "Flutter",
    "Kotlin",
    "Swift",
    "React",
    "모바일 개발",
    "풀스택 개발자",
    "Product Engineer",
    "AI",
    "RAG",
    "AX",
    "iOS",
    "Android",
    "앱 개발",
  ],
  authors: [{ name: "박태준", url: siteUrl }],
  creator: "박태준",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "박태준 포트폴리오",
    title: "박태준 | Product Engineer · Mobile & AI",
    description:
      "7년간 20개 이상의 프로젝트를 수행한 Product Engineer. 모바일부터 AI·인프라까지 제품 전반을 설계하고 개발합니다.",
    images: [
      {
        url: "/images/profile/profile1.jpeg",
        width: 800,
        height: 800,
        alt: "박태준 프로필",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "박태준 | Product Engineer · Mobile & AI",
    description:
      "7년간 20개 이상의 프로젝트를 수행한 Product Engineer.",
    images: ["/images/profile/profile1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
