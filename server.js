const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Hi Sachin app is running on port 8000")
})

app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.get("/sachin",(req,res)=>{
    res.send("Sachin is here")
})

app.listen(8000,()=>{
    console.log("App is running on 8000")
})

