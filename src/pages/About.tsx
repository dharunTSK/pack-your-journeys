
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "5", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616c01e8f79?w=300&h=300&fit=crop&crop=face",
      description: "Travel enthusiast with 15+ years in the industry"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in logistics and customer experience"
    },
    {
      name: "Emma Williams",
      role: "Travel Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Specialist in European and Asian destinations"
    },
    {
      name: "Rajesh Patel",
      role: "Cultural Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Local expert and cultural ambassador"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-teal to-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Your Travel Dreams, Our Expertise
            </h1>
            <p className="font-poppins text-xl md:text-2xl opacity-90 leading-relaxed">
              At Pack Your Bags, we believe travel is more than just sightseeing — it's about creating 
              unforgettable moments. With curated packages, insider tips, and a deep passion for exploration, 
              we help you discover the world in comfort and style.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-brand-teal mb-2">
                    {stat.number}
                  </div>
                  <div className="font-poppins text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 font-poppins text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2019 with a simple yet powerful vision: to make extraordinary travel 
                  experiences accessible to everyone. What started as a small team of travel enthusiasts 
                  has grown into a trusted partner for hundreds of adventurers worldwide.
                </p>
                <p>
                  We understand that every traveler is unique, with different dreams, budgets, and comfort levels. 
                  That's why we don't believe in one-size-fits-all packages. Instead, we craft personalized 
                  journeys that reflect your individual style and preferences.
                </p>
                <p>
                  From bustling metropolitan cities to serene mountain retreats, from cultural immersions 
                  to adventure expeditions, we've helped our clients create memories that last a lifetime. 
                  Our commitment to excellence and attention to detail has earned us the trust of travelers 
                  from around the globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=500&fit=crop"
                alt="Travel Adventure"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-brand-teal to-brand-blue rounded-2xl p-6 text-white">
                <div className="font-playfair text-2xl font-bold">5 Years</div>
                <div className="font-poppins text-sm">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape every journey we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We're genuinely passionate about travel and sharing the world's wonders with you."
              },
              {
                icon: Users,
                title: "Personal Touch",
                description: "Every interaction is personal, every journey is tailored to your unique preferences."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every detail, from planning to execution."
              },
              {
                icon: Globe,
                title: "Exploration",
                description: "We encourage authentic exploration and meaningful cultural connections."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-r from-brand-teal to-brand-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-poppins text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of travel experts is dedicated to making your journey extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="font-poppins text-brand-teal font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="font-poppins text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="font-poppins text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let our expert team help you plan the perfect adventure. Contact us today 
            and let's turn your travel dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-teal px-8 py-3 rounded-full font-poppins font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-poppins font-semibold hover:bg-white hover:text-brand-teal transition-all duration-300">
              View Our Packages
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
