"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { DM_Sans, Poppins } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

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
              src="/About me image.JPG"
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
          <h2 className={`text-3xl font-semibold mb-4 ${dmSans.className}`}>
            About Me
          </h2>

          <p
            className={`text-md sm:text-lg text-muted-foreground mb-6 font-light ${poppins.className}`}
          >
            {"I'm Hasnain Khan, a passionate UI/UX designer and front-end developer who blends creative design with smart code."}
          </p>

          <p
            className={`text-md sm:text-lg text-muted-foreground mb-6 font-light ${poppins.className}`}
          >
            My journey started with graphics, matured through UI design, and now thrives in creating smooth and engaging user interfaces using Figma, Tailwind, and Next.js.
            I love solving design problems, building side projects, and teaching what I know.
          </p>

          <p
            className={`text-md sm:text-lg text-muted-foreground font-light ${poppins.className}`}
          >
            Outside work, I create content for <strong>HK Artech</strong>, share tips on TikTok & YouTube, and dream of building tools that make digital life easier.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
