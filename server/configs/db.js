import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    }
    catch(err){
        console.log(`DB Error:${err.message}`)
    }
}

export default connectMongoDB