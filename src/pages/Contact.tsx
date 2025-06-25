
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Let's Plan Your Next Adventure
            </h1>
            <p className="font-poppins text-xl md:text-2xl opacity-90">
              Get in touch with our travel experts and let's create your perfect journey together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                        Your Name *
                      </label>
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
                      <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                        Subject
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Information</option>
                        <option value="custom">Custom Package</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-poppins text-sm font-medium text-gray-700 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins resize-none"
                      placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white py-4 rounded-lg font-poppins font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <p className="font-poppins text-sm text-gray-500 mt-6 text-center">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-8">
                  Have questions about our packages or need help planning your trip? 
                  Our travel experts are here to help you every step of the way.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-brand-teal to-brand-blue rounded-2xl p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8" />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-1">
                        Call Us
                      </h3>
                      <p className="font-poppins">+1 (555) 123-4567</p>
                      <p className="font-poppins text-sm opacity-90">
                        Mon-Fri: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-brand-teal" />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="font-poppins text-gray-700">info@packyourbags.com</p>
                      <p className="font-poppins text-sm text-gray-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-brand-teal" />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-1">
                        Visit Us
                      </h3>
                      <p className="font-poppins text-gray-700">
                        123 Travel Street<br />
                        Adventure City, AC 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-brand-teal" />
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <div className="font-poppins text-gray-700 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                  Follow Our Journey
                </h3>
                <p className="font-poppins text-gray-600 mb-6">
                  Get travel inspiration and updates on our social media channels
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-brand-teal text-white p-3 rounded-full hover:bg-brand-teal-dark transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-brand-teal text-white p-3 rounded-full hover:bg-brand-teal-dark transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-brand-teal text-white p-3 rounded-full hover:bg-brand-teal-dark transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and booking process
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I book a package?",
                answer: "You can book by filling out our inquiry form, calling us, or visiting our office. We'll create a customized itinerary for you."
              },
              {
                question: "Can I customize my trip?",
                answer: "Absolutely! We specialize in creating personalized travel experiences tailored to your preferences and budget."
              },
              {
                question: "What's included in the packages?",
                answer: "Our packages typically include accommodation, transportation, guided tours, and selected meals. Details vary by package."
              },
              {
                question: "Do you provide travel insurance?",
                answer: "We highly recommend travel insurance and can help you arrange comprehensive coverage for your trip."
              },
              {
                question: "What if I need to cancel?",
                answer: "We have flexible cancellation policies. Terms vary by package and booking timing. We'll explain all terms clearly."
              },
              {
                question: "Do you offer group discounts?",
                answer: "Yes, we offer attractive discounts for group bookings. Contact us for special group rates and packages."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="font-poppins text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
