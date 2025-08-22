"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Poppins, DM_Sans } from "next/font/google";
import { projectCards } from "@/app/data/projectCards";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; // ✅ Import Variants type

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

// ✅ Strongly typed animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const RecentProjects = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto" id="projects">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold mb-2 text-center ${dmSans.className}`}
        >
          Recent Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-muted-foreground mb-14 text-center text-md sm:text-lg ${poppins.className}`}
        >
          A few highlights from my latest design and development work.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {projectCards.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
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
                  <h3 className={`text-xl font-medium ${poppins.className}`}>
                    {project.title}
                  </h3>
                  <p
                    className={`text-md text-muted-foreground mb-3 font-light ${poppins.className}`}
                  >
                    {project.description}
                  </p>

                  <Link href={`/Projects/${project.id}`} className="group">
                    <Button
                      className={`!p-0 text-[1rem] hover:no-underline hover:text-blue-400 transition-colors cursor-pointer font-light ${poppins.className}`}
                      variant="link"
                    >
                      View Project
                      <SquareArrowOutUpRight />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/portfolio">
            <Button
              className={`px-6 py-6 text-sm sm:text-md font-light rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${poppins.className}`}
            >
              View all work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
