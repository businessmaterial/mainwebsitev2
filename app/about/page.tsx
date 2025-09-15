import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp, Heart, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "100,000+", label: "Students Served", icon: Users },
    { number: "25+", label: "Exam Categories", icon: Target },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "4.8/5", label: "User Rating", icon: TrendingUp }
  ]

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every decision we make is centered around what's best for our students' success and learning experience."
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "We maintain the highest standards in content quality and platform reliability to ensure consistent learning."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate with AI and technology to make exam preparation more effective and engaging."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality education accessible to students across India, regardless of their location or background."
    }
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "IIT Delhi alumnus with 15+ years in EdTech. Former Product Manager at leading tech companies.",
      image: "/team/rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Head of Content",
      description: "PhD in Education, former UPSC topper. Expert in curriculum design and content strategy.",
      image: "/team/priya.jpg"
    },
    {
      name: "Amit Singh",
      role: "CTO",
      description: "IIT Bombay graduate, AI/ML expert. Previously led engineering teams at major startups.",
      image: "/team/amit.jpg"
    },
    {
      name: "Dr. Sunita Verma",
      role: "Academic Director",
      description: "25+ years in competitive exam coaching. Former professor and exam board member.",
      image: "/team/sunita.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Empowering Dreams Through Education
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re on a mission to democratize quality exam preparation and help students 
              achieve their career goals through innovative technology and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                From a simple idea to transforming exam preparation for millions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded in 2020 by a team of IIT alumni and education experts, PrepGrind was born 
                    from a simple observation: traditional exam preparation methods weren&apos;t keeping up 
                    with the changing needs of modern students.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4">The Vision</h3>
                  <p className="text-muted-foreground">
                    We envisioned a platform that would combine the best of technology with proven 
                    educational methodologies to create a more effective, accessible, and engaging 
                    way to prepare for competitive exams.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Today & Beyond</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Serving over 100,000 students across India with AI-powered practice tests
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Covering 25+ competitive exams with expert-curated content
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Continuously innovating with new features and technologies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Expanding to serve students globally with localized content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The experts behind your success story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Recognition for our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best EdTech Startup 2024",
                organization: "Indian Education Awards",
                year: "2024"
              },
              {
                title: "Innovation in Learning",
                organization: "TechCrunch India",
                year: "2023"
              },
              {
                title: "Top 10 EdTech Companies",
                organization: "Business Today",
                year: "2023"
              }
            ].map((award, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription>
                    {award.organization} • {award.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Mission
            </h2>
            <p className="text-xl opacity-90">
              Be part of the PrepGrind community and transform your exam preparation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 