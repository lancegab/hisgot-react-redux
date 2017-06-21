require('babel-register')({
    presets: ['react', 'es2015']
});

var express = require('express');

var React = require('react');
var ReactDOMServer = require('react-dom/server');
const bodyParser = require('body-parser');

const database = require('./database');
const path = require("path");

const expressSanitizer = require("express-sanitizer");


const User = require('./models').User;
const Topics = require('./models').Topics;
const Messages = require('./models').Messages;
const Categories = require('./models').Categories;
const axios = require('axios');

var app = express();

app.use(express.static('static'));
app.use(bodyParser.json());//must be to work with axios
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressSanitizer());


app.get('/testQuery', function(req,res){
  res.send('IT IS WORKING');
});

app.get('/findCategories', function(req,res){
  Categories.findAll().then(function(categories){
      res.send(categories);
  })
});

app.post('/findTopics', function(request,response){
  Topics.findAll({where: {category: request.body.category}}).then(function(topics){
    response.send(topics);
  })
});

app.post('/findHeadMessage', function(request,response){
  // console.log("HOT ", request.body.message);
  Messages.findOne({where: {id: request.body.message}}).then(function(msg){
    response.send(msg);
  })
});

app.post('/findChildrenMessage', function(request,response){
  Messages.findAll({where: {ref_id: request.body.message}}).then(function(msg){
    response.send(msg);
  })
});



app.post('/selectCategory', function(req,res){
  var id = request.body.category_id;
  console.log(id);
});

app.get('*', function(request,response){
	response.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})


app.listen(3000, function() {
    console.log('Listening at port 3000');
});
