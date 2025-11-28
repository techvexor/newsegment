export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: Category;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  isBreaking?: boolean;
}

export type Category = 
  | "Kolkata News"
  | "Delhi News"
  | "India"
  | "World"
  | "Politics"
  | "Business"
  | "Lifestyle"
  | "Entertainment";

export const CATEGORIES: Category[] = [
  "Kolkata News",
  "Delhi News",
  "India",
  "World",
  "Politics",
  "Business",
  "Lifestyle",
  "Entertainment",
];
