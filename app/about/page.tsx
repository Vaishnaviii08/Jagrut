import Link from "next/link"
import { ArrowRight, Cog, Lightbulb, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <img
                src="/jagrut_logo.png"
                alt="Jagrut Logo"
                className="mx-auto h-32 w-auto"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
                About Jagrut
              </h1>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                <p>
                  At Jagrut, we build automation that adapts to your workflow—not the other way around. As a
                  forward-thinking company, we specialize in designing intelligent, scalable systems that enhance
                  productivity, precision, and workplace safety across industries.
                </p>
                <p>
                  With a strong foundation in robotics, electronics, and mechanical integration, we develop real-world
                  solutions that reduce manual effort and downtime. From waterless solar panel cleaning robots to custom
                  automation setups, Jagrut is committed to driving the next wave of industrial transformation.
                </p>
                <p className="text-xl font-semibold text-slate-800">
                  We don't just automate processes—we accelerate progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Expertise</h2>
              <p className="text-lg text-slate-600">
                We combine cutting-edge technology with practical engineering to deliver automation solutions that work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Cog className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Robotics & Automation</h3>
                <p className="text-slate-600">
                  Advanced robotic systems designed for industrial applications and complex environments.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Electronics Integration</h3>
                <p className="text-slate-600">
                  Seamless integration of sensors, controllers, and smart systems for optimal performance.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Mechanical Engineering</h3>
                <p className="text-slate-600">
                  Precision mechanical design and manufacturing for durable, efficient automation solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Process?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Let's discuss how our automation solutions can transform your operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-white/90 text-blue-500 border-white"
              asChild
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
              <Link href="/#products">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
