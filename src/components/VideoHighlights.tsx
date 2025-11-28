import { Play } from "lucide-react";

const videoHighlights = [
  {
    id: "1",
    title: "Kolkata Metro Expansion: Ground Report",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    duration: "5:32",
  },
  {
    id: "2",
    title: "Delhi's Air Quality Crisis: Expert Analysis",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    duration: "8:15",
  },
  {
    id: "3",
    title: "India's Economic Growth: What's Next?",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    duration: "6:45",
  },
];

export default function VideoHighlights() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Video Highlights
            </h2>
            <div className="w-20 h-1 bg-red-600"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videoHighlights.map((video) => (
            <div
              key={video.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
