// src/components/ui/CaseStudyTemplate.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DM_Sans, Poppins, DM_Mono } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// ✅ Fonts
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

// ✅ Reusable Project Type
type ProjectType = {
  id: string
  title: string
  image: string
  badgeLabel?: string
  caseStudyImage?: string
  showCTA?: boolean
  ctaHeading?: string
  ctaLink?: string
  overview?: string
  challage?: string
  objective?: string[]
  process?: string
  deliverables?: string[]
  result?: string
  visualShowcase?: string
  learned?: string
}

type Props = {
  project: ProjectType
}

export default function CaseStudyTemplate({ project }: Props) {
  return (
    <main className="py-12 px-4">
      <section className="max-w-5xl mx-auto">
        {/* 👉 CTA Section */}
        {project.title && (
          <div className="sm:flex sm:justify-between mb-6">
            <div className="mb-6">
              <h2 className={`text-3xl font-bold mb-3 ${dmSans.className}`}>
                {project.title}
              </h2>
              {project.badgeLabel && (
                <Badge
                  variant="outline"
                  className={`text-sm ${dmMono.className}`}
                >
                  {project.badgeLabel}
                </Badge>
              )}
            </div>
            {project.ctaLink && (
              <Link
                href={project.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`rounded-full sm:px-8 sm:py-6 text-sm py-4 px-4 sm:text-[1rem] hover:bg-blue-400 transition-colors dark:hover:text-white cursor-pointer ${poppins.className}`}
                >
                  {project.ctaHeading}
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* 👉 Cover Image */}
        {project.caseStudyImage || project.image ? (
          <Image
            src={project.caseStudyImage || project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="rounded-[6px] sm:rounded-lg mb-8 object-cover w-full border"
            priority
          />
        ) : null}

        {/* 👉 Body Content */}
        <div className={`space-y-6 ${poppins.className}`}>
          {project.overview && (
            <Section title="Project Overview">{project.overview}</Section>
          )}

          {project.objective && project.objective.length > 0 && (
            <Section title="Objectives">
              <ul className="list-disc list-inside text-md font-light">
                {project.objective.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {project.challage && (
            <Section title="Challenges">{project.challage}</Section>
          )}

          {project.process && (
            <Section title="Process">{project.process}</Section>
          )}

          {project.deliverables && project.deliverables.length > 0 && (
            <Section title="Tech Stacks">
              <ul className="list-disc list-inside text-md">
                {project.deliverables.map((item) => (
                  <li key={item} className={dmMono.className}>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.result && (
            <Section title="Results">{project.result}</Section>
          )}

          {project.visualShowcase && (
            <Section title="Visual Showcase">{project.visualShowcase}</Section>
          )}

          {project.learned && (
            <Section title="What I Learned">{project.learned}</Section>
          )}
        </div>
      </section>
    </main>
  )
}

// 👉 Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div>
    <h2
      className={`text-xl sm:text-2xl font-semibold mb-4 text-blue-400 ${dmSans.className}`}
    >
      {title}
    </h2>
    <div className="text-md sm:text-[1.25rem] font-light">{children}</div>
  </div>
)
