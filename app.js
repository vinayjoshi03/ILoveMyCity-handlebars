var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
app.use(express.static(__dirname+'/public'));
var routes = require('./routes/route');
app.set('view engine','handlebars');
app.engine('handlebars', exphbs({'defaultLayout':'main'}))
app.get('/', routes.home);
//app.get('/home', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT||8080;

app.listen(port, function(req, res){
    console.log("Catch the application on: http://localhost:"+port);
})