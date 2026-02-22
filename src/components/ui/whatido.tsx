'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
    {
        title: "UI/UX Design",
        desc: "Crafting intuitive, user-centered interfaces with seamless workflows, interactive prototypes, and thoughtful design systems that delight users and drive engagement.",
    },
    {
        title: "Graphic Design",
        desc: "Creating bold visual identities, compelling social media assets, brand collateral, posters, and illustrations that communicate messages with impact and clarity.",
    },
    {
        title: "Shopify App Design",
        desc: "Designing conversion-focused Shopify app experiences with intuitive dashboards, smooth merchant workflows, and interfaces that boost store performance.",
    },
    {
        title: "AI Frontend Builds",
    desc: "Leveraging cutting-edge AI tools to rapidly generate clean, responsive frontend code while maintaining high performance, scalability, and best practices.",
    },
    {
        title: "Web Design & Development",
        desc: "Building fast, responsive websites with modern frameworks, optimized structure, pixel-perfect implementation, and seamless user experiences across devices.",
    },
    {
        title: "Personal Branding",
        desc: "Developing authentic brand identities with cohesive visual systems, compelling messaging, and strategic positioning that build trust and lasting connections.",
    },
];

export default function WhatIDo() {
    return (
        <main className="py-16 px-4 border-b">
            <section className="max-w-6xl mx-auto" id="services">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-2">
                        What I Do
                    </h2>
                    <p className="text-center mb-14 text-lg sm:text-lg font-normal text-zinc-600 dark:text-zinc-400">
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
                                <Card className="group hover:shadow-lg shadow-none hover:bg-blue-400 transition-all duration-300 rounded-xl overflow-hidden h-full">
                                    <CardContent className="text-center">
                                        <h3 className="text-xl font-semibold mb-3 text-left group-hover:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground text-left group-hover:text-white font-normal leading-relaxed">
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