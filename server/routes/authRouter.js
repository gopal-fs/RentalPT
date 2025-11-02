import express from 'express'
import { getProfile, Login, Register } from '../controllers/authControllers.js'

const authRouter=express.Router()

authRouter.post('/login',Login)
authRouter.post('/register',Register)
authRouter.get('/getProfile',getProfile)


export default authRouter