// require('dotenv').config({path : './env'});
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path :"./env"
});

connectDB()


/*
import express from "express";
const app = express()
( async () => {
      try {
        await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`)
        app.on("error", (error) => {
          console.log("Error", error);
          throw error
        })
        app.listen(process.env.PORT, () => {
          console.log(`App is listning on port ${process.env.PORT}` );
        })
      } catch(error) {
        console.og("Errro", error);
        throw err   
      }
})
*/