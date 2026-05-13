// app/about/page.tsx
import AboutMe from "@/components/ui/AboutMe";
import Education from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/footer";
import type { Metadata } from "next";

// SEO metadata for founder page
export const metadata: Metadata = {
  title: "Hasnain Khan – Founder & Designer at HK Artech Studio",
  description:
    "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design, graphic design, and visuals. He is a Designer and Vibe Coder based in Pakistan with over 5 years of experience creating clean and intuitive digital experiences. Outside of client work, he is a well-known content creator across social media with a large following, sharing design insights, tutorials, and resources.",
  
  keywords: [
    "Hasnain Khan",
    "HK Artech Studio",
    "UI/UX Designer",
    "Vibe Coder",
    "Graphic Designer Pakistan",
    "Product Designer",
    "Design Content Creator",
    "Design Tutorials",
    "HK Artech",
    "hkartech",
  ],
  
  authors: [{ name: "Hasnain Khan", url: "https://www.instagram.com/hk_artech" }],
  creator: "Hasnain Khan",
  publisher: "HK Artech Studio",
  
  openGraph: {
    title: "Hasnain Khan – Founder & Designer at HK Artech Studio",
    description:
      "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design, graphic design, and visuals. He is a Designer and Vibe Coder based in Pakistan with over 5 years of experience.",
    url: "https://yourwebsite.com/about",
    siteName: "HK Artech Studio",
    images: [
      {
        url: "/Hasnainkhan.jpg",
        width: 1200,
        height: 630,
        alt: "Hasnain Khan - Founder of HK Artech Studio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Khan – Founder & Designer at HK Artech Studio",
    description:
      "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design, graphic design, and visuals.",
    images: ["/Hasnainkhan.jpg"],
    creator: "@hk_artech",
    site: "@hk_artech",
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
    canonical: "https://yourwebsite.com/about",
  },
  
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },

  category: "Design Portfolio",
};

// JSON-LD Structured Data for better SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Hasnain Khan - Founder & Designer at HK Artech Studio",
    description:
      "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design, graphic design, and visuals.",
    mainEntity: {
      "@type": "Person",
      name: "Hasnain Khan",
      alternateName: "HK Artech",
      jobTitle: "Founder & Lead Designer",
      image: "https://hkartech.com/Hasnainkhan.jpg",
      url: "https://hkartech.com/about",
      sameAs: [
        "https://www.instagram.com/hk_artech",
        "https://www.tiktok.com/@hk.artech",
        "https://www.youtube.com/@hkartech",
        "https://www.threads.net/@hk_artech",
      ],
      worksFor: {
        "@type": "Organization",
        name: "HK Artech Studio",
        url: "https://hkartech.com",
      },
      knowsAbout: [
        "UI/UX Design",
        "Vibe Coding",
        "Graphic Design",
        "Product Design",
        "Brand Identity",
        "Frontend Development",
        "Content Creation",
        "Design Tutorials",
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Self-taught Designer"
      },
      nationality: {
        "@type": "Country",
        name: "Pakistan"
      },
      foundingDate: "2019",
      founderOf: {
        "@type": "Organization",
        name: "HK Artech Studio"
      },
      brand: {
        "@type": "Brand",
        name: "HK Artech Studio",
        logo: "https://hkartech/logo.png"
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
      
      <AboutMe />
      <Experience />
      <Education />
      <Footer />
    </>
  );
};

export default AboutPage;