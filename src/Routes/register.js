const express = require ('express');
const bcryptjs = require ('bcryptjs');
const router = new express.Router();

const User = require('../models/user');
router.post('/register',(req,res)=>{
    User.find({email:req.body.email})
    .exec()
    .then(data=>{
        if(data.length>0){
            return res.status(409).json({
            message:'user already exist',
            success:false
        })
    }else{
        bcryptjs.hash(req.body.password,10,(err,hash)=>{
            if(err){
                return res.status(500).json({
                    error:err.message,
                    sucess:req.password
                });
            }else{
                const user = new User({
                    username:req.body.username,
                    email:req.body.email,
                    role:"user",
                    password:hash
                })
                user.save()
                .then(result=>{
                    res.status(201).json({
                        message:'User Created',
                        success:true
                    })
                }).catch(err=>{
                    res.status(500).json({
                        error:err.message,
                        success:false
                    })
                })
            }
        })
    }
    })
})

module.exports=router