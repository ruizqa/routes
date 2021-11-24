let express = require("express");
let path = require('path');
let app = express();
require('./server/config/database');


const {QuoteRouter} = require('./server/routes/quoteRouter')

app.use( express.urlencoded({extended:true}) );
app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use('/',QuoteRouter)


// tell the express app to listen on port 8000
app.listen(8085, function() {
 console.log("listening on port 8085");
});
