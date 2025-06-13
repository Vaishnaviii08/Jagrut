import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SiteFooter() {
  return (
    <footer id = "footer" className="bg-black text-white">
  <div className="container px-4 md:px-6 py-12 md:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      <div>
        <h3 className="text-xl font-bold mb-4">Jagrut Automation</h3>
        <p className="text-gray-400 mb-4">Building Tomorrow's Sustainable Infrastructure</p>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/company/jagrut-automation-and-robotics-private-limited/posts/?feedView=all" className="text-gray-400 hover:text-white">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#products" className="text-gray-300 hover:text-white">
              Products
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400 shrink-0 mt-0.5" />
            <span className="text-gray-300">Nagpur, Maharashtra</span>
          </li>
          <li className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-yellow-400 shrink-0" />
            <span className="text-gray-300">+91 76202 71177</span>
          </li>
          <li className="flex items-start">
            <Mail className="h-5 w-5 mr-2 text-yellow-400 shrink-0 mt-0.5" />
              <span className="text-gray-300 break-words max-w-[220px] sm:max-w-[300px]">
                jagrutautomationandrobotics@gmail.com
              </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-400 mb-4">
          Subscribe to our newsletter for the latest updates on products and innovations.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Your email"
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Subscribe</Button>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Jagrut Automation and Robotics Private Limited All rights reserved.
      </p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>

  )
}
