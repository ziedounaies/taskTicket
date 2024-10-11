const mongoose = require('mongoose');

const projectsSchema= new mongoose.Schema({

  priority:{type:String,required:true},
  statue:{type:String,required:true},
  date:{type: Date ,required:true},
  name:{type:String,required:true},
  description:{type:String,required:true},
  taskDone:{type:String,required:true},
  taksTags:{type:String,required:true},
  createAt:{type: Date },


})
module.exports=mongoose.model('projects',projectsSchema)