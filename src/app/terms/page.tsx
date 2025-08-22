'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Poppins, DM_Sans } from 'next/font/google';
import { useEffect, useState } from 'react';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function TermsPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="px-4 py-12">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Header */}
        <header className="mb-8">
          <h1 className={`text-3xl font-bold ${dmSans.className}`}>Terms of Service</h1>
          <p className={`mt-2 text-sm text-zinc-600 dark:text-zinc-400 ${poppins.className}`}>
            Effective Date: August 22, 2025
          </p>
        </header>

        {/* Card */}
        <Card className="border shadow-none bg-white/90 dark:bg-zinc-900/70 backdrop-blur">
          <CardContent className="px-6 md:px-10 py-8">
            <section className="space-y-6">
              <p className={`${poppins.className} text-md sm:text-lg font-light`}>
                Welcome to my portfolio website (“Site”). By accessing or using this Site, you agree to these Terms of Service.
              </p>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>1. Purpose of This Site</h2>
                <p className={`${poppins.className} font-light`}>
                  This website showcases my personal work, projects, and services related to UI/UX design, graphic design, Shopify development, and other creative fields. The content is for informational purposes only and does not create any formal business relationship unless agreed separately.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>2. Intellectual Property</h2>
                <ul className={`list-disc pl-5 space-y-2 ${poppins.className}`}>
                  <li>You may view and share my work for inspiration and educational purposes.</li>
                  <li>You may <span className="font-medium">not</span> copy, resell, or redistribute any material without permission.</li>
                </ul>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>3. Acceptable Use</h2>
                <ul className={`list-disc pl-5 space-y-2 ${poppins.className}`}>
                  <li>No unauthorized access, scraping, or disruption.</li>
                  <li>No copying or claiming ownership of designs or case studies.</li>
                  <li>No commercial use of my work without written consent.</li>
                </ul>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>4. External Links</h2>
                <p className={`${poppins.className} font-light`}>
                  The Site may include links to external resources and tools. I am not responsible for third-party content, policies, or reliability.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>5. Limitation of Liability</h2>
                <p className={`${poppins.className} font-light`}>
                  I strive to keep the Site accurate and available, but provide it “as is” without warranties. I am not liable for any loss or damage arising from use of the Site.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>6. Contact</h2>
                <p className={`${poppins.className} font-light`}>
                  For collaborations, permissions, or questions, please{' '}
                  <Link href="/#contact" className="underline decoration-blue-400 hover:text-blue-500 inline-flex items-center gap-1">
                    reach out via the Contact section <ArrowUpRight className="h-4 w-4" />
                  </Link>.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Footer meta */}
        <p className={`mt-6 text-xs text-zinc-500 ${poppins.className}`}>
          Last updated: August 22, 2025
        </p>
      </motion.div>

      {/* Back to Top: fixed on small screens, inline on md+ */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:static md:mt-8 md:mx-auto md:block bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </main>
  );
}
