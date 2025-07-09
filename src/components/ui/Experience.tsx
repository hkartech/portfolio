'use client'

import { motion } from 'framer-motion'
import { Raleway, Montserrat, DM_Mono } from 'next/font/google'
import { Badge } from '@/components/ui/badge'
import { Building2, Calendar } from 'lucide-react'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-raleway',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

const experiences = [
  {
    title: "UI/UX, Shopify Apps & Custom App Designer",
    company: "EEN",
    period: "Dec 2024 – June 2025",
    description:
      "Successfully completed projects including a portfolio, dental management system, and tech branding site.",
    technologies: ["Figma", "React", "Next.js", "Shadcn UI", "Tailwind CSS", "Shopify"],
  },
  {
    title: "UI/UX & Shopify App Designer",
    company: "Devsinc (formerly Alchemative)",
    period: "Feb 2024 – Nov 2024",
    description:
      "Led UI/UX design for multiple Shopify apps, improving user experiences and modular systems.",
    technologies: ["Shopify UI", "Figma", "UX Writing"],
  },
  {
    title: "UI/UX & Custom App Designer (Internship)",
    company: "EEN",
    period: "July 2023 – Dec 2023",
    description:
      "Designed and built responsive UIs and transformed them into code during internship.",
    technologies: ["Figma", "Locofy", "TypeScript", "Material UI"],
  },
  {
    title: "Senior Dental Assistant",
    company: "Dr Wajeeha Rehman & Associates",
    period: "Feb 2022 – July 2023",
    description:
      "Enhanced my skills 4x by assisting Dr. Naveed Rashid Qureshi (Head of Liaquat College of Medicine & Dentistry) in 50+ Dental Implant & advanced dental procedures. Gained confidence in patient handling, strong communication skills, and experience in computer-based tasks.",
    technologies: ["Implants", "Sinus Lifts", "Teamwork", "Communication"],
  },
  {
    title: "Digital Store Assistant",
    company: "Soorty Enterprises Pvt Ltd",
    period: "July 2021 – Jan 2022",
    description:
      "Entered thread consumption data into ERP systems and collaborated with senior store staff on digital inventory tasks.",
    technologies: ["ERP", "Data Entry", "Digital Store", "Team Support"],
  },
  {
    title: "Dental Assistant",
    company: "Awadh General Hospital",
    period: "Oct 2016 – Jan 2021",
    description:
      "My first job at age 15. Assisted doctors through dental procedures, learned about dentistry, and gained valuable hospital exposure.",
    technologies: ["Dentistry Basics", "Assisting", "Observation", "Early Learning"],
  }
]

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className={`text-3xl font-bold mb-12 text-center ${raleway.className}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative ml-3 border-l-2 border-muted">
          {experiences.map((exp, index) => (
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
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className={`text-md sm:text-lg font-semibold ${montserrat.className}`}>
                    {exp.company}
                  </span>
                </div>

                {/* Title and Date */}
                <div>
                  <h3 className={`text-md sm:text-lg font-medium ${raleway.className}`}>{exp.title}</h3>
                  <div className={`flex items-center gap-2 mt-1 text-sm text-muted-foreground ${dmMono.className}`}>
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-md sm:text-lg text-muted-foreground ${montserrat.className}`}>
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`rounded-full border-muted-foreground/20 text-muted-foreground bg-muted ${dmMono.className}`}
                    >
                      {tech}
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
