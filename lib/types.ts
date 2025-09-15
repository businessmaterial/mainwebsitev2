export interface BlogCategory {
  slug: string;
  name: string;
}

export interface BlogTag {
  slug: string;
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  exam: ExamKey;
  categories: BlogCategory[];
  tags: BlogTag[];
  featured_image_url?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
  reading_time?: number;
  view_count?: number;
  is_featured?: boolean;
}

export type ExamKey = 
  | 'cat'
  | 'ibps-po'
  | 'ssc-cgl'
  | 'upsc-cse'
  | 'ctet'
  | 'nda'
  | 'jee'
  | 'neet'
  | 'gate'
  | 'clat'
  | 'ca-foundation'
  | 'ca-intermediate'
  | 'ca-final'
  | 'cma-foundation'
  | 'cma-intermediate'
  | 'cma-final'
  | 'cs-foundation'
  | 'cs-executive'
  | 'cs-professional';
