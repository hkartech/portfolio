'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { DM_Sans, Poppins } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface Metric {
  id: number
  label: string
  value: number
  suffix?: string
}

const metrics: Metric[] = [
  { id: 1, label: 'Projects Completed', value: 50, suffix: '+' },
  { id: 2, label: 'Students Helped', value: 10, suffix: '+' },
  { id: 3, label: 'Tools Reviewed', value: 100, suffix: '+' },
  { id: 4, label: 'Tutorials Created', value: 150, suffix: '+' },
]

const MetricsBar = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      // trigger when at least half visible
      if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2) {
        setHasAnimated(true)
      }
    }

    // check immediately in case it's already visible
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasAnimated])

  return (
    <section ref={ref} className="py-16 border-t border-b">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: metric.id * 0.2 }}
          >
            <span
              className={`text-3xl sm:text-4xl font-bold ${dmSans.className} text-blue-600 dark:text-blue-400`}
            >
              {hasAnimated ? (
                <CountUp end={metric.value} duration={2} />
              ) : (
                0
              )}
              {metric.suffix || ''}
            </span>
            <span
              className={`mt-2 text-md sm:text-md font-light ${poppins.className} text-zinc-600 dark:text-zinc-400`}
            >
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default MetricsBar
