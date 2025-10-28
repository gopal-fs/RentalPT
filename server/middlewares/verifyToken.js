import jwt from 'jsonwebtoken'

export const authenticateJWTToken=async(req,res,next)=>{
    try{
        let jwtToken;
        const authHeaders=req.headers["authorization"]
        if(authHeaders===undefined) return res.status(400).send('Invalid JWT Token')
        jwtToken=authHeaders.split(" ")[1]
        if(!jwtToken) return res.status(400).send('JWT Token Not Found')
            const verifyToken= await jwt.verify(jwtToken,process.env.SECRECT_KEY,(err,payload)=>{
            if(err) return res.status(400).send('Invalid JWT Token')
            req.payload=payload
        console.log(payload)
            next()
            })
    }
    catch(err){
        console.log(err)
    }
    
}