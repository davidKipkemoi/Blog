const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const router = require("./routes/auth")
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
  



app.use(express.json())
app.use("/api/auth",authRoute);
app.listen("9000", ()=>{
    console.log('Server started');
});
