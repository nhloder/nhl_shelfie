const ctrl = require('./controllers/controller.js')
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

// app.get()
// app.post()
// app.put()
// app.delete()


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of [ R E D A C T E D ] on the wall!`))