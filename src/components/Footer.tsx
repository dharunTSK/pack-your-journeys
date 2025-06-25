
import { Link } from "react-router-dom";
import { Plane, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-brand-teal" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                  Pack Your Bags
                </span>
                <span className="font-poppins text-xs text-gray-400 -mt-1">
                  Journey of a Lifetime
                </span>
              </div>
            </Link>
            <p className="font-poppins text-gray-300 text-sm">
              Creating unforgettable travel experiences with curated packages, expert guidance, and passionate service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 font-poppins text-sm">
              <li className="text-gray-300">Domestic Tours</li>
              <li className="text-gray-300">International Tours</li>
              <li className="text-gray-300">Customized Packages</li>
              <li className="text-gray-300">Group Bookings</li>
              <li className="text-gray-300">Travel Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 font-poppins text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-teal" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-teal" />
                <span className="text-gray-300">info@packyourbags.com</span>
              </div>
              <div className="text-gray-300">
                123 Travel Street,<br />
                Adventure City, AC 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-poppins text-gray-400 text-sm">
            © 2024 Pack Your Bags. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
