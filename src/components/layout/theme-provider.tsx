"use client";

import { ThemeProvider as NextThemesThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
    </NextThemesThemeProvider>
  );
}
