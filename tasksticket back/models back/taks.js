const mongoose= require('mongoose');
const Note  = require('../models back/Note');

const taksSchema = new mongoose.Schema({

status:{type:String,required:true},
startDate:{type:Date,required:true},
dueDate:{type:Date,required:true},
assignName:{type:String,required:true},
taksTags :{type:String,required:true},
taksName:{type:String,required:true},
//description:{type:String,required:true},
createAt:{type:String},
//parterns:{type:String,required:true},

Note : 
   [{

    user:{type:String},
    description:{type:String},
  
    createAt:{type:Date}
    
  
  
  }]



});
module.exports=mongoose.model('taks',taksSchema)