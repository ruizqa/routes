const{quoteModel} = require('./../models/quoteModel')

const QuoteController = {

    home: function(req, res) {
        res.render("form");
    },

    addQuote:function(req, res) {
        let quote = {}
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.date = new Date();
        quoteModel
        .createQuote(quote)
        .then(newQuote => console.log('quote created: ', newQuote))
        .catch(err => console.log(err))
        res.redirect('/show')
    },

    showQuotes: function(req, res) {
        quoteModel
        .findAll()
        .then(data => res.render("results", {quotes: data}))
        .catch(err => res.json(err));
    }

}

module.exports = {QuoteController}