const express=require('express');
const user_router = require('./routes/users/users');

const allRoute=express.Router();

allRoute.use('/user',user_router)

module.exports=allRoute;