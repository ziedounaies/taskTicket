const express =require('express');

const usersroutes= require('./routes/usersroutes')
const bodyParser = require('body-parser');
const projectsroutes= require('./routes/projectsroutes');
const tasksroutes=require('./routes/tasksroutes');
const server = require('../controllers/server')

const app= express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/users',usersroutes);
app.use('/api/projects',projectsroutes);
app.use('/api/tasks',tasksroutes);






app.listen(5000);