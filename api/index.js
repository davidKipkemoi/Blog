const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const categoryRoute = require('./routes/categories');
const postsRoute = require('./routes/posts');
const multer = require('multer')
const path = require("path");


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
  
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images")
  },
  filename:(req,file,cb)=>{
    cb(null,req.body.name)
  }
});

const upload = multer({storage:storage});
  app.post('/api/upload', upload.single('file'), (req,res)=>{
    res.status(200).json('File Uploaded')
  });



app.use(express.json())



app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/categories",categoryRoute);
app.use("/api/posts",postsRoute);
app.use("/images", express.static(path.join(__dirname,"/images")))



app.listen("7000", ()=>{
    console.log('Server started');
});
