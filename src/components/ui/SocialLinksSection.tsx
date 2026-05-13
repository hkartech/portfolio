"use client"

import { motion } from "framer-motion"
import { Globe, Linkedin, Instagram, Facebook, Mail } from "lucide-react"

const SocialLinksSection = () => {
  const socialLinks = [
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/fahmidagfx",
      icon: Globe,
      cta: "Hire Me on Fiverr",
      bgLight: "bg-[#1dbf73]",
      bgDark: "dark:bg-[#1dbf73]",
      hoverEffect: "hover:shadow-[#1dbf73]/40",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/graplens/",
      icon: Linkedin,
      cta: "Connect on LinkedIn",
      bgLight: "bg-[#0a66c2]",
      bgDark: "dark:bg-[#0a66c2]",
      hoverEffect: "hover:shadow-[#0a66c2]/40",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/grap.lens",
      icon: Instagram,
      cta: "Follow on Instagram",
      bgLight: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      bgDark: "dark:bg-gradient-to-br dark:from-[#833ab4] dark:via-[#fd1d1d] dark:to-[#fcb045]",
      hoverEffect: "hover:shadow-[#fd1d1d]/40",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/graplens",
      icon: Facebook,
      cta: "Follow on Facebook",
      bgLight: "bg-[#1877f2]",
      bgDark: "dark:bg-[#1877f2]",
      hoverEffect: "hover:shadow-[#1877f2]/40",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow me on social media or hire me on Fiverr
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl ${link.bgLight} ${link.bgDark} shadow-xl ${link.hoverEffect} hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              <div className="p-6 text-center relative z-10">
                {/* Icon */}
                <div className="mb-5">
                  <link.icon className="w-14 h-14 mx-auto text-white drop-shadow-lg" strokeWidth={1.5} />
                </div>
                
                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {link.name}
                </h3>
                
                {/* Full Width CTA Button */}
                <div className="mt-5">
                  <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold text-sm group-hover:bg-white/30 group-hover:gap-3 transition-all duration-300">
                    {link.cta}
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Contact Alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span>Or reach out directly:</span>
            </div>
            <a
              href="mailto:fahmida.akhter@example.com"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
            >
              fahmida.akhter@email.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialLinksSection