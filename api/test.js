const express = require('express')
const app = express()

app.post('/getusers',(req,res)=>{
    req.send({
        "username":"David"
    })
    
})
app.listen('6000',()=>{
    console.log('Server Up');
});