const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
    lastName:{type:String,required:true},
    fisrtName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    profession:{type:String,required:true},
    birthDate:{type:String,required:true},
    nationality:{type:String,required:true},
    address:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    //token:{type:String,required:true},
    createAt:{type:String}
   
});


module.exports=mongoose.model('user',usersSchema)