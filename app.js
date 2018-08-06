const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

const app = express();

//Set public path
app.use(express.static(path.join(__dirname,'public')));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Home page
app.get('/', function(req, res){
  res.render('index');
})

//Nursing route
app.get('/jobs/nursing', function(req, res){
  res.render('nursing')
})

//Contacts route
app.get('/contacts', function(req, res){
  res.render('contacts')
})

app.listen(3000, function(){
  console.log('Server listening on port 3000');
})
