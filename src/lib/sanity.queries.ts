// FIXED QUERIES WITH PROPER IMAGE FETCHING
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "imageUrl": coverImage.asset->url,
  categories,
  publishedAt,
  readTime,
  "description": excerpt
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  "imageUrl": coverImage.asset->url,
  content,
  categories,
  publishedAt,
  readTime,
  "description": excerpt
}`