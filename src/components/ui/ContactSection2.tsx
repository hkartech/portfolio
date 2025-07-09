'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Copy } from 'lucide-react'
import { Montserrat, Raleway, DM_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-raleway',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/hk_artech', icon: 'instagram.svg' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@hk.artech', icon: 'tiktok.svg' },
  { name: 'YouTube', url: 'https://youtube.com/@hkartech', icon: 'youtube.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hkartech', icon: 'linkedin.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/14UAsE8fJBM/', icon: 'facebook.svg' },
  { name: 'Threads', url: 'https://www.threads.net/@hk_artech', icon: 'threads.svg' },
  { name: 'GitHub', url: 'https://github.com/hkartech', icon: 'github.svg' },
]

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopiedField(type)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
      alert('Copy failed. Please copy manually.')
    }
  }

  return (
    <main className="sm:py-12 bg-zinc-5 border-t border-b">
      <section id="contact" className="w-full py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto md:col-span-2 space-y-6">

          <h2 className={`text-3xl font-bold mb-4 ${dmSans.className}`}>Let's Connect</h2>
          <p className={` text-md sm:text-lg mb-6 ${montserrat.className}`}>
            I would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out anytime!
          </p>

          <div>
            <h3 className={`text-lg font-medium mb-1 ${montserrat.className}`}>Email</h3>
            <div className="flex items-center gap-2">
              <p className={`text-md ${montserrat.className}`}>info.hkartech@gmail.com</p>
              <button
                onClick={() => handleCopy("info.hkartech@gmail.com", "email")}
                title="Copy Email"
              >
                <Copy className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              {copiedField === 'email' && (
                <span className="text-xs text-muted-foreground">Copied!</span>
              )}
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-medium mb-1 ${montserrat.className}`}>Phone</h3>
            <div className="flex items-center gap-2">
              <p className={`text-md ${montserrat.className}`}>+92 319 2418464</p>
              <button
                onClick={() => handleCopy("+92 319 2418464", "phone")}
                title="Copy Phone"
              >
                <Copy className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              {copiedField === 'phone' && (
                <span className="text-xs text-muted-foreground">Copied!</span>
              )}
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-medium mb-6 ${montserrat.className}`}>Follow Me On</h3>
            <div className="flex gap-4 items-center flex-wrap">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="p-4 rounded-full bg-zinc-900 hover:bg-blue-400 transition-colors">
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="hover:opacity-100 transition-opacity"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
