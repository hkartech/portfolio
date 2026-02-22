'use client'

import { useState } from 'react'
import { 
  Share2, 
  X, 
  Copy, 
  Check, 
  Twitter, 
  Linkedin, 
  Facebook, 
  MessageSquare,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface ShareModalProps {
  title: string
  url: string
  tags?: string[] // Keep tags prop but don't display it
}

export default function ShareModal({ title, url, tags = [] }: ShareModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const shareText = `Check out this amazing resource: ${title}`
  
  // Use tags for Twitter hashtags if available
  const hashtagsString = tags.length > 0 
    ? tags.map(tag => tag.replace(/\s+/g, '')).slice(0, 3).join(',')
    : 'webdev,programming,tutorial'
  
  const encodedShareText = encodeURIComponent(shareText)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedUrl}&hashtags=${hashtagsString}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedShareText}%20${encodedUrl}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodedShareText}%20${encodedUrl}`,
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    // Open in new tab
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: url,
        })
        setIsOpen(false)
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="gap-2"
          variant="outline"
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this article</DialogTitle>
          <DialogDescription>
            Spread the word about this amazing resource!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Native Share (Mobile) */}
          <div className="md:hidden">
            <Button
              onClick={handleNativeShare}
              className="w-full"
              variant="outline"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share via...
            </Button>
          </div>

          {/* Copy Link Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Copy link</p>
              {copied && (
                <div className="flex items-center text-sm text-green-600">
                  <Check className="mr-1 h-4 w-4" />
                  Copied!
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={url}
                readOnly
                className="flex-1"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <Button
                onClick={handleCopy}
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-4">
            <p className="text-sm font-medium">Share on social media</p>
            
            <div className="flex justify-center gap-4">
              {/* Twitter */}
              <Button
                onClick={() => handleShare('twitter')}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
                title="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>

              {/* LinkedIn */}
              <Button
                onClick={() => handleShare('linkedin')}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
                title="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>

              {/* Facebook */}
              <Button
                onClick={() => handleShare('facebook')}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
                title="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>

              {/* WhatsApp */}
              <Button
                onClick={() => handleShare('whatsapp')}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
                title="Share on WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>

              {/* Email */}
              <Button
                onClick={() => handleShare('email')}
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
                title="Share via Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Preview Text */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Preview:</span> {shareText}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}