import express from "express";
import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";

const app = express();

dbConnection();

const PORT = 2000

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})

