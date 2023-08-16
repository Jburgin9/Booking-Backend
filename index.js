require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")

app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.MONGO_URI}`); 
})