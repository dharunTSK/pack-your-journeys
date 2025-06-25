
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Pack Your Bags made our honeymoon absolutely magical! The attention to detail and personalized service exceeded all our expectations. Every moment was perfectly planned.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c01e8f79?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Patel",
      location: "Mumbai, India",
      rating: 5,
      text: "The Golden Triangle tour was incredible! Our guide was knowledgeable, and the accommodations were top-notch. Will definitely book with them again for our next adventure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "From booking to return, everything was seamless. The European tour was well-organized, and we got to experience authentic local culture. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The customer service was outstanding. When we had a flight delay, they immediately arranged alternative accommodations. True professionals who care about their clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      location: "Toronto, Canada",
      rating: 5,
      text: "Best travel experience ever! The itinerary was perfect, balancing sightseeing with relaxation. The memories we made will last a lifetime. Thank you, Pack Your Bags!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers Say
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real travelers who chose to pack their bags with us and 
            created unforgettable memories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            
            <blockquote className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-brand-teal to-brand-blue"
              />
              <div className="text-left">
                <h4 className="font-playfair text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-poppins text-gray-600">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-brand-teal" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-brand-teal" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-brand-teal" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
