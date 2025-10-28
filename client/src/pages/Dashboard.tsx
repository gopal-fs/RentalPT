import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'

import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';

const mockProperties: Property[] = [
  {
    id: '1',
    user_id: '1',
    title: 'Modern 2BHK Apartment in Mumbai',
    description: 'Beautiful apartment with modern amenities',
    price: 25000,
    listing_type: 'rent',
    property_type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area_sqft: 1200,
    location_address: '123 Main St',
    location_city: 'Mumbai',
    location_state: 'Maharashtra',
    amenities: ['Parking', 'Gym', 'Swimming Pool'],
    images: ['https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'],
    contact_name: 'John Doe',
    contact_phone: '9876543210',
    contact_email: 'john@example.com',
    status: 'active',
    views_count: 145,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    user_id: '1',
    title: 'Spacious Villa with Garden',
    description: 'Luxury villa with beautiful garden and modern interiors',
    price: 8500000,
    listing_type: 'sell',
    property_type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area_sqft: 3500,
    location_address: '456 Oak Avenue',
    location_city: 'Pune',
    location_state: 'Maharashtra',
    amenities: ['Garden', 'Parking', 'Security'],
    images: ['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'],
    contact_name: 'Jane Smith',
    contact_phone: '9876543211',
    contact_email: 'jane@example.com',
    status: 'active',
    views_count: 289,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    user_id: '1',
    title: 'Cozy 1BHK near IT Park',
    description: 'Perfect for working professionals',
    price: 15000,
    listing_type: 'rent',
    property_type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    area_sqft: 650,
    location_address: '789 Tech Plaza',
    location_city: 'Bangalore',
    location_state: 'Karnataka',
    amenities: ['Parking', 'Power Backup'],
    images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'],
    contact_name: 'Robert Johnson',
    contact_phone: '9876543212',
    contact_email: 'robert@example.com',
    status: 'active',
    views_count: 98,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    user_id: '1',
    title: 'Family House with Parking',
    description: 'Spacious house ideal for families',
    price: 6200000,
    listing_type: 'sell',
    property_type: 'house',
    bedrooms: 3,
    bathrooms: 2,
    area_sqft: 2200,
    location_address: '321 Green Street',
    location_city: 'Delhi',
    location_state: 'Delhi',
    amenities: ['Parking', 'Garden', 'Security'],
    images: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'],
    contact_name: 'Sarah Williams',
    contact_phone: '9876543213',
    contact_email: 'sarah@example.com',
    status: 'active',
    views_count: 176,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    user_id: '1',
    title: 'Commercial Space for Rent',
    description: 'Prime location commercial property',
    price: 45000,
    listing_type: 'rent',
    property_type: 'commercial',
    bedrooms: 0,
    bathrooms: 2,
    area_sqft: 1800,
    location_address: '555 Business District',
    location_city: 'Mumbai',
    location_state: 'Maharashtra',
    amenities: ['Parking', 'Lift', 'Power Backup'],
    images: ['https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg'],
    contact_name: 'Michael Brown',
    contact_phone: '9876543214',
    contact_email: 'michael@example.com',
    status: 'active',
    views_count: 234,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    user_id: '1',
    title: 'Luxury Penthouse with City View',
    description: 'Premium penthouse with stunning views',
    price: 12500000,
    listing_type: 'sell',
    property_type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    area_sqft: 2800,
    location_address: '888 Skyline Tower',
    location_city: 'Mumbai',
    location_state: 'Maharashtra',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Parking'],
    images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'],
    contact_name: 'Emily Davis',
    contact_phone: '9876543215',
    contact_email: 'emily@example.com',
    status: 'active',
    views_count: 412,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProperties(mockProperties);
      setLoading(false);
    }, 500);
  }, []);

  const handleSaveProperty = (propertyId: string) => {
    console.log('Save property:', propertyId);
  };

  const call = async () => {
    const formData = new FormData();
  
    // ✅ append all text fields
    formData.append("user_id", "d3a48d17-03d5-4d89-9e3d-6ba31586c652");
    formData.append("title", "Modern 2BHK Apartment in Mumbai");
    formData.append("description", "Beautiful apartment with modern amenities");
    formData.append("price", 25000);
    formData.append("listing_type", "rent");
    formData.append("property_type", "apartment");
    formData.append("bedrooms", 2);
    formData.append("bathrooms", 2);
    formData.append("area_sqft", 1200);
    formData.append("location_address", "123 Main St");
    formData.append("location_city", "Mumbai");
    formData.append("location_state", "Maharashtra");
    formData.append("contact_name", "John Doe");
    formData.append("contact_phone", 9876543210);
    formData.append("contact_email", "john@example.com");
    formData.append("status", "active");
  
    // ✅ File from input
    const fileInput = document.getElementById("file");
    formData.append("image", fileInput.files[0]);  // ← key name must match multer
  
    const result = await axios.post(
      "http://localhost:3000/api/post-property",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
  
    console.log(result.data);
  };
  

  const [showFilters,setShowFilters]=useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onFilterClick={() => setShowFilters(!showFilters)} />

      <input type='file' id='file' />
      <button onClick={call}>send</button>
      {showFilters && (
            <div className="max-w-7xl mx-auto mt-4 p-4 bg-slate-50 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select
                  
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                >
                  <option value="all">All</option>
                  <option value="rent">For Rent</option>
                  <option value="sell">For Sale</option>
                </select>
              </div>

              

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Min Bedrooms</label>
                <select
                  
                 
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                >
                  <option value="all">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Min Price</label>
                <input
                  type="number"
                  
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Max Price</label>
                <input
                  type="number"
                  
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <select
                  
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                >
                  <option value="west">West Godavari</option>
                  <option value="east">East Godavari</option>
                  <option value="krishna">Krishna District</option>
                </select>
              </div>
            </div>
          )}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Recent Listings</h1>
            <p className="text-gray-600 mt-1">Discover your perfect home</p>
          </div>
          <Link to="/post-property">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg transition"
            >
              <Plus className="w-5 h-5" />
              <span>Post Property</span>
            </motion.button>
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4 space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : properties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Plus className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">Be the first to list a property</p>
            <Link to="/post-property">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Post Your Property
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSave={handleSaveProperty}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
