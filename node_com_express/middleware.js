const express = require('express');
const app = express();

const method = (req, res, next) => { 
    console.log( req.method); 
    next() 
}


const hello = (req, res) => { res.send('Hello world fala ai') }


app.get('/', method, hello );

app.post('/', method, hello);

app.listen(3000, ()=> {
    console.log('Servidor Rodando');
});