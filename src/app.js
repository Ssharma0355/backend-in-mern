const express = require("express")

const app = express()
app.use(express.json()) // any request body data to convernt into readable for express 

const notes =[];

// post notes
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Notes Created successfully"
    })
})
// get all notes
app.get("/getAllNotes",(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})


module.exports = app;