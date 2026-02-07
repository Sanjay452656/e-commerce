import express from 'express'
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors'

const app=express();

app.use(cors());
app.use(express.json());// for res.body

app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    console.log("Server strated")
    res.send("Hello")
})

export default app;