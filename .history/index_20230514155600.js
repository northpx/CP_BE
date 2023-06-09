const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute')
const blogRoute = require('./')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const morgan = require("morgan")
const { notFound, errorHandler } = require("./middlewares/errorHandler");


app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api/user',authRoute)
app.use('/api/product', productRoute)
app.use('/api/blog', blogRoute)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>{
    dbConnect()
    console.log(`Server is running at port ${PORT}`)
})