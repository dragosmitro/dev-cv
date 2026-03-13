import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Noise } from "@/components/ui/Noise";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dragoș Mitroescu | Software Architect",
  description:
    "Software Engineer & Technical Lead with 5+ years of experience in C#, .NET, TypeScript, and full-stack development. Building scalable systems at the intersection of architecture and engineering.",
  keywords: [
    "Software Architect",
    "Full-Stack Developer",
    "C#",
    ".NET",
    "TypeScript",
    "React",
    "Software Engineering",
  ],
  authors: [{ name: "Dragoș Mitroescu" }],
  openGraph: {
    title: "Dragoș Mitroescu | Software Architect",
    description:
      "Software Engineer & Technical Lead building scalable enterprise systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <SmoothScrollProvider>
          <ScrollProgress />
          <Noise />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
