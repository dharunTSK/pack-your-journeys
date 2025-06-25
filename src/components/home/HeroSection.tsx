
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop",
      title: "Pack Your Bags for the Journey of a Lifetime",
      subtitle: "Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences."
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop",
      title: "Adventure Awaits Around Every Corner",
      subtitle: "From serene mountains to pristine beaches, explore the world's most beautiful destinations with confidence."
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop",
      title: "Create Memories That Last Forever",
      subtitle: "Experience luxury travel with our personalized service and attention to every detail of your journey."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                {slide.title}
              </h1>
              <p className="font-poppins text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-8 py-3 rounded-full font-poppins font-medium text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore Packages
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-poppins font-medium text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Plan Custom Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
