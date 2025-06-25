
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in the Himalayas You Must Visit",
      excerpt: "Discover lesser-known destinations in the Himalayas that offer breathtaking views and authentic cultural experiences away from the crowds.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Destinations"
    },
    {
      id: 2,
      title: "Essential Packing Tips for Your Golden Triangle Tour",
      excerpt: "Learn what to pack for your Delhi-Agra-Jaipur adventure, including weather considerations, cultural dress codes, and travel essentials.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      author: "Rajesh Patel",
      date: "December 12, 2024",
      readTime: "3 min read",
      category: "Travel Tips"
    },
    {
      id: 3,
      title: "The Ultimate Guide to European Train Travel",
      excerpt: "Navigate Europe like a pro with our comprehensive guide to train travel, including tips for booking, routes, and making the most of your journey.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      author: "Emma Williams",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Travel Guide"
    },
    {
      id: 4,
      title: "Beach Bliss: Top 5 Coastal Destinations in India",
      excerpt: "From the pristine beaches of Goa to the backwaters of Kerala, explore India's most beautiful coastal destinations for your next beach vacation.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "December 8, 2024",
      readTime: "4 min read",
      category: "Destinations"
    },
    {
      id: 5,
      title: "Sustainable Travel: How to Be an Eco-Conscious Tourist",
      excerpt: "Learn how to minimize your environmental impact while traveling and support local communities through responsible tourism practices.",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      author: "Lisa Thompson",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Sustainable Travel"
    },
    {
      id: 6,
      title: "Desert Adventures: Exploring Rajasthan's Royal Heritage",
      excerpt: "Journey through the golden sands and royal palaces of Rajasthan, where every corner tells a story of maharajas and ancient traditions.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      author: "Arjun Singh",
      date: "December 2, 2024",
      readTime: "5 min read",
      category: "Culture"
    }
  ];

  const categories = ["All", "Destinations", "Travel Tips", "Travel Guide", "Sustainable Travel", "Culture"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Travel Tips, Inspiration & Stories
            </h1>
            <p className="font-poppins text-xl md:text-2xl opacity-90">
              Discover insider tips, travel inspiration, and stories from fellow adventurers to help you plan your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-gray-100 text-brand-teal px-3 py-1 rounded-full text-sm font-poppins font-medium mb-4 w-fit">
                  {blogPosts[0].category}
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="font-poppins text-gray-600 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="font-poppins">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-poppins">{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-poppins">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-6 py-3 rounded-lg font-poppins font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-fit">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-poppins font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-brand-teal hover:text-white border border-gray-200 hover:border-brand-teal"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span className="font-poppins">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span className="font-poppins">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span className="font-poppins">{post.date}</span>
                    </div>
                    <button className="text-brand-teal font-poppins font-medium text-sm hover:text-brand-teal-dark transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Travel Insights
            </h2>
            <p className="font-poppins text-lg mb-8 opacity-90">
              Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive deals delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 font-poppins outline-none"
              />
              <button className="bg-white text-brand-teal px-8 py-3 rounded-full font-poppins font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="font-poppins text-sm mt-4 opacity-75">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
