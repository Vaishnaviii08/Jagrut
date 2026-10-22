
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductSpec = {
  [key: string]: string;
};

type ProductDetails = {
  power: string;
  cleaning: string;
  operation: string;
  maintenance: string;
  bestSuited: string;
};

type Product = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  highlights: string[];
  details: ProductDetails;
  specs?: ProductSpec;
  comingSoon?: boolean;
};

const products: Product[] = [
  {
    slug: "vyro",
    name: "VYRO",
    subtitle: "Battery-Powered Solar Cleaning Robot",
    image: "/products/vyro.png",
    highlights: [
      "12V Swappable Battery",
      "Spiral Rotary Brush",
      "Remote Controlled",
    ],
    details: {
      power: "12V battery with an easy Swappable Battery system.",
      cleaning:
        "Spiral rotary dry cleaning brush with soft nylon bristles for safe, scratch-free and waterless operation.",
      operation:
        "Manual row shifting, 2 workers required; lightweight, user-friendly and Remote Controlled.",
      maintenance:
        "Designed for regular dry cleaning with quick-change battery management and a 1 Year Product Warranty.",
      bestSuited: "Shed and ground-mount installations.",
    },
    specs: {
      "Robot Run Time": "Swappable Batteries",
      "Cleaning Capacity": "1 MW/hr",
      "Charging Time": "3 Hrs",
      Weight: "37 kg",
    },
  },
  {
    slug: "vyro-plus",
    name: "VYRO+",
    subtitle: "Self-Solar-Charging Cleaning Robot",
    image: "/products/vyro-plus.png",
    highlights: [
      "Built-in Solar Charging",
      "No External Charging Required",
      "Remote Controlled",
    ],
    details: {
      power:
        "Built-in Solar Charging technology via an integrated battery and robot-mounted solar panel; no external charging required.",
      cleaning:
        "Spiral rotary dry cleaning brush with soft nylon bristles for safe, scratch-free and waterless operation.",
      operation:
        "Manual row shifting between rows; lightweight, easily portable and Remote Controlled.",
      maintenance:
        "Highly energy-efficient, low-maintenance hardware design covered by a 1 Year Product Warranty.",
      bestSuited:
        "Mid-sized shed, residential and commercial ground-mount setups where external power lines aren't accessible.",
    },
    specs: {
      "Robot Run Time": "1.25 Hrs",
      "Cleaning Capacity": "1 MW/hr",
      "Charging Time": "6 Hrs",
      Weight: "42 kg",
    },
  },
  {
    slug: "auro",
    name: "AURO",
    subtitle: "Fully Autonomous Solar Cleaning Robot",
    image: "/products/auro.png",
    highlights: [
      "Fully Autonomous",
      "Automatic Time Scheduler",
      "Real-time SCADA Monitoring",
    ],
    details: {
      power:
        "Built-in Solar Charging technology for continuous, independent power sourcing with zero plug-in needs.",
      cleaning:
        "Spiral rotary dry cleaning brush with soft nylon bristles for safe, scratch-free and waterless operation.",
      operation:
        "Fully automated operation with an automatic time scheduler, real-time SCADA monitoring, zero manual intervention or row shifting.",
      maintenance:
        "Permanently installed, one robot per row, for reliable daily cleaning, backed by a 1 Year Product Warranty.",
      bestSuited:
        "Large-scale industrial utility solar power plants requiring hands-free, continuous dust management.",
    },
    specs: {
      "Robot Run Time": "1.25 Hrs",
      "Cleaning Capacity": "1 MW/hr",
      "Charging Time": "6 Hrs",
      Weight: "42 kg",
    },
  },
  {
    slug: "rooflite",
    name: "ROOFLITE",
    subtitle: "Fully Automated Residential Solar Cleaning Robot",
    image: "/products/rooflite.png",
    comingSoon: true,
    highlights: [
      "Built-in Solar Charging",
      "Mobile App Control",
      "Scheduled Cleaning",
    ],
    details: {
      power:
        "Built-in Solar Charging with an integrated rechargeable battery.",
      cleaning:
        "Water-integrated cleaning system with a safe and gentle brush for scratch-free cleaning.",
      operation:
        "Fully automated via mobile app with scheduled cleaning and easy on-site setup.",
      maintenance:
        "Most budget-friendly, highly economical for residential rooftop and small businesses.",
      bestSuited:
        "Residential rooftop solar systems to maximize performance with minimal user intervention.",
    },
  },
];

