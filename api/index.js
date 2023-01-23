const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL).then(console.log('Mongo Connected')).catch(err=>console.log(err))



app.listen('4000', ()=>{
    console.log('Server started')
})