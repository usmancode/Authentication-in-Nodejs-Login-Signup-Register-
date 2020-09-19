const User=require('../models/user')


const showUsers= async(req,res)=>{
  
    const allUsers=await User.find({})

    res.send(allUsers)

}


module.exports=showUsers