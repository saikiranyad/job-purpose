const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const authRoutes = require('./Routes/authRoutes');
const mongoUri = require("./db/connecttodb");
const cookieParser = require('cookie-parser')

const app = express();


dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000


app.use('/api/auth',authRoutes)






app.listen(PORT ,
    mongoUri(),()=>{
    console.log("server is on port at",PORT)
})