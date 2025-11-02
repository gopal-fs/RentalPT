import express from 'express'
import { postProperty ,getProperties, contactUs } from '../controllers/UserControllers.js'
import upload from '../configs/multer.js'
import { authenticateJWTToken } from '../middlewares/verifyToken.js'


const userRouter=express.Router()

userRouter.post('/post-property',upload.single("image"),postProperty)
userRouter.get('/get-property',getProperties)
userRouter.post('/contact',contactUs)

export default userRouter