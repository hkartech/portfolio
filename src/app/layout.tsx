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
  metadataBase: new URL("https://hkartech.com"),
  title: {
    default: "HK Artech Studio",
    template: "%s | HK Artech Studio",
  },
  description:
    "A creative design studio focused on UI/UX, graphic design, branding, visuals, and vibe coding to deliver faster, high-quality work for clients worldwide.",
  themeColor: "#ffffff",
  authors: [{ name: "Hasnain Khan", url: "https://hkartech.com" }],
  creator: "Hasnain Khan",
  publisher: "HK Artech Studio",
  alternates: { canonical: "https://hkartech.com" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://hkartech.com",
    title: "HK Artech Studio",
    description:
      "A creative design studio focused on UI/UX, graphic design, branding, visuals, and vibe coding to design and build faster quality work for clients worldwide.",
    siteName: "HK Artech Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HK Artech Studio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HK Artech Studio",
    description:
      "A creative design studio focused on UI/UX, graphic design, branding, visuals, and vibe coding to design and build faster quality work for clients worldwide.",
    images: ["/og-image.png"],
    creator: "@hkartechstudio", // optional
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/mstile-150x150.png", sizes: "150x150", type: "image/png" },
    ],
    shortcut: { url: "/favicon.ico" },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "lKAbYspWV0snSm5mIQKb5YhHhC8bEba4XbAkY8kC8GQ", // optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HK Artech Studio",
    url: "https://hkartech.com",
    logo: "https://hkartech.com/og-image.png",
    founder: {
      "@type": "Person",
      name: "Hasnain Khan",
    },
    sameAs: [
      "https://www.linkedin.com/in/hkartechstudio",
      "https://twitter.com/hkartechstudio",
      "https://www.instagram.com/hkartechstudio",
      "https://www.facebook.com/hkartechstudio",
      "https://www.tikTok.com/@hkartechstudio",
      "http://www.thread.com/@hkartechstudio",
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* Background wrapper */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute inset-0 bg-white dark:bg-black" />

          {/* Floating particles */}
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

          {/* Tiny sparkle particles */}
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

          {/* Spotlight gradient */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                       rounded-b-[100%]
                       bg-gradient-to-b from-blue-400/60 to-transparent
                       dark:from-blue-500/60 dark:to-transparent
                       filter blur-[200px] opacity-90 animate-pulse-slow"
          />
        </div>

        {/* Main App */}
        <ClientThemeProvider>
          <AppWrapper>{children}</AppWrapper>
        </ClientThemeProvider>
      </body>
    </html>
  );
}