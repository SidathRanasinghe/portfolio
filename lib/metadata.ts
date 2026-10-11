import { Metadata } from "next";

import { personalInfo } from "@/lib/portfolio-data";

const title = `${personalInfo.name} - ${personalInfo.title}`;
const description = `${personalInfo.tagline} Open to international relocation.`;

export const siteMetadata: Metadata = {
  title,
  description,
  keywords: [
    "Full-Stack Engineer",
    "Software Engineer",
    "Node.js",
    "Express.js",
    "Next.js",
    "Angular",
    "NestJS",
    "TypeScript",
    "Real-Time Systems",
    "WebSockets",
    "Socket.IO",
    "API Integrations",
    "MongoDB",
    "AWS",
    "Sri Lanka",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || personalInfo.portfolio
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.portfolio,
    title,
    description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/images/profile/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/social/twitter-image.png"],
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
