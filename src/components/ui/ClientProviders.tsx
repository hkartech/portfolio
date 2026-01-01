"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import React from "react"

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") {
    // Prevent rendering on server
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
