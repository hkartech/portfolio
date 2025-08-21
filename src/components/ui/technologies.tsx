'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Raleway, Geist, Montserrat, DM_Sans, Poppins } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
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
  weight: ["300", "400", "500", "600", "700"],
});

const skills = [
  { name: "Figma", img: "/Figma.svg" },
  { name: "Illustrator", img: "/ai.svg" },
  { name: "Canva", img: "/canva.svg" },
  { name: "Framer", img: "/framer.svg" },
  { name: "HTML5", img: "/HTML5.svg" },
  { name: "CSS3", img: "/CSS3.svg" },
  { name: "JavaScript", img: "/js.svg" },
  { name: "TypeScript", img: "/typescript.svg" },
  { name: "Sass", img: "/Sass.svg" },
  { name: "Tailwind", img: "/Tailwind CSS.svg" },
  { name: "Material UI", img: "/materialui.svg" },
  { name: "React", img: "/React.svg" },
  { name: "Next.js", img: "/Next.js.svg", imgDark: "/Next.js-white.svg" },
  { name: "V0", img: "/v0.svg", imgDark: "/v0-white.svg" },
  { name: "Shopify", img: "/Shopify.svg" },
  { name: "Medusa", img: "/Medusa.svg" },
  { name: "Locofy Ai", img: "/amp.svg" },
  { name: "Capcut", img: "/Capcut.svg", imgDark: "/Capcut-white.svg" }
]

const MySkills = () => {
  return (
    <main className="py-16 px-4 bg-transparent">
      <section className="max-w-5xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl font-bold mb-2 ${dmSans.className}`}
        >
          Technologies
        </motion.h2>

        {/* Animated paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className={`text-md mb-14 sm:text-lg font-light ${poppins.className} text-zinc-600 dark:text-zinc-400`}
        >
          These are the technologies and tools I work with:
        </motion.p>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="items-center border shadow-none justify-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl rounded-sm">
                <CardContent className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className={`w-10 h-10 object-contain ${skill.imgDark ? "dark:hidden" : ""}`}
                    loading="lazy"
                  />
                  {skill.imgDark && (
                    <img
                      src={skill.imgDark}
                      alt={`${skill.name} dark`}
                      className="w-10 h-10 object-contain hidden dark:block"
                      loading="lazy"
                    />
                  )}
                  <span className={`text-sm hidden sm:block ${montserrat.className}`}>{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MySkills
