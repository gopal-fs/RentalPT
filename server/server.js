import express from 'express'
import jwt from 'jsonwebtoken'
import authRouter from './routes/authRouter.js'
import cors from 'cors'
import connectMongoDB from './configs/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'

dotenv.config()


const app=express()
app.use(express.json())
app.use(cors())


await connectMongoDB()

app.use('/api',authRouter)
app.use('/api',userRouter)

app.listen(3000,()=>{
    console.log(`Server Running on Port 3000`)
})