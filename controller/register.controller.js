const User=require('../models/user')
const register=async(req,res)=>{
   
    try{
        const checkUser=await User.findOne({email:req.body.email})
        if(checkUser){
            res.status(400).send("Email Alredy Exits Please use different Email to register")
        }
        const user = await new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
       
    }catch(e){
        res.status(400).send(e)
    }

}

module.exports=register