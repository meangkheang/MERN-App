const express = require('express');
const route = express.Router()
const {
    All,
    Insert,
    Update,
    Delete
}
= require('../controllers/imageController')

// All fuction get all images from db
route.get('/',All);

// insert image to database
route.post('/', Insert);

// update image 
route.put('/:id', Update);

// delete image
route.delete('/:id', Delete);

module.exports  =  route;