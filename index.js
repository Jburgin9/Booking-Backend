require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}`)
})