const express =require('express');
const cors = require('cors')
const port = process.env.PORT || 8000
const app = express();
const mongoose = require('mongoose')
const Dbcon = require('./mongodbConnection')

require('dotenv').config()


app.use(express.json())
app.use(cors())



// all routes
app.use('/api/images',require('./routes/imageRoute'))



app.listen(port,()=>{
    console.log(`sever start on http://localhost:${port}`)
})

