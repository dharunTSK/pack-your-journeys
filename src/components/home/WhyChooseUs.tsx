
import { Users, Shield, Clock, Phone } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Tailored Experiences",
      description: "Every journey is crafted to match your unique preferences and travel style, ensuring personalized adventures that exceed expectations."
    },
    {
      icon: Shield,
      title: "Trusted Travel Experts",
      description: "With years of experience and local knowledge, our expert team provides reliable guidance and insider access to hidden gems."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey, ensuring peace of mind and immediate help whenever you need it."
    },
    {
      icon: Phone,
      title: "Best Price Guarantee",
      description: "We guarantee the most competitive prices without compromising on quality, backed by our price match promise."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Pack Your Bags?
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a travel company - we're your partners in creating 
            extraordinary memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-brand-teal to-brand-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-teal to-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h3>
          <p className="font-poppins text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied travelers who have experienced the world with confidence through our expertly crafted journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-teal px-8 py-3 rounded-full font-poppins font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-poppins font-semibold hover:bg-white hover:text-brand-teal transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
