const mongoose = require("mongoose");


const mongoUri = async()=>{
    try{
await mongoose.connect("mongodb+srv://Sai7890:Sai7890@cluster0.zlhgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
console.log("connected to db")
    }catch(err){
        console.log("not connected to db due to ",err)
    }
}

module.exports = mongoUri


