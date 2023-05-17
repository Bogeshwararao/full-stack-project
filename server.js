const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/dbconnection");
const dotenv = require("dotenv").config();
connectdb();
const app= express();
const port = process.env.PORT;



app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandler);





app.listen(port,()=>{
    console.log(`server running on ${port}`)
})