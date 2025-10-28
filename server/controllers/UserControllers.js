import cloudinary from "../configs/cloudinary.js";
import postPropertyModel from "../models/PostProperty.js";
import {v4 as uuid} from 'uuid'
import nodemailer from 'nodemailer'


export const postProperty=async(req,res)=>{
    try{
        const {user_id,title,description,price,listing_type,property_type,bedrooms,bathrooms,area_sqft,location_address,location_city,location_state,amenities,contact_name,contact_phone,contact_email,status}=req.body
        console.log(req.file)

        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              { folder: "images" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            );
            stream.end(req.file.buffer);
          });

          const addProperty=await new postPropertyModel({property_id:uuid(),user_id,title,description,price,listing_type,property_type,bedrooms,bathrooms,area_sqft,location_address,location_city,location_state,amenities,image:result.secure_url,contact_name,contact_phone,contact_email,status,created_at:new Date()})
          await addProperty.save()

          return res.status(200).send({message:'Your Property',data:addProperty})
    }
    catch(err){
        console.log(`DB Error:${err.message}`)
    }
    
     
}

export const getProperties=async(req,res)=>{
    try{
        const data=await postPropertyModel.find({})
        console.log(data)
        return res.status(200).send(data)

    }
    catch(err){
        console.log(err)
    }
   
}

export const contactUs = async (req, res) => {
    try {
      const { email, name, message } = req.body;
      
  
   
      if (!email || !name || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
  
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, 
        replyTo: email,
        subject: `Contact Submission Form From ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Comments:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This email was sent from the RentalPT contact form</em></p>
        `,
        
      };
  
      await transporter.sendMail(mailOptions);
  
    
      
  
      return res.status(200).json({
        message: 'Your message has been sent successfully!'
      });
  
    } catch (err) {
      console.error('Contact form error:', err);
      return res.status(500).json({
        message: 'Failed to send message. Please try again later.'
      });
    }
  };