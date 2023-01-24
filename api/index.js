const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
dotenv.config();


mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
            
        }).then(console.log("Connected to Mongo"))
          .catch((err)=>console.log((err)))
  



app.use(express.json())
app.use("/api/auth ", authRoute);
app.listen("9000", ()=>{
    console.log('Server started')
});