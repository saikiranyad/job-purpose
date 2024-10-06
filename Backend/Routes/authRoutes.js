const express = require("express");
const { signup, logged } = require("../Controllers/authControllers");

const router = express.Router();



router.post("/signup",signup)
router.post("/logged",logged)
module.exports = router