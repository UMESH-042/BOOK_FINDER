export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  author_key?: string[];
  first_publish_year?: number;
  cover_i?: number;
  subject?: string[];
  language?: string[];
  publisher?: string[];
  isbn?: string[];
}

export interface SearchResponse {
  numFound: number;
  start: number;
  docs: Book[];
}

export interface BookDetails {
  key: string;
  title: string;
  description?: {
    value: string;
    type?: string;
  } | string;
  covers?: number[];
  subjects?: string[];
  subject_places?: string[];
  subject_times?: string[];
  authors?: Array<{
    author: { key: string };
    type: { key: string };
  }>;
  first_publish_date?: string;
  publish_date?: string;
  publishers?: string[];
  isbn_10?: string[];
  isbn_13?: string[];
  physical_format?: string;
  number_of_pages?: number;
}