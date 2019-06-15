const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const check_auth = require('../middleware/check-auth') 

router.post('/user',(req,res)=>{
    const user= new User(req.body)
    user.save()
        .then((result)=>{
            res.status(201).send({
                "message":"User created",
                "is_created":true
            });
        }).catch((e)=>{
            res.send({
                "error_message":e.message
            })
        })
});

router.get('/user',check_auth,async (req,res) => {

    // let usersPromise = new Promise((resolve, reject) => {
    //     User.find({}, (err, users) => {
    //         return err ? reject(err): resolve(users);
    //     });
    // })
    // const user = await usersPromise;
    // // console.log(user)
    // res.status(200).send(user)
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
router.get(('/user/:id'),async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        console.log(user)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router