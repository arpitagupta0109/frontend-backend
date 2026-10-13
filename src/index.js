// require('dotenv').config({path:"./env"})
import 'dotenv/config';
import mongoose from "mongoose"
import connectDB from "./db/index.js";
import { app } from './app.js';



connectDB()
.then(
    ()=>{

        //not able to listen
         app.on("error" , (error)=>{
                console.log("error:" , error)
                throw error;
                
          })
          
        app.listen(process.env.PORT || 3000  , ()=>{
            console.log(`listening at PORT ${process.env.PORT}`);   
        })
    }
)
.catch((err)=>{
    console.log("connection failed " , err)
})













/*
import express from "express"
const app = express();
//iife
;(
    async ()=>{
        try {
          await mongoose.connect(`${process.env.MONGODB_url}/${DB_name}`)
          //listeners after connecting of db 
          //on for if app not able to listen
          app.on("error" , (error)=>{
                console.log("error:" , error)
                throw error;
                
          })

           app.listen(process.env.PORT ,()=>{
             console.log(`app listening on port ${process.env.PORT}`);
             
           })

        } catch (error) {
            console.log("error");
            throw error
        }
    }
)() */