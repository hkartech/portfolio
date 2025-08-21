"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button
import { Raleway, Geist, Montserrat, DM_Sans, Poppins } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type BannerCTAProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const BannerCTA: React.FC<BannerCTAProps> = ({
  title = "Ready to Start Your Design Journey?",
  subtitle = "Explore my curated collection of free resources, tools, and learning materials",
  ctaLabel = "Get Started Now",
  ctaHref = "#resources",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll / in-view trigger
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || isVisible) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
        setIsVisible(true);
      }
    };

    // check immediately on load
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <main className="pb-16 sm:pt-16 px-4">
      <section ref={ref} className="max-w-5xl m-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Gradient ring wrapper */}
          <div className="relative rounded-2xl p-[1px] bg-sky-500/20">
            {/* Inner card */}
            <div className="relative rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-lg px-6 py-10 md:px-10 md:py-12">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                {/* Copy */}
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight ${dmSans.className}`}
                  >
                    {title}
                  </h2>
                  <p
                    className={`mt-3 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl font-light ${poppins.className}`}
                  >
                    {subtitle}
                  </p>
                </div>

                {/* CTA */}
                <div className="md:justify-self-end">
                  <a href={ctaHref}>
                    <Button
                      className={`group rounded-full !pl-5 !pr-6 py-6 text-sm sm:text-md font-light ${poppins.className} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    >
                      {ctaLabel}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Subtle decorative lines */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20 dark:ring-white/10" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default BannerCTA;
