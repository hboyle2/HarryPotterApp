var express = require('express')
var bodyParser = require('body-parser')
var cors  = require('cors')

var app = express()

app.use(cors())

var array = ['string1', 'string12']

app.get('/api/array', function(request, response){
    response.json(array)
})

app.listen(3006, function(){
    console.log('working on 3006')
})