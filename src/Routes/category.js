const express = require('express')
const Category = require('../models/category')
const router = new express.Router()

router.get('/category',async (req,res) => {
    try {
        const categories = await Category.find({})
        res.send(categories)
    } catch (e) {
        res.status(500).send()
    }

})

router.post('/category',(req,res)=>{
    const c = new Category(req.body)
    console.log(c)
    c.save()
        .then((result)=>{
            res.status(201).send({
                "message":"category created",
                "is_created":true
            });
        }).catch((e)=>{
            res.send({
                "error_message":e.message
            })
        })
})
router.get('/category/:id',async (req,res) => {
    const _id = req.params.id
    try {
        const categories = await Category.findById(_id);
        res.send(categories)
    } catch (e) {
        res.status(500).send()
    }

});

router.get('/categoryByname',async (req,res) => {
    const cname = req.body.name
    try {
        const categories = await Category.find({name:cname});
        res.send(categories)
    } catch (e) {
        res.status(500).send(e)
    }

});

module.exports=router