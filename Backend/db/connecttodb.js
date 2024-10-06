const mongoose = require("mongoose");


const mongoUri = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI);
console.log("connected to db")
    }catch(err){
        console.log("not connected to db due to ",err)
    }
}

module.exports = mongoUri


