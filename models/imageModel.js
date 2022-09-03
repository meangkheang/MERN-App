const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = Schema(
{
    "image_url":{
        type:String,
        required:true
    },
    "byWho":{
        type:String,
        required: true,

    }
},
{
    timestamps : true 
}
);

const image = mongoose.model('images',imageSchema);

module.exports = image;