import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { postBySlugQuery, postsQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import { Poppins, DM_Sans } from 'next/font/google'
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react'
import Footer from '@/components/ui/footer'
import ShareModal from '@/components/ui/ShareModal'
import { generateAutoTags } from '@/lib/tagGenerator' // Add this import

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

// ✅ Define PortableText Components
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={value.asset.url}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
        {value.alt && (
          <p className="text-center text-sm text-gray-500 mt-2">{value.alt}</p>
        )}
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6 overflow-x-auto">
        <code className={`language-${value.language || 'javascript'}`}>
          {value.code}
        </code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg md:text-xl font-bold mt-6 mb-3">{children}</h4>,
    normal: ({ children }: any) => <p className="my-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="pl-2">{children}</li>,
    number: ({ children }: any) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    strike: ({ children }: any) => <span className="line-through">{children}</span>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

async function getPost(slug: string) {
  return await client.fetch(postBySlugQuery, { slug })
}

async function getAllPosts() {
  return await client.fetch(postsQuery)
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="max-w-5xl items-center justify-center">
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${dmSans.className}`}>
            Post not found
          </h1>
          <Link href="/blog" className={`text-blue-600 hover:underline ${poppins.className}`}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const currentUrl = `https://hkartech.com/blog/${post.slug}`
  
  // Generate tags automatically
  const autoTags = generateAutoTags(
    post.title, 
    post.excerpt, 
    post.categories
  )
  
  return (
    <div className="min-h-screen pt-10 px-4">
      <div className="max-w-5xl mx-auto py-8 md:py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className={`inline-flex items-center text-gray-600 hover:text-blue-600 ${poppins.className}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Articles
          </Link>
        </div>

        {/* Cover Image */}
        {post.imageUrl ? (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ) : (
          <div className="w-full h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-white">H</span>
              </div>
              <h2 className={`text-2xl font-bold text-white ${dmSans.className}`}>
                {post.title}
              </h2>
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className='bg-white dark:bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg'>
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 rounded-full ${poppins.className}`}
                >
                  <Tag className="w-3 h-3" />
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${dmSans.className}`}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className={`flex flex-wrap items-center gap-6 text-gray-600 mb-8 ${poppins.className}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
                <Image
                  src="/profile-image.png"
                  alt="HK Artech"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold">HK Artech</p>
                <p className="text-xs text-gray-500">Author & Developer</p>
              </div>
            </div>

            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{post.readTime || 5} minute read</span>
            </div>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
              <p className={`text-lg md:text-xl text-gray-700 leading-relaxed ${poppins.className}`}>
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Content with PortableText Components */}
          <div className={`${poppins.className}`}>
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          </div>

          {/* Share Section with Auto-Generated Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                
                
                {/* Auto-generated tags - This works automatically! */}
                <div className="flex flex-wrap gap-2">
                  {autoTags.map((tag) => {
                    const hashtag = `#${tag.replace(/\s+/g, '')}`
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 cursor-pointer border border-blue-100"
                        title={`Click to copy ${hashtag}`}
                      >
                        {hashtag}
                      </span>
                    )
                  })}
                </div>
              </div>
              
              <div className="md:ml-4">
                <ShareModal 
                  title={post.title}
                  url={currentUrl}
                  tags={autoTags}
                />
              </div>
            </div>
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className={`inline-flex items-center text-blue-600 hover:text-blue-800 font-medium ${poppins.className}`}
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}