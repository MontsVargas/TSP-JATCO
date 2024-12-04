import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./JATCO/backend/controllers/empleados.controller.js";
dotenv.config();

mongoose.connect(process.env.urlbase)
.then( ()=>{ 
    console.log("Funciona correctamente")          
}) 
.catch((error)=>{ 
    console.log("No esta funcionando",error)
})

const app=express();
app.use(cors())
app.listen(4003, () => {
   console.log("FUNCIONA")
})
test ()