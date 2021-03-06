var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Burger = require('./models')['Burger']
Burger.sync();

var app = express(); 
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});

