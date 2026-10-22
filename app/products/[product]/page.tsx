
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Product = {
  slug: string
  name: string
  subtitle: string
  image: string
  details: string[]
  specs: { label: string; value: string }[]
  comingSoon?: boolean
}

const products: Product[] = [
  {
    slug: "vyro",
    name: "VYRO",
    subtitle: "Battery-Powered Solar Cleaning Robot",
    image: "/products/vyro.png",
    details: [
      "12V battery with easy Swappable Battery system",
      "Spiral rotary dry cleaning brush with soft nylon bristles",
      "Safe, scratch-free and waterless cleaning",
      "Manual row shifting between rows",
      "Lightweight and user-friendly",
      "Remote controlled operation",
      "Regular dry cleaning with quick-change battery management",
      "1 Year Product Warranty",
      "Best suited for shed and ground-mount installations",
    ],
    specs: [
      { label: "Robot Run Time", value: "Swappable Batteries" },
      { label: "Cleaning Capacity", value: "1 MW/hr" },
      { label: "Charging Time", value: "3 Hrs" },
      { label: "Weight", value: "37 kg" },
    ],
  },
  {
    slug: "vyro-plus",
    name: "VYRO+",
    subtitle: "Self-Solar-Charging Cleaning Robot",
    image: "/products/vyro-plus.png",
    details: [
      "Built-in Solar Charging through integrated battery and robot-mounted solar panel",
      "No external charging required",
      "Spiral rotary dry cleaning brush with soft nylon bristles",
      "Safe, scratch-free and waterless cleaning",
      "Manual row shifting between rows",
      "Lightweight and portable",
      "Remote controlled operation",
      "Energy-efficient and low-maintenance",
      "1 Year Product Warranty",
      "Best suited for mid-sized shed, residential and commercial ground-mount installations where external power lines are unavailable",
    ],
    specs: [
      { label: "Robot Run Time", value: "1.25 Hrs" },
      { label: "Cleaning Capacity", value: "1 MW/hr" },
      { label: "Charging Time", value: "6 Hrs" },
      { label: "Weight", value: "42 kg" },
    ],
  },
  {
    slug: "auro",
    name: "AURO",
    subtitle: "Fully Autonomous Solar Cleaning Robot",
    image: "/products/auro.png",
    details: [
      "Built-in Solar Charging for continuous independent power",
      "Zero plug-in operation",
      "Spiral rotary dry cleaning brush with soft nylon bristles",
      "Safe, scratch-free and waterless cleaning",
      "Fully automated operation",
      "Automatic time scheduler",
      "Real-time SCADA monitoring",
      "Zero manual intervention or row shifting",
      "Permanently installed one robot per row",
      "Reliable daily cleaning",
      "1 Year Product Warranty",
      "Best suited for large-scale industrial utility solar plants requiring hands-free continuous dust management",
    ],
    specs: [
      { label: "Robot Run Time", value: "1.25 Hrs" },
      { label: "Cleaning Capacity", value: "1 MW/hr" },
      { label: "Charging Time", value: "6 Hrs" },
      { label: "Weight", value: "42 kg" },
    ],
  },
  {
    slug: "rooflite",
    name: "ROOFLITE",
    subtitle: "Fully Automated Residential Solar Cleaning Robot",
    image: "/products/rooflite.png",
    comingSoon: true,
    details: [
      "Most budget-friendly and highly economical solution",
      "Designed for residential rooftop and small businesses",
      "Built-in Solar Charging with integrated rechargeable battery",
      "Water-integrated cleaning system",
      "Safe and gentle brush with scratch-free cleaning",
      "Fully automated operation through mobile app",
      "Scheduled cleaning",
      "Easy on-site setup",
      "Best suited for residential rooftop solar systems to maximize performance with minimal user intervention",
    ],
    specs: [],
  },
]

const dryCleaningVideo =
  "https://youtube.com/shorts/1a4IkjDRr0s?si=G8JmRxBX2HrPjabf"

