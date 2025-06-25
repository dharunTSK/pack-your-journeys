
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Filter } from "lucide-react";

const TourPackages = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");

  const packages = [
    {
      id: 1,
      title: "Golden Triangle Adventure",
      location: "Delhi, Agra, Jaipur",
      duration: "7 Days",
      groupSize: "2-15 People",
      price: "$899",
      originalPrice: "$1,199",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      category: "Domestic",
      rating: 4.8,
      reviews: 124,
      highlights: ["Taj Mahal Visit", "Palace Tours", "Cultural Experiences"]
    },
    {
      id: 2,
      title: "Himalayan Paradise",
      location: "Manali, Shimla, Dharamshala",
      duration: "10 Days",
      groupSize: "2-12 People",
      price: "$1,299",
      originalPrice: "$1,599",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      category: "Domestic",
      rating: 4.9,
      reviews: 89,
      highlights: ["Mountain Views", "Adventure Sports", "Local Cuisine"]
    },
    {
      id: 3,
      title: "European Grand Tour",
      location: "Paris, Rome, Barcelona",
      duration: "14 Days",
      groupSize: "2-20 People",
      price: "$2,899",
      originalPrice: "$3,499",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      category: "International",
      rating: 4.7,
      reviews: 156,
      highlights: ["Historic Sites", "Art Museums", "Fine Dining"]
    },
    {
      id: 4,
      title: "Tropical Beach Escape",
      location: "Goa, Kerala Backwaters",
      duration: "8 Days",
      groupSize: "2-10 People",
      price: "$1,099",
      originalPrice: "$1,399",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      category: "Domestic",
      rating: 4.6,
      reviews: 203,
      highlights: ["Beach Resorts", "Backwater Cruise", "Spa Treatments"]
    },
    {
      id: 5,
      title: "Asian Cultural Journey",
      location: "Thailand, Vietnam, Cambodia",
      duration: "12 Days",
      groupSize: "2-16 People",
      price: "$1,899",
      originalPrice: "$2,299",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      category: "International",
      rating: 4.8,
      reviews: 97,
      highlights: ["Temple Tours", "Street Food", "Cultural Shows"]
    },
    {
      id: 6,
      title: "Desert Safari Adventure",
      location: "Rajasthan Circuit",
      duration: "9 Days",
      groupSize: "2-14 People",
      price: "$1,199",
      originalPrice: "$1,499",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      category: "Domestic",
      rating: 4.7,
      reviews: 78,
      highlights: ["Camel Safari", "Desert Camping", "Royal Palaces"]
    }
  ];

  const filteredPackages = packages.filter(pkg => 
    activeFilter === "All" || pkg.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Tour Packages
            </h1>
            <p className="font-poppins text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Discover our carefully curated collection of travel experiences designed to create unforgettable memories
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "Domestic", "International"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-poppins font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-brand-teal text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-brand-teal to-brand-blue text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {pkg.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    ⭐ {pkg.rating} ({pkg.reviews})
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-brand-teal" />
                    <span className="font-poppins text-sm">{pkg.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-brand-teal" />
                      <span className="font-poppins">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-brand-teal" />
                      <span className="font-poppins">{pkg.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-poppins">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-playfair text-2xl font-bold text-brand-teal">
                        {pkg.price}
                      </span>
                      <span className="font-poppins text-sm text-gray-500 line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <span className="font-poppins text-sm text-gray-600">per person</span>
                  </div>
                  
                  <Link
                    to={`/package/${pkg.id}`}
                    className="block text-center bg-gradient-to-r from-brand-teal to-brand-blue text-white py-3 rounded-lg font-poppins font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourPackages;
