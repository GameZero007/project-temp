const express = require('express')
const server = express()
const bodyParser = require('body-parser')
var config=require('./configs/config')
var hostname = config.hostname;
var port = config.PORT;
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
var sensorRouter = require('./routers/sensorRouter')
var userRouter= require('./routers/userRouter')
server.use('/api/user',userRouter)
server.use('/api/sensor/',sensorRouter)
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
