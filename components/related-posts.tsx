import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Post {
  title: string
  excerpt: string
  imageSrc: string
  imageAlt: string
  slug: string
}

interface RelatedPostsProps {
  posts: Post[]
  currentSlug: string
}

export default function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  // Filter out the current post if it's in the list
  const filteredPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3)

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {filteredPosts.map((post, index) => (
        <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48">
            <Image src={post.imageSrc || "/placeholder.svg"} alt={post.imageAlt} fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h3>
            <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="pt-0 pb-6 px-6">
            <Link
              href={post.slug}
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
