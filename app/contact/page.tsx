"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false)
  const [automationFormSubmitted, setAutomationFormSubmitted] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showAutomationForm, setShowAutomationForm] = useState(false)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactFormSubmitted(true)
  }

  const handleAutomationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAutomationFormSubmitted(true)
  }

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm)
    if (contactFormSubmitted) {
      setContactFormSubmitted(false)
    }
  }

  const toggleAutomationForm = () => {
    setShowAutomationForm(!showAutomationForm)
    if (automationFormSubmitted) {
      setAutomationFormSubmitted(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-blue-700">Get in Touch</h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Contact our team to learn how Jagrut's automated cleaning solutions can boost your energy production and
              reduce maintenance costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
              <p className="text-slate-600 mb-8">
                Choose from the options below to get in touch with our team for your specific needs.
              </p>

              {/* General Contact Form Dropdown */}
              <div className="mb-8">
                <Button
                  onClick={toggleContactForm}
                  variant="outline"
                  className="w-full justify-between text-left h-auto p-4 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="text-lg font-semibold text-blue-700">Contact Form</span>
                  {showContactForm ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </Button>

                {/* General Contact Form */}
                {showContactForm && (
                  <div className="animate-in slide-in-from-top-2 duration-300 mt-4">
                    {contactFormSubmitted ? (
                      <Card className="p-8 bg-green-50 border-green-200">
                        <div className="flex flex-col items-center text-center">
                          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                          <p className="text-slate-600">
                            Your message has been received. We'll get back to you within 24 hours.
                          </p>
                          <Button className="mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => setContactFormSubmitted(false)}>
                            Send Another Message
                          </Button>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-6 border-slate-200">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name-contact">Full Name</Label>
                            <Input id="name-contact" placeholder="John Doe" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company-contact">Company Name</Label>
                            <Input id="company-contact" placeholder="Your Company Ltd." required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email-contact">Email Address</Label>
                            <Input id="email-contact" type="email" placeholder="john@example.com" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone-contact">Phone Number</Label>
                            <Input id="phone-contact" placeholder="+91 98765 43210" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="industry-contact">Industry / Sector</Label>
                            <Input id="industry-contact" placeholder="Your industry" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="product-details-contact">Brief Description of Your Requirement</Label>
                            <Textarea
                              id="product-details-contact"
                              placeholder="Describe your product or requirements"
                              className="min-h-[80px]"
                              required
                            />
                          </div>

                          <Button onClick={handleContactSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Submit <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    )}
                  </div>
                )}
              </div>

              {/* Automation on Demand Dropdown */}
              <div id="automation-on-demand" className="mb-8">
                <Button
                  onClick={toggleAutomationForm}
                  variant="outline"
                  className="w-full justify-between text-left h-auto p-4 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="text-lg font-semibold text-blue-700">Automation on Demand</span>
                  {showAutomationForm ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </Button>

                {/* Automation Form */}
                {showAutomationForm && (
                  <div className="animate-in slide-in-from-top-2 duration-300 mt-4">
                    {automationFormSubmitted ? (
                      <Card className="p-8 bg-green-50 border-green-200">
                        <div className="flex flex-col items-center text-center">
                          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                          <p className="text-slate-600">
                            Your automation request has been received. We'll get back to you within 24 hours.
                          </p>
                          <Button className="mt-6 bg-blue-600 hover:bg-blue-700" onClick={() => setAutomationFormSubmitted(false)}>
                            Send Another Request
                          </Button>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-6 border-blue-200">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name-automation">Full Name</Label>
                            <Input id="name-automation" placeholder="John Doe" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company-automation">Company Name</Label>
                            <Input id="company-automation" placeholder="Your Company Ltd." required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email-automation">Email Address</Label>
                            <Input id="email-automation" type="email" placeholder="john@example.com" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone-automation">Phone Number</Label>
                            <Input id="phone-automation" placeholder="+91 98765 43210" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="industry-automation">Industry / Sector</Label>
                            <Input id="industry-automation" placeholder="Your industry" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="product-details-automation">Brief Description of Your Automation Requirement</Label>
                            <Textarea
                              id="product-details-automation"
                              placeholder="Describe your automation needs and requirements"
                              className="min-h-[80px]"
                              required
                            />
                          </div>

                          <Button onClick={handleAutomationSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}