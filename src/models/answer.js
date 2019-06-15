const mongoose =require ('mongoose')

const answers= mongoose.model('answers',{

    answer:{
        type:String,
        required:true
    },
    is_right:{
        type:Boolean,
        required:true
    }

})

module.exports=answers