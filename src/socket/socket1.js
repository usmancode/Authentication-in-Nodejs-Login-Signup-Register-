const User=require("../../models/user")
module.exports = (io, socket) => {
    //*************************************************SOCKETS***************************************
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'A new user has joined!')
  
    socket.on('sendMessage', async(email) => {
      
      
      const user=await User.findOne({email})
  
        io.emit('message',user.role)
    })
  
    socket.on('userEmail',async(email)=>{
     
      const registerUser=await User.find({})
      console.log(registerUser)
      io.emit('message',registerUser)
    })
  
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })
    socket.on('userRegister',async(email)=>{
     
      const registerUser=await User.findOne({email})
      console.log(registerUser)
      io.emit('userRegister',registerUser)
      io.emit('message',registerUser)
    })
    
}