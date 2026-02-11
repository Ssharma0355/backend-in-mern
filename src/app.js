const express = require("express")

const app = express();
app.use(express.json())

// Empty array or DB
const notes = [];

// POST title and description 
app.post("/notes",(req,res)=>{
   notes.push(req.body);
   res.status(201).json({
    message:"Posted!",
   })
})

// GET Notes 
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"Fetched success",
        notes:notes
    })
})

//GET note by title
app.get("/notes/:title",(req,res)=>{
    const title = req.params.title;
    const note = notes.find(n => n.title === title);
    res.status(201).json({
        message:"Notes fetched",
        note:note
    })
})

// DELETE Note
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message:"Post Deleted"
    })
})

// PATCH Note
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(201).json({
        message:"post updated"
    })
})



module.exports = app