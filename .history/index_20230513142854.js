const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express()

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;





app.listen(PORT, ()=>{
    dbConnect()
    console.log(`Server is running at port ${PORT}`)
})