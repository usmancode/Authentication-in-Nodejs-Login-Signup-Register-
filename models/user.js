const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        
    },
    email:{
        type:String,
        trim:true,
        
    },
    role:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
  });

  userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'usmansecretkey',{ expiresIn: '1h' })

    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    // if(user.isModified('role')){
    //     io.emit('userChanged',user)
    // }
    
    next()
})

// userSchema.pre('update', async function (next) {
//     const user = this

   
//         user.password = await bcrypt.hash(user.password, 8)
    
    
//     next()
// })

// userSchema.pre('updateOne', async function (next) {
//     const user = this

//     if(user.isModified('role')){
//         io.emit('userupdate',user)
//     }
    
//     next()
// })




userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

  
const User= mongoose.model('User', userSchema);
module.exports = User