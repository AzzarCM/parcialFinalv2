// haremos nuestro CRUD AQUI

//declaramos todo lo que necesitamos
var express = require('express');
var router = express.Router();

var postController = require('../controllers/postControllers');

//CREATE

router.post('/', postController.create);

//READ ALL
router.get('/', postController.getAll);

router.get('/:id', postController.get);

//UPDATE
router.put('/:id', postController.update);

//delete
router.delete('/:id', postController.delete);



module.exports = router;