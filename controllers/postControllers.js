var postModel = require('../models/postModel');

const postController = {};

postController.create = function(req, res){
    let data = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    };

    if(data.materia && data.uv && data.descripcion && data.materia != '' && 
    data.uv != '' && data.descripcion != ''){

        let nuevaMateria = new postModel(data);

        nuevaMateria.save(function(err, saved){
            if(err){
                res.status(500);
                res.json({code:500, err});
            }else{
                res.json({ok:true, message:'se ha guardado la materia', saved});
            }
        });
    }else{
        res.status(400);
        res.json({err:{code:400, message:'no se encontro o faltan datos', data}});
    }
};

//exportamos el controller para poder ocuparlo fuera

module.exports = postController;