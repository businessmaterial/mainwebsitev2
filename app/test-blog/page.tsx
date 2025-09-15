import { supabase } from '@/lib/supabaseClient'

export default async function TestBlogPage() {
  console.log('[Test] Supabase client:', !!supabase)
  
  if (!supabase) {
    return (
      <div className="min-h-screen bg-white pt-20 p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Supabase Connection Error</h1>
        <p className="mb-4">The Supabase client is not initialized. Please check:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Create a <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file in the main-website directory</li>
          <li>Add the following content:</li>
        </ol>
        <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
{`NEXT_PUBLIC_SUPABASE_URL=https://etnaydycxkymtmwqfscd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bmF5ZHljeGt5bXRtd3Fmc2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MDI0NjIsImV4cCI6MjA1MDE3ODQ2Mn0.VBdmAhPxLdI0Qjr7Z0YRTP1mJAhVNGhOcvNNJfU1234`}
        </pre>
        <p className="mt-4 text-gray-600">Then restart the development server.</p>
      </div>
    )
  }

  let blogs = []
  let error: string | null = null

  try {
    console.log('[Test] Attempting to fetch blogs...')
    const { data, error: fetchError } = await supabase
      .from('published_blogs')
      .select('*')
      .limit(5)
    
    console.log('[Test] Fetch result:', { data: !!data, error: fetchError })
    blogs = data || []
    error = fetchError?.message || null
  } catch (e) {
    console.error('[Test] Fetch exception:', e)
    error = e instanceof Error ? e.message : 'Unknown error occurred'
  }

  return (
    <div className="min-h-screen bg-white pt-20 p-8">
      <h1 className="text-2xl font-bold mb-4">Blog Connection Test</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Connection Status:</h2>
        <p className={`p-2 rounded ${supabase ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {supabase ? '✅ Supabase client initialized' : '❌ Supabase client not initialized'}
        </p>
      </div>

      {error && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Error:</h2>
          <pre className="bg-red-100 text-red-800 p-4 rounded text-sm overflow-auto">
            {error}
          </pre>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Blogs Found: {blogs.length}</h2>
        {blogs.length > 0 ? (
          <div className="space-y-2">
            {blogs.map((blog: { id: string; title: string; slug: string; status: string; published_at: string }) => (
              <div key={blog.id} className="border p-4 rounded">
                <h3 className="font-medium">{blog.title}</h3>
                <p className="text-sm text-gray-600">Slug: {blog.slug}</p>
                <p className="text-sm text-gray-600">Status: {blog.status}</p>
                <p className="text-sm text-gray-600">Published: {blog.published_at}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No published blogs found. Create and publish a blog in the admin panel first.</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Next Steps:</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>If connection failed, create the .env.local file as shown above</li>
          <li>If no blogs found, create and publish a blog in the admin panel</li>
          <li>If everything works, the main blog pages should work too</li>
        </ol>
      </div>
    </div>
  )
} 