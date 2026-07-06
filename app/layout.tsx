import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Harsh Mistry | Software Engineer & Data Scientist",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
