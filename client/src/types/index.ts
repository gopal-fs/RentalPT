export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  phone?: string;
  bio?: string;
  preferred_locations?: string[];
  preferred_budget_min?: number;
  preferred_budget_max?: number;
  preferred_property_types?: string[];
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  listing_type: 'rent' | 'sell';
  property_type: 'house' | 'villa' | 'land' | 'apartment' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  area_sqft: number;
  location_address: string;
  location_city: string;
  location_state: string;
  location_lat?: number;
  location_lng?: number;
  amenities: string[];
  images: string[];
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  status: 'active' | 'sold' | 'rented' | 'inactive';
  views_count: number;
  created_at: string;
  updated_at: string;
}

export interface SavedProperty {
  id: string;
  user_id: string;
  property_id: string;
  notes?: string;
  created_at: string;
  property?: Property;
}

export interface PropertyComparison {
  id: string;
  user_id: string;
  property_ids: string[];
  created_at: string;
}

export interface UserActivity {
  id: string;
  user_id: string;
  property_id: string;
  activity_type: 'view' | 'click' | 'save' | 'unsave' | 'contact';
  time_spent_seconds?: number;
  created_at: string;
}

export interface SearchHistory {
  id: string;
  user_id: string;
  search_query: string;
  filters: Record<string, any>;
  results_count: number;
  created_at: string;
}

export interface ChatLog {
  id: string;
  user_id?: string;
  session_id: string;
  message: string;
  sender: 'user' | 'assistant';
  metadata?: Record<string, any>;
  created_at: string;
}

export interface Inquiry {
  id: string;
  property_id: string;
  sender_id: string;
  recipient_id: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface PropertyFilters {
  search?: string;
  listingType?: 'rent' | 'sell' | 'all';
  propertyType?: string[];
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  state?: string;
  minArea?: number;
  maxArea?: number;
  amenities?: string[];
}
