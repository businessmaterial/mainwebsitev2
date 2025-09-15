import Link from 'next/link';
import { getBlogsByExam } from '@/lib/blogData';
import { ExamKey } from '@/lib/types';

export default function ExamBlogListPage({ params }: { params: { exam: ExamKey } }) {
  const blogs = getBlogsByExam(params.exam);

  if (blogs.length === 0) {
    return <p>No posts found for this exam.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {blogs.map((b) => (
        <li key={b.id} className="rounded border p-4 hover:bg-gray-50">
          <h3 className="font-medium">
            <Link href={`/blog/${b.exam}/${b.slug}`}>{b.title}</Link>
          </h3>
          <p className="text-sm text-gray-600">{b.excerpt}</p>
        </li>
      ))}
    </ul>
  );
} 