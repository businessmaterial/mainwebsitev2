import Link from "next/link"
import { Zap, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const examLinks = [
    { name: "CAT", href: "/exams/cat" },
    { name: "IBPS PO", href: "/exams/ibps-po" },
    { name: "SSC CGL", href: "/exams/ssc-cgl" },
    { name: "UPSC CSE", href: "/exams/upsc-cse" },
    { name: "CTET", href: "/exams/ctet" },
    { name: "NDA", href: "/exams/nda" },
    { name: "XAT", href: "/exams/xat" },
    { name: "SBI PO", href: "/exams/sbi-po" },
  ]

  const blogCategories = [
    { name: "MBA Preparation", href: "/blog/mba-exams" },
    { name: "Banking Exams", href: "/blog/banking-exams" },
    { name: "SSC & Railways", href: "/blog/ssc-railways" },
    { name: "UPSC Strategy", href: "/blog/upsc-psc" },
    { name: "Teaching Exams", href: "/blog/teaching-university" },
    { name: "Defense Preparation", href: "/blog/defense" },
  ]

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about#story" },
    { name: "Careers", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Contact Us", href: "/contact" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Getting Started", href: "/help/getting-started" },
    { name: "System Requirements", href: "/help/requirements" },
    { name: "Mobile Apps", href: "/mobile" },
    { name: "API Documentation", href: "/developers" },
    { name: "Status Page", href: "/status" },
  ]

  return (
    <footer className="footer-modern">
      <div className="container-modern">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">PrepGrind</span>
                  <span className="text-sm text-blue-300 font-medium -mt-1">AI-Powered Learning</span>
                </div>
              </Link>
              
              <p className="text-slate-400 leading-relaxed text-lg">
                Empowering students across India with AI-powered mock tests and personalized analytics 
                for 25+ competitive exams. Join 100,000+ successful students today.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:hello@prepgrind.com" className="hover:text-white transition-colors">
                    hello@prepgrind.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Facebook, href: "https://facebook.com/prepgrind", label: "Facebook" },
                  { icon: Twitter, href: "https://twitter.com/prepgrind", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com/prepgrind", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com/company/prepgrind", label: "LinkedIn" },
                  { icon: Youtube, href: "https://youtube.com/prepgrind", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Exams */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Popular Exams</h3>
              <ul className="space-y-3">
                {examLinks.map((exam) => (
                  <li key={exam.href}>
                    <Link
                      href={exam.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {exam.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-3">
                {blogCategories.map((category) => (
                  <li key={category.href}>
                    <Link
                      href={category.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Stay ahead of the competition</h3>
              <p className="text-slate-400 text-lg">
                Get the latest exam updates, study tips, and exclusive content delivered to your inbox
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-slate-500">
              Join 50,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 PrepGrind Technologies Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/refund" className="text-slate-400 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 