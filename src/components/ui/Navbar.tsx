'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/theme-btn'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { motion } from 'framer-motion'
import { Geist, Montserrat, DM_Sans, Poppins } from 'next/font/google'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <motion.nav
      id="navbar"
      className="py-5 px-4 backdrop-blur-sm sticky top-0 z-10 left-0 right-0"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-5xl container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <span className={`text-2xl font-medium ${dmSans.className}`}>
            Hk Artech
          </span>
        </Link> 

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Home</Link>
          <Link href="/about" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>About Me</Link>
          <Link href="/#vision" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Vision</Link>
          <Link href="/blogs" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Blog</Link>
          <Link href="/resources" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Resources & Tools</Link>
          <Link href="/learninghub" className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Learning Hub</Link>
          <Link href="/#contact" onClick={handleLinkClick} className={`${poppins.className} font-light transition-colors hover:text-blue-400`}>Contact</Link>
          <ModeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden items-center space-x-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="size-7" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle />
                <SheetDescription asChild className="my-6">
                  <div className="flex flex-col items-center gap-6">
                    <Link href="/" className={`text-lg font-light ${poppins.className} hover:text-blue-400`} onClick={handleLinkClick}>Home</Link>
                    <Link href="/about" className={`text-lg font-light ${poppins.className}`} onClick={handleLinkClick}>About Me</Link>
                    <Link href="#vision" className={`text-lg font-light ${poppins.className}`} onClick={handleLinkClick}>Vision</Link>
                    <Link href="/blogs" className={`text-lg font-light ${poppins.className}`} onClick={handleLinkClick}>Blog</Link>
                    <Link href="/resources" className={`text-lg font-light ${poppins.className}`} onClick={handleLinkClick}>Resources & Tools</Link>
                    <Link href="/learninghub" className={`text-lg font-light ${poppins.className}`} onClick={handleLinkClick}>Learning Hub</Link>
                    <Link href="/#contact" className={`text-lg font-light ${poppins.className} hover:text-primary transition-colors`} onClick={handleLinkClick}>Contact</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
