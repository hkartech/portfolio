'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DM_Sans, Raleway, Montserrat } from 'next/font/google'


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

const monstserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})


const Loader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Delay showing the typewriter text by a short moment
    const textTimer = setTimeout(() => {
      setShowText(true)
    },0) // small delay to ensure clean mount

    const exitTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // total duration (typing: 1.5s + pause)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center space-y-6">
            {showText && (
              <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-widest text-primary typewriter ${raleway.className}`}>
                HK ARTECH<span className="cursor" />
              </h1>
            )}
          </div>

          <style jsx>{`
            .typewriter {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 2px solid #6366f1;
              animation: typing 1.5s steps(10, end) forwards;
            }

            .cursor {
              display: inline-block;
              width: 3px;
              height: 1.2em;
              margin-left: 4px;
              background-color: #6366f1;
              animation: blink 0.7s steps(2, start) infinite;
              vertical-align: bottom;
            }

            @keyframes typing {
              from {
                width: 0;
              }
              to {
                width: 10.7ch;
              }
            }

            @keyframes blink {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
