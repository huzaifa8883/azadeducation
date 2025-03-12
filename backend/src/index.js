import dotenv from 'dotenv'
import connectdb from './db/index.js'
import app from './app.js'

dotenv.config({
    path: "./.env"
    })

connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
        console.log("port is running at", process.env.PORT || 8000);
    });
    
})
.catch((err)=>{
    console.log(err)
})