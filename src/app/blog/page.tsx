"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Poppins, DM_Sans } from "next/font/google";
import { Calendar, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

// ✅ Strongly typed animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await client.fetch(`
          *[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "imageUrl": coverImage.asset->url,
            publishedAt,
            readTime,
            categories
          }
        `);
        setPosts(posts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-14"></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-48 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto" id="blog">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold mb-2 text-center ${dmSans.className}`}
        >
          Blogs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-muted-foreground mb-14 text-center text-md sm:text-lg ${poppins.className}`}
        >
          A collection of my thoughts on web development, <br/>design, and technology.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-muted-foreground mb-14 text-center text-md sm:text-lg ${poppins.className}`}
        >
        
        </motion.p>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className={`text-gray-500 ${poppins.className}`}>
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <Card className="overflow-hidden transition-shadow border gap-3 py-0 shadow-none hover:shadow-lg pb-4 cursor-pointer">
                    <div className="relative w-full h-48 overflow-hidden">

                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          priority={index === 0}
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                      
                      ) : (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-400">H</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 z-10" />
                    </div>

                    <CardContent className="space-y-3 pt-4">
                      

                      {/* Title */}
                      <h3 className={`text-xl font-medium group-hover:text-blue-400 transition-colors ${poppins.className}`}>
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      <p
                        className={`text-md text-muted-foreground mb-5 font-light line-clamp-4 ${poppins.className}`}
                      >
                        {post.excerpt || "Read this article to learn more."}
                      </p>

                      {/* Date and Read Time */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className={poppins.className}>
                              {post.publishedAt 
                                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })
                                : "Recently"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className={poppins.className}>
                              {post.readTime || 5} min read
                            </span>
                          </div>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}