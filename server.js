//dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// Config
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json())

app.use(cors())
mongoose.connect(process.env.MONGO_URI)


app.get('/', (req, res) => {
    res.send('want a book?')
})


const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// Listener
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});