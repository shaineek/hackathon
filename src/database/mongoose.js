const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin123@ds247698.mlab.com:47698/quiz-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})