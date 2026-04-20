import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Sidath Ranasinghe - Senior Software Engineer",
  description:
    "Full-stack Software Engineer with 5+ years of experience building production-grade web systems with React, Next.js, NestJS, Node.js, and MySQL/MongoDB. Open to international relocation.",
  keywords: [
    "Software Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Microservices",
    "AWS",
    "Sri Lanka",
  ],
  authors: [{ name: "Sidath Ranasinghe" }],
  creator: "Sidath Ranasinghe",
  publisher: "Sidath Ranasinghe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidath.ryzeniclabs.com",
    title: "Sidath Ranasinghe - Senior Software Engineer",
    description:
      "Full-stack Software Engineer with 5+ years of experience building production-grade web systems with React, Next.js, NestJS, and Node.js.",
    siteName: "Sidath Ranasinghe Portfolio",
    images: [
      {
        url: "/images/profile/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sidath Ranasinghe - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidath Ranasinghe - Senior Software Engineer",
    description:
      "Full-stack Software Engineer with 5+ years of experience building production-grade web systems with React, Next.js, NestJS, and Node.js.",
    images: ["/images/social/twitter-image.jpg"],
    creator: "@sidath_ranasinghe",
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
  verification: {
    google: "", // google-verification-code
    yandex: "", // yandex-verification-code
  },
  category: "technology",
};
