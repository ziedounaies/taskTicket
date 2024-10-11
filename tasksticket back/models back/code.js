const mongoose = require('mongoose');

const codeSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      expiration: {
        type: Date,
        required: true,
      },


})
module.exports=mongoose.model('code',codeSchema)