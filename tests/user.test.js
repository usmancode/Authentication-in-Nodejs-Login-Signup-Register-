const request = require('supertest')
const app = require('../src/app')
const User = require('../models/user')
const jwt =require("jsonwebtoken")
const mongoose=require("mongoose")

const userOneId=new mongoose.Types.ObjectId()
const userOne = {
    _id:userOneId,
    name: 'Usman',
    email: 'usman@gmail.com',
    role: 'admin',
    password: '1234',
    tokens:[{
        token:jwt.sign({ _id: userOneId }, 'usmansecretkey',{ expiresIn: '1h' })
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
});

test('Should register a new user', async () => {
   const response= await request(app).post('/auth/register')
      .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
      .send({
        name: 'Ajay',
        email: 'ajay@gmail.com',
        role: 'manager',
        password: '1234'
    }).expect(201)
    console.log(response.body)
    const user=await User.findById(response.body.user._id)

    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
           
        user:{
            name:"Ajay",
            email:"ajay@gmail.com"
        },
        token:user.tokens[0].token

    })

    expect(user.password).not.toBe('1234')

    

});
test('Should not register a new user without having the authorization', async () => {
    await request(app)
      .post('/auth/register')
      .send({
        name: 'Ajay',
        email: 'ajay@gmail.com',
        role: 'manager',
        password: '1234'
    }).expect(401)
});

test('Should login existing user', async () => {
    await request(app)
       .post('/auth/login')
       .send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
});

test('Should not login non_existent user', async () => {
    await request(app)
        .post('/auth/login')
        .send({
        email: userOne.email,
        password: 'worngPassword'
    }).expect(400)
});


test('Should Logout exiting user',async()=>{
      await request(app)
      .get('/auth/logout')
      .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
      .expect(200)

});

test('Should not Logout without login',async()=>{
    await request(app)
    .get('/auth/logout')
    .expect(401)

});


