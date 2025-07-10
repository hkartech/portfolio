import { notFound } from 'next/navigation'
import Image from 'next/image'
import { projects } from '@/app/data/projects'
import { Raleway, Montserrat, DM_Mono } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

// Load fonts
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

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}


const CaseStudyPage = async ({ params }: Props) => {
  const { slug } = params // ✅ This is correct
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="py-12 px-4">
      <section className="max-w-5xl mx-auto">
        {project.showCTA && (
          <div className='sm:flex sm:justify-between mb-4'>
            <div className='mb-6'>
              <h2 className={`text-3xl font-bold mb-3 ${raleway.className}`}>
                {project.ctaHeading}
              </h2>
              <Badge variant={'outline'} className={`text-sm ${dmMono.className}`}>
                Published
              </Badge>
            </div>
            {project.ctaLink && (
              <Link href={project.ctaLink} target="_blank" rel="noopener noreferrer">
                <Button className={`rounded-full sm:px-8 sm:py-6 text-sm py-4 px-4 sm:text-[1rem] hover:bg-blue-400 transition-colors dark:hover:text-white cursor-pointer ${raleway.className}`}>
                  Live Preview
                </Button>
              </Link>
            )}
          </div>
        )}

        {project.image && (
          <Image
            src={project.caseStudyImage || project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="rounded-lg mb-6 object-cover w-full border"
            priority
          />
        )}

        <div className={`space-y-6 ${montserrat.className}`}>
          {project.overview && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Project Overview
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.overview}</p>
            </div>
          )}

          {Array.isArray(project.objective) && project.objective.length > 0 && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Objectives
              </h2>
              <ul className="list-disc list-inside text-lg sm:text-[1.25rem]">
                {project.objective.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challage && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Challenges
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.challage}</p>
            </div>
          )}

          {project.process && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Process
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.process}</p>
            </div>
          )}

          {Array.isArray(project.deliverables) && project.deliverables.length > 0 && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Tech Stacks
              </h2>
              <ul className="list-disc list-inside">
                {project.deliverables.map((t) => (
                  <li key={t} className={`${dmMono.className} text-lg sm:text-lg`}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Results
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.result}</p>
            </div>
          )}

          {project.visualShowcase && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                Visual Showcase
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.visualShowcase}</p>
            </div>
          )}

          {project.learned && (
            <div>
              <h2 className={`text-2xl font-semibold mb-4 text-blue-400 ${raleway.className}`}>
                What I Learned
              </h2>
              <p className="text-lg sm:text-[1.25rem]">{project.learned}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default CaseStudyPage
