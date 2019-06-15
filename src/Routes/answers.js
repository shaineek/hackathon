const express  = require ('express')
const Answers =require ('../models/answer')
const router = new express.Router();

router.post('/answers',(req,res)=>{
    const answer= new Answers(req.body)
    answer.save()
        .then((result)=>{
            res.status(201).send({
                "message":"answer created",
                "is_created":true
            });
        }).catch((e)=>{
            res.send({
                "error_message":e.message
            })
        })
})

module.exports=router;