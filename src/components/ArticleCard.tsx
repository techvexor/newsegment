import { Article } from "@/types/article";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "compact";
}

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <Link to={`/article/${article.id}`} className="flex gap-4 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-32 h-32 object-cover flex-shrink-0 group-hover:opacity-90 transition-opacity"
          loading="lazy"
        />
        <div className="flex-1 py-2 pr-4">
          <Badge className="bg-red-600 hover:bg-red-700 text-white text-xs mb-2">
            {article.category}
          </Badge>
          <h3 className="font-bold text-sm md:text-base text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
            {article.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={`/article/${article.id}`} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
            loading="lazy"
          />
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700 text-white text-xs">
            {article.category}
          </Badge>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-sm text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
            {article.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
          loading="lazy"
        />
        <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold">
          {article.category}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {article.author.name}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
