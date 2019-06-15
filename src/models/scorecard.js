const mongoose = require ('mongoose')

const scorecard=mongoose.model('scorecard',{
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    category_name:{
        type:String
    },
    // user_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:true
    // },
    username:{
        type:String
    },
    correct:{
        type:Number,
        require:true
    },
    incorrect:{
        type:Number,
        require:true

    },
    score:{
        type:Number,
        required:true
    }
})

module.exports = scorecard