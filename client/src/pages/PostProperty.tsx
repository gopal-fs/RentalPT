import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const PostPropertyForm = () => {
  const {user,loading}=useAuth()
  const navigate=useNavigate()

  useEffect(()=>{
    if(!loading,!user){
      navigate('/login')
    }
  },[user,loading])

  const initialFormData = {
    title: "",
    description: "",
    price: "",
    listing_type: "Rent",
    property_type: "Apartment",
    bedrooms: "1",
    bathrooms: "1",
    area_sqft: "",
    location_address: "",
    location_city: "",
    location_state: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
    status: "active",
  };
  
  const [formData, setFormData] = useState(initialFormData);

  const [image, setImage] = useState(null);
  const [amenities, setAmenities] = useState(["", "", "", "", ""]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleAmenityChange = (i: number, value: string) => {
    const copy = [...amenities];
    copy[i] = value;
    setAmenities(copy);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

   

    try {
      const dataToSend = new FormData();
      dataToSend.append("user_id",user.user_id);
      Object.entries(formData).forEach(([k, v]) => dataToSend.append(k, v));

      if (image) dataToSend.append("image", image);
      dataToSend.append("amenities", JSON.stringify(amenities.filter((a) => a.trim() !== "")));

      await axios.post(`${url}/post-property`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
         
        },
      });

      alert("✅ Property posted successfully!");
      setFormData(initialFormData)
      setAmenities(["", "", "", "", ""])
    } catch (error) {
      console.error(error);
      alert("❌ Failed to post property!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          🏠 Post Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Image Upload */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm">
            <label className="font-semibold mb-2 block">Exterior Image</label>
            <input 
              type="file" 
              onChange={(e: any) => setImage(e.target.files[0])} 
              className="w-full border p-2 rounded" 
              required 
            />
          </div>

          {/* Basic Info */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold mb-2 block">Property Title</label>
              <input 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">Price (₹)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
  <label className="font-semibold mb-2 block">Area (sqft)</label>
  <input
    type="number"
    name="area_sqft"
    value={formData.area_sqft}
    onChange={handleChange}
    className="border p-2 w-full rounded"
    placeholder="e.g., 1200"
    required
  />
</div>

            <div className="md:col-span-2">
              <label className="font-semibold mb-2 block">Description</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                rows={3} 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">Listing Type</label>
              <select 
                name="listing_type" 
                value={formData.listing_type} 
                onChange={handleChange} 
                className="border p-2 w-full rounded"
              >
                <option>Sale</option>
                <option>Rent</option>
              </select>
            </div>
            <div>
              <label className="font-semibold mb-2 block">Property Type</label>
              <select 
                name="property_type" 
                value={formData.property_type} 
                onChange={handleChange} 
                className="border p-2 w-full rounded"
              >
                <option>Apartment</option>
                <option>Building</option>
                <option>Villa</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="font-semibold mb-2 block">Address</label>
              <input 
                name="location_address" 
                value={formData.location_address} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">City</label>
              <input 
                name="location_city" 
                value={formData.location_city} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">State</label>
              <input 
                name="location_state" 
                value={formData.location_state} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
          </div>

          {/* Owner Contact */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="font-semibold mb-2 block">Contact Name</label>
              <input 
                name="contact_name" 
                value={formData.contact_name} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">Phone</label>
              <input 
                name="contact_phone" 
                value={formData.contact_phone} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label className="font-semibold mb-2 block">Email</label>
              <input 
                name="contact_email" 
                value={formData.contact_email} 
                onChange={handleChange} 
                className="border p-2 w-full rounded" 
                required 
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-sm">
            <label className="font-semibold mb-2 block">Amenities</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {amenities.map((item, i) => (
                <input 
                  key={i} 
                  placeholder={`Amenity ${i + 1}`} 
                  value={item} 
                  onChange={(e) => handleAmenityChange(i, e.target.value)} 
                  className="border p-2 w-full rounded"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPropertyForm;
