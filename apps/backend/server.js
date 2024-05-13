const express = require("express")
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT || 3000


mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser:true,useUnifiedTopology:true});


const db =mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error:'))
db.once('open',()=>{
    console.log("Conected to MongoDB")
})

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)


})


