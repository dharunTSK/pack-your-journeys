
import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const SearchSection = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    departure: "",
    travelers: "2 Adults",
    duration: "7 Days"
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-white py-16 -mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Your Perfect Journey
              </h2>
              <p className="font-poppins text-gray-600 text-lg">
                Search from thousands of destinations and create your dream vacation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Destination */}
              <div className="space-y-2">
                <label className="font-poppins text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                  value={searchData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                />
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <label className="font-poppins text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  Departure Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                  value={searchData.departure}
                  onChange={(e) => handleInputChange("departure", e.target.value)}
                />
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="font-poppins text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-teal" />
                  Travelers
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                  value={searchData.travelers}
                  onChange={(e) => handleInputChange("travelers", e.target.value)}
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults + 1 Child</option>
                  <option>2 Adults + 2 Children</option>
                  <option>3+ Adults</option>
                </select>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="font-poppins text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none font-poppins"
                  value={searchData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                >
                  <option>3-5 Days</option>
                  <option>7 Days</option>
                  <option>10-14 Days</option>
                  <option>15+ Days</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-12 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Search Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
