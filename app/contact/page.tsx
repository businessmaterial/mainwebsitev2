import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, HelpCircle } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "support@prepgrind.com",
      action: "mailto:support@prepgrind.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+91 9876543210",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Connaught Place, New Delhi, India",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Fri: 9AM-6PM IST",
      action: "#"
    }
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our platform, features, or services",
      email: "info@prepgrind.com"
    },
    {
      icon: Users,
      title: "Student Support",
      description: "Help with your account, tests, or technical issues",
      email: "support@prepgrind.com"
    },
    {
      icon: HelpCircle,
      title: "Academic Support",
      description: "Questions about exam content, syllabus, or preparation",
      email: "academic@prepgrind.com"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-muted-foreground mb-2">{info.description}</p>
                          {info.action.startsWith('#') ? (
                            <p className="font-medium">{info.value}</p>
                          ) : (
                            <a
                              href={info.action}
                              className="font-medium text-primary hover:underline"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <option.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{option.title}</h3>
                          <p className="text-muted-foreground mb-2">{option.description}</p>
                          <a
                            href={`mailto:${option.email}`}
                            className="text-primary hover:underline font-medium"
                          >
                            {option.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How do I reset my password?",
                  answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions."
                },
                {
                  question: "Can I change my subscription plan?",
                  answer: "Yes, you can upgrade or downgrade your plan anytime from your account settings. Changes take effect immediately."
                },
                {
                  question: "How do I access my test results?",
                  answer: "All your test results are available in your dashboard under the 'My Tests' section with detailed analytics."
                },
                {
                  question: "Is there a mobile app available?",
                  answer: "Yes, our mobile app is available for both iOS and Android. You can download it from the respective app stores."
                },
                {
                  question: "How do I cancel my subscription?",
                  answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of the billing period."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. Contact support for refund requests."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button size="lg" asChild>
                <a href="mailto:support@prepgrind.com">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 