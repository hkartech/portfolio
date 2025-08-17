'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Montserrat, Raleway, DM_Mono } from 'next/font/google'
import { projectCards } from '@/app/data/projectCards' // ✅ CORRECT CASE
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const RecentProjects = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto" id="projects">
        <h2 className={`text-3xl font-bold mb-2 text-center ${raleway.className}`}>
          Recent Projects
        </h2>
        <p className={`text-muted-foreground mb-14 text-center text-md sm:text-lg ${montserrat.className}`}>
          A few highlights from my latest design and development work.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {projectCards.slice(0, 3).map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-shadow border py-0 shadow-none hover:shadow-lg pb-4"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.imgs[0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
              </div>

              <CardContent className="space-y-2">
                <h3 className={`text-xl font-semibold ${raleway.className}`}>
                  {project.title}
                </h3>
                <p className={`text-md text-muted-foreground mb-3 ${montserrat.className}`}>
                  {project.description}
                </p>

                <Link href={`/Projects/${project.id}`} className="group">
                  <Button
                    variant="link"
                    className={`!p-0 text-[1rem] hover:no-underline hover:text-blue-400 transition-colors cursor-pointer ${montserrat.className}`}
                  >
                    View Project
                    <SquareArrowOutUpRight />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button
              className={`px-6 py-6 text-sm sm:text-md rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden z ${montserrat.className}`}
            >
              View all work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
