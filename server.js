const express = require("express")
const cors = require("cors")

const app = express(); // server is created

const people =[{
    name:"Sachin",
    email:"ssharmagmail.com",
    phone:"911370488"
},
{
    name:"Sachin",
    email:"ssharmagmail.com",
    phone:"911370488"
},
]

app.use(cors())

app.get("/",(req,res)=>{
    res.send(people)
})

app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.get("/sachin",(req,res)=>{
    res.send("Sachin is here")
})

// port number 8000
app.listen(8000,()=>{
    console.log("App is running on 8000") // server is started here
})

