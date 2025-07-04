"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import BlogCard from "@/components/blog-card"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setExpandedProduct(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Hero slider images
  const sliderImages = [
    {
      src: "/1st_slide.jpg",
      alt: "Linear Bot cleaning solar panels",
      headline: "Revolutionizing Industrial Operations with Smart Automation",
      description: "From Robotic solar panel cleaning to custom automation systems — Jagrut delivers precision, performance, and innovation."
    },
    {
      src: "/2nd_slide.jpg",
      alt: "Wrover Bot being installed on solar panels",
      headline: "Maximize Solar Efficiency with Waterless Cleaning",
      description: "Optimized, waterless cleaning improves energy output and prolongs panel lifespan"
    },
    {
      src: "/3rd_slide.jpg",
      alt: "Jagrut's innovative cleaning technology",
      headline: "Maximize Solar Efficiency with Waterless Cleaning",
      description: "Optimized, waterless cleaning improves energy output and prolongs panel lifespan"
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section - Full Screen */}
      <section className="relative w-full h-screen bg-white">
        <HeroSlider images={sliderImages} />
      </section>

      {/* Products Section */}
      <section id = "products" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Engineered for Efficiency: Explore Our Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our innovative cleaning robots are designed to maximize solar panel efficiency while minimizing resource usage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Linear Bot */}
            <div
              tabIndex={0}
              role="button"
              aria-expanded={expandedProduct === "linear"}
              aria-controls="linear-bot-details"
              className="relative cursor-pointer"
              onClick={() =>
                setExpandedProduct((prev) => (prev === "linear" ? null : "linear"))
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter") setExpandedProduct((prev) => (prev === "linear" ? null : "linear"))
              }}
            >
              <Card className="border-0 shadow-md overflow-hidden h-full transition-transform">
                <div className="aspect-video bg-slate-50 relative">
                  <Image
                    src="/linear_bot.jpg?height=400&width=600&text=Linear+Bot"
                    alt="Linear Bot cleaning solar panels"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                  <CardTitle className="text-2xl">Linear Bot</CardTitle>
                  <CardDescription className="text-blue-50">Rail-Based Solar Panel Cleaning Robot</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Wrover Bot */}
            <div
              tabIndex={0}
              role="button"
              aria-expanded={expandedProduct === "wrover"}
              aria-controls="wrover-bot-details"
              className="relative cursor-pointer"
              onClick={() =>
                setExpandedProduct((prev) => (prev === "wrover" ? null : "wrover"))
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter") setExpandedProduct((prev) => (prev === "wrover" ? null : "wrover"))
              }}
            >
              <Card className="border-0 shadow-md overflow-hidden h-full transition-transform">
                <div className="aspect-video bg-slate-50 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Wrover+Bot"
                    alt="Wrover Bot cleaning large solar farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                  <CardTitle className="text-2xl">Wrover Bot</CardTitle>
                  <CardDescription className="text-blue-50">
                    Modular belt-driven cleaning bot for complex solar installations
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Modal */}
      {expandedProduct === "linear" && (
        <div
          onClick={() => setExpandedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="linear-bot-title"
          aria-describedby="linear-bot-description"
        >
          <Card
          id="linear-bot-details"
          className="w-[90vw] max-w-5xl h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          >
            <div className="relative h-64">
              <Image
              src="/linear_bot_2.jpg?"
              alt="Linear Bot preview"
              fill
              className="object-cover rounded-t-xl"
              />
            </div>
            <CardHeader className="p-6">
              <CardTitle id="linear-bot-title" className="text-3xl tracking-wide font-semibold">
                Linear Bot
              </CardTitle>
              <CardDescription id="linear-bot-description" className="text-slate-600 text-lg leading-relaxed font-medium tracking-wide">
                Rail-Based Solar Panel Cleaning Robot
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-slate-700 text-base leading-relaxed space-y-4 tracking-wide">
              <p>
                Linear Bot is an automated, rail-guided robot designed for efficient cleaning of large solar farms and linear panel arrays. It offers precise, low-maintenance cleaning with minimal human effort for ground and shed-mounted installations.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fully automated operation with options for remote control and scheduling</li>
                <li>Extendable and adjustable to suit different panel sizes and varying row configurations.</li>
                <li>Smart obstacle detection and edge protection to prevent accidents.</li>
                <li>Water-efficient cleaning system to minimize water usage</li>
              </ul>
            </CardContent>

            <div className="flex-grow flex items-center justify-center p-6 pt-0">
              <a
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Inquire for More Details
              </a>
            </div>
          </Card>

        </div>
      )}

      {expandedProduct === "wrover" && (
        <div
          onClick={() => setExpandedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wrover-bot-title"
          aria-describedby="wrover-bot-description"
        >
          <Card
            id="wrover-bot-details"
            className="w-[90vw] max-w-5xl h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Wrover+Bot"
                alt="Wrover Bot preview"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <CardHeader className="p-6">
              <CardTitle id="wrover-bot-title" className="text-3xl tracking-wide font-semibold">
                Wrover Bot
              </CardTitle>
              <CardDescription id="wrover-bot-description" className="text-slate-600 text-lg leading-relaxed font-medium tracking-wide">
                Modular belt-driven cleaning bot for complex solar installations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-slate-700 text-base leading-relaxed space-y-4 tracking-wide">
              <p>
                An autonomous cleaning robot specially designed for shed-mounted solar panels, where panels are installed in an irregular and non-linear arrangement. Wrover Bot is capable of 360° movement on the panels, allowing it to navigate complex panel layouts without the need for fixed rails.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>360° movement across panel surfaces for maximum coverage.</li>
                <li>Suitable for shed-mounted and irregularly installed solar panels.</li>
                <li>Smart navigation with obstacle detection and edge protection.</li>
                <li>Water-efficient technology to reduce resource consumption.</li>
              </ul>
            </CardContent>

            {/* This container fills leftover space and centers the button */}
            <div className="flex-grow flex items-center justify-center p-6 pt-0">
              <a
                href="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Inquire for More Details
              </a>
            </div>


          </Card>
        </div>
      )}

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Latest Insights</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and knowledge in solar panel maintenance and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <BlogCard
              title="Why Sprinkler Cleaning Can Harm Your Solar Panels"
              excerpt="Sprinkler cleaning is a common method for solar panel maintenance, but it comes with several hidden drawbacks that can affect performance and longevity."
              imageSrc="/sprinkler_cleaning_3.jpg"
              imageAlt="Side-by-side image showing water spots vs clean panel"
              slug="/blog/sprinkler-cleaning-drawbacks"
            />

            <BlogCard
              title="Why Regular Cleaning of Solar Panels is Necessary and How Efficiency Drops Without It"
              excerpt="Solar panels are a significant investment, but their ability to convert sunlight into electricity depends heavily on keeping their surfaces clean."
              imageSrc="Clean-and-dirty-solar-panels.png"
              imageAlt="Comparison showing dirty solar panels with reduced efficiency"
              slug="/blog/regular-cleaning-necessity"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Ready to Accelerate Your Process?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Let's discuss how our automation solutions can transform your operations and drive your business forward.
          </p>
          <Button asChild className="btn bg-white hover:bg-blue-100 text-primary btn-lg font-semibold px-6 py-3 rounded-full transition">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  )
}