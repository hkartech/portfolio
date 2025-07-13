'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Eye, X, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Montserrat, Raleway, DM_Mono, DM_Sans } from 'next/font/google'
import { projectCards } from '@/app/data/projectCards' // ✅ CORRECTED CASE!

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

type Project = {
  id: string
  title: string
  description: string
  imgs: string[]
}

const graphicProjects: Project[] = Array.from({ length: 26 }, (_, i) => ({
  id: `g${i + 1}`,
  title: `Graphic Design #${i + 1}`,
  description: 'Creative design crafted using Illustrator.',
  imgs: [`/Logos/Image-${i + 1}.png`],
}))

export const PortfolioSection = () => {
  const [activeProj, setActiveProj] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState("uiux")

  return (
    <main className="py-16 px-4">
      <section id="portfolio" className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="uiux">UI/UX Design</TabsTrigger>
              <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
              <TabsTrigger value="ai">AI-Built Projects</TabsTrigger>
            </TabsList>
          </div>

          {/* UI/UX Design Cards */}
          <TabsContent value="uiux">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectCards.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="group overflow-hidden transition-shadow border py-0 shadow-none hover:shadow-lg pb-4">
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
                          className={`p-0 text-[1rem] hover:no-underline hover:text-blue-400 transition-colors cursor-pointer ${montserrat.className}`}
                        >
                          View Project
                          <SquareArrowOutUpRight className="ml-1 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Graphic Design Tab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TabsContent value="graphic">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {graphicProjects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card
                      className="group aspect-square cursor-pointer overflow-hidden p-0 shadow-none rounded-md"
                      onClick={() => setActiveProj(p)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={p.imgs[0]}
                          alt={p.title}
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </motion.div>

          {/* AI Projects Placeholder */}
          <TabsContent value="ai">
            <p className="text-center text-muted-foreground">AI-Built Projects tab coming soon.</p>
          </TabsContent>
        </Tabs>

        {/* Modal for Graphic Design Preview */}
        {activeProj && (
          <Dialog open onOpenChange={() => setActiveProj(null)}>
            <DialogContent
              className="w-sm sm:max-w-lg p-0 overflow-hidden rounded-lg mx-auto sm:w-[500px]"
              showCloseButton={false}
            >
              <VisuallyHidden>
                <DialogTitle>{activeProj.title}</DialogTitle>
              </VisuallyHidden>

              <div className="relative w-full h-[400px] sm:h-[500px]">
                <Image
                  src={activeProj.imgs[0]}
                  alt={activeProj.title || 'Project image'}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveProj(null)}
                  className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1 hover:bg-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </section>
    </main>
  )
}

export default PortfolioSection
