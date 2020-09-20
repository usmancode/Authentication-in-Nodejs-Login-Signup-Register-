const express = require("express");
const app = express();
const path=require('path')
const http = require('http')
const socketio = require('socket.io')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const register = require("../controller/register.controller");
const login = require("../controller/login.controller");
const logout=require("../controller/logout.controller");
const showUsers=require("../controller/showUsers.controller")
const updateUser=require("../controller/update.controller")
const auth=require("../middleware/auth")
const docs=require("../docs/index")
const User=require("../models/user")

const autocannon = require('autocannon')

const sock1 = require("./socket/socket1")


const server = http.createServer(app)
global.io = socketio(server)



mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/api-docs', docs)

app.use('/web', express.static(path.join(__dirname, 'public')))


//**urls */

app.post("/auth/login",login);
app.post("/auth/register",auth,register);
app.get("/auth/logout",auth,logout);
app.get("/showUsers",showUsers);
app.put("/auth/updateUser",auth,updateUser);

//**Mongodb Connection */

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connection successful")
});

//**AutoCannon */


// const instance = autocannon({
//   url: 'http://localhost:5055'
// })
 
// // this is used to kill the instance on CTRL-C
// process.once('SIGINT', () => {
//   instance.stop()
// })
 
// // just render results
// autocannon.track(instance, {renderProgressBar: false})

 

//**sockets */

// io.on('connection', (socket) => {
//   console.log('New WebSocket connection')

//   socket.emit('message', 'Welcome!')
//   socket.broadcast.emit('message', 'A new user has joined!')

//   socket.on('sendMessage', async(email) => {
    
    
//     const user=await User.findOne({email})

//       io.emit('message',user.role)
//   })

//   socket.on('userEmail',async(email)=>{
   
//     const registerUser=await User.find({})
//     console.log(registerUser)
//     io.emit('message',registerUser)
//   })

//   socket.on('disconnect', () => {
//       io.emit('message', 'A user has left!')
//   })
//   socket.on('userRegister',async(email)=>{
   
//     const registerUser=await User.findOne({email})
//     console.log(registerUser)
//     io.emit('userRegister',registerUser)
//     io.emit('message',registerUser)
//   })
// })

io.on("connection", function(socket) {
  sock1(io, socket);

});










module.exports=server



