import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export default function BlogCard({ title, excerpt, imageSrc, imageAlt, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 md:h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-slate-600">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Link
          href={slug}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
