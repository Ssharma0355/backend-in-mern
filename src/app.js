const express = require("express")

const app = express()
app.use(express.json()) // any request body data to convernt into readable for express 

app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("Runnningg",req.body)
})


module.exports = app;