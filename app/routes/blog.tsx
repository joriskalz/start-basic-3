import * as React from 'react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { fetchBlogPosts } from '../utils/blog'

export const Route = createFileRoute('/blog')({
  loader: () => fetchBlogPosts(),
  component: BlogComponent,
})

function BlogComponent() {
  const posts = Route.useLoaderData()

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.slug} className="whitespace-nowrap">
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block py-1 text-blue-800 hover:text-blue-600"
              activeProps={{ className: 'text-black font-bold' }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
