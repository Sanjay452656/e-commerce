import app from './src/app.js'
import connectDB from './src/config/db.js';
import dotenv from 'dotenv'

dotenv.config();

connectDB();


app.listen(8080,()=>{
    console.log("server started");
})
