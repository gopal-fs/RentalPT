import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MapPin, Bed, Bath, Square, Heart, Share2, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PropertyDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Modern 2BHK Apartment
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">₹25,000/month</p>
                <p className="text-sm text-gray-600">For Rent</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="font-semibold text-gray-800">2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="font-semibold text-gray-800">2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Square className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="font-semibold text-gray-800">1200 sqft</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Beautiful modern apartment with all amenities. Perfect for families looking for
                  a comfortable living space in the heart of Mumbai. The apartment features
                  spacious rooms, modern kitchen, and excellent ventilation.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Power Backup'].map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Owner</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">owner@example.com</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Contact Seller
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
