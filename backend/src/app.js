import express from 'express'
import authRoutes from "./routes/auth.routes.js";
const app=express();

app.use(express.json());// for res.body

app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    console.log("Server strated")
    res.send("Hello")
})



export default app;