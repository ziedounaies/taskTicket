const express = require('express');
const taskscontrollers= require('../controllers back/taskscontrollers');

const router = express.Router();


router.post('/update',taskscontrollers.update);
router.post('/delete',taskscontrollers.delete);
router.get('/getTasks',taskscontrollers.getTasks)
router.post('/getByid',taskscontrollers.getByid);
router.post('/create',taskscontrollers.create);
router.post('/addNote',taskscontrollers.addNote);
router.post('/deleteNote',taskscontrollers.deleteNote);
router.get('/getTodo',taskscontrollers.getTodo);
router.get('/getInprogress',taskscontrollers.getInprogress);
router.get('/getReview',taskscontrollers.getReview);
router.get('/getConfirmed',taskscontrollers.getConfirmed);
router.post('/getByIdDetails',taskscontrollers.getByidTasDetails);
router.get('/getNote',taskscontrollers.getNote);
router.post('/getByidNote',taskscontrollers.getByidNote);
router.post('/getByidTasksNote',taskscontrollers.getByidTasksNote);
router.get('/getTasksPaternsPag',taskscontrollers.getTasksPaternsPag);
router.get('/getParterns',taskscontrollers.getParterns);









module.exports=router;


