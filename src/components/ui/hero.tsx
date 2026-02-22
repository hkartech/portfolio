'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative px-4 py-15 md:py-15 lg:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto text-left">

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-none text-black dark:text-white max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Turning Ideas into Awesome Digital Experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-3xl font-normal text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          A creative design studio focused on UI/UX, graphic design,
          branding, visuals, and vibe coding to design and build faster
          quality work for clients worldwide.
        </motion.p>

        {/* Button */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Button
            asChild
            className="rounded-full px-8! py-7 text-[1rem] bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <a
              href="https://wa.me/message/PGKCBV432U3ZO1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MessageCircle className="h-6 w-6 stroke-2 mr-2" />
              Let's Talk
            </a>
          </Button>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Hero
