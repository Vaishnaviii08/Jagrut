"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black shadow-sm transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/jagrut_name_white.png" 
              alt="Company Logo" 
              className="h-8 w-auto max-w-[150px] object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link
            href="/#products" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
            Products
          </Link>
          <Link href="/blog" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
            Blog
          </Link>
          <Link href="/#footer" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
            Contact
          </Link>
          <Link href="/about" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" size="sm" asChild>
            <Link href="/contact">Automation on Demand</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                  Jagrut
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
                 Home
                </Link>
                <Link href="/#products" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
                  Products
                </Link>
                <Link href="/blog" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
                <Link href="/#footer" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
                <Link href="/about" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </nav>
              <div className="mt-auto pb-8 space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" asChild>
                  <Link href="/contact">Automation on Demand</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
