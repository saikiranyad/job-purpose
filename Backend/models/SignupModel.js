const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    phone:{
        type:String,
        required:true,
        minlength:10
    },
    address:{
        type:String,
        required:true,
        
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;