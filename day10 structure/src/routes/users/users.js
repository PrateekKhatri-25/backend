const express =require('express')
const { readUsers, registseUser } = require('../../controllers/controller')

const user_router=express.Router()

user_router.get('/read-user',readUsers)
user_router.post('/register-user', registseUser)

module.exports=user_router;