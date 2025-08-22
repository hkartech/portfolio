'use client'

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { Poppins, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

const learnLinks = [
  { name: "Resources & Tools", href: "/resources" },
  { name: "Learning Hub", href: "/learninghub" },
];

const legalLinks = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-white dark:bg-zinc-900 py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Logo + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 md:max-w-sm text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <h2 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${dmSans.className}`}>
                HK Artech
              </h2>
            </div>
            <p className={`text-md leading-relaxed text-zinc-600 dark:text-zinc-300 font-light ${poppins.className} mb-4`}>
              Discover free design and AI tools, tutorials, and resources to
              kickstart your creative journey without breaking the bank.
            </p>
            <div className="flex items-center justify-center md:justify-start text-zinc-500 dark:text-zinc-400 mt-2">
              <span className="text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-rose-500 fill-rose-500" /> for creators
              </span>
            </div>
          </motion.div>

          {/* Right: Sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className={`mb-5 text-lg relative inline-block ${poppins.className}`}>
                Navigation
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`transition-all hover:text-blue-500 font-light hover:translate-x-1 inline-block ${poppins.className}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className={`mb-5 text-lg relative inline-block ${poppins.className}`}>
                Learn
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {learnLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`transition-all hover:text-blue-500 font-light hover:translate-x-1 inline-block ${poppins.className}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal + Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className={`mb-5 text-lg relative inline-block ${poppins.className}`}>
                Legal
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className={`transition-all hover:text-blue-500 font-light hover:translate-x-1 inline-block ${poppins.className}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={scrollToTop}
                className="mt-8 flex items-center justify-center sm:justify-start gap-2 group text-blue-500 hover:text-blue-600 transition-all cursor-pointer"
              >
                <div className="p-1.5 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                </div>
                <span className={`${poppins.className} text-sm font-medium`}>Back to Top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 pt-6 border-t border-zinc-200/50 dark:border-zinc-700/30 text-center text-sm text-zinc-500 dark:text-zinc-400"
        >
          © 2025 HK Artech. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
