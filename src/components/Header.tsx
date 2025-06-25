
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-brand-teal animate-float" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                  Pack Your Bags
                </span>
                <span className="font-poppins text-xs text-gray-600 -mt-1">
                  Journey of a Lifetime
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300">
              Home
            </Link>
            <Link to="/packages" className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300">
              Tour Packages
            </Link>
            <Link to="/about" className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300">
              About Us
            </Link>
            <Link to="/blog" className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-6 py-2 rounded-full font-poppins font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-brand-teal transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/packages"
                className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300"
                onClick={toggleMenu}
              >
                Tour Packages
              </Link>
              <Link
                to="/about"
                className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="font-poppins text-gray-700 hover:text-brand-teal transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-6 py-2 rounded-full font-poppins font-medium text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={toggleMenu}
              >
                Plan Your Trip
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
