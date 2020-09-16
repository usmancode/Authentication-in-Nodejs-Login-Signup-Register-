const User=require("../models/user")

const logout=async (req,res)=>{
    
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        
        await req.user.save()

        res.status(200).send("Sucessfully Logout")
    } catch (e) {
        res.status(500).send()
    }
      
}





module.exports=logout