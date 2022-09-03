const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.mongo_pw,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Dbcon = mongoose.connection;

Dbcon.once('open',()=>{
    console.log('connected successfully')
})





module.exports  = Dbcon;

