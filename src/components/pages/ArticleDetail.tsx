import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { mockArticles } from "@/data/mockArticles";

export default function ArticleDetail() {
  const { id } = useParams();
  
  // Find the article by ID, or use the first article as fallback
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];
  
  // Get related articles from the same category
  const relatedArticles = mockArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4">
            {article.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-900">{article.author.name}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-700 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[500px] object-cover rounded-lg mb-8"
          />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              {article.excerpt}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Highlights</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo.
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
              <li>Consectetur, adipisci velit, sed quia non numquam eius modi</li>
              <li>Tempora incidunt ut labore et dolore magnam aliquam quaerat</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
              occaecati cupiditate non provident.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
              fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Author Bio */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {article.author.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.author.name} is a senior correspondent covering {article.category.toLowerCase()} 
                  for News Segment. With over 10 years of experience in journalism, they have reported 
                  on major events across India and have won several awards for investigative reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
