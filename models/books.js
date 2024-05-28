const mongoose = require('mongoose');
const { Schema } = mongoose;
// const express = require('express');
// const router = express.Router();

const booksSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: { type: String, required: true }
});

module.exports = router;
