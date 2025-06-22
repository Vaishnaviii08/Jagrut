"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [solarEnquirySubmitted, setSolarEnquirySubmitted] = useState(false);
  const [automationFormSubmitted, setAutomationFormSubmitted] = useState(false);
  const [showSolarEnquiryForm, setShowSolarEnquiryForm] = useState(false);
  const [showAutomationForm, setShowAutomationForm] = useState(false);
  const [installationType, setInstallationType] = useState("");
  const [otherInstallation, setOtherInstallation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testMode] = useState(false); // Set to false for production
  
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    bot: "",
    installationSize: "",
    location: "",
    pincode: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSolarEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.bot || !formData.location || !formData.pincode) {
        alert("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      const submitData = {
        name: formData.name,
        phone: formData.phone,
        company: formData.company,
        bot: formData.bot,
        installationSize: formData.installationSize,
        installationType,
        otherInstallation,
        location: formData.location,
        pincode: formData.pincode,
        timestamp: new Date().toISOString()
      };

      console.log("Submitting data:", submitData); // For debugging

      if (testMode) {
        // Test mode - just log and show success
        console.log("TEST MODE: Data would be submitted:", submitData);
        alert("TEST MODE: Check console for data. In production, this would submit to Google Sheets.");
        setSolarEnquirySubmitted(true);
        return;
      }

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyt5rnNtAUSEN0poki1e0HM1oCwD9s0yTRemYU1xqQgQ_eNw0KhmfFJCDvvb_5KmHvm4A/exec",
        {
          method: "POST",
          mode: "no-cors", // Important for Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      // Since we're using no-cors, we can't check res.ok
      // Assume success if no error is thrown
      setSolarEnquirySubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        company: "",
        bot: "",
        installationSize: "",
        location: "",
        pincode: ""
      });
      setInstallationType("");
      setOtherInstallation("");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAutomationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAutomationFormSubmitted(true);
  };

  const toggleSolarEnquiryForm = () => {
    setShowSolarEnquiryForm(!showSolarEnquiryForm);
    if (solarEnquirySubmitted) {
      setSolarEnquirySubmitted(false);
    }
  };

  const toggleAutomationForm = () => {
    setShowAutomationForm(!showAutomationForm);
    if (automationFormSubmitted) {
      setAutomationFormSubmitted(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-blue-700">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Contact our team to learn how Jagrut's automated cleaning
              solutions can boost your energy production and reduce maintenance
              costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
                Contact Us
              </h2>
              <p className="text-slate-600 mb-8">
                Choose from the options below to get in touch with our team for
                your specific needs.
              </p>

              {/* Solar Panel Cleaning Robots Enquiry Form Dropdown */}
              <div className="mb-8">
                <Button
                  onClick={toggleSolarEnquiryForm}
                  variant="outline"
                  className="w-full justify-between text-left h-auto p-4 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="text-lg font-semibold text-blue-700">
                    Looking for More Details About Our Solar Panel Cleaning
                    Robots?
                  </span>
                  {showSolarEnquiryForm ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </Button>

                {/* Solar Enquiry Form */}
                {showSolarEnquiryForm && (
                  <div className="animate-in slide-in-from-top-2 duration-300 mt-4">
                    {solarEnquirySubmitted ? (
                      <Card className="p-8 bg-green-50 border-green-200">
                        <div className="flex flex-col items-center text-center">
                          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-green-700 mb-2">
                            Thank You!
                          </h3>
                          <p className="text-slate-600">
                            Thank you for your enquiry! Our team will review
                            your details and get back to you soon with the best
                            cleaning solution for your solar installation.
                          </p>
                          <Button
                            className="mt-6 bg-blue-600 hover:bg-blue-700"
                            onClick={() => setSolarEnquirySubmitted(false)}
                          >
                            Send Another Enquiry
                          </Button>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-6 border-slate-200">
                        <div>
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-blue-700">
                              Enquiry Form: Solar Panel Cleaning Robots
                            </h3>
                          </div>
                          <div className="mb-4">
                            <p className="text-slate-600 italic">
                              Tell us about your installation, and we'll get back
                              to you with the best solution for your site.
                            </p>
                          </div>
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="name-solar">Full Name *</Label>
                              <Input
                                id="name-solar"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phone-solar">Phone Number *</Label>
                              <Input
                                id="phone-solar"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="company-solar">
                                Company / Organization Name
                              </Label>
                              <Input
                                id="company-solar"
                                placeholder="Your Company Ltd."
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="preferred-bot">
                                Preferred Bot *
                              </Label>
                              <Select 
                                value={formData.bot} 
                                onValueChange={(value) => handleInputChange("bot", value)}
                                required
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select preferred bot" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="linear-bot">
                                    Linear bot
                                  </SelectItem>
                                  <SelectItem value="wrover-bot">
                                    Wrover bot
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="installation-size">
                                Size of Solar Installation (in kW or area)
                              </Label>
                              <Input
                                id="installation-size"
                                placeholder="e.g., 100 kW or 1000 sq ft"
                                value={formData.installationSize}
                                onChange={(e) => handleInputChange("installationSize", e.target.value)}
                              />
                            </div>

                            <div className="space-y-3">
                              <Label>Type of Installation</Label>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    id="ground-mounted"
                                    name="installation-type"
                                    value="ground-mounted"
                                    checked={installationType === "ground-mounted"}
                                    onChange={(e) => setInstallationType(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                  />
                                  <Label
                                    htmlFor="ground-mounted"
                                    className="font-normal cursor-pointer"
                                  >
                                    Ground Mounted
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    id="shed-mounted"
                                    name="installation-type"
                                    value="shed-mounted"
                                    checked={installationType === "shed-mounted"}
                                    onChange={(e) => setInstallationType(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                  />
                                  <Label
                                    htmlFor="shed-mounted"
                                    className="font-normal cursor-pointer"
                                  >
                                    Shed Mounted
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    id="residential"
                                    name="installation-type"
                                    value="residential"
                                    checked={installationType === "residential"}
                                    onChange={(e) => setInstallationType(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                  />
                                  <Label
                                    htmlFor="residential"
                                    className="font-normal cursor-pointer"
                                  >
                                    Residential (Home)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    id="other"
                                    name="installation-type"
                                    value="other"
                                    checked={installationType === "other"}
                                    onChange={(e) => setInstallationType(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                  />
                                  <Label
                                    htmlFor="other"
                                    className="font-normal cursor-pointer"
                                  >
                                    Other
                                  </Label>
                                </div>
                              </div>
                            </div>

                            {installationType === "other" && (
                              <div className="space-y-2">
                                <Label htmlFor="other-installation">
                                  Please specify:
                                </Label>
                                <Input
                                  id="other-installation"
                                  placeholder="Specify installation type"
                                  value={otherInstallation}
                                  onChange={(e) => setOtherInstallation(e.target.value)}
                                />
                              </div>
                            )}

                            <div className="space-y-2">
                              <Label htmlFor="location-area">
                                Location / Area *
                              </Label>
                              <Input
                                id="location-area"
                                placeholder="City, State"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="pincode">Pincode *</Label>
                              <Input 
                                id="pincode" 
                                placeholder="400001" 
                                value={formData.pincode}
                                onChange={(e) => handleInputChange("pincode", e.target.value)}
                                required 
                              />
                            </div>

                            <Button
                              onClick={handleSolarEnquirySubmit}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Send Enquiry"} 
                              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>
                          </div>
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
                  <span className="text-lg font-semibold text-blue-700">
                    Automation on Demand
                  </span>
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
                          <h3 className="text-xl font-bold text-green-700 mb-2">
                            Thank You!
                          </h3>
                          <p className="text-slate-600">
                            Your automation request has been received. We'll get
                            back to you within 24 hours.
                          </p>
                          <Button
                            className="mt-6 bg-blue-600 hover:bg-blue-700"
                            onClick={() => setAutomationFormSubmitted(false)}
                          >
                            Send Another Request
                          </Button>
                        </div>
                      </Card>
                    ) : (
                      <Card className="p-6 border-blue-200">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name-automation">Full Name</Label>
                            <Input
                              id="name-automation"
                              placeholder="John Doe"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company-automation">
                              Company Name
                            </Label>
                            <Input
                              id="company-automation"
                              placeholder="Your Company Ltd."
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email-automation">
                              Email Address
                            </Label>
                            <Input
                              id="email-automation"
                              type="email"
                              placeholder="john@example.com"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone-automation">
                              Phone Number
                            </Label>
                            <Input
                              id="phone-automation"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="industry-automation">
                              Industry / Sector
                            </Label>
                            <Input
                              id="industry-automation"
                              placeholder="Your industry"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="product-details-automation">
                              Brief Description of Your Automation Requirement
                            </Label>
                            <Textarea
                              id="product-details-automation"
                              placeholder="Describe your automation needs and requirements"
                              className="min-h-[80px]"
                              required
                            />
                          </div>

                          <Button
                            onClick={handleAutomationSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Submit Request{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
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
  );
}