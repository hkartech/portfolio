'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Raleway, Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'

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

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative text-center px-4 py-16 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
    
      {/* Animated Profile Image */}
      <motion.div className="relative">
        <motion.img
          src="/profile-image.png"
          alt="Hasnain Avatar"
          className="rounded-full mx-auto mb-5 w-36 sm:w-48 border-4 border-white/80 shadow-lg"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

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
        className={`text-[2.5rem] font-bold mb-4 leading-tight md:text-[3.5rem] ${raleway.className} bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:text-white`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Designer + Vibe Coder
      </motion.h1>

      {/* Description */}
      <motion.p
        className={`text-lg sm:text-[1.25rem] mb-8 max-w-[700px] mx-auto ${montserrat.className} text-zinc-600 dark:text-zinc-400`}
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
          <Button className={`group rounded-full !pl-5 !pr-6 py-6 text-sm sm:text-md ${raleway.className} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <MessageCircle className="!h-6 !w-6 !stroke-1" />
            Let's Talk
          </Button>
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Hero