const express = require ('express');
const Scorecard = require ('../models/scorecard');

const router =new express.Router();

router.post('/scorecard',(req,res)=>{
    const score = new Scorecard(req.body)
    score.save()
    .then(()=>{
        res.status(201).send({
            "message":"scorecard created",
                "is_created":true
        }).catch((e)=>{
            res.send({
                "error_message":e.message
            })
        })
    })
})

router.get('/scorecard', async (req, res) => {
      //  const _id = req.params.id
    
        try {
            const score = await Scorecard.find()
            console.log(score)
            if (!score) {
                return res.status(404).send()
            }
    
            res.send(score)
        } catch (e) {
            res.status(500).send()
        }
    
})

router.get('/scorecard/user/:id',async (req, res) => {
    const uid = (req.params.id)

    try {
        const score = await Scorecard.find({user_id:uid})
        console.log(score)
        if (!score) {
            return res.status(404).send()
        }

        res.send(score)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/scorecard/category/:id',async (req, res) => {
    const cid = (req.params.id)

    try {
        const score = await Scorecard.find({category_id:cid})
        console.log(score)
        if (!score) {
            return res.status(404).send()
        }

        res.send(score)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router