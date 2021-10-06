const express = require('express')
const sensorRouter=express.Router()
const sensorTempController = require('../controllers/sensorTempController')
sensorRouter.post('/temp/add',sensorTempController.add)
module.exports = sensorRouter