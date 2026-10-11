import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import React, { Suspense } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = siteMetadata;

// eslint-disable-next-line react-refresh/only-export-components
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "font-body",
          GeistSans.variable,
          GeistMono.variable,
          manrope.variable,
          "relative overflow-x-hidden antialiased"
        )}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            <div className="w-full overflow-x-hidden">{children}</div>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
