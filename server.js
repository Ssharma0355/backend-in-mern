const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Hi Sachin app is running on port 8000")
})

app.listen(8000,()=>{
    console.log("App is running on 8000")
})