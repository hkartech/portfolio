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
import { DM_Sans, Raleway, Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-dm-sans' })
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-raleway' })
const monstserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' })

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <motion.main
      id="navbar"
      className="py-5 px-4 backdrop-blur-sm sticky top-0 z-10 left-0 right-0 border-b"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-5xl container mx-auto flex justify-between items-center ">
        <Link href="/">
          <div className={`text-2xl font-bold ${dmSans.className}`}>Hk Artech</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={`${raleway.className} transition-colors hover:text-blue-400 text-base`}>Home</Link>
          <Link href="/#aboutfront" className={`${raleway.className} transition-colors hover:text-blue-400 text-base`}>About Me</Link>
          <Link href="/#projects"onClick={handleLinkClick} className={`${raleway.className} transition-colors hover:text-blue-400 text-base`}>Projects</Link>
          <Link href="/blogs" className={`${raleway.className} transition-colors hover:text-blue-400 text-base`}>Blog</Link>
          <Link href="/#contact" onClick={handleLinkClick} className={`${raleway.className} transition-colors hover:text-blue-400 text-base`}>Contact</Link>
          <ModeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center space-x-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="size-7" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription asChild className="my-6">
                  <div className="flex flex-col items-center gap-6">
                    <Link href="/" className={`text-lg hover:text-blue-400 ${raleway.className}`} onClick={handleLinkClick}>Home</Link>
                    <Link href="/about" className={`text-lg ${raleway.className}`} onClick={handleLinkClick}>About</Link>
                    <Link href="/#projects" className={`text-lg ${raleway.className}`} onClick={handleLinkClick}>Projects</Link>
                    <Link href="/blogs" className={`text-lg ${raleway.className}`} onClick={handleLinkClick}>Blog</Link>
                    <Link href="/#contact" className={`text-lg ${raleway.className} hover:text-primary transition-colors`} onClick={handleLinkClick}>Contact</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.main>
  )
}

export default Navbar
