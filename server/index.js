require('dotenv').config()
const ctrl = require('./controllers/controller.js')
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/inventory',ctrl.getInventory)
app.post('/api/inventory', ctrl.addProduct)
// app.put('/api/inventory:id')
app.delete('/api/inventory:id',ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db',databaseConnection)
    console.log('TAC-COM ONLINE')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of [ R E D A C T E D ] on the wall!`))
})
