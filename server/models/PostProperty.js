import mongoose from "mongoose";

const postProperty= new mongoose.Schema({
    property_id:{type:String,required:true},
    user_id:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    listing_type:{type:String,required:true},
    property_type:{type:String,required:true},
    bedrooms:{type:Number,required:true},
    bathrooms:{type:Number,required:true},
    area_sqft:{type:Number,required:true},
    location_address:{type:String,required:true},
    location_city:{type:String,required:true},
    location_state:{type:String,required:true},
    amenities:{type:Array,required:true},
    image:{type:String,required:true},
    contact_name:{type:String,required:true},
    contact_phone:{type:Number,required:true},
    contact_email:{type:String,required:true},
    status:{type:String,required:true},
    created_at:{type:Date,required:true,default:new Date()}
})

const postPropertyModel=mongoose.models.postProperty || mongoose.model("properties",postProperty)

export default postPropertyModel