import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import AppWrapper from "@/components/ui/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HK Artech",
  description: "Portfolio site for Hasnain Khan",
  icons: {
    icon: "/browser-tab-image.png", // place your favicon file in the public folder
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Base background */}
          <div className="absolute inset-0 bg-white dark:bg-black" />

          {/* Top half-circle blurred spotlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                       rounded-b-[100%] 
                       bg-gradient-to-b from-green-400/60 to-transparent 
                       dark:from-sky-500/60 dark:to-transparent 
                       filter blur-[200px] opacity-90"
          />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
