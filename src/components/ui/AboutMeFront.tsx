'use client'

import { Raleway, Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-raleway',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
})

const AboutMeFront = () => {
    return (
        <section id="aboutfront" className="pb-16 pt-8 sm:pt-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left: Image with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className={`text-3xl font-bold mb-4 ${raleway.className}`}>About Me</h2>
                    <p className={`text-md sm:text-lg text-muted-foreground mb-4 ${montserrat.className}`}>
                        {"I'm Hasnain Khan, a passionate UI/UX designer and front-end developer who blends creative design with smart code."}
                    </p>


                    <p className={`text-md sm:text-lg text-muted-foreground mb-4 ${montserrat.className}`}>
                        My journey started with graphics, matured through UI design, and now thrives in creating smooth and engaging user interfaces using Figma, Tailwind, and Next.js.
                        I love solving design problems, building side projects, and teaching what I know.
                    </p>

                    <p className={`text-md sm:text-lg text-muted-foreground ${montserrat.className}`}>
                        Outside work, I create content for <strong>HK Artech</strong>, share tips on TikTok & YouTube, and dream of building tools that make digital life easier.
                    </p>

                    <Link href="/about">

                        <Button className={`px-6 py-6 text-sm mt-7 sm:text-md rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden z ${montserrat.className}`}>
                            Learn More
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMeFront