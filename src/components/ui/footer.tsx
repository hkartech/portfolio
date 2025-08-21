'use client'

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react"; // scroll-to-top icon
import { Poppins, DM_Sans } from "next/font/google";

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Logo + subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
          <span className={`text-2xl font-bold ${dmSans.className}`}>HK Artech</span>
          <span className={`mt-1 text-md text-zinc-500 dark:text-zinc-400 font-light ${poppins.className}`}>
            Discover free design and AI tools, tutorials, and resources to kickstart
            your creative journey without breaking the bank.
          </span>
        </div>

        {/* Right: Sections */}
        <div className="flex flex-col md:flex-row gap-16 md:w-2/4 justify-between">

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`mb-3 font-semibold ${poppins.className}`}>Navigation</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-blue-400 font-light ${poppins.className}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`mb-3 font-semibold ${poppins.className}`}>Learn</h3>
            <ul className="flex flex-col gap-2">
              {learnLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-blue-400 font-light ${poppins.className}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Back to Top */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`mb-3 font-semibold ${poppins.className}`}>Legal</h3>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-blue-400 font-light ${poppins.className}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span className={`${poppins.className} text-sm`}>Back to Top</span>
            </button>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-15 text-center text-sm text-zinc-400 dark:text-zinc-500">
        © 2025 HK Artech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
