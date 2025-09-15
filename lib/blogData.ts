import { Blog, BlogCategory, BlogTag, ExamKey } from './types';

const categories: BlogCategory[] = [
  { slug: 'exam-strategy', name: 'Exam Strategy' },
  { slug: 'quant-tips', name: 'Quant Tips' },
  { slug: 'verbal', name: 'Verbal' },
];

const tags: BlogTag[] = [
  { slug: 'time-management', name: 'Time Management' },
  { slug: 'shortcuts', name: 'Shortcuts' },
  { slug: 'syllabus', name: 'Syllabus' },
];

const blogs: Blog[] = [
  {
    id: '1',
    slug: 'cat-time-management-strategies',
    exam: 'cat',
    title: 'CAT Time Management Strategies',
    excerpt: 'Master time management for CAT with these proven techniques.',
    content:
      '## CAT Time Management\n\nLearn how to allocate time across sections and practice with mocks.',
    featuredImageUrl: '/og-default.png',
    author: 'Prep Team',
    publishedAt: new Date().toISOString(),
    status: 'published',
    categories: [categories[0]],
    tags: [tags[0], tags[1]],
    metaTitle: 'CAT Time Management Strategies',
    metaDescription: 'Improve your CAT time management with actionable tips.',
  },
  {
    id: '2',
    slug: 'ssc-cgl-quant-shortcuts',
    exam: 'ssc-cgl',
    title: 'SSC CGL Quant Shortcuts',
    excerpt: 'Speed up your quant solving with these shortcuts.',
    content: '## SSC CGL Quant Shortcuts\n\nA list of helpful tricks and patterns.',
    author: 'Quant Expert',
    publishedAt: new Date().toISOString(),
    status: 'published',
    categories: [categories[1]],
    tags: [tags[1]],
  },
];

export function getAllBlogs(): Blog[] {
  return blogs.filter((b) => b.status === 'published');
}

export function getBlogsByExam(exam: ExamKey): Blog[] {
  return getAllBlogs().filter((b) => b.exam === exam);
}

export function getBlogsByCategorySlug(slug: string): Blog[] {
  return getAllBlogs().filter((b) => b.categories.some((c) => c.slug === slug));
}

export function getBlogsByTagSlug(slug: string): Blog[] {
  return getAllBlogs().filter((b) => b.tags.some((t) => t.slug === slug));
}

export function getBlogByExamAndSlug(exam: ExamKey, slug: string): Blog | undefined {
  return getAllBlogs().find((b) => b.exam === exam && b.slug === slug);
}

export function getAllCategories(): BlogCategory[] {
  return categories;
}

export function getAllTags(): BlogTag[] {
  return tags;
} 