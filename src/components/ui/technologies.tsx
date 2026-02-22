'use client'

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

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
  const [duplicatedSkills] = useState([...skills, ...skills, ...skills, ...skills])
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (scrollerRef.current) {
      setScrollWidth(scrollerRef.current.scrollWidth / 4)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="max-w-6xl md-max-w-full mx-auto relative w-full overflow-hidden px-4">
        <motion.div
          ref={scrollerRef}
          className="flex gap-10"
          animate={{
            x: scrollWidth ? [0, -scrollWidth] : [0, -1920]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
              repeatDelay: 0
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className={`w-12 h-12 object-contain ${skill.imgDark ? "dark:hidden" : ""}`}
                loading="lazy"
              />
              {skill.imgDark && (
                <img
                  src={skill.imgDark}
                  alt={`${skill.name} dark`}
                  className="w-12 h-12 object-contain hidden dark:block"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default MySkills