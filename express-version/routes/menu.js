var express = require('express');
var router = express.Router();
var prodModel=require('../models/productos');
var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'dgfa0hopn', 
  api_key: '434968435276953', 
  api_secret: 'jkkk_fG8MjEymB4WOP2djyj4xUA',
  secure: true
});

router.get('/', async function(req, res, next){
  var prods=await prodModel.getProd();
  var tipos=await prodModel.getProdType();
  var listaTipos=[];
  tipos.forEach(tipo => {
    var coincidenciaTipo=[];
    prods.forEach(prod =>{
      if(prod.tipo_de_producto==tipo.tipo){
        coincidenciaTipo.push({
          nombre:prod.nombre,
          descripcion:prod.cuerpo,
          tipo:prod.tipo_de_producto,
          precio:prod.precio,
          imagen: cloudinary.image(prod.imagen,{
            width: 200,
            height: 170,
            crop: 'fill'
          }),
          id:prod.id,
          destacado: prod.destacado
        });
      }
    })
    listaTipos.push({tipos:tipo.tipo,productos:coincidenciaTipo});
  });

  res.render('menu', { 
    title: 'Todo Lechuga',
    username: req.session.username,
    conocido: req.session.conocido,
    admin: req.session.admin,
    error1: req.session.error1,
    listaTipos
  });
});



module.exports = router;