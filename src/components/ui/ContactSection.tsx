'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Copy, Loader2, CheckCircle, AlertCircle, ChevronDown, X } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/hk_artech', icon: 'instagram.svg' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@hk.artech', icon: 'tiktok.svg' },
  { name: 'YouTube', url: 'https://youtube.com/@hkartech', icon: 'youtube.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hkartech', icon: 'linkedin.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/14UAsE8fJBM/', icon: 'facebook.svg' },
  { name: 'Threads', url: 'https://www.threads.net/@hk_artech', icon: 'threads.svg' },
  { name: 'GitHub', url: 'https://github.com/hkartech', icon: 'github.svg' },
]

const serviceOptions = [
  "UI/UX Design",
  "Graphic Design", 
  "Shopify App Design",
  "AI Frontend Builds",
  "Web Design & Development",
  "Personal Branding",
  "Logo Design",
  "Brand Identity",
  "Frontend Development",
  "Consultation"
]

const budgetOptions = [
  { value: "<500", label: "Under $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-3000", label: "$1,000 - $3,000" },
  { value: "3000-5000", label: "$3,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: ">10000", label: "$10,000+" },
  { value: "flexible", label: "Flexible / Need Consultation" }
]

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [showServices, setShowServices] = useState(false)
  const [showBudget, setShowBudget] = useState(false)
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
  }>({ type: 'idle', message: '' })
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    services?: string
    message?: string
  }>({})

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: undefined }))
    }
  }

  const removeService = (service: string) => {
    setSelectedServices(prev => prev.filter(s => s !== service))
  }

  const selectBudget = (value: string, label: string) => {
    setBudget(value)
    setShowBudget(false)
  }

  const validateForm = () => {
    const newErrors: typeof errors = {}
    
    if (!name.trim()) {
      newErrors.name = 'Name is required'
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required'
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus({ type: 'loading', message: 'Sending message...' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          message,
          services: selectedServices,
          budget 
        }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        })
        
        // Clear form
        setName('')
        setEmail('')
        setMessage('')
        setSelectedServices([])
        setBudget('')
        setErrors({})
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' })
        }, 5000)
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || '❌ Failed to send message. Please try again.' 
        })
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({ 
        type: 'error', 
        message: '❌ Network error. Please check your connection and try again.' 
      })
      
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 5000)
    }
  }

  const getBudgetLabel = () => {
    const selected = budgetOptions.find(option => option.value === budget)
    return selected ? selected.label : ''
  }

  return (
    <main className="sm:py-12 border-t border-b">
      <section id="contact" className="w-full py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-15">

          {/* Contact Info & Social */}
          <div className="md:p-10 md:pt-0 md:pl-0 space-y-6 flex flex-col justify-top rounded-xl">
            <p className="text-lg mb-6 font-normal text-gray-700 dark:text-gray-300">
              {"I would love to hear from you. Whether you have a question or just want to say hi, I'll try my best to get back to you within 24 hours."}
            </p>

            <div>
              <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-gray-200 ">Email</h3>
              <div className="flex items-center gap-2">
                <p className="text-lg text-gray-900 dark:text-gray-100">info.hkartech@gmail.com</p>
                <button
                  onClick={() => handleCopy("info.hkartech@gmail.com", "email")}
                  title="Copy Email"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Copy className="w-4 h-4 text-gray-600 hover:text-primary transition-colors" />
                </button>
                {copiedField === 'email' && (
                  <span className="text-xs text-green-600">Copied!</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-gray-200">Phone</h3>
              <div className="flex items-center gap-2">
                <p className="text-lg text-gray-900 dark:text-gray-100">+92 319 2418464</p>
                <button
                  onClick={() => handleCopy("+92 319 2418464", "phone")}
                  title="Copy Phone"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Copy className="w-4 h-4 text-gray-600 hover:text-primary transition-colors" />
                </button>
                {copiedField === 'phone' && (
                  <span className="text-xs text-green-600">Copied!</span>
                )}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Follow Me On</h3>
              <div className="flex gap-4 items-center flex-wrap">
                {socialLinks.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity"
                  >
                    <div className="p-4 rounded-full bg-gray-800 hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-blue-500 transition-colors duration-300">
                      <Image
                        src={`/${item.icon}`}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get in touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-lg font-normal block mb-1 text-gray-800 dark:text-gray-200">
                  Name
                  {errors.name && (
                    <span className="text-red-500 text-sm ml-2 ">{errors.name}</span>
                  )}
                </label>
                <Input
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) {
                      setErrors(prev => ({ ...prev, name: undefined }))
                    }
                  }}
                  className={`py-5 placeholder:text-gray-500 text-gray-900 bg-white dark:bg-white border-2 ${
                    errors.name 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
                  }`}
                  required
                />
              </div>
              
              <div>
                <label className="text-lg font-normal block mb-1 text-gray-800 dark:text-gray-200">
                  Email
                  {errors.email && (
                    <span className="text-red-500 text-sm ml-2">{errors.email}</span>
                  )}
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: undefined }))
                    }
                  }}
                  className={`py-5 placeholder:text-gray-500 text-gray-900 bg-white dark:bg-white border-2 ${
                    errors.email 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
                  }`}
                  required
                />
              </div>

              {/* Services Multi-Select Dropdown */}
              <div>
                <label className="text-lg font-normal block mb-1 text-gray-800 dark:text-gray-200">
                  Services Needed
                  {errors.services && (
                    <span className="text-red-500 text-sm ml-2">{errors.services}</span>
                  )}
                </label>
                <div className="relative">
                  <div
                    onClick={() => setShowServices(!showServices)}
                    className={`w-full p-3 border-2 rounded-md cursor-pointer flex justify-between items-center bg-white dark:bg-white ${
                      errors.services 
                        ? 'border-red-500' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {selectedServices.length > 0 ? (
                        selectedServices.map(service => (
                          <span
                            key={service}
                            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center gap-1"
                          >
                            {service}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-red-500"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeService(service)
                              }}
                            />
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Select services (you can choose multiple)
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {showServices && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-white border-2 border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {serviceOptions.map(service => (
                        <div
                          key={service}
                          onClick={() => toggleService(service)}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => {}}
                            className="rounded border-gray-400"
                          />
                          <span className="text-sm text-gray-800">{service}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="text-lg font-normal block mb-1 text-gray-800 dark:text-gray-200">
                  Estimated Budget
                </label>
                <div className="relative">
                  <div
                    onClick={() => setShowBudget(!showBudget)}
                    className="w-full p-3 border-2 border-gray-300 hover:border-gray-400 rounded-md cursor-pointer flex justify-between items-center bg-white dark:bg-white"
                  >
                    <div className="flex flex-wrap gap-2">
                      {budget ? (
                        <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">
                          {getBudgetLabel()}
                        </span>
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Select budget range
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showBudget ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {showBudget && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-white border-2 border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {budgetOptions.map(option => (
                        <div
                          key={option.value}
                          onClick={() => selectBudget(option.value, option.label)}
                          className="p-3 hover:bg-gray-100 cursor-pointer"
                        >
                          <span className="text-sm text-gray-800">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className='mb-8'>
                <label className="text-lg font-normal block mb-1 text-gray-800 dark:text-gray-200">
                  Message
                  {errors.message && (
                    <span className="text-red-500 text-sm ml-2">{errors.message}</span>
                  )}
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (errors.message) {
                      setErrors(prev => ({ ...prev, message: undefined }))
                    }
                  }}
                  className={`py-3 placeholder:text-gray-500 text-gray-900 bg-white dark:bg-white border-2 min-h-[150px] ${
                    errors.message 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
                  }`}
                  required
                />
              </div>
              
              {/* Status Message */}
              {status.type !== 'idle' && (
                <div className={`p-3 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : status.type === 'error'
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : 'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {status.type === 'loading' && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    {status.type === 'success' && (
                      <CheckCircle className="h-4 w-4" />
                    )}
                    {status.type === 'error' && (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={status.type === 'loading'}
                  className="rounded-full px-8 py-7 text-[1rem] bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}