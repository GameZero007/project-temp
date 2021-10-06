const dotenv = require('dotenv')
dotenv.config()
module.exports = {
 dbserver: process.env.dbserver,
 dbuser: process.env.dbuser,
 dbpass: process.env.dbpass,
 dbname: process.env.dbname,
 dbport: process.env.dbport,
 PORT: process.env.PORT,
 NODE_ENV: process.env.NODE_ENV
}
