"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Globe, Linkedin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "./button"

const AboutFahmidaAkhter = () => {
  const router = useRouter()

  return (
    <section id="about" className="pb-16 pt-8 sm:pt-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 hover:bg-transparent hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg font-normal">Go Back</span>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full aspect-[3/3] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/Fahmidaakhter.png"
              alt="Fahmida Akhter"
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
            {"I'm Fahmida Akhter, a Professional Graphic Designer with experience in delivering creative and strategic design solutions for businesses and individuals."}
          </p>

          <p className="text-lg sm:text-lg text-muted-foreground mb-6 font-normal">
            I specialize in Logo Design, Brand Identity, Social Media Content, Posters, Flyers, and Business Card Design, focusing on modern and visually strong brand communication.
          </p>

          <p className="text-lg sm:text-lg text-muted-foreground mb-6 font-normal">
            My design approach is based on clarity, consistency, and impact. I don't just create visuals — I build meaningful brand identities that connect with audiences and help businesses grow.
          </p>

         
        </motion.div>
      </div>
    </section>
  )
}

export default AboutFahmidaAkhter