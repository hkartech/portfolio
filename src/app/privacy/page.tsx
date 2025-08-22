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

export default function PrivacyPage() {
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
          <h1 className={`text-3xl font-bold ${dmSans.className}`}>Privacy Policy</h1>
          <p className={`mt-2 text-sm text-zinc-600 dark:text-zinc-400 ${poppins.className}`}>
            Effective Date: August 22, 2025
          </p>
        </header>

        {/* Card */}
        <Card className="border shadow-none bg-white/90 dark:bg-zinc-900/70 backdrop-blur">
          <CardContent className="px-6 md:px-10 py-8">
            <section className="space-y-6">
              <p className={`${poppins.className} text-md sm:text-lg font-light`}>
                Your privacy is important to me. This policy explains what information I may collect and how it is used.
              </p>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>1. Information I Collect</h2>
                <ul className={`list-disc pl-5 space-y-2 ${poppins.className}`}>
                  <li>
                    <span className="font-medium">Personal Information (you provide):</span> name, email, and details you submit via the contact form.
                  </li>
                  <li>
                    <span className="font-medium">Non-Personal Information:</span> basic analytics (e.g., page views, device type, region) via tools such as Google Analytics or similar.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>2. How I Use Information</h2>
                <ul className={`list-disc pl-5 space-y-2 ${poppins.className}`}>
                  <li>Respond to inquiries and collaboration requests.</li>
                  <li>Improve the Site and user experience.</li>
                  <li>Understand what content visitors find useful.</li>
                </ul>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>3. Sharing of Information</h2>
                <p className={`${poppins.className} font-light`}>
                  I do not sell or rent your personal information. I may share information if required by law or as necessary to respond to your direct request.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>4. Data Security</h2>
                <p className={`${poppins.className} font-light`}>
                  I take reasonable measures to protect your information, but no website can guarantee 100% security. Please avoid sharing sensitive data until we establish a secure, direct collaboration.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>5. Cookies & Tracking</h2>
                <p className={`${poppins.className} font-light`}>
                  This Site may use cookies and analytics to improve functionality. You can disable cookies in your browser settings. For more details, see your browser’s help resources.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>6. Your Rights</h2>
                <p className={`${poppins.className} font-light`}>
                  You may request to access, update, or delete your personal information by{' '}
                  <Link href="/#contact" className="underline decoration-blue-400 hover:text-blue-500 inline-flex items-center gap-1">
                    contacting me <ArrowUpRight className="h-4 w-4" />
                  </Link>.
                </p>
              </div>

              <div>
                <h2 className={`text-xl font-semibold mb-2 ${dmSans.className}`}>7. Changes to This Policy</h2>
                <p className={`${poppins.className} font-light`}>
                  I may update this Privacy Policy from time to time. The “Effective Date” above reflects the latest version.
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
