'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Raleway, Geist, Montserrat, DM_Sans, Poppins } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"], // optional, if you want multiple weights
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose the weights you need
});


const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative px-6 py-20 md:py-28 lg:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto text-left">

        {/* Greeting */}
        <motion.h2
          className={`inline-flex text-[1rem] mb-6 pl-[10px] sm:text-[1rem] font-light ${poppins.className} font-[500] items-center gap-2 border-sky-500/40 border px-3 py-1 rounded-full bg-sky-500/20`}
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
              ease: 'easeInOut',
            }}
            className="inline-block origin-bottom"
          >
            👋
          </motion.span>
          Hi I'm Hasnain
        </motion.h2>


        {/* Title */}
        <motion.h1
          className={`text-[2.5rem] md:text-[4.5rem] font-bold mb-6 leading-none ${dmSans.className} bg-clip-text text-black dark:text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Building the Future<br /> of Design
        </motion.h1>

        {/* Description */}
        <motion.p
          className={`text-lg sm:text-[1.25rem] mb-8 max-w-3xl font-light ${poppins.className} text-zinc-600 dark:text-zinc-400`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Discover free design and AI tools, tutorials, and resources to kickstart <br/> your creative journey without breaking the bank.
        </motion.p>

        {/* Button */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <a
            href="https://wa.me/message/PGKCBV432U3ZO1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={`group rounded-full !pl-5 !pr-6 py-6 text-sm sm:text-md font-light ${poppins.className} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <MessageCircle className="!h-6 !w-6 !stroke-1" />
              Let's Talk
            </Button>
          </a>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Hero
