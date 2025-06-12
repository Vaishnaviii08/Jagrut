import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogCta() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Solar Panel Efficiency?</h3>
      <p className="mb-6">
        Discover how Jagrut Automation's innovative cleaning solutions can boost your energy production while saving
        water and maintenance costs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white" asChild>
          <Link href="/contact">
            Schedule a Free Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white/10"
          asChild
        >
          <Link href="/products">Explore Our Products</Link>
        </Button>
      </div>
    </div>
  )
}
