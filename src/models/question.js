const mongoose =require ('mongoose')

const question= mongoose.model('question',{
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    category_name:{
        type:String,
        require:true
    },
    ques:{
        type:String,
        required:true
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'answers',
        required:true
    }]
})

module.exports=question