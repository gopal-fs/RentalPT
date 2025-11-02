import RegisterModel from "../models/RegisterSchema.js"
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const Login=async(req,res)=>{
    try{
        const {user_email,user_password}=req.body
        const findUser=await RegisterModel.findOne({user_email})
        if(!findUser) return res.status(500).send('User Does Not Exist!')
        const payload={id:findUser.user_id,user_email}
        const checkPassword=await bcrypt.compare(user_password,findUser.user_password)
        if(checkPassword){
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '4d' });
            return res.status(200).send({message:'Login Succesfull',token})
        }
        return res.status(400).send('Password Incorrect')
    }
    catch(err){
        console.log(`Error:${err.message}`)
        return res.status(400).send('Unable to Login')
    }

}

export const Register=async(req,res)=>{
    try{
        const {user_name,user_email,user_password}=req.body
        if(!user_email || !user_name || !user_password ) return res.status(400).send('Fields Required')
        const findUser= await RegisterModel.findOne({user_email})
        if(findUser) return res.status(400).send('Email Already Exists')
        const hashedPassword=await bcrypt.hash(user_password,12)
        const addUser=await new RegisterModel({user_id:uuid(),user_name,user_email,user_password:hashedPassword})
        addUser.save()
        return res.status(200).send('Registration Succesfull!')
    }
    catch(err){
        console.log(`Error : ${err.message}`)
        return res.status(500).send('Failed To Register')
        
    }
}

export const getProfile = async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
      }
  
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
  
      // ✅ Use decoded.id since you stored user_id as "id" in token
      const user = await RegisterModel.findOne({ user_id: decoded.id }).select('-user_password');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('getProfile error:', error);
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
  