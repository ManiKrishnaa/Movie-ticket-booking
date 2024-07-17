const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    genre: {type:String},
    releaseDate: {type:Date},
    duration: {type:Number},
    city : {type:String},
    theaters :{type:String},
    posterUrl: {type:String},
});

module.exports = mongoose.model('Movies',movieSchema)
