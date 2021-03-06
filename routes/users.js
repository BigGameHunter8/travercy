var express= require('express');
var router = express.Router();
const passport = require('passport');
const jwt =  require('jsonwebtoken');
const User = require('../models/user');

//Register
router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });

    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false, msg:"Failed to register user"});
        }
        else{
            res.json({success:true,msg:"User registered"});
        }
    });
});

//Authetification
router.post('/authentification',(req,res,next)=>{
    res.send('Authentification');
});

//Profile
router.get('/profile',(req,res,next)=>{
    res.send('PROFILE');
});

//validate
// router.get('/validate',(req,res,next)=>{
//     res.send('VALIDATE');
// });


module.exports = router;