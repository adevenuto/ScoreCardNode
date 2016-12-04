var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose')

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  res.render('home');
});

app.listen(3000, function(err) {
  if (err) console.log(err);
  console.log('Server running: Port 3000')
})