import { latestUpdates } from "@/data/mockArticles";
import ArticleCard from "@/components/ArticleCard";

export default function LatestUpdates() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Updates
            </h2>
            <div className="w-20 h-1 bg-red-600"></div>
          </div>
          <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {latestUpdates.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="horizontal"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