const wetCleaningVideo =
  "https://youtube.com/shorts/P8aTUznbJ1A?si=QyF4w0UQ56kOLZD6"

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product: slug } = await params
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white text-[#124B9B]">
      {/* White hero section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[520px] w-[300px] rotate-[40deg] bg-blue-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[15%] top-0 -z-10 h-[430px] w-px rotate-[40deg] bg-blue-100"
        />

        <div className="mx-auto max-w-7xl">
          <Link
            href="/#products"
            className="inline-flex items-center text-base font-medium text-[#124B9B] transition hover:text-orange-500"
          >
            ← Back to Products
          </Link>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="order-2 md:order-1">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500 md:text-base">
                Solar Cleaning Robot
              </p>

              <h1 className="text-5xl font-extrabold tracking-tight text-[#124B9B] md:text-7xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-xl text-xl leading-relaxed text-[#124B9B] md:text-2xl">
                {product.subtitle}
              </p>

              {product.comingSoon && (
                <span className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white">
                  Coming Soon
                </span>
              )}

              <div className="mt-8 h-1 w-20 rounded-full bg-orange-500" />
            </div>

            <div className="relative order-1 h-[260px] w-full overflow-hidden rounded-xl bg-blue-50 md:order-2 md:h-[390px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-contain p-4 ${
                  product.comingSoon ? "scale-110 blur-[14px]" : ""
                }`}
              />

              {product.comingSoon && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product features */}
      <section className="bg-blue-50/50 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Product Details
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#124B9B] md:text-4xl">
            Features &amp; Capabilities
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {product.details.map((detail, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-5 shadow-sm"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  ✓
                </span>
                <p className="leading-relaxed text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      {product.specs.length > 0 && (
        <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Specifications
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#124B9B] md:text-4xl">
              Key Specifications
            </h2>

            <div className="mt-8 overflow-hidden rounded-xl border border-blue-100">
              {product.specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-2 gap-4 px-6 py-5 ${
                    index !== product.specs.length - 1
                      ? "border-b border-blue-100"
                      : ""
                  }`}
                >
                  <span className="font-semibold text-[#124B9B]">
                    {spec.label}
                  </span>
                  <span className="text-right text-slate-600">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cleaning technology videos — after features and specifications */}
      <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Cleaning Technology
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#124B9B] md:text-4xl">
              Advanced Solar Panel Cleaning
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              Explore the cleaning technologies used for solar panel
              maintenance, including dry and wet cleaning solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <a
              href={dryCleaningVideo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch dry cleaning technology video on YouTube"
              className="group overflow-hidden rounded-xl border border-blue-100 bg-blue-50/50 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="px-6 py-6">
                <h3 className="text-xl font-bold text-[#124B9B] md:text-2xl">
                  Dry Cleaning Technology
                </h3>
                <p className="mt-2 text-slate-600">
                  Waterless cleaning technology for solar panels.
                </p>
              </div>

              <div className="flex aspect-video flex-col items-center justify-center gap-4 border-t border-blue-100 bg-blue-50 px-6 text-center transition group-hover:bg-blue-100">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white transition group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-8 w-8 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="font-semibold text-[#124B9B]">
                  Watch Dry Cleaning Video on YouTube
                </span>
                <span className="text-sm text-slate-500">
                  Opens in a new tab
                </span>
              </div>
            </a>

            <a
              href={wetCleaningVideo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch wet cleaning technology video on YouTube"
              className="group overflow-hidden rounded-xl border border-blue-100 bg-blue-50/50 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="px-6 py-6">
                <h3 className="text-xl font-bold text-[#124B9B] md:text-2xl">
                  Wet Cleaning Technology
                </h3>
                <p className="mt-2 text-slate-600">
                  Water-integrated cleaning technology for solar panels.
                </p>
              </div>

              <div className="flex aspect-video flex-col items-center justify-center gap-4 border-t border-blue-100 bg-blue-50 px-6 text-center transition group-hover:bg-blue-100">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white transition group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-8 w-8 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="font-semibold text-[#124B9B]">
                  Watch Wet Cleaning Video on YouTube
                </span>
                <span className="text-sm text-slate-500">
                  Opens in a new tab
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="bg-[#124B9B] px-6 py-16 text-center text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
            Let's Work Together
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Interested in {product.name}?
          </h2>

          <p className="mt-4 leading-relaxed text-blue-100">
            Get in touch with Jagrut Automation to learn more about our solar
            cleaning solutions.
          </p>

          <Link
            href="/contact#automation-on-demand"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  )
}
