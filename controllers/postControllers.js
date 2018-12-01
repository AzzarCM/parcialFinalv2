var postModel = require('../models/postModel');

const postController = {};

postController.create = function(req, res){
    let data = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    };
}