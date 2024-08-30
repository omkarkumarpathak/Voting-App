const express=require('express');
require('dotenv').config();
const app=express();

const db=require('./dbServer.js')

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server started");
})
