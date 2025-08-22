'use client'

import { motion } from 'framer-motion'
import { Poppins, DM_Sans, DM_Mono } from 'next/font/google'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

const educationList = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "Sindh Institute of Management & Technology",
    period: "Jun 2022 – July 2026",
    tags: ["Computer Science", "University", "Bachelors"],
  },
  {
    degree: "UI/UX Designing Course",
    institution: "YouTube & Online Resources",
    period: "2022",
    tags: ["UI/UX", "Self-Taught", "Design"],
  },
  {
    degree: "Graphic Designing Diploma",
    institution: "Korean Computer Academy",
    period: "2019",
    tags: ["Graphic Design", "Photoshop", "Illustrator"],
  },
]

export default function EducationTimeline() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className={`text-3xl font-bold mb-12 text-center ${dmSans.className}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Learning
        </motion.h2>

        <div className="relative ml-3 border-l-2 border-muted">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute h-3 w-3 -translate-x-2 left-px top-3 rounded-full border-2 border-blue-500 bg-background" />

              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className={`text-md sm:text-lg font-semibold ${poppins.className}`}>
                    {edu.institution}
                  </span>
                </div>

                {/* Degree and Date */}
                <div>
                  <h3 className={`text-md sm:text-lg ${poppins.className}`}>{edu.degree}</h3>
                  <div className={`flex items-center gap-2 mt-1 text-sm text-muted-foreground ${dmMono.className}`}>
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`rounded-full border-muted-foreground/20 text-muted-foreground bg-muted ${dmMono.className}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
