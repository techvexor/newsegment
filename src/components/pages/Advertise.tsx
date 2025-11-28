import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Eye, TrendingUp, Target } from "lucide-react";

export default function Advertise() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advertise With Us
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Reach millions of engaged readers across East and North India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Advertise With News Segment?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5M+</h3>
              <p className="text-gray-600">Monthly Readers</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15M+</h3>
              <p className="text-gray-600">Page Views</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">45%</h3>
              <p className="text-gray-600">Growth Rate</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Key Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Advertising Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Display Ads
              </h3>
              <p className="text-gray-600 mb-6">
                Banner ads, sidebar placements, and custom creative formats across
                our website.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Homepage placement</li>
                <li>• Category-specific targeting</li>
                <li>• Mobile-optimized formats</li>
                <li>• Performance tracking</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-600">
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sponsored Content
              </h3>
              <p className="text-gray-600 mb-6">
                Native advertising that blends seamlessly with our editorial content.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Editorial-style articles</li>
                <li>• Video content integration</li>
                <li>• Social media amplification</li>
                <li>• Dedicated landing pages</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Newsletter Ads
              </h3>
              <p className="text-gray-600 mb-6">
                Reach our engaged subscribers directly in their inbox with targeted
                newsletter placements.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Daily newsletter spots</li>
                <li>• Category-specific lists</li>
                <li>• Exclusive sponsorships</li>
                <li>• High open rates</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Request Media Kit
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Fill out the form below and our advertising team will get back to you
              within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="name">Contact Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="interest">Advertising Interest</Label>
                <Input
                  id="interest"
                  type="text"
                  placeholder="Display Ads, Sponsored Content, etc."
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="details">Additional Details</Label>
                <Textarea
                  id="details"
                  placeholder="Tell us about your advertising goals..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Request Media Kit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
