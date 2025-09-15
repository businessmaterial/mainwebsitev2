import Link from 'next/link';
import { getAllBlogs, getAllCategories, getAllTags } from '@/lib/blogData';

export default function BlogHomePage() {
  const blogs = getAllBlogs();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {blogs.map((b) => (
            <li key={b.id} className="rounded border p-4 hover:bg-gray-50">
              <h3 className="font-medium">
                <Link href={`/blog/${b.exam}/${b.slug}`}>{b.title}</Link>
              </h3>
              <p className="text-sm text-gray-600">{b.excerpt}</p>
              <div className="mt-2 text-xs text-gray-500 flex gap-2 flex-wrap">
                {b.tags.map((t) => (
                  <Link key={t.slug} href={`/blog/tag/${t.slug}`} className="underline">
                    #{t.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link key={c.slug} href={`/blog/category/${c.slug}`} className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Link key={t.slug} href={`/blog/tag/${t.slug}`} className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 