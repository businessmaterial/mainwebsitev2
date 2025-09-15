import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Target, 
  Brain, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Award, 
  // Clock,
  BookOpen,
  Briefcase,
  Train,
  Building,
  GraduationCap,
  Shield,
  ArrowRight,
  Star,
  Zap,
  // Globe,
  PlayCircle,
  ChevronRight,
  Sparkles
} from "lucide-react"

export default function Home() {
  const examCategories = [
    {
      name: "MBA Entrance",
      icon: Briefcase,
      description: "CAT, XAT, CMAT, MAT, SNAP",
      href: "/exams/mba",
      gradient: "from-blue-500 to-cyan-500",
      students: "25,000+"
    },
    {
      name: "Banking & Insurance",
      icon: Building,
      description: "IBPS PO, SBI PO, LIC AAO",
      href: "/exams/banking",
      gradient: "from-blue-500 to-blue-600",
      students: "18,000+"
    },
    {
      name: "SSC & Railway",
      icon: Train,
      description: "SSC CGL, RRB NTPC, Group D",
      href: "/exams/ssc-railway",
      gradient: "from-blue-500 to-blue-600",
      students: "22,000+"
    },
    {
      name: "UPSC & State PSC",
      icon: Award,
      description: "Civil Services, State PSC",
      href: "/exams/upsc",
      gradient: "from-blue-600 to-blue-700",
      students: "12,000+"
    },
    {
      name: "Teaching & University",
      icon: GraduationCap,
      description: "CTET, CUET-UG",
      href: "/exams/teaching",
      gradient: "from-blue-400 to-blue-500",
      students: "15,000+"
    },
    {
      name: "Defense",
      icon: Shield,
      description: "NDA, CDS",
      href: "/exams/defense",
      gradient: "from-blue-600 to-blue-700",
      students: "8,000+"
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Get personalized insights and recommendations based on your performance patterns",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Real Exam Experience",
      description: "Practice with authentic exam interfaces and time constraints for better preparation",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and comparative performance metrics",
      gradient: "from-blue-700 to-blue-800"
    }
  ]

  const stats = [
    { number: "100,000+", label: "Active Students", icon: Users },
    { number: "25+", label: "Exam Categories", icon: BookOpen },
    { number: "50,000+", label: "Practice Questions", icon: Target },
    { number: "95%", label: "Success Rate", icon: Award }
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CAT 2024 - 99.2 Percentile",
      content: "PrepGrind's AI-powered mock tests helped me identify my weak areas and improve systematically. The interface is exactly like the real CAT exam!",
      avatar: "RS"
    },
    {
      name: "Priya Singh",
      role: "IBPS PO 2024 - Selected",
      content: "The banking section preparation was outstanding. The current affairs updates and sectional tests made all the difference in my preparation.",
      avatar: "PS"
    },
    {
      name: "Amit Kumar",
      role: "SSC CGL 2024 - Selected",
      content: "Best platform for government exam preparation. The detailed analytics helped me optimize my time management and accuracy.",
      avatar: "AK"
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden hero-bg">
        <div className="container-modern relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Sparkles className="h-4 w-4 text-blue-300" />
                  <span className="text-sm font-medium">India's #1 AI-Powered Exam Prep Platform</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Master Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                    Dream Exam
                  </span>
                  with AI
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Join 100,000+ students who achieved success with our AI-powered mock tests, 
                  personalized analytics, and expert-curated content for 25+ competitive exams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                    <Link href="/register">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold backdrop-blur-sm" asChild>
                    <Link href="#demo">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-blue-100">100k+ students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 text-blue-300 fill-current" />
                      ))}
                    </div>
                    <span className="text-blue-100">4.9/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-scale">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-float"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold text-lg">Quick Exam Search</h3>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                          <Search className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          type="search"
                          placeholder="Search CAT, IBPS, SSC, UPSC..."
                          className="pl-12 h-14 bg-white/90 backdrop-blur-sm border-white/30 rounded-xl text-slate-900 placeholder-slate-500 text-lg"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {examCategories.slice(0, 4).map((category) => (
                          <div key={category.href} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                            <div className={`w-8 h-8 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                              <category.icon className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-white font-medium text-sm">{category.name.split(' ')[0]}</div>
                            <div className="text-blue-200 text-xs">{category.students} students</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-modern">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Target className="h-4 w-4" />
              <span>Choose Your Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Master Any Competitive Exam
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From MBA entrance to government jobs, we've got comprehensive preparation 
              materials for every major competitive exam in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examCategories.map((category, index) => (
              <Link key={category.href} href={category.href} className="group">
                <div className="card-modern hover-lift p-8 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{category.students}</div>
                      <div className="text-sm text-slate-500">students</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>Explore Exams</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-modern">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              <span>Why Choose PrepGrind</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              AI-Powered Success Formula
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the future of exam preparation with cutting-edge technology 
              and expert-curated content designed for maximum learning efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 mb-6`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-modern">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real success stories from students who achieved their dreams with PrepGrind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-300">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-blue-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container-modern relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Ace Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                Dream Exam?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Join thousands of successful students who transformed their careers with PrepGrind. 
              Start your free trial today and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-10 py-4 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/register">
                  Start Free Trial
                  <Sparkles className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-10 py-4 text-xl font-semibold backdrop-blur-sm" asChild>
                <Link href="/contact">
                  Talk to Expert
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>7-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
