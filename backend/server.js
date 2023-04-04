require('dotenv').config()
const express = require("express")
const workoutRoutes= require('./routes/workouts')
const app= express()
const mongoose = require('mongoose')
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("database conected & listeneing on port 4000")
    })
})
.catch((error)=>{
    console.log(error)
})


