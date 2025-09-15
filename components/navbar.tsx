"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, ChevronDown, Zap, Sparkles } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExamsOpen, setIsExamsOpen] = useState(false)

  const examCategories = [
    { name: "MBA Entrance", href: "/exams/mba", desc: "CAT, XAT, CMAT, MAT, SNAP" },
    { name: "Banking & Insurance", href: "/exams/banking", desc: "IBPS PO, SBI PO, LIC AAO" },
    { name: "SSC & Railway", href: "/exams/ssc-railway", desc: "SSC CGL, RRB NTPC, Group D" },
    { name: "UPSC & State PSC", href: "/exams/upsc", desc: "Civil Services, State PSC" },
    { name: "Teaching & University", href: "/exams/teaching", desc: "CTET, CUET-UG" },
    { name: "Defense", href: "/exams/defense", desc: "NDA, CDS" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-modern">
      <div className="container-modern">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">PrepGrind</span>
              <span className="text-xs text-blue-600 font-medium -mt-1">AI-Powered Learning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Exams Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 py-2"
                onMouseEnter={() => setIsExamsOpen(true)}
                onMouseLeave={() => setIsExamsOpen(false)}
              >
                <span>Exams</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </button>
              
              {isExamsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-large border border-slate-100 p-2 animate-fade-in-scale"
                  onMouseEnter={() => setIsExamsOpen(true)}
                  onMouseLeave={() => setIsExamsOpen(false)}
                >
                  <div className="p-4 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-1">Popular Exam Categories</h3>
                    <p className="text-sm text-slate-500">Choose your target exam category</p>
                  </div>
                  {examCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">{category.desc}</div>
                    </Link>
                  ))}
                  <div className="p-4 border-t border-slate-100 mt-2">
                    <Link 
                      href="/exams" 
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all exams →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </Link>
            
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Resources
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search exams..."
                className="w-72 pl-11 h-12 bg-slate-50 border-slate-200 rounded-xl focus:bg-white focus:border-blue-300 transition-all duration-200"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-700 hover:bg-slate-100 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-large animate-fade-in-scale">
            <div className="container-modern py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search exams..."
                  className="pl-11 h-12 bg-slate-50 border-slate-200 rounded-xl"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <div className="font-semibold text-slate-900 mb-3">Exam Categories</div>
                {examCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block p-4 rounded-xl hover:bg-blue-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-slate-900">{category.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{category.desc}</div>
                  </Link>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link
                  href="/pricing"
                  className="block py-3 text-slate-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="block py-3 text-slate-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Resources
                </Link>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="flex space-x-3 pt-4">
                <Button variant="outline" className="flex-1 rounded-xl" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 