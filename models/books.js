//Declaration 
const mongoose = require('mongoose')

//Schema Shorthand
const { Schema } = mongoose

//Schema
const bookSchema = new Schema({
    title:String,
    description:String,
    year: Number,
    quantity: Number,
    image: String

})


const Book = mongoose.model('Book', bookSchema)

module.exports = Book