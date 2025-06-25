
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Plane className="w-12 h-12 text-white transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Plane className="w-8 h-8 text-white transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Plane className="w-10 h-10 text-white transform rotate-90" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
          <Plane className="w-6 h-6 text-white transform -rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Plan Your Trip Now
          </h2>
          <p className="font-poppins text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait for someday. Your dream destination is calling, and we're here to make it happen. 
            Start planning your perfect getaway today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="bg-white text-brand-teal px-10 py-4 rounded-full font-poppins font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-fit"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/packages"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-poppins font-bold text-lg hover:bg-white hover:text-brand-teal transition-all duration-300 min-w-fit"
            >
              Browse Packages
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="font-poppins opacity-90">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="font-poppins opacity-90">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="font-poppins opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
