import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexComponent,
})

function BlogIndexComponent() {
  return <div>Select a blog post.</div>
}