const blogs = [
  {
    title: "Solar Panel Cleaning: Why It Matters",
    description:
      "Regular solar panel cleaning helps maintain efficient solar power generation.",
    image: "/Clean-and-dirty-solar-panels.png",
  },
  {
    title: "The Future of Solar Cleaning",
    description:
      "Robotics and automation are changing the way solar installations are maintained.",
    image: "/dirty_solar_panel.jpg",
  },
  {
    title: "Automated Solar Panel Maintenance",
    description:
      "Discover how automated cleaning solutions can simplify solar plant maintenance.",
    image: "/dirty_panels.jpg",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    image: "/Morbi 2.png",
    title: "Smart Automation for a Cleaner Solar Future",
    description:
      "Advanced robotic solutions for efficient and reliable solar panel cleaning.",
  },
  {
    image: "/Amravati.png",
    title: "Intelligent Solar Cleaning Robots",
    description:
      "Technology designed to make solar panel maintenance smarter and more efficient.",
  },
  {
    image: "/higanghat.png",
    title: "Automation Built for Solar",
    description:
      "Innovative robotic solutions for modern solar installations.",
  },
  {
    image: "/Nashik.png",
    title: "Automation Built for Solar",
    description:
      "Innovative robotic solutions for modern solar installations.",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}

      <section className="relative h-[620px] overflow-hidden md:h-[700px]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl text-white">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400 md:text-base">
                    Jagrut Automation &amp; Robotics
                  </p>

                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <Link
                      href="#products"
                      className="flex h-14 items-center justify-center rounded-lg bg-orange-500 px-10 text-lg font-bold text-white transition-all duration-300 hover:bg-orange-600"
                    >
                      Explore Products
                    </Link>

                    <Link
                      href="/contact#automation-on-demand"
                      className="flex h-14 items-center justify-center rounded-lg bg-orange-500 px-10 text-lg font-bold text-white transition-all duration-300 hover:bg-orange-600"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider indicators */}

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-orange-500"
                  : "w-2.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTS */}

      <section id="products" className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Our Products
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Solar Cleaning Robots
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Intelligent robotic solutions designed for efficient, reliable
              and automated solar panel cleaning.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[270px] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.subtitle}`}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      product.comingSoon ? "scale-110 blur-[14px]" : ""
                    }`}
                  />

                  {product.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <span className="rounded-full bg-orange-500 px-7 py-3 text-sm font-bold tracking-[0.15em] text-white shadow-xl">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 font-medium text-gray-600">
                    {product.subtitle}
                  </p>

                  <div className="mt-6 space-y-3">
                    {product.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex h-11 min-w-[190px] items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLAR PANEL CLEANING VIDEOS */}

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              See Our Technology in Action
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Solar Panel Cleaning Videos
            </h2>

            <p className="mt-5 text-gray-600">
              Discover how Jagrut Automation&apos;s robotic solutions support
              dry and wet solar panel cleaning.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href="https://youtube.com/shorts/P8aTUznbJ1A?si=QyF4w0UQ56kOLZD6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Wet Cleaning
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Watch the wet cleaning demonstration.
                </p>
              </div>

              <span className="shrink-0 rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white">
                Watch ↗
              </span>
            </a>

            <a
              href="https://youtube.com/shorts/1a4IkjDRr0s?si=G8JmRxBX2HrPjabf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Dry Cleaning
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Watch the dry cleaning demonstration.
                </p>
              </div>

              <span className="shrink-0 rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white">
                Watch ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Latest Insights
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              From Our Blog
            </h2>

            <p className="mt-5 text-gray-600">
              Insights and information about solar cleaning, automation and
              robotics.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {blog.description}
                  </p>

                  <Link
                    href="/blog"
                    className="mt-5 inline-block font-semibold text-orange-500 transition hover:text-orange-600"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK A DEMO CTA */}

      <section className="relative overflow-hidden bg-black py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/1st_slide.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Experience Automation
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Make Solar Cleaning Smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-300">
              Explore Jagrut Automation&apos;s robotic solar cleaning
              solutions and book a demo.
            </p>

            <div className="mt-8">
              <Link
                href="/contact#automation-on-demand"
                className="inline-block rounded-md bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
