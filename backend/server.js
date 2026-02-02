import app from './src/app.js'
import dotenv from 'dotenv'

dotenv.config();

app.listen(8080,()=>{
    console.log("server started");
})
