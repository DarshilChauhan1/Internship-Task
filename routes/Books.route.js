const express = require('express');
const { createBook, updateBook, deleteBook, getBook } = require('../controllers/Books.controller');
const Router = express.Router();

Router.post('/home', createBook )
Router.get('/home/get', getBook)
Router.put('/home/:ISBN', updateBook)
Router.delete('/home/:ISBN', deleteBook)


module.exports = Router