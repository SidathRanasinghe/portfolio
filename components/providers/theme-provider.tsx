"use client";

import {
  type ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      themes={["light", "dark"]}
      defaultTheme="light"
      enableSystem={true}
      attribute="class"
      storageKey="sr-portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
