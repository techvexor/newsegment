import { Article } from "@/types/article";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Kolkata Metro Expansion: New Line to Connect Salt Lake with Airport",
    excerpt: "The much-awaited metro line connecting Salt Lake Sector V with Netaji Subhas Chandra Bose International Airport is set to begin operations next month.",
    category: "Kolkata News",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    author: {
      name: "Ananya Chatterjee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    },
    publishedAt: "2024-01-15T10:30:00Z",
    readTime: "5 min read",
    isBreaking: true,
  },
  {
    id: "2",
    title: "Delhi Air Quality Improves After Week-Long Rain Spell",
    excerpt: "The national capital witnessed a significant improvement in air quality index following continuous rainfall over the past week.",
    category: "Delhi News",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    author: {
      name: "Rajesh Kumar",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    publishedAt: "2024-01-15T09:15:00Z",
    readTime: "4 min read",
    isBreaking: true,
  },
  {
    id: "3",
    title: "India's GDP Growth Projected at 7.3% for FY 2024-25",
    excerpt: "Economic experts predict robust growth driven by manufacturing sector expansion and increased consumer spending.",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    author: {
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    publishedAt: "2024-01-15T08:00:00Z",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Historic Durga Puja Pandal Wins UNESCO Heritage Recognition",
    excerpt: "A 150-year-old Durga Puja celebration in North Kolkata receives international heritage status for its cultural significance.",
    category: "Kolkata News",
    imageUrl: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    author: {
      name: "Sourav Banerjee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sourav",
    },
    publishedAt: "2024-01-14T16:45:00Z",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "New IT Hub Announced in Noida: 50,000 Jobs Expected",
    excerpt: "Major tech companies commit to establishing offices in the upcoming technology park, promising significant employment opportunities.",
    category: "Delhi News",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    author: {
      name: "Amit Verma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    publishedAt: "2024-01-14T14:20:00Z",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Bollywood Star Announces Comeback After 5-Year Hiatus",
    excerpt: "Acclaimed actor reveals details about upcoming biographical drama set to release in summer 2024.",
    category: "Entertainment",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80",
    author: {
      name: "Neha Kapoor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    },
    publishedAt: "2024-01-14T12:00:00Z",
    readTime: "4 min read",
  },
  {
    id: "7",
    title: "India Wins Series Against Australia in Thrilling Final Match",
    excerpt: "Cricket team secures historic victory with last-over finish in Melbourne, marking their third consecutive series win.",
    category: "India",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    author: {
      name: "Vikram Singh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
    publishedAt: "2024-01-14T10:30:00Z",
    readTime: "6 min read",
  },
  {
    id: "8",
    title: "Parliament Passes Landmark Digital Privacy Bill",
    excerpt: "New legislation aims to protect citizen data and regulate tech companies operating in India.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1555374018-13a8994ab246?w=1200&q=80",
    author: {
      name: "Kavita Desai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
    },
    publishedAt: "2024-01-13T18:00:00Z",
    readTime: "8 min read",
  },
  {
    id: "9",
    title: "Sustainable Fashion Week Kicks Off in Mumbai",
    excerpt: "Leading designers showcase eco-friendly collections, emphasizing the importance of sustainable practices in the fashion industry.",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea1f1f57?w=1200&q=80",
    author: {
      name: "Meera Reddy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    },
    publishedAt: "2024-01-13T15:30:00Z",
    readTime: "5 min read",
  },
  {
    id: "10",
    title: "Global Climate Summit: India Commits to Net Zero by 2070",
    excerpt: "Prime Minister reaffirms commitment to renewable energy targets and carbon reduction goals at international conference.",
    category: "World",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1200&q=80",
    author: {
      name: "Arjun Malhotra",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    },
    publishedAt: "2024-01-13T11:00:00Z",
    readTime: "7 min read",
  },
];

export const breakingNews = mockArticles.filter(article => article.isBreaking);
export const featuredArticle = mockArticles[0];
export const editorsPicks = mockArticles.slice(3, 7);
export const latestUpdates = mockArticles.slice(1, 9);
