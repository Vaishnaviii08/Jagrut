import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import BlogCta from "@/components/blog-cta"
import RelatedPosts from "@/components/related-posts"

export default function SprinklerCleaningDrawbacksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-blue-700 mb-4">
                Why Sprinkler Cleaning Can Harm Your Solar Panels
              </h1>
              <div className="flex items-center text-slate-500 gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Jagrut Research Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>April 23, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container px-4 md:px-6 mt-8">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 md:col-start-3">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/sprinkler_cleaning_1.jpg"
                alt="Side-by-side image showing water spots and mineral residue on a solar panel after sprinkler use compared to a clean, streak-free panel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Sprinkler cleaning is a common method for solar panel maintenance, but it comes with several hidden
                  drawbacks that can affect performance and longevity.
                </p>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">
                  Water Spots & Mineral Residue: The Hidden Efficiency Killers
                </h2>
                <p className="text-slate-700">
                  Sprinklers often leave behind hard water stains and mineral deposits, which can block sunlight and
                  reduce panel efficiency over time. These deposits create a film that prevents sunlight from reaching
                  the photovoltaic cells, directly impacting your energy production.
                </p>
                <p className="text-slate-700">
                  In regions with hard water, which is common across many parts of India, these mineral deposits can
                  become particularly problematic, requiring additional cleaning or treatment to remove completely.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Did You Know?</h3>
                  <p className="text-slate-700">
                    Studies show that mineral deposits from water can reduce solar panel efficiency by up to 25% over
                    time if not properly addressed.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">Risk of Panel Damage</h2>
                <p className="text-slate-700">
                  High-pressure water jets or frequent wetting and drying cycles can cause microcracks or accelerate
                  wear, especially in hot climates. The thermal shock from cold water hitting hot panels can lead to
                  stress on the glass and frame, potentially shortening the lifespan of your investment.
                </p>
                <p className="text-slate-700">
                  Additionally, water can sometimes find its way into electrical components if seals are compromised,
                  creating safety hazards and potential for system failures.
                </p>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">Wasted Water: An Unsustainable Practice</h2>
                <p className="text-slate-700">
                  Sprinkler systems consume large amounts of water—an unsustainable practice, especially in
                  drought-prone regions like Maharashtra. For a 1 MW solar plant, traditional sprinkler cleaning can use
                  upwards of 10,000 liters of water per month.
                </p>
                <p className="text-slate-700">
                  In a country where water scarcity is a growing concern, this level of consumption for panel cleaning
                  is increasingly difficult to justify, both environmentally and economically.
                </p>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">Uneven Cleaning: Patchy Results</h2>
                <p className="text-slate-700">
                  Sprinklers may not effectively remove stubborn dirt, pollen, or bird droppings, leading to patchy
                  cleaning and persistent soiling. These systems typically rely on the volume of water rather than
                  targeted cleaning action, resulting in inconsistent results across your solar array.
                </p>
                <p className="text-slate-700">
                  Areas with particularly stubborn soiling often remain dirty, creating "hot spots" that can affect the
                  performance of entire strings of panels due to the way they're electrically connected.
                </p>

                <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/sprinkler_cleaning_4.jpg"
                    alt="Illustration showing uneven cleaning results from sprinkler systems"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">The Cost Factor</h2>
                <p className="text-slate-700">
                  While sprinkler systems may seem cost-effective initially, the long-term expenses add up:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-4">
                  <li>Water costs (increasingly expensive in many regions)</li>
                  <li>Additional cleaning required to remove mineral deposits</li>
                  <li>Potential repair costs from water damage</li>
                  <li>Lost energy production due to inefficient cleaning</li>
                </ul>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">Conclusion</h2>
                <p className="text-slate-700">
                  While sprinklers seem convenient, they can actually harm your solar panels and waste valuable
                  resources. There's a better way to clean—efficiently, safely, and sustainably.
                </p>
                <p className="text-slate-700">
                  At Jagrut Automation, we've developed waterless cleaning solutions that address all these concerns,
                  providing thorough cleaning without the drawbacks of traditional water-based methods.
                </p>
              </div>

              <Separator className="my-12" />

              <BlogCta />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center">Related Articles</h2>
          <RelatedPosts
            currentSlug="/blog/sprinkler-cleaning-drawbacks"
            posts={[
              {
                title: "Why Nylon Brush Cleaning is the Superior Solution",
                excerpt:
                  "At Jagrut Automation, we use high-quality nylon roller brushes in our Linear Bot for waterless solar panel cleaning. Here's why this method stands out.",
                imageSrc: "/placeholder.svg?height=300&width=600&text=Nylon+Brush+Cleaning",
                imageAlt: "Close-up of nylon roller brush cleaning a panel",
                slug: "/blog/nylon-brush-cleaning-benefits",
              },
              {
                title: "How AI Prevents Microcracks in Solar Panels: A Technical Breakdown",
                excerpt:
                  "Learn how our AI-powered cleaning systems help prevent microcracks and extend the lifespan of your solar panels.",
                imageSrc: "/placeholder.svg?height=300&width=600&text=AI+Prevention",
                imageAlt: "AI preventing microcracks in solar panels",
                slug: "/blog/ai-prevents-microcracks",
              },
              {
                title: "Case Study: Optimizing Mumbai's Rooftop Solar ROI with Automation",
                excerpt:
                  "See how our automated cleaning solutions helped a Mumbai-based company maximize their solar ROI.",
                imageSrc: "/placeholder.svg?height=300&width=600&text=Mumbai+Case+Study",
                imageAlt: "Mumbai rooftop solar installation",
                slug: "/blog/mumbai-rooftop-case-study",
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}