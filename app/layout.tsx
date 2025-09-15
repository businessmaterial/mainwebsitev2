import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "PrepGrind - Master Your Dream Exam with AI-Powered Learning",
    template: "%s | PrepGrind"
  },
  description: "Join 100,000+ successful students with AI-powered mock tests, personalized analytics, and expert-curated content for 25+ competitive exams. Start your free trial today.",
  keywords: [
    "AI-powered exam preparation", 
    "competitive exam mock tests", 
    "CAT preparation online", 
    "IBPS mock tests", 
    "SSC exam preparation", 
    "UPSC study materials", 
    "online practice tests India", 
    "exam analytics dashboard",
    "personalized learning platform",
    "government job preparation"
  ],
  authors: [{ name: "PrepGrind Technologies" }],
  creator: "PrepGrind Technologies",
  publisher: "PrepGrind Technologies",
  metadataBase: new URL("https://prepgrind.com"),
  alternates: {
    canonical: "https://prepgrind.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prepgrind.com",
    title: "PrepGrind - Master Your Dream Exam with AI-Powered Learning",
    description: "Join 100,000+ successful students with AI-powered mock tests and personalized analytics for 25+ competitive exams.",
    siteName: "PrepGrind",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrepGrind - AI-Powered Exam Preparation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepGrind - Master Your Dream Exam with AI-Powered Learning",
    description: "Join 100,000+ successful students with AI-powered mock tests and personalized analytics for 25+ competitive exams.",
    creator: "@prepgrind",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
