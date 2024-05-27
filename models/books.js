const mongoose = require('mongoose');
const { Schema } = mongoose;

const booksSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true }
});

const express = require('express');
const router = express.Router();

// Mock data (In a real application, you'd use a database)
// let books = [
//   { id: 1, title: '1984', author: 'George Orwell' },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
// ];

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET a single book by ID
// router.get('/:id', (req, res) => {
//   const book = books.find(b => b.id == req.params.id);
//   if (book) {
//     res.json(book);
//   } else {
//     res.status(404).send('Book not found');
//   }
// });

// POST a new book
// router.post('/', (req, res) => {
//   const newBook = { id: books.length + 1, title: req.body.title, author: req.body.author };
//   books.push(newBook);
//   res.status(201).json(newBook);
// });

// PUT to update a book by ID
// router.put('/:id', (req, res) => {
//   const book = books.find(b => b.id == req.params.id);
//   if (book) {
//     book.title = req.body.title;
//     book.author = req.body.author;
//     res.json(book);
//   } else {
//     res.status(404).send('Book not found');
//   }
// });

// DELETE a book by ID
// router.delete('/:id', (req, res) => {
//   books = books.filter(b => b.id != req.params.id);
//   res.status(204).send();
// });

module.exports = router;
