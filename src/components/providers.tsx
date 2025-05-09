"use client";

import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "@/store/provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <ReduxProvider>{children}</ReduxProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
} 