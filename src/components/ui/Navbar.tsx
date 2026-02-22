'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    
    // Check if it's a hash link
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      
      // If we're on the same page
      if (path === '' || path === pathname) {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { name: 'HOME', href: '/', isHash: false },
    { name: 'WORK', href: '/portfolio', isHash: false },
    { name: 'SERVICES', href: '/#services', isHash: true },
    { name: 'FOUNDER', href: '/about', isHash: false },
    { name: 'CONTACT', href: '/#contact', isHash: true, isContact: true },
  ]

  return (
    <motion.nav
      id="navbar"
      className="py-5 px-4 backdrop-blur-sm sticky top-0 z-10 left-0 right-0"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="text-lg font-medium tracking-wide">
            HK ARTECH STUDIO
          </span>
        </Link> 

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-normal tracking-wide transition-colors hover:text-blue-400"
              onClick={link.isContact ? handleContactClick : (e) => handleHashLink(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
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
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-normal tracking-wide hover:text-blue-400 transition-colors"
                        onClick={link.isContact ? handleContactClick : (e) => handleHashLink(e, link.href)}
                      >
                        {link.name}
                      </Link>
                    ))}
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