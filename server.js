// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// homepage route.
app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/books', function (req, res) {
    res.render('./books')
})
// Getting cannot GET Books

app.listen(3000, function (){
    console.log('Server Live.')
})