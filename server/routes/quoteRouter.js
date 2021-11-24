const express = require('express')
const QuoteRouter = express.Router()
const {QuoteController} = require('./../controllers/quoteController')


QuoteRouter
.get('/', QuoteController.home)

QuoteRouter
.post('/add', QuoteController.addQuote)


QuoteRouter
.get('/show', QuoteController.showQuotes)



module.exports = {QuoteRouter}