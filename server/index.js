var express = require('express')
var bodyParser = require('body-parser')
var cors  = require('cors')
var messagesController = require('./controllers/messages_controller.js')

var app = express()

app.use(cors())
app.use(bodyParser.json());



app.post('/api/create',messagesController.create)

app.listen(3006, function(){
    console.log('working on 3006')
})