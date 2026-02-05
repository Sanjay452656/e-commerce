import connectDB from '../src/config/db.js'
import express from 'express'
const app=express();

app.use(express.json());// for res.body
// app.use('/auth/api',authRoutes)

connectDB();

app.get('/',(req,res)=>{
    console.log("Server strated")
    res.send("Hello")
})

export default app;