const express = require ("express");
const app = express();

app.use((req,res,next)=>{
    req.time = new Date (Date.now()) .toString();
    console.log(req.method , req.hostname,req.path,req.time);
    next();
})

app.use((req,res,next)=>{
    console.log('Hi, i am middleware');
   next();
})

app.get("/", (req,res)=>{
    res.send ("Hi, I am root")
})

app.get("/random",(req,res)=>{
    res.send("this is random page")
})
app.listen  (8080, () =>{
    console.log("server is listening port on 8080");
})