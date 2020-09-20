const User=require('../models/user')
const bcrypt = require('bcryptjs')
const updateUser=async(req,res)=>{
   
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8)
        let updatedUser=await User.findOneAndUpdate({ email: req.body.email}, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec().catch((e)=>{
            console.log(e)
        })
      
        console.log(req.body.email)
        updatedUser = await User.findOne({email:req.body.email})
     await updatedUser.save()
        io.emit('userupdate',updatedUser)

    
        res.status(200).send({ updatedUser})
       
      
    }catch(e){
        res.status(500).send("User not found or not updated try again")
    }

}

module.exports=updateUser