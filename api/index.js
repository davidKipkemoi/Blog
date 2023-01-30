const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const categoryRoute = require('./routes/categories');
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false },
    () => {
      console.log("Connected to MongoDB");
    }
  );
  



app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/categories",categoryRoute);
app.listen("9000", ()=>{
    console.log('Server started');
});
