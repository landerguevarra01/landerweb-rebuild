import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // ✅ Import Next.js Script component

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lander Guevarra | Developer",
  description:
    "Hey there! I’m Lander, a Front-end Web Developer who builds sleek, dynamic, and user-friendly websites that just work.",
  openGraph: {
    title: "Lander Guevarra | Developer",
    description:
      "Hey there! I’m Lander, a Front-end Web Developer who builds sleek, dynamic, and user-friendly websites that just work.",
    url: "https://lndr-three.vercel.app",
    siteName: "Lander Guevarra",
    images: [
      {
        url: "https://lndr-three.vercel.app/SEO_Cover.jpg",
        width: 1200,
        height: 630,
        alt: "Lander Guevarra - Front-end Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lander Guevarra | Developer",
    description:
      "Hey there! I’m Lander, a Front-end Web Developer who builds sleek, dynamic, and user-friendly websites that just work.",
    images: ["https://lndr-three.vercel.app/SEO_Cover.jpg"],
    creator: "@yourTwitterHandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/gh/sirxemic/jquery.ripples/dist/jquery.ripples-min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
