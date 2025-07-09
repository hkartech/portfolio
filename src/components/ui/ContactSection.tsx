'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { Montserrat, DM_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Contact Info & Social */}
          <div className="md:p-10 md:pt-0 md:pl-0 space-y-6 flex flex-col justify-top rounded-xl">
            <p className={`text-md mb-6 ${montserrat.className}`}>
              {"I would love to hear from you. Whether you have a question or just want to say hi, I’ll try my best to get back to you within 24 hours."}
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

            <div className="pt-4">
              <h3 className={`text-lg font-medium mb-3 ${montserrat.className}`}>Follow Me On</h3>
              <div className="flex gap-4 items-center flex-wrap">
                {socialLinks.map((item, index) => (
                  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="p-4 rounded-full bg-zinc-900 hover:bg-blue-400 dark:hover-bg-accent transition-colors">
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

          {/* Contact Form */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${dmSans.className}`}>Get in touch</h2>
            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault()
                setStatus('Sending...')

                const formData = new FormData(e.currentTarget)
                const name = formData.get('name') as string
                const email = formData.get('email') as string
                const message = formData.get('message') as string

                const res = await fetch('/api/contact', {
                  method: 'POST',
                  body: JSON.stringify({ name, email, message }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })

                if (res.ok) {
                  setStatus('✅ Message sent successfully!')
                  setName('')
                  setEmail('')
                  setMessage('')
                } else {
                  setStatus('❌ Failed to send message. Please try again.')
                }
              }}
            >
              <div>
                <label className={`text-md font-medium block mb-1 ${montserrat.className}`}>Name</label>
                <Input
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`py-5 placeholder:text-sm ${montserrat.className}`}
                />
              </div>
              <div>
                <label className={`text-md font-medium block mb-1 ${montserrat.className}`}>Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`py-5 placeholder:text-sm ${montserrat.className}`}
                />
              </div>
              <div className='mb-8'>
                <label className={`text-md font-medium block mb-1 ${montserrat.className}`}>Message</label>
                <Textarea
                  name="message"
                  placeholder="Type your message..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`py-3 placeholder:text-sm min-h-[150px] ${montserrat.className}`}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="rounded-full px-8 py-6 text-[1rem] hover:bg-blue-400 transition-colors dark:hover:text-white">
                  Send
                </Button>
              </div>
              {status && (
                <p className={`text-sm mt-2 ${montserrat.className}`}>{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
