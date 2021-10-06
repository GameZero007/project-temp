const express = require('express')
const userRouter=express.Router()
const userController = require('../controllers/userController')
userRouter.post('/add',userController.add)
module.exports = userRouter
