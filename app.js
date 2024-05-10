const express = require("express");
const app = express();

const Port = process.env.PORT||8080;

app.get("/",(req,res)=>{
    return res.json({message:"Hey, I am node js in container"})
})


app.listen(Port,()=>{
    console.log("Server is running on Port no ",Port)
})