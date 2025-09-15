import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Mail, Lock, User, Phone, CheckCircle } from "lucide-react"

export default function RegisterPage() {
  const benefits = [
    "Access to 25+ competitive exam mock tests",
    "AI-powered performance analytics",
    "Personalized study recommendations",
    "Mobile app access for on-the-go learning",
    "Regular updates with new questions",
    "24/7 student support"
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">PrepGrind</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Start Your Success Journey Today
              </h1>
              <p className="text-xl text-muted-foreground">
                Join 100,000+ students who are preparing smarter with AI-powered mock tests
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What you&apos;ll get:</h2>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Free Forever</div>
                <p className="text-muted-foreground">
                  Start with our free plan and upgrade anytime
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-full max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Account</CardTitle>
                <CardDescription>
                  Fill in your details to get started with your preparation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="First name"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="Create a strong password"
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Exam</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select your target exam</option>
                      <option value="cat">CAT</option>
                      <option value="ibps-po">IBPS PO</option>
                      <option value="ssc-cgl">SSC CGL</option>
                      <option value="upsc-cse">UPSC CSE</option>
                      <option value="ctet">CTET</option>
                      <option value="nda">NDA</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border border-input"
                    />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="h-4 w-4 rounded border border-input"
                    />
                    <label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for exam tips and updates
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    Create Account
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline">
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 