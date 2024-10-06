const bcrypt = require("bcryptjs")
const User = require('../models/SignupModel')
const signup = async (req, res) => {
    try {
        const { firstName, lastName, Email, password, phone, address } = req.body;
        const email = await User.findOne({ Email });
        if (email) {
            return res.status(400).json({ error: "email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName, lastName, Email, password: hashedpassword, phone, address
        })
        if (newUser) {
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                phone: newUser.phone

            })
        } else {
            res.status(400).json({ error: "invalid data" })
        }

        // console.log(newUser)



    } catch (err) {
        console.log("error in sign controller", err.message)
        res.status(401).json({ err: "internal server error" })
    }
}


const logged = async (req, res) => {
    try {
        const { Email, password } = req.body
        const email = await User.findOne({ Email });
        const ispassword = await bcrypt.compare(password, email?.password || "");
        if (!email || ispassword) {
            return res.status(400).json({ error: "invalid email and password" })
        }
       
        res.status(200).json({
            _id: email._id,
            firstName: email.firstName,
            phone: email.phone

        }) 
        console.log(email.firstName)


    } catch (err) {
        console.log("error in login controller", err.message)
        res.status(401).json({ err: "internal server error" })
    }
}
module.exports = { signup, logged }