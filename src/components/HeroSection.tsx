import { featuredArticle } from "@/data/mockArticles";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const article = featuredArticle;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <Link to={`/article/${article.id}`} className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold">
              {article.category}
            </Badge>
          </Link>

          {/* Content */}
          <div className="space-y-4">
            <Badge className="bg-red-600 hover:bg-red-700 text-white">
              FEATURED STORY
            </Badge>
            <Link to={`/article/${article.id}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hover:text-red-600 transition-colors cursor-pointer">
                {article.title}
              </h2>
            </Link>
            <p className="text-lg text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <Link to={`/article/${article.id}`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors">
                Read Full Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
