import {
  ErrorComponent,
  ErrorComponentProps,
  createFileRoute,
} from '@tanstack/react-router'
import { fetchBlogPost } from '../utils/blog'
import { NotFound } from '~/components/NotFound'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params: { slug } }) => fetchBlogPost(slug),
  errorComponent: BlogErrorComponent as any,
  component: BlogPostComponent,
  notFoundComponent: () => <NotFound>Blog post not found</NotFound>,
})

export function BlogErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />
}

function BlogPostComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.content}</div>
    </div>
  )
}
