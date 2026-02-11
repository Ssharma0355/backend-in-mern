const express = require("express")

const app = express()
app.use(express.json()) // any request body data to convernt into readable for express 

const notes =[];
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Notes Created successfully"
    })
})


module.exports = app;