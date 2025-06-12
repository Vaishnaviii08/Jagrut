import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "Why Sprinkler Cleaning Can Harm Your Solar Panels",
      excerpt:
        "Sprinkler cleaning is a common method for solar panel maintenance, but it comes with several hidden drawbacks that can affect performance and longevity.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=Water+Spots+vs+Clean+Panel",
      imageAlt: "Side-by-side image showing water spots vs clean panel",
      slug: "/blog/sprinkler-cleaning-drawbacks",
      category: "Maintenance",
      date: "April 23, 2025",
    },
    {
      title: "Why Nylon Brush Cleaning is the Superior Solution",
      excerpt:
        "At Jagrut Automation, we use high-quality nylon roller brushes in our Linear Bot for waterless solar panel cleaning. Here's why this method stands out.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=Nylon+Brush+Cleaning",
      imageAlt: "Close-up of nylon roller brush cleaning a panel",
      slug: "/blog/nylon-brush-cleaning-benefits",
      category: "Technology",
      date: "April 23, 2025",
    },
    {
      title: "Why Waterless Cleaning is Critical for Maharashtra's Drought-Prone Regions",
      excerpt:
        "Learn why waterless cleaning solutions are essential for solar installations in Maharashtra's water-scarce areas.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=Maharashtra+Drought",
      imageAlt: "Drought conditions in Maharashtra",
      slug: "/blog/waterless-cleaning-maharashtra",
      category: "Sustainability",
      date: "April 20, 2025",
    },
    {
      title: "How AI Prevents Microcracks in Solar Panels: A Technical Breakdown",
      excerpt:
        "Learn how our AI-powered cleaning systems help prevent microcracks and extend the lifespan of your solar panels.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=AI+Prevention",
      imageAlt: "AI preventing microcracks in solar panels",
      slug: "/blog/ai-prevents-microcracks",
      category: "Technology",
      date: "April 18, 2025",
    },
    {
      title: "Case Study: Optimizing Mumbai's Rooftop Solar ROI with Automation",
      excerpt: "See how our automated cleaning solutions helped a Mumbai-based company maximize their solar ROI.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=Mumbai+Case+Study",
      imageAlt: "Mumbai rooftop solar installation",
      slug: "/blog/mumbai-rooftop-case-study",
      category: "Case Study",
      date: "April 15, 2025",
    },
    {
      title: "How to Maximize Solar Panel Efficiency Through Proper Maintenance",
      excerpt:
        "Discover the best practices for maintaining your solar panels to ensure maximum efficiency and longevity.",
      imageSrc: "/placeholder.svg?height=300&width=600&text=Maintenance+Best+Practices",
      imageAlt: "Solar panel maintenance best practices",
      slug: "/blog/maximize-efficiency-maintenance",
      category: "Maintenance",
      date: "April 10, 2025",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-blue-700">
              Jagrut Automation Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Insights, innovations, and industry knowledge about solar panel maintenance and automation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src={post.imageSrc || "/placeholder.svg"} alt={post.imageAlt} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h3>
                  <p className="text-slate-600">{post.excerpt}</p>
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

          {/* All Posts */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700">All Articles</h2>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.imageSrc || "/placeholder.svg"}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{post.title}</h3>
                      <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6 px-6">
                      <Link
                        href={post.slug}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm transition-colors"
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {featuredPosts
                  .filter((post) => post.category === "Technology")
                  .map((post, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={post.imageSrc || "/placeholder.svg"}
                          alt={post.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-blue-700 mb-2">{post.title}</h3>
                        <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-6 px-6">
                        <Link
                          href={post.slug}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm transition-colors"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {featuredPosts
                  .filter((post) => post.category === "Maintenance")
                  .map((post, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={post.imageSrc || "/placeholder.svg"}
                          alt={post.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-blue-700 mb-2">{post.title}</h3>
                        <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-6 px-6">
                        <Link
                          href={post.slug}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm transition-colors"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {featuredPosts
                  .filter((post) => post.category === "Case Study")
                  .map((post, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={post.imageSrc || "/placeholder.svg"}
                          alt={post.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-blue-700 mb-2">{post.title}</h3>
                        <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-6 px-6">
                        <Link
                          href={post.slug}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm transition-colors"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-8">
              Subscribe to our newsletter to receive the latest insights on solar panel maintenance, automation
              technology, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-slate-300 flex-1"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
