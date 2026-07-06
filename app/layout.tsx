import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "HARSH.MISTRY // Software Engineer & Data Scientist",
  description:
    "Portfolio of Harsh Mistry — Backend Developer, Data Engineer, and Machine Learning enthusiast based in Gandhinagar, India.",
  keywords: [
    "Harsh Mistry",
    "Data Scientist",
    "Software Engineer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#e8e5de] text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
