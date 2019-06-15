const express  = require ('express')
const Questions =require ('../models/question')
const router = new express.Router();
// const mongoose=require('mongoose')

router.post('/question',(req,res)=>{
    const question= new Questions(req.body)
    question.save()
        .then((result)=>{
            res.status(201).send({
                "message":"question created",
                "is_created":true
            });
        }).catch((e)=>{
            res.send({
                "error_message":e.message
            })
        })
})

router.get('/question/:id',async (req, res) => {
    const _id = req.params.id

    try {
        const ques = await Questions.findById(_id).populate('answers')
        console.log(ques)
        if (!ques) {
            return res.status(404).send()
        }

        res.send(ques)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/question/category/:id',async (req, res) => {
    const cid = (req.params.id)

    try {
        const ques = await Questions.find({category_id:cid}).populate('answers')
        console.log(ques)
        if (!ques) {
            return res.status(404).send({
                message:"No data found"
            })
        }

        res.send(ques)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/question/category_name/:name',async (req, res) => {
    const cname = (req.params.name)

    try {
        const ques = await Questions.find({name:cname}).populate('answers')
        console.log(ques)
        if (!ques) {
            return res.status(404).send()
        }

        res.send(ques)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/question',async (req, res) => {
    const _id = req.params.id

    try {
        const ques = await Questions.find().populate('answers')
        console.log(ques)
        if (!ques) {
            return res.status(404).send()
        }

        res.send(ques)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports=router;