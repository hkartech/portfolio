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
  weight: ["400", "500", "600", "700"], // optional, if you want multiple weights
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
  weight: ["300", "400", "500", "600", "700"], // choose the weights you need
});



const services = [
    {
        title: "UI/UX Design",
        desc: "Designing smooth, intuitive user interfaces for web and mobile applications.",
    },
    {
        title: "Graphic Design",
        desc: "Creating bold visual assets, social posts, branding materials, posters, layouts, and illustrations.",
    },
    {
        title: "Shopify App Design",
        desc: "Designing user-friendly, conversion-focused experiences for custom Shopify apps.",
    },
    {
        title: "AI Frontend Builds",
        desc: "Using AI tools to build clean, scalable, responsive frontends faster than ever before.",
    },
    {
        title: "Web Design & Development",
        desc: "Delivering responsive, fast-loading websites with excellent structure and usability.",
    },
    {
        title: "Personal Branding",
        desc: "Developing strong brand identities that connect with people and build credibility.",
    },
];
export default function WhatIDo() {
    return (
        <main className="py-16 px-4 border-b">
            <section className="max-w-5xl mx-auto" id="services">
                <div>
                    <h2 className={`text-3xl font-bold text-center mb-2 ${dmSans.className}`}>
                        What I Do
                    </h2>
                    <p className={`text-center text-muted-foreground mb-14 text-md sm:text-lg font-light ${poppins.className}  text-zinc-600 dark:text-zinc-400`}>
                        I blend design, development, and AI to create modern
                        <br className="hidden sm:block" />
                        , high-performing digital experiences.
                    </p>

                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="group hover:shadow-lg shadow-none hover:bg-blue-400 transition-all duration-300 rounded-md overflow-hidden">
                                    <CardContent className="text-center">
                                        <h3 className={`text-xl font-semibold mb-2 text-left group-hover:text-white ${dmSans.className}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-md text-muted-foreground text-left group-hover:text-white font-light ${poppins.className}`}>
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
