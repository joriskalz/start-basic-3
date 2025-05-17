import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

export type BlogPost = {
  slug: string
  title: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'First Post',
    content: 'This is the first blog post.',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    content: 'This is the second blog post.',
  },
]

export const fetchBlogPosts = createServerFn('GET', async () => {
  await new Promise((r) => setTimeout(r, 100))
  return blogPosts
})

export const fetchBlogPost = createServerFn('GET', async (slug: string) => {
  await new Promise((r) => setTimeout(r, 100))
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) {
    throw notFound()
  }
  return post
})
