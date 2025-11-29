import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  "Kolkata News",
  "Delhi News",
  "India",
  "World",
  "Politics",
  "Business",
  "Lifestyle",
  "Entertainment",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Main Header with Logo and Navigation */}
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 py-3 pr-6 border-r border-gray-700 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center rounded-lg shadow-lg">
                <span className="text-white font-bold text-xl">NS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white tracking-tight leading-tight">
                  News Segment
                </h1>
                <p className="text-[10px] text-gray-400 font-medium">
                  Your Trusted News Source
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-1 ml-4">
              <ul className="flex items-center space-x-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <button className="px-4 py-4 text-white hover:bg-red-600 transition-all text-sm font-medium hover:scale-105 transform whitespace-nowrap">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-auto text-white hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <button className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-lg text-sm font-medium transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
