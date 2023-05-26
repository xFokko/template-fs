const express = require('express');
const {userRouter} = require('./src/routes')
const app = express();

// pars la données recu par l'api en json
app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req,res){
    const { version } = require('./package.json');
    return res.json({ version })
})

APIRouter.use('/users', userRouter);

app.use('/api', APIRouter);


app.listen(8080,function() {
    console.log('API is running on 8080');
})
