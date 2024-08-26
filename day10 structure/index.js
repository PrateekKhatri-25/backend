const express =require('express');
const allRoute = require('./src/app');
require('dotenv').config();

const app=express()

app.use(allRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT} `);
})



// mongodb+srv://sultanwscube:WkNaz41L6gxs0UXB@sultan.f3yzdsd.mongodb.net/your_database_name_here?retryWrites=true&w=majority&appName=sultan