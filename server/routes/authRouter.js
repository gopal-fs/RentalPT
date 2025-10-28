import express from 'express'
import { Login, Register } from '../controllers/authControllers.js'

const authRouter=express.Router()

authRouter.post('/login',Login)
authRouter.post('/register',Register)


export default authRouter