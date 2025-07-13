// src/components/ui/CaseStudyTemplate.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Raleway, Montserrat, DM_Mono } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Fonts
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

// ✅ Reusable Project Type
type ProjectType = {
  id: string
  title: string
  image: string
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
        {project.showCTA && (
          <div className="sm:flex sm:justify-between mb-6">
            <div className="mb-6">
              <h2 className={`text-3xl font-bold mb-3 ${raleway.className}`}>
                {project.ctaHeading}
              </h2>
              <Badge
                variant="outline"
                className={`text-sm ${dmMono.className}`}
              >
                Published
              </Badge>
            </div>
            {project.ctaLink && (
              <Link
                href={project.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`rounded-full sm:px-8 sm:py-6 text-sm py-4 px-4 sm:text-[1rem] hover:bg-blue-400 transition-colors dark:hover:text-white cursor-pointer ${raleway.className}`}
                >
                  Live Preview
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
            className="rounded-lg mb-8 object-cover w-full border"
            priority
          />
        ) : null}

        {/* 👉 Body Content */}
        <div className={`space-y-6 ${montserrat.className}`}>
          {project.overview && (
            <Section title="Project Overview">{project.overview}</Section>
          )}

          {project.objective && project.objective.length > 0 && (
            <Section title="Objectives">
              <ul className="list-disc list-inside text-lg sm:text-[1.25rem]">
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
              <ul className="list-disc list-inside text-lg sm:text-[1.25rem]">
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
      className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}
    >
      {title}
    </h2>
    <div className="text-lg sm:text-[1.25rem]">{children}</div>
  </div>
)
