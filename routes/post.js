// haremos nuestro CRUD AQUI

//declaramos todo lo que necesitamos
var express = require('express');
var router = express.Router();

var postCrontroller = require('../controllers/postControllers');

//CREATE

router.post('/', postCrontroller.create);

module.exports = router;