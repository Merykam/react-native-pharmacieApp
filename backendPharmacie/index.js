const express = require('express');
const app = express();
const userRoute = require('./routes/authRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


app.use(express.json());


const port = 5000;
const db = "mongodb://127.0.0.1:27017/pharmacie"


app.use(cors({
    origin : "http://localhost:8081",
    credentials : true
}))

mongoose.connect(db)
.then(()=>console.log(`database connected : ${db}`))
.catch(()=>console.log(`not connected : ${db}`))


app.listen(port,()=>{
    console.log(`app is listning to ${port}`);
})

 
app.use('/api/auth',userRoute);