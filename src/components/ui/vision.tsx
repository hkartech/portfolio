'use client'

import { motion } from 'framer-motion'
import { Geist, Montserrat, DM_Sans, Poppins } from 'next/font/google'
import Link from 'next/link'
import { Button } from './button'

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    weight: ["400", "500", "600", "700"],
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
})

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

const Vision = () => {
    return (
        <section id="vision" className="pb-16 pt-8 sm:pt-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-5 items-center">
                {/* Animated Profile Image */}
                <motion.div className="relative">
                    <motion.img
                        src="/profile-image.png"
                        alt="Hasnain Avatar"
                        className="rounded-full mb-5 w-36 sm:w-36 border-4 border-white/80 shadow-lg"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className={`text-3xl font-medium mb-4 ${dmSans.className}`}>My Vision</h2>

                    <p className={`text-md sm:text-lg mb-4 font-light ${poppins.className}`}>
                        The purpose of this platform goes beyond showcasing my skills and projects.
                        I created it to empower students and beginners who cannot afford expensive courses.
                    </p>

                    <p className={`text-md sm:text-lg font-light mb-4 ${poppins.className}`}>
                        Here, you’ll discover trending and essential free design and AI tools that I personally use and recommend.
                        My mission is to make learning more accessible, affordable, and inspiring, so the next generation of designers can unlock their creativity and grow without limitations.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                >
                    <Link href="/about">
                        <Button
                            className={`group rounded-full !pl-5 !pr-6 py-6 text-sm sm:text-md font-light ${poppins.className} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                           Learn About Me
                        </Button>
                    </Link>

                </motion.div>



            </div>
        </section>
    )
}

export default Vision