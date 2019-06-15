const express = require ('express');
const path = require ('path')
const app = express();
const port = process.env.PORT || 3000;
require('./database/mongoose')

const userRouter =require('./Routes/user')
const categoryRouter = require('./Routes/category')
const answersRouter =require('./Routes/answers');
const questionRouter=require('./Routes/questions')
const scorecardRouter =require ('./Routes/scorecard');
const registerRouter = require ('./Routes/register')
const loginRouter = require ('./Routes/login')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-request-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-request-Headers', 'X-Requested-With,content-type,Authorization');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(express.static(__dirname+'/../public/'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/../public/index.html'))
})

app.use(express.json())
app.use(userRouter);
app.use(categoryRouter);
app.use(answersRouter);
app.use(questionRouter);
app.use(scorecardRouter);
app.use(registerRouter);
app.use(loginRouter);

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})