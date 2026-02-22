'use client'

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/about" },
  { name: "SERVICES", href: "/#vision" },
  { name: "FOUNDER", href: "/blog" },
  { name: "CONTACT", href: "/#contact" },
];

const legalLinks = [
  { name: "TERMS", href: "/terms" },
  { name: "PRIVACY", href: "/privacy" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-white dark:bg-black py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
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
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HK ARTECH STUDIO
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-normal mb-4">
              We design and build websites, web apps, SaaS platforms, and Shopify apps with a focus on clarity, usability, and real user needs.
            </p>
            <div className="flex items-center justify-center md:justify-start text-zinc-500 dark:text-zinc-400 mt-2">
              <span className="text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-rose-500 fill-rose-500" /> for creators
              </span>
            </div>
          </motion.div>

          {/* Right: Sections */}
          <div className="flex gap-12 justify-center md:justify-end flex-wrap">
            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[150px] text-center md:text-left"
            >
        
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
                      className="transition-all hover:text-blue-500 font-normal hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[150px] text-center md:text-left"
            >
          
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
                      className="transition-all hover:text-blue-500 font-normal hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Back to Top Button */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={scrollToTop}
                className="mt-8 flex items-center gap-2 group text-blue-500 hover:text-blue-600 transition-all cursor-pointer"
              >
                <div className="p-1.5 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
                </div>
                <span className="text-lg font-medium">Back to Top</span>
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
          © 2025 HK Artech Studio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;