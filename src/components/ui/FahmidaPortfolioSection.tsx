"use client"

import { useState, useEffect } from "react"
import { Eye, X, ArrowLeft, Filter, ChevronLeft, ChevronRight, ImageOff } from "lucide-react"
import { motion } from "framer-motion"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useRouter } from "next/navigation"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Project = {
  id: string
  title: string
  category: string
  imgs: string[]
}

// Generate projects for each category with support for multiple images
const generateProjects = (category: string, count: number, basePath: string, imagesPerProject: number = 1, extension: string = "jpg"): Project[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} ${i + 1}`,
    category,
    imgs: Array.from({ length: imagesPerProject }, (_, imgIndex) => 
      imagesPerProject === 1 
        ? `${basePath}${i + 1}.${extension}`
        : `${basePath}${i + 1}_${imgIndex + 1}.${extension}`
    ),
  }))
}

// Define mockup projects
const mockupProjects: Project[] = [
  {
    id: "admission-cn-moc",
    title: "Admission CN Mockup",
    category: "mockups",
    imgs: Array.from({ length: 9 }, (_, i) => `/FahmidaAkhterLogos/Admission-cn-Mockups/admission-cn-moc-1_${i + 1}.png`),
  },
  {
    id: "elton-estate-moc",
    title: "Elton Estate Mockup",
    category: "mockups",
    imgs: Array.from({ length: 9 }, (_, i) => `/FahmidaAkhterLogos/Elton-Estate-Logo-Mockups/eltonestate-moc-1_${i + 1}.png`),
  },
  {
    id: "gee-moc",
    title: "Gee Mockup",
    category: "mockups",
    imgs: Array.from({ length: 9 }, (_, i) => `/FahmidaAkhterLogos/Gee-Logo-Mockups/gee-moc-1_${i + 1}.png`),
  },
]

// Define all projects - Updated paths and counts
const allProjects: Project[] = [
  ...generateProjects("posters", 22, "/Jhum Posters Designs/poster-", 1, "png"),
  ...mockupProjects,
  ...generateProjects("flyer", 4, "/Flyers/flyer-", 1, "jpg"),
  ...generateProjects("book", 8, "/Book Covers/book-cover-", 1, "jpg"),
  ...generateProjects("menu", 5, "/Menus/menu-", 1, "jpg"),
  ...generateProjects("invoice", 6, "/Invoice/invoice-", 1, "jpg"),
]

const categories = [
  { id: "posters", label: "Posters", count: 22 },
  { id: "mockups", label: "Mockups", count: 3 },
  { id: "flyer", label: "Flyer", count: 4 },
  { id: "book", label: "Book Covers", count: 8 },
  { id: "menu", label: "Menus", count: 5 },
  { id: "invoice", label: "Invoices", count: 6 },
]

// Grid configuration for each category
const gridConfig = {
  posters: {
    mobile: 2,
    tablet: 3,
    desktop: 3,
    largeDesktop: 3,
  },
  mockups: {
    mobile: 2,
    tablet: 2,
    desktop: 3,
    largeDesktop: 3,
  },
  flyer: {
    mobile: 2,
    tablet: 3,
    desktop: 3,
    largeDesktop: 4,
  },
  book: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    largeDesktop: 4,
  },
  menu: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    largeDesktop: 5,
  },
  invoice: {
    mobile: 2,
    tablet: 3,
    desktop: 3,
    largeDesktop: 4,
  },
}

// Image component with loading state
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [src])

  return (
    <div id="fahmidaakhterportfolio" className="relative w-full bg-gray-100 rounded-xl overflow-hidden" style={{ minHeight: "200px" }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <ImageOff className="w-8 h-8 mb-2" />
          <p className="text-sm">Failed to load</p>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{ display: "block" }}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
    </div>
  )
}

const FahmidaPortfolioSection = () => {
  const router = useRouter()
  const [activeProj, setActiveProj] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("posters")
  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | "largeDesktop">("desktop")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      if (width < 640) {
        setScreenSize("mobile")
      } else if (width < 768) {
        setScreenSize("tablet")
      } else if (width < 1280) {
        setScreenSize("desktop")
      } else {
        setScreenSize("largeDesktop")
      }
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    if (activeProj) {
      setCurrentImageIndex(0)
    }
  }, [activeProj])

  const filteredProjects = allProjects.filter((p) => p.category === activeCategory)
  
  const getGridColumns = () => {
    const config = gridConfig[activeCategory as keyof typeof gridConfig] || gridConfig.posters
    return config[screenSize]
  }

  const gridCols = getGridColumns()

  const nextImage = () => {
    if (activeProj && activeProj.imgs.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProj.imgs.length)
    }
  }

  const prevImage = () => {
    if (activeProj && activeProj.imgs.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + activeProj.imgs.length) % activeProj.imgs.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProj) return
      if (activeProj.imgs.length <= 1) return
      
      if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "Escape") {
        setActiveProj(null)
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeProj, currentImageIndex])

  const hasMultipleImages = activeProj && activeProj.imgs.length > 1

  // Debug logging
  useEffect(() => {
    if (activeCategory === "posters") {
      console.log("Posters path example:", filteredProjects[0]?.imgs[0])
    }
  }, [activeCategory, filteredProjects])

  return (
    <main className="py-16 px-4 relative">
 
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Fahmida Akhter</h1>
          <p className="text-muted-foreground text-lg">Graphic Design Portfolio</p>
        </div>

        {isMobile ? (
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {categories.find(c => c.id === activeCategory)?.label || "Select Category"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="cursor-pointer"
                  >
                    {category.label} ({category.count})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex justify-center mb-8 overflow-x-auto">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                  >
                    {category.label} ({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}

        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min((index % 15) * 0.02, 0.3) }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card
                className="group overflow-hidden cursor-pointer rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-0 bg-transparent p-0"
                onClick={() => setActiveProj(project)}
              >
                <div className="relative w-full">
                  <LazyImage
                    src={project.imgs[0]}
                    alt={project.title}
                    className="w-full h-auto rounded-xl"
                  />
                  {project.imgs.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {project.imgs.length} images
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex flex-col items-center justify-center gap-2">
                    <Eye className="w-10 h-10 text-white" />
                    <p className="text-white text-sm font-medium text-center px-3">
                      {project.title}
                    </p>
                    <p className="text-white/70 text-xs capitalize">
                      {project.category}
                    </p>
                    {project.imgs.length > 1 && (
                      <p className="text-white/50 text-xs">
                        {project.imgs.length} images • Click to view gallery
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}

        {activeProj && (
          <Dialog open onOpenChange={() => setActiveProj(null)}>
            <DialogContent className="w-[95vw] sm:max-w-5xl p-0 overflow-hidden rounded-xl mx-auto" showCloseButton={false}>
              <VisuallyHidden>
                <DialogTitle>{activeProj.title}</DialogTitle>
              </VisuallyHidden>
              <div className="relative w-full bg-black/95">
                <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                  <LazyImage
                    src={activeProj.imgs[currentImageIndex]}
                    alt={`${activeProj.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                  
                  <button
                    onClick={() => setActiveProj(null)}
                    className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-colors z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-colors z-20"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white rounded-full p-2 transition-colors z-20"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <p className="text-sm font-medium">{activeProj.title}</p>
                      <p className="text-xs text-white/70 capitalize">{activeProj.category}</p>
                    </div>
                    {hasMultipleImages && (
                      <div className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {activeProj.imgs.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </section>
    </main>
  )
}

export default FahmidaPortfolioSection