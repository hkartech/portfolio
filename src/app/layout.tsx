import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/ui/AppWrapper";
import ClientThemeProvider from "@/components/ui/ClientProviders";

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
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Base background */}
          <div className="absolute inset-0 bg-white dark:bg-black" />

          {/* Animated gradient orbs
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           */}
          {/* Floating particles - More of them! */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/80 dark:bg-blue-500/80 rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${4 + Math.random() * 8}s`,
                  opacity: `${0.2 + Math.random() * 0.4}`,
                }}
              />
            ))}
          </div>

          {/* Additional tiny particles for more sparkle */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={`small-${i}`}
                className="absolute w-0.5 h-0.5 bg-white/40 dark:bg-white/20 rounded-full animate-ping-slow"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Original spotlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                       rounded-b-[100%] 
                       bg-gradient-to-b from-blue-400/60 to-transparent 
                       dark:from-blue-500/60 dark:to-transparent 
                       filter blur-[200px] opacity-90 animate-pulse-slow"
          />
        </div>

        <ClientThemeProvider>
          <AppWrapper>{children}</AppWrapper>
        </ClientThemeProvider>
      </body>
    </html>
  );
}