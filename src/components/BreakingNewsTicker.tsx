import { useEffect, useState } from "react";
import { breakingNews } from "@/data/mockArticles";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function BreakingNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <Badge className="bg-white text-red-600 hover:bg-white font-bold px-3 py-1 flex-shrink-0">
            BREAKING
          </Badge>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
              {breakingNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/article/${news.id}`}
                  className="h-6 flex items-center cursor-pointer hover:underline"
                >
                  <p className="text-sm font-medium truncate">{news.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
