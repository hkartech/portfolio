// 'use client'

// import { blogPosts } from '@/app/data/blogs'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Calendar } from 'lucide-react'
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from '@/components/ui/card'
// import { Badge } from './badge'
// import { Montserrat, Raleway, DM_Mono } from 'next/font/google'

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-montserrat',
// })

// const raleway = Raleway({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-raleway',
// })

// const dmMono = DM_Mono({
//   subsets: ['latin'],
//   weight: ['400', '500'],
//   variable: '--font-dm-mono',
// })

// export default function BlogCardSection() {
//   return (
//     <main className="py-12 px-4">  
//       <section className="max-w-5xl mx-auto">
//       <div className="mx-auto" id="projects">
//         <h2 className={`text-3xl font-bold mb-2 text-center ${raleway.className}`}>Recent Projects</h2>
//         <p className={`text-muted-foreground mb-14 text-center text-md sm:text-lg ${montserrat.className}`}>
//           A few highlights from my latest design and development work.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
//             <Card className="overflow-hidden cursor-pointer transition-shadow border py-0 shadow-none hover:shadow-lg gap-0">
//               {/* Image Section */}
//               <div className="relative w-full h-48 overflow-hidden">
//                 <Image
//                   src={post.coverImage}
//                   alt={post.title}
//                   fill
//                   className="object-cover group-hover:scale-105 ease-in-out transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/20 z-10" />
//               </div>
             
              

//               <CardContent className="p-4 space-y-3">
//                 {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                   {post.tags?.map((tech) => (
//                     <Badge
//                       key={tech}
//                       variant={'outline'} className={`${dmMono.className}`}
//                     >
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>

//                 {/* Title */}
//                 <CardHeader className="p-0">
//                   <CardTitle className={`text-xl font-semibold ${raleway.className}`}>
//                     {post.title}
//                   </CardTitle>
//                 </CardHeader>

//                 {/* Footer: Author & Date */}
//                 <div className="flex items-center justify-between pt-2">
//                   <div className="flex items-center gap-2">
//                     <Image
//                       src={post.authorImage}
//                       alt={post.authorName}
//                       width={24}
//                       height={24}
//                       className="rounded-full"
//                     />
//                     <span className={`text-sm ${montserrat.className}`}>
//                       {post.authorName}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <Calendar className="h-4 w-4" />
//                     <span>{post.date}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </section>
//     </main>
  
//   )
// }
