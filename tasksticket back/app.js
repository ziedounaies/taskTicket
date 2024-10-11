const express =require('express');
const HttpError = require('./models back/http-error');
const mongoose = require('./mongoose');
const usersroutes= require('./routes back/usersroutes')
const bodyParser = require('body-parser');
const projectsroutes= require('./routes back/projectsroutes');
const tasksroutes=require('./routes back/tasksroutes');
const cors = require('cors');



const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };

const app= express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/users',usersroutes);
app.use('/api/projects',projectsroutes);
app.use('/api/tasks',tasksroutes);







app.listen(5000);