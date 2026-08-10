import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshit Kumar Sharma — Full Stack Developer",
  description:
    "Portfolio of Harshit Kumar Sharma — Full Stack Developer building AI-powered web applications using Next.js, React.js, Node.js, and MongoDB.",
  keywords: [
    "Harshit Kumar Sharma",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Harshit Kumar Sharma" }],
  creator: "Harshit Kumar Sharma",
  openGraph: {
    type: "website",
    title: "Harshit Kumar Sharma — Full Stack Developer",
    description:
      "Full Stack Developer building AI-powered web applications using Next.js, React, Node.js, and MongoDB.",
    siteName: "Harshit Kumar Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Kumar Sharma — Full Stack Developer",
    description:
      "Full Stack Developer building AI-powered web applications using Next.js, React, Node.js, and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
