const mongoose = require('mongoose')
// const validator = require('validator')

const category = mongoose.model('categories',{
    name:{
        type:String,
        required:true
    }
})

module.exports=category