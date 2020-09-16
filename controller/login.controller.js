const User=require("../models/user")
const login=async (req,res)=>{
    
        try {
                const user = await User.findByCredentials(req.body.email, req.body.password)
                if(user){
                    const token = await user.generateAuthToken()
                    res.status(200).send( { user, token })
              
                }
                res.status(400).send()
               
            }catch (e) {
                res.status(400).send()
            }

}





module.exports=login