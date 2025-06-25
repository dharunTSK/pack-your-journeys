
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Users, MapPin, Check, X, Calendar, Mail, Phone, User } from "lucide-react";

const PackageDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "2",
    message: ""
  });

  // Mock package data
  const packageData = {
    id: 1,
    title: "Golden Triangle Adventure",
    location: "Delhi, Agra, Jaipur",
    duration: "7 Days",
    groupSize: "2-15 People",
    price: "$899",
    originalPrice: "$1,199",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=500&fit=crop"
    ],
    description: "Embark on an extraordinary journey through India's most iconic destinations. The Golden Triangle Adventure takes you through the bustling streets of Delhi, the romantic city of Agra home to the magnificent Taj Mahal, and the royal city of Jaipur with its stunning palaces and vibrant culture.",
    highlights: [
      "Visit the world-famous Taj Mahal at sunrise",
      "Explore the historic Red Fort in Delhi",
      "Discover the Pink City of Jaipur",
      "Experience authentic Indian cuisine",
      "Stay in heritage hotels",
      "Professional English-speaking guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Arrival at Delhi airport, transfer to hotel. Evening city tour including India Gate and Connaught Place.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Full day exploring Old Delhi (Red Fort, Jama Masjid) and New Delhi (Qutub Minar, Humayun's Tomb).",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Drive to Agra (4 hours). Afternoon visit to Agra Fort and Mehtab Bagh for sunset views of Taj Mahal.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 4,
        title: "Taj Mahal & Jaipur",
        description: "Early morning Taj Mahal visit at sunrise. Drive to Jaipur (5 hours) with lunch en route.",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Jaipur Exploration",
        description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening at local bazaars.",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Jaipur to Delhi",
        description: "Morning free time for shopping. Drive back to Delhi (5 hours). Farewell dinner.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to airport for departure. End of memorable Golden Triangle journey.",
        meals: "Breakfast"
      }
    ],
    inclusions: [
      "6 nights accommodation in 4-star hotels",
      "Daily breakfast and selected meals",
      "Private air-conditioned transportation",
      "English-speaking tour guide",
      "All monument entrance fees",
      "Airport transfers",
      "Welcome drink on arrival"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Camera fees at monuments",
      "Any items not mentioned in inclusions"
    ]
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking enquiry submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Image Carousel */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={packageData.images[currentImageIndex]}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div className="max-w-4xl">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
                {packageData.title}
              </h1>
              <div className="flex items-center justify-center text-lg mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-poppins">{packageData.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="font-poppins">{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="font-poppins">{packageData.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-poppins">⭐ {packageData.rating} ({packageData.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {packageData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Package Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                  Package Overview
                </h2>
                <p className="font-poppins text-gray-700 text-lg leading-relaxed mb-6">
                  {packageData.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                      Package Highlights
                    </h3>
                    <ul className="space-y-2">
                      {packageData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                          <span className="font-poppins text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-brand-teal to-brand-blue rounded-xl p-6 text-white">
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      Starting from
                    </h3>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="font-playfair text-4xl font-bold">
                        {packageData.price}
                      </span>
                      <span className="font-poppins text-lg line-through opacity-75">
                        {packageData.originalPrice}
                      </span>
                    </div>
                    <p className="font-poppins text-sm opacity-90">per person (twin sharing)</p>
                  </div>
                </div>
              </div>

              {/* Detailed Itinerary */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                  Detailed Itinerary
                </h2>
                <div className="space-y-6">
                  {packageData.itinerary.map((day, index) => (
                    <div key={day.day} className="border-l-4 border-brand-teal pl-6 pb-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-gray-900">
                          Day {day.day}: {day.title}
                        </h3>
                      </div>
                      <p className="font-poppins text-gray-700 mb-2">
                        {day.description}
                      </p>
                      <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-poppins">
                        Meals: {day.meals}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-playfair text-2xl font-bold text-green-600 mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {packageData.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-poppins text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-playfair text-2xl font-bold text-red-600 mb-6">
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {packageData.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-poppins text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                  Book This Package
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="w-4 h-4 text-brand-teal" />
                      <label className="font-poppins text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                    </div>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="w-4 h-4 text-brand-teal" />
                      <label className="font-poppins text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone className="w-4 h-4 text-brand-teal" />
                      <label className="font-poppins text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                    </div>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-brand-teal" />
                      <label className="font-poppins text-sm font-medium text-gray-700">
                        Preferred Travel Date
                      </label>
                    </div>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                      value={formData.travelDate}
                      onChange={(e) => handleInputChange("travelDate", e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-brand-teal" />
                      <label className="font-poppins text-sm font-medium text-gray-700">
                        Number of Travelers
                      </label>
                    </div>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                      value={formData.travelers}
                      onChange={(e) => handleInputChange("travelers", e.target.value)}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                      Special Requests / Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins resize-none"
                      placeholder="Any special requests or questions?"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white py-4 rounded-lg font-poppins font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Send Booking Enquiry
                  </button>
                </form>

                <p className="font-poppins text-xs text-gray-500 mt-4 text-center">
                  * We'll get back to you within 24 hours with detailed information and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackageDetail;
