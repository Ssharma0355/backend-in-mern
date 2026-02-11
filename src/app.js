const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors()) 
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
        message:"Notes Fetched succefully",
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    delete notes[index];
    res.status(200).json({
        message:"Note deleted succefully"
    })
})

module.exports = app;