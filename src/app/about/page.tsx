// about/page.tsx
import AboutMe from "@/components/ui/AboutMe";
import Education from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/footer";
import type { Metadata } from "next";

// SEO metadata for founder page
export const metadata: Metadata = {
  title: "Hasnain Khan – Founder of HK Artech Studio",
  description:
    "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design graphic design, and visuals. He is a Designer and Vibe Coder based in Pakistan with over 5 years of experience creating clean and intuitive digital experiences. Outside of client work, he is well known content creator all over the social media with a large following.",

  openGraph: {
    title: "Hasnain Khan – Founder of HK Artech Studio",
    description:
      "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design graphic design, and visuals. He is a Designer and Vibe Coder based in Pakistan with over 5 years of experience creating clean and intuitive digital experiences. Outside of client work, he is well known content creator all over the social media with a large following.",
    images: ["/Hasnainkhan.jpg"], // unique OG image for founder
  },
  twitter: {
    title: "Hasnain Khan – Founder of HK Artech Studio",
    description:
      "Hasnain Khan is the founder of HK Artech Studio, a creative design studio specializing in UI/UX, branding, product design graphic design, and visuals. He is a Designer and Vibe Coder based in Pakistan with over 5 years of experience creating clean and intuitive digital experiences. Outside of client work, he is well known content creator all over the social media with a large following.",
    images: ["/Hasnainkhan.jpg"],
    creator: "@hk_artech",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutMe />
      <Experience />
      <Education />
      <Footer />
    </>
  );
};

export default AboutPage;