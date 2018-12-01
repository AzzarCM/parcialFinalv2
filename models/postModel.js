//declaramos mongoose

var mongoose = require('mongoose');

let postModel = new mongoose.Schema({
    materia: String,
    uv: String,
    descripcion: String
});

module.exports = mongoose.model('Post', postModel);