import type { Metadata } from "next";
import AboutFahmidaAkhter from "@/components/ui/AboutFahmidaAkhter";
import FahmidaPortfolioSection from "@/components/ui/FahmidaPortfolioSection";
import Footer from "@/components/ui/footer";
import SocialLinksSection from "@/components/ui/SocialLinksSection";

// SEO Metadata for Fahmida Akhter Jhumi
export const metadata: Metadata = {
  title: "Fahmida Akhter Jhumi | Professional Graphic Designer Portfolio",
  description: "Explore the portfolio of Fahmida Akhter Jhumi, a professional graphic designer specializing in Logo Design, Brand Identity, Social Media Content, Posters, Flyers, and Business Card Design.",
  keywords: [
    "Fahmida Akhter",
    "Fahmida Akhter Jhumi",
    "Graphic Designer",
    "Logo Designer",
    "Brand Identity Designer",
    "Poster Designer",
    "Flyer Designer",
    "Business Card Design",
    "Social Media Designer",
    "Bangladesh Graphic Designer",
    "Fiverr Designer",
    "graplens",
  ],
  authors: [{ name: "Fahmida Akhter Jhumi" }],
  creator: "Fahmida Akhter Jhumi",
  publisher: "Fahmida Akhter Jhumi",
  openGraph: {
    title: "Fahmida Akhter Jhumi | Professional Graphic Designer Portfolio",
    description: "Professional graphic designer specializing in logo design, brand identity, posters, flyers, and social media content. View my portfolio and hire me for your design needs.",
    url: "https://hkartech.com/fahmidaakhterjhumi",
    siteName: "Fahmida Akhter Jhumi Portfolio",
    images: [
      {
        url: "/Fahmidaakhter.png",
        width: 1200,
        height: 630,
        alt: "Fahmida Akhter Jhumi - Graphic Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahmida Akhter Jhumi | Professional Graphic Designer",
    description: "Professional graphic designer specializing in logo design, brand identity, posters, flyers, and social media content.",
    images: ["/Fahmidaakhter.png"],
    creator: "@graplens",
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
  alternates: {
    canonical: "https://hkartech.com/fahmidaakhterjhumi",
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

// JSON-LD Structured Data for better SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Fahmida Akhter Jhumi - Graphic Designer Portfolio",
    "description": "Professional graphic designer specializing in logo design, brand identity, posters, flyers, and social media content.",
    "mainEntity": {
      "@type": "Person",
      "name": "Fahmida Akhter Jhumi",
      "alternateName": "Fahmida Akhter",
      "jobTitle": "Professional Graphic Designer",
      "image": "https://hkartech/Fahmidaakhter.png",
      "url": "https://hkartech/fahmidaakhterjhumi",
      "sameAs": [
        "https://www.fiverr.com/fahmidagfx",
        "https://www.linkedin.com/in/graplens/",
        "https://www.instagram.com/grap.lens",
        "https://www.facebook.com/graplens"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Graphic Designer"
      },
      "knowsAbout": [
        "Logo Design",
        "Brand Identity",
        "Poster Design",
        "Flyer Design",
        "Business Card Design",
        "Social Media Content Design",
        "Graphic Design"
      ],
      "address": {
        "@type": "Country",
        "name": "Bangladesh"
      }
    }
  };
};

const AboutPage = () => {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <AboutFahmidaAkhter />
      <SocialLinksSection />
      <FahmidaPortfolioSection />
      <Footer />
    </>
  );
};

export default AboutPage;