let image = require('../models/imageModel')


const All = (req,res)=>{

    image.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))    
}

const Insert = (req,res)=>{
    const image_url = req.body.image_url;
    const byWho = req.body.byWho;

    const newImage = new image({
        image_url,
        byWho
    });

    newImage.save()
    .then(()=>res.status(200).json('image added'))
    .catch((err)=>res.status(404).json(err))
}

const Update = (req,res)=>{
    const id = req.params.id;
    const image_url = req.body.image_url;
    const byWho = req.body.byWho;

    image.findByIdAndUpdate(id,{
        byWho : byWho,
        image_url : image_url
    },function(err,docs){
        if (err){
            res.json(err)
        }
        else{
            res.json("image updated");
        }
    })
    

    
}

const Delete = (req,res)=>{
    const id = req.params.id;

    image.findByIdAndDelete(id)
    .then(()=> res.json('delete success'))
    .catch((err)=>res.json(err))
    
}




module.exports = {
    All,
    Insert,
    Update,
    Delete
}