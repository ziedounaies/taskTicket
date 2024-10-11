const mongoose= require('mongoose');
const singup =require('./models/users');
const { create } = require('domain');



mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

.then(() =>{ 
     console.log('connected to database')
}).catch(() => {
console.log('connection failed to the database ')

});

const createsingup = async(req,res,next) => {

   const createsingup= new singup ({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password


   });

   const result = await createsingup.save();
   res.json(singup);


};




exports.createsingup=createsingup;