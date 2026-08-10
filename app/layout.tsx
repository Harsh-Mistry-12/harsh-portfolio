import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshmistry.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harsh Mistry | Software Engineer & Data Scientist",
    template: "%s | Harsh Mistry",
  },
  description:
    "Official portfolio of Harsh Mistry — Python Developer, Data Scientist, and Machine Learning Engineer specializing in FastAPI, Django, ETL pipelines, and AI automation based in Gandhinagar, India.",
  keywords: [
    "Harsh Mistry",
    "Data Scientist",
    "Software Engineer",
    "Backend Developer",
    "Python Developer",
    "FastAPI",
    "Django",
    "Machine Learning",
    "Data Architect",
    "ETL Pipelines",
    "React",
    "Next.js",
    "AI Automation",
    "Gandhinagar",
    "India",
  ],
  authors: [{ name: "Harsh Mistry", url: siteUrl }],
  creator: "Harsh Mistry",
  publisher: "Harsh Mistry",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Harsh Mistry | Software Engineer & Data Scientist",
    description:
      "Python Developer & Data Scientist building scalable backend systems, intelligent data pipelines, and machine learning models.",
    siteName: "Harsh Mistry Portfolio",
    images: [
      {
        url: "/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Mistry - Software Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Mistry | Software Engineer & Data Scientist",
    description:
      "Python Developer & Data Scientist building scalable backend systems, intelligent data pipelines, and machine learning models.",
    images: ["/photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#e8e5de] text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
