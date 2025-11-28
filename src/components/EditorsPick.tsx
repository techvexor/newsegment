import { editorsPicks } from "@/data/mockArticles";
import ArticleCard from "@/components/ArticleCard";

export default function EditorsPick() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Editor's Pick
            </h2>
            <div className="w-20 h-1 bg-red-600"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorsPicks.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
