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

// READ JUST ONE OR MANY
//read all
postController.getAll = function(req, res){
    postModel.find({}, function(err, materias){
        if(err){
            res.status(500);
            res.json({code:500, err});
        }else{
            res.json({ok:true, materias});
        }
    });
};

//read only one
postController.get = function(req, res){
    postModel.findOne({_id:req.params.id},function(err, materia){
        if(err){
            res.status(500);
            res.json({code:500, err});
        }else{
            res.json({ok:true, materia});
        }
    })
}

//update

postController.update = function(req, res){
    let update = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    };
    postModel.findByIdAndUpdate({_id:req.params.id}, update, function(err, antigua){
        if(err){
            res.status(500);
            res.json({code:500, err});
        }else{
            res.json({ok:true, antigua, update});
        }
    });
};

postController.delete = function(req, res){
    postModel.findByIdAndRemove({_id:req.params.id}, function(err, deleted){
        if(err){
            res.status(500);
            res.json({code:500, err});
        }else{
            res.json({ok:true, deleted});
        }
    });
};


module.exports = postController;