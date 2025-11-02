import mongoose from "mongoose";


const Register=new mongoose.Schema({
    user_id:{type:String,required:true,unique:true},
    user_name:{type:String,required:true},
    user_email:{type:String,required:true,unique:true},
    user_password:{type:String,required:true},
    user_favourites:{type:Array,default:[]}
},{minimize:false})

const RegisterModel=mongoose.models.register|| mongoose.model('register',Register)
export default RegisterModel