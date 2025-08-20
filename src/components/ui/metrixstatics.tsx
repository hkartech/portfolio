'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
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



interface Metric {
  id: number
  label: string
  value: number
  suffix?: string
}

const metrics: Metric[] = [
  { id: 1, label: 'Projects Completed', value: 50, suffix: '+' },
  { id: 2, label: 'Students Helped', value: 500, suffix: '+' },
  { id: 3, label: 'Tools Reviewed', value: 100, suffix: '+' },
  { id: 4, label: 'Tutorials Created', value: 30, suffix: '+' },
]

const MetricsBar = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true) // only trigger once
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={ref} className="py-16 border-t border-b">
      <div className="max-w-6xl mx-auto grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
