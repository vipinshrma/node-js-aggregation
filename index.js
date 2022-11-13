const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const  routers  = require('./routes');
require('dotenv').config()

const app = express()


app.use(express.json())
app.use(cors())
// app.use('/api',router)
routers(app)

connectDB()


app.listen(4000,()=>console.log("port running on 4000"))