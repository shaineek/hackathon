const express = require ('express');
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken')

const router = new express.Router();

const user = require ('../models/user');

router.post('/login',(req,res)=>{
    user.find({
        email:req.body.email
    }).exec()
    .then(user=>{
        if(user.lenghth<1){
            return res.status(401).json({
                message:"Authentication Failed"
            });
        }
        bcryptjs.compare(req.body.password, user[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Authentication Failed",
                    success:false
                });
            }
            var role=user[0].role;
            if(result){
                const token = jwt.sign({
                    user_id:user[0]._id,
                    username:user[0].username,
                    email:user[0].email,
                },'secret',{
                    expiresIn:'1h'
                });
                return res.status(200).json({
                    message:'Authentication Successful',
                    username:user[0].username,
                    role:user[0].role,
                    success:true,
                    token:token
                });   
            }
            return res.status(401).json({
                message:'Authentication Failed',
                success:false
            })
        })
    }).catch(err=>{
        console.log(err.message)
        res.status(500).json({
            error:err.message
        })
    })
})


module.exports=router