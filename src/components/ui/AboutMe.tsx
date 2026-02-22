"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AboutMe = () => {
  return (
    <section id="about" className="pb-16 pt-8 sm:pt-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full aspect-[3/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/Hasnainkhan.jpg"
              alt="Hasnain Khan"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            About Me
          </h2>

          <p className="text-lg sm:text-lg text-muted-foreground mb-6 font-normal">
            {"I’m Hasnain Khan, a Designer and Vibe Coder based in Pakistan with over 5 years of experience creating clean and intuitive digital experiences."}
          </p>

          <p className="text-lg sm:text-lg text-muted-foreground mb-6 font-normal">
            I started my journey as a graphic designer, then moved into UI/UX and Vibe Coding. Over time, I focused on building products that not only look good but also work smoothly. I enjoy solving design problems, building side projects, and sharing what I learn.
          </p>

          <p className="text-lg sm:text-lg text-muted-foreground font-normal">
            Outside work, I create content for <strong>HK Artech Studio</strong>,  Outside of client work, I create content for HK Artech Studio on TikTok, Instagram, Threads, and YouTube, where I share design insights, usful resourses tutorials & useful prompts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe