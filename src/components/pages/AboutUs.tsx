import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About News Segment</h1>
          <p className="text-xl md:text-2xl font-light">
            Local Pulse. National Voice.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              News Segment is committed to delivering reliable, accurate, and timely news
              coverage across East and North India. With a special focus on Kolkata, West
              Bengal, and Delhi, we bring you the stories that matter most to your community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principles of journalistic integrity and public service, we
              strive to be the trusted voice that connects local communities with national
              and global events. Our team of dedicated journalists works around the clock
              to ensure you stay informed about the issues that impact your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We verify every fact and source to ensure our reporting is accurate and
                trustworthy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We serve our local communities by highlighting stories that matter to
                everyday people.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of journalism in every story we publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Malhotra",
                role: "Editor-in-Chief",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
              },
              {
                name: "Priya Chatterjee",
                role: "Managing Editor",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
              },
              {
                name: "Amit Kumar",
                role: "Chief Reporter",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
              },
              {
                name: "Neha Sharma",
                role: "Digital Editor",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-600"
                />
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
