import { Blog, BlogCategory, BlogTag, ExamKey } from './types';

const categories: BlogCategory[] = [
  { slug: 'exam-strategy', name: 'Exam Strategy' },
  { slug: 'quant', name: 'Quant' },
  { slug: 'verbal', name: 'Verbal' },
];

const tags: BlogTag[] = [
  { slug: 'time-management', name: 'Time Management' },
  { slug: 'shortcuts', name: 'Shortcuts' },
];

const blogs: Blog[] = [];

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