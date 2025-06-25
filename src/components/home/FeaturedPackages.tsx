
import { Link } from "react-router-dom";
import { Clock, Users, MapPin } from "lucide-react";

const FeaturedPackages = () => {
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
      reviews: 124
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
      reviews: 89
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
      reviews: 156
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
      reviews: 203
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
      reviews: 97
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
      reviews: 78
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Travel Packages
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of extraordinary journeys, crafted to deliver 
            unforgettable experiences at incredible value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
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

        <div className="text-center">
          <Link
            to="/packages"
            className="inline-block bg-white border-2 border-brand-teal text-brand-teal px-8 py-3 rounded-full font-poppins font-semibold hover:bg-brand-teal hover:text-white transition-all duration-300"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
