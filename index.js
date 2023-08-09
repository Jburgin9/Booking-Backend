require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const SairDB = require('./SairDB')


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.MONGO_URI}`); 
})