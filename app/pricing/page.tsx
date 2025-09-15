import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with basic practice",
      icon: Star,
      features: [
        "5 mock tests per month",
        "Basic performance analytics",
        "Access to study materials",
        "Community support",
        "Mobile app access"
      ],
      limitations: [
        "Limited test attempts",
        "Basic analytics only",
        "No personalized recommendations"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Ideal for serious exam preparation",
      icon: Zap,
      features: [
        "Unlimited mock tests",
        "Advanced AI-powered analytics",
        "Personalized study recommendations",
        "Detailed performance reports",
        "Priority support",
        "Offline test downloads",
        "Previous year papers",
        "Video solutions"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "₹499",
      period: "per month",
      description: "Complete preparation package with expert guidance",
      icon: Crown,
      features: [
        "Everything in Pro",
        "1-on-1 mentor sessions",
        "Live doubt clearing sessions",
        "Exclusive study groups",
        "Interview preparation",
        "Career guidance",
        "Custom study plans",
        "Early access to new features"
      ],
      limitations: [],
      cta: "Go Premium",
      popular: false
    }
  ]

  const annualDiscount = 20 // 20% discount on annual plans

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Choose Your Success Plan
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible pricing options designed to fit your preparation needs and budget
            </p>
            <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex">
              <Button variant="ghost" className="rounded-full">Monthly</Button>
              <Button variant="ghost" className="rounded-full">
                Annual <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">Save 20%</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''} transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/register">{plan.cta}</Link>
                  </Button>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-muted-foreground">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation) => (
                            <li key={limitation} className="flex items-center space-x-2">
                              <div className="h-4 w-4 rounded-full bg-gray-300 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
              <p className="text-xl text-muted-foreground">
                See what's included in each plan
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Free</th>
                      <th className="text-center p-4 font-semibold bg-primary/5">Pro</th>
                      <th className="text-center p-4 font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { feature: "Mock Tests", free: "5/month", pro: "Unlimited", premium: "Unlimited" },
                      { feature: "Performance Analytics", free: "Basic", pro: "Advanced", premium: "Advanced + AI" },
                      { feature: "Study Materials", free: "✓", pro: "✓", premium: "✓" },
                      { feature: "Video Solutions", free: "✗", pro: "✓", premium: "✓" },
                      { feature: "Personalized Recommendations", free: "✗", pro: "✓", premium: "✓" },
                      { feature: "Mentor Sessions", free: "✗", pro: "✗", premium: "✓" },
                      { feature: "Live Doubt Clearing", free: "✗", pro: "✗", premium: "✓" },
                      { feature: "Priority Support", free: "✗", pro: "✓", premium: "✓" }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">{row.free}</td>
                        <td className="p-4 text-center bg-primary/5">{row.pro}</td>
                        <td className="p-4 text-center">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan anytime. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "Is there a free trial for paid plans?",
                  answer: "Yes, we offer a 7-day free trial for both Pro and Premium plans. No credit card required."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets."
                },
                {
                  question: "Can I get a refund if I'm not satisfied?",
                  answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked."
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of students who have achieved their dream jobs with PrepGrind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 