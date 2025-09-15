import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Brain, Star, Clock, Eye, ThumbsUp, Share2, Filter, Grid, List, Award, Zap, Users, BookMarked, Lightbulb } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'

interface Blog {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url?: string
  reading_time: number
  published_at: string
  is_featured: boolean
  difficulty_level: string
  view_count: number
  like_count: number
  exam_name?: string
  exam_short_code?: string
  category_name?: string
  category_slug?: string
}

async function getBlogs(): Promise<{ featuredBlogs: Blog[], recentBlogs: Blog[], categories: any[], totalBlogs: number }> {
  if (!supabase) {
    return { featuredBlogs: [], recentBlogs: [], categories: [], totalBlogs: 0 }
  }

  try {
    // Get featured blogs
    const { data: featuredBlogs } = await supabase
      .from('published_blogs')
      .select('*')
      .eq('is_featured', true)
      .order('published_at', { ascending: false })
      .limit(6)

    // Get recent blogs
    const { data: recentBlogs } = await supabase
      .from('published_blogs')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(12)

    // Get total blog count
    const { count: totalBlogs } = await supabase
      .from('published_blogs')
      .select('*', { count: 'exact', head: true })

    // Get categories with blog counts
    const { data: categories } = await supabase
      .from('blog_categories')
      .select(`
        *,
        blogs!inner(id)
      `)
      .eq('is_active', true)
      .eq('blogs.status', 'published')

    const processedCategories = categories?.map(cat => ({
      ...cat,
      count: cat.blogs?.length || 0
    })) || []

    return {
      featuredBlogs: featuredBlogs || [],
      recentBlogs: recentBlogs || [],
      categories: processedCategories,
      totalBlogs: totalBlogs || 0
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return { featuredBlogs: [], recentBlogs: [], categories: [], totalBlogs: 0 }
  }
}

export default async function BlogPage() {
  const { featuredBlogs, recentBlogs, categories, totalBlogs } = await getBlogs()

  // Create exam categories from the data
  const examCategories = [
    { name: "MBA Exams", slug: "mba-exams", count: categories.filter(c => c.name.toLowerCase().includes('mba')).reduce((sum, c) => sum + c.count, 0), color: "bg-blue-500", icon: "🎓" },
    { name: "Banking Exams", slug: "banking-exams", count: categories.filter(c => c.name.toLowerCase().includes('banking')).reduce((sum, c) => sum + c.count, 0), color: "bg-green-500", icon: "🏦" },
    { name: "SSC & Railways", slug: "ssc-railways", count: categories.filter(c => c.name.toLowerCase().includes('ssc') || c.name.toLowerCase().includes('railway')).reduce((sum, c) => sum + c.count, 0), color: "bg-purple-500", icon: "🚂" },
    { name: "UPSC & PSC", slug: "upsc-psc", count: categories.filter(c => c.name.toLowerCase().includes('upsc') || c.name.toLowerCase().includes('psc')).reduce((sum, c) => sum + c.count, 0), color: "bg-red-500", icon: "🏛️" },
    { name: "Teaching & University", slug: "teaching-university", count: categories.filter(c => c.name.toLowerCase().includes('teaching') || c.name.toLowerCase().includes('university')).reduce((sum, c) => sum + c.count, 0), color: "bg-yellow-500", icon: "👨‍🏫" },
    { name: "Defense", slug: "defense", count: categories.filter(c => c.name.toLowerCase().includes('defense') || c.name.toLowerCase().includes('nda')).reduce((sum, c) => sum + c.count, 0), color: "bg-indigo-500", icon: "⚔️" }
  ].filter(cat => cat.count > 0)

  const topPerformingBlogs = recentBlogs
    .sort((a, b) => (b.view_count + b.like_count) - (a.view_count + a.like_count))
    .slice(0, 5)

  const studyTips = [
    { title: "Create a Study Schedule", description: "Plan your daily study routine with specific time slots for each subject." },
    { title: "Practice Mock Tests", description: "Regular mock tests help you understand exam pattern and improve speed." },
    { title: "Focus on Weak Areas", description: "Identify and work on topics where you need more practice." },
    { title: "Stay Updated", description: "Keep track of current affairs and latest exam notifications." }
  ]

  const expertInsights = [
    { expert: "Dr. Rajesh Kumar", role: "CAT Expert", insight: "Focus on fundamentals rather than shortcuts in quantitative aptitude." },
    { expert: "Priya Sharma", role: "Banking Specialist", insight: "Current affairs preparation should be consistent, not last-minute." },
    { expert: "Amit Singh", role: "UPSC Mentor", insight: "Answer writing practice is as important as reading for UPSC preparation." }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pt-20">
        <div className="container py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Master Your 
                  <span className="text-gradient"> Competitive Exams</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Expert strategies, comprehensive guides, and insider tips from top educators to help you achieve your dream career
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Search study guides, exam tips, strategies..." 
                    className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50">
                    Search
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{totalBlogs}+</div>
                          <div className="text-sm text-blue-100">Expert Articles</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">50K+</div>
                          <div className="text-sm text-blue-100">Students Helped</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <Target className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{examCategories.length}+</div>
                          <div className="text-sm text-blue-100">Exam Categories</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">95%</div>
                          <div className="text-sm text-blue-100">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalBlogs}+</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-green-600 mb-2">{categories.length}+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-purple-600 mb-2">{examCategories.length}+</div>
              <div className="text-gray-600">Exam Types</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-red-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Exam Category</h2>
            <p className="text-xl text-gray-600">Specialized content for every competitive exam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examCategories.map((category) => (
              <Card key={category.slug} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
                <Link href={`/blog/category/${category.slug}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white text-xl`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-600">{category.count} articles</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Explore Category</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Featured Articles */}
            {featuredBlogs.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
                    <p className="text-gray-600">Hand-picked content from our expert educators</p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/blog/featured">
                      <Star className="h-4 w-4 mr-2" />
                      View All Featured
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {featuredBlogs.slice(0, 6).map((blog) => (
                    <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <Link href={`/blog/${blog.exam_short_code?.toLowerCase() || 'general'}/${blog.slug}`}>
                        <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-lg border-b flex items-center justify-center relative overflow-hidden">
                          {blog.featured_image_url ? (
                            <img 
                              src={blog.featured_image_url} 
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="text-center p-6">
                              <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                              <span className="text-sm text-gray-500">Featured Article</span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              ⭐ Featured
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                              {blog.category_name || 'General'}
                            </span>
                            {blog.exam_name && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                {blog.exam_short_code}
                              </span>
                            )}
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium capitalize">
                              {blog.difficulty_level}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{blog.reading_time} min</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{blog.view_count}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600">
                              <span>Read more</span>
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Latest Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
                  <p className="text-gray-600">Fresh content to keep you updated</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Grid className="h-4 w-4 mr-2" />
                    Grid
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4 mr-2" />
                    List
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {recentBlogs.slice(0, 8).map((blog) => (
                  <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300">
                    <Link href={`/blog/${blog.exam_short_code?.toLowerCase() || 'general'}/${blog.slug}`}>
                      <div className="p-6">
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border group-hover:shadow-md transition-shadow">
                              {blog.featured_image_url ? (
                                <img 
                                  src={blog.featured_image_url} 
                                  alt={blog.title}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              ) : (
                                <BookOpen className="h-8 w-8 text-blue-500" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                {blog.category_name || 'General'}
                              </span>
                              {blog.exam_name && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                  {blog.exam_short_code}
                                </span>
                              )}
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium capitalize">
                                {blog.difficulty_level}
                              </span>
                              {blog.is_featured && (
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                                  ⭐ Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                              {blog.title}
                            </h3>
                            <p className="text-gray-600 line-clamp-2 mb-4">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(blog.published_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{blog.reading_time} min read</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-4 w-4" />
                                  <span>{blog.view_count} views</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{blog.like_count} likes</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-blue-600">
                                <span>Read article</span>
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <Link href="/blog/all">
                    <BookMarked className="h-4 w-4 mr-2" />
                    View All Articles
                  </Link>
                </Button>
              </div>
            </section>

            {/* Study Tips Section */}
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Expert Study Tips</h2>
                <p className="text-gray-600">Proven strategies from successful candidates</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studyTips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Performing */}
            {topPerformingBlogs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Trending Now</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPerformingBlogs.map((blog, index) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.exam_short_code?.toLowerCase() || 'general'}/${blog.slug}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {blog.title}
                          </p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                            <Eye className="h-3 w-3" />
                            <span>{blog.view_count}</span>
                            <ThumbsUp className="h-3 w-3" />
                            <span>{blog.like_count}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Exam Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Browse by Exam</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {examCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium group-hover:text-blue-600">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Expert Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>Expert Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {expertInsights.map((insight, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                    <p className="text-sm text-gray-700 italic mb-2">"{insight.insight}"</p>
                    <div className="text-xs text-gray-500">
                      <strong>{insight.expert}</strong>, {insight.role}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Popular Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Study Tips', 'Time Management', 'Mock Tests', 'Previous Papers', 'Syllabus Analysis', 'Exam Pattern', 'Strategy', 'Current Affairs', 'Shortcuts', 'Preparation Plan'].map((topic) => (
                    <Link
                      key={topic}
                      href={`/blog/topic/${topic.toLowerCase().replace(' ', '-')}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-full text-sm transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>Stay Ahead</span>
                </CardTitle>
                <CardDescription>
                  Get weekly exam tips, study guides, and success stories delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Enter your email address" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Zap className="h-4 w-4 mr-2" />
                  Subscribe Now
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Join 50,000+ students already subscribed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 