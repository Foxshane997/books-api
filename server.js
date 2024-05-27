// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// homepage route.
app.get('/', function (req, res) {
    res.send('Hello world')
})

app.listen(3000, function (){
    console.log('I am awake!')
})