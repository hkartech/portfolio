'use client'

import { Card, CardContent } from "@/components/ui/card"
import { DM_Sans, Raleway, Montserrat } from "next/font/google"
import { motion } from "framer-motion"

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
})

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-raleway",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
})

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
        <main className="py-12 px-4">
            <section className="max-w-5xl mx-auto" id="services">
                <div>
                    <h2 className={`text-3xl font-bold text-center mb-2 ${raleway.className}`}>
                        What I Do
                    </h2>
                    <p className={`text-center text-muted-foreground mb-14 text-md sm:text-lg ${montserrat.className}`}>
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
                                <Card className="group hover:shadow-lg shadow-none hover:bg-blue-400 transition-all duration-300 rounded-md overflow-hidden py-2">
                                    <CardContent className="p-6 text-center">
                                        <h3 className={`text-xl font-semibold mb-2 text-left group-hover:text-white ${raleway.className}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-md text-muted-foreground text-left group-hover:text-white ${montserrat.className}`}>
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
