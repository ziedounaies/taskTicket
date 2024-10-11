const mongoose = require('mongoose');


const noteSchema= new mongoose.Schema({

  user:{type:String,required:true},
  description:{type:String,required:true},

  createAt:{type:Date}
  




})
module.exports= mongoose.model('Note',noteSchema)