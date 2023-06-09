const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

const authRoute = require('./routes/authRoute');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/user',authRoute)

app.listen(PORT, ()=>{
    dbConnect()
    console.log(`Server is running at port ${PORT}`)
})