var express=require('express');
var router=express.Router();
var userModels=require('./../models/usuariosModel');

router.get('/', function(req, res, next) {
    res.render('registro', {
        layout: 'layout', 
    });
});

router.post('/', async (req, res, next) => {
    try{
        var email=req.body.email;
        var psw=req.body.psw;
        var user=req.body.user;

        data=[email, psw, user];

        userModels.insertUser(user,email,psw);

        if (data!=undefined){
            req.session.username=user;
            req.session.email=email;
            req.session.conocido=true;
            if(psw=='Admin123'){
                req.session.admin=true;
            }
            res.redirect('/');
        }else{
            res.render('registro', {
                layout: 'layout', 
                error: true
            });
        }
    }catch(e){
        console.log(e);
    };
});

module.exports=router;