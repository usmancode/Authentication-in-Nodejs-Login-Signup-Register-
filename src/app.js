const express = require("express");
const app = express();
const path=require('path')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const register = require("../controller/register.controller");
const login = require("../controller/login.controller");
const logout=require("../controller/logout.controller");
const auth=require("../middleware/auth")
const docs=require("../docs/index")

const autocannon = require('autocannon')

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/api-docs', docs)

app.use('/web', express.static(path.join(__dirname, 'public')))


//**urls */

app.post("/auth/login",login);
app.post("/auth/register",auth,register);
app.get("/auth/logout",auth,logout);


//**Mongodb Connection */

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connection successful")
});

//**AutoCannon */


const instance = autocannon({
  url: 'http://localhost:5055'
})
 
// this is used to kill the instance on CTRL-C
process.once('SIGINT', () => {
  instance.stop()
})
 
// just render results
autocannon.track(instance, {renderProgressBar: false})

 
// const instance = autocannon({
//   url: 'http://localhost:5055/auth/login',
//   setupClient: setupClient
// }, (err, result) => handleResults(result))
// // results passed to the callback are the same as those emitted from the done events
// instance.on('done', handleResults)
 
// instance.on('tick', () => console.log('ticking'))
 
// instance.on('response', handleResponse)
 
// function setupClient (client) {
//   client.on('body', console.log) // console.log a response body when its received
// }
 
// function handleResponse (client, statusCode, resBytes, responseTime) {
//   console.log(`Got response with code ${statusCode} in ${responseTime} milliseconds`)
//   console.log(`response: ${resBytes.toString()}`)
 
//   //update the body or headers
//   client.setHeaders({new: 'header'})
//   const userDetails={
//     email:'usman@gmail.com',
//     password:'1234'
//   }
//   client.setBody(userDetails.toString())
//   client.setHeadersAndBody({new: 'header'}, 'new body')
// }

// function handleResults(result) {
//   console.log(result)
// }

module.exports=app



