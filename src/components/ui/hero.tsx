'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { DM_Sans, Raleway, Montserrat, DM_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'



const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="text-center px-4 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >

      {/* Animated Profile Image */}
      <motion.img
        src="/profile-image.png"
        alt="Hasnain Avatar"
        className="rounded-full mx-auto mb-5 w-36 sm:w-48"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Greeting */}
      <motion.h2
        className={`text-[1.5rem] mb-2 sm:text-[1.8rem] ${raleway.className} font-[500] flex items-center justify-center gap-2`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <motion.span
          animate={{ rotate: [0, 20, 0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="inline-block origin-bottom"
        >
          👋
        </motion.span>
        Hi I'm Hasnain
      </motion.h2>

      {/* Title */}
      <motion.h1
        className={`text-[2.5rem] font-bold mb-4 leading-tight md:text-[3.5rem] ${raleway.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Designer + Vibe Coder
      </motion.h1>

      {/* Description */}
      <motion.p
        className={`text-lg sm:text-[1.25rem] mb-8 max-w-[700px] mx-auto ${montserrat.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        I design digital products, brands, and experiences.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <a
  href="https://wa.me/message/PGKCBV432U3ZO1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className={`rounded-full !px-6 py-6 text-sm sm:text-md text-white hover:bg-blue-400 transition-colors dark:hover:text-white dark:text-zinc-950 ${raleway.className}`}>
      <MessageCircle />
    Let's Chat
  </Button>
</a>
      </motion.div>
    </motion.section>
  )
}

export default Hero
