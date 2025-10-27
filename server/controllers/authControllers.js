import RegisterModel from "../models/RegisterSchema.js"
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'


export const Login=async(req,res)=>{
    res.status(200).send('Login Succesfull')

}

export const Register=async(req,res)=>{
    try{
        const {user_name,user_email,user_password,user_location}=req.body
        if(!user_email || !user_name || !user_password || !user_location) return res.status(400).send('Fields Required')
        const findUser= await RegisterModel.findOne({user_email})
        if(findUser) return res.status(400).send('Email Already Exists')
        const hashedPassword=await bcrypt.hash(user_password,12)
        const addUser=await new RegisterModel({user_id:uuid(),user_name,user_email,user_password:hashedPassword,user_location})
        addUser.save()
        return res.status(200).send('Registration Succesfull!')
    }
    catch(err){
        console.log(`Error : ${err.message}`)
        return res.status(500).send('Failed To Register')
        
    }
}