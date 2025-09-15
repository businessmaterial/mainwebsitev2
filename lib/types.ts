export type ExamKey =
  | 'cat'
  | 'xat'
  | 'cmat'
  | 'mat'
  | 'snap'
  | 'ssc-cgl'
  | 'ssc-chsl'
  | 'rrb-ntpc'
  | 'rrb-group-d'
  | 'ibps-po'
  | 'ibps-clerk'
  | 'sbi-po'
  | 'lic-aao'
  | 'upsc-cse'
  | 'state-psc'
  | 'ctet'
  | 'cuet-ug'
  | 'nda';

export type BlogStatus = 'draft' | 'published' | 'scheduled';

export interface BlogTag {
  slug: string;
  name: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
}

export interface Blog {
  id: string;
  slug: string;
  exam: ExamKey;
  title: string;
  excerpt: string;
  content: string;
  featuredImageUrl?: string;
  author: string;
  publishedAt: string; // ISO
  status: BlogStatus;
  categories: BlogCategory[];
  tags: BlogTag[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
} 