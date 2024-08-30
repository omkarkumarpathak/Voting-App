const mongoose=require('mongoose');
const { type } = require('os');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    Adhaar:{
        type:Number,
        require:true,
    }

});

const User=mongoose.model('User',userSchema);

module.exports=User;

