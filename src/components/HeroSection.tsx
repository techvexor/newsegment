import { featuredArticle } from "@/data/mockArticles";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Eye, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TRENDING_CHANNELS = [
  { name: "CNN", count: "2.4M", logo: "https://api.dicebear.com/7.x/initials/svg?seed=CNN&backgroundColor=c00" },
  { name: "BBC", count: "1.8M", logo: "https://api.dicebear.com/7.x/initials/svg?seed=BBC&backgroundColor=000" },
  { name: "FOX", count: "1.5M", logo: "https://api.dicebear.com/7.x/initials/svg?seed=FOX&backgroundColor=003366" },
];

export default function HeroSection() {
  const article = featuredArticle;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Trending Channels Banner */}
        <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Trending News Channels</h3>
                <p className="text-xs text-gray-500">Most viewed today</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {TRENDING_CHANNELS.map((channel) => (
                <button
                  key={channel.name}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-red-50 rounded-lg transition-all hover:shadow-md group"
                >
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-8 h-8 rounded"
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover:text-red-600">
                      {channel.name}
                    </p>
                    <p className="text-xs text-gray-500">{channel.count} views</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm px-4 py-1.5 animate-pulse">
                🔴 BREAKING NEWS
              </Badge>
              <Badge variant="outline" className="font-semibold">
                FEATURED STORY
              </Badge>
            </div>

            <Link to={`/article/${article.id}`} className="block relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <Badge className="bg-red-600 hover:bg-red-700 text-white font-bold mb-4">
                  {article.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 group-hover:text-red-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <div>
                        <p className="font-bold">{article.author.name}</p>
                        <p className="text-xs text-gray-300">Senior Reporter</p>
                      </div>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link to={`/article/${article.id}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  Read Full Story →
                </Button>
              </Link>
              <Button variant="outline" size="icon" className="h-12 w-12 hover:bg-red-50 hover:text-red-600 hover:border-red-600">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 hover:bg-red-50 hover:text-red-600 hover:border-red-600">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sidebar - Channel Showcase */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Live Channels</h3>
                <Badge variant="destructive" className="animate-pulse">
                  🔴 LIVE
                </Badge>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "CNN Breaking", viewers: "45.2K", topic: "World Politics", logo: "https://api.dicebear.com/7.x/initials/svg?seed=CNN&backgroundColor=c00" },
                  { name: "BBC World", viewers: "38.1K", topic: "Global News", logo: "https://api.dicebear.com/7.x/initials/svg?seed=BBC&backgroundColor=000" },
                  { name: "FOX News", viewers: "32.5K", topic: "US Politics", logo: "https://api.dicebear.com/7.x/initials/svg?seed=FOX&backgroundColor=003366" },
                  { name: "NBC Today", viewers: "28.9K", topic: "Morning News", logo: "https://api.dicebear.com/7.x/initials/svg?seed=NBC&backgroundColor=f37021" },
                ].map((channel, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-all group border border-transparent hover:border-red-200"
                  >
                    <img
                      src={channel.logo}
                      alt={channel.name}
                      className="w-12 h-12 rounded-lg shadow-sm"
                    />
                    <div className="flex-1 text-left">
                      <p className="font-bold text-sm text-gray-900 group-hover:text-red-600">
                        {channel.name}
                      </p>
                      <p className="text-xs text-gray-500">{channel.topic}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-red-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-bold">{channel.viewers}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4 hover:bg-red-50 hover:text-red-600 hover:border-red-600 font-semibold">
                View All Channels
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Today's Coverage</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Channels</span>
                  <span className="text-2xl font-bold">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Live Viewers</span>
                  <span className="text-2xl font-bold">2.4M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Breaking Stories</span>
                  <span className="text-2xl font-bold">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
