'use client'

import React from "react";
import Link from "next/link";
import { DM_Sans, Raleway, Montserrat } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="py-10 border-t px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap-reverse md:flex-row items-center justify-center md:justify-between text-base gap-6">

        {/* Left: Copyright */}
        <span
          className={`text-base mb-4 md:mb-0 text-center md:text-left text-zinc-400 ${montserrat.className}`}
        >
          © 2025 HK Artech.
        </span>

        {/* Center: Navigation */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-blue-400 text-base ${raleway.className}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
