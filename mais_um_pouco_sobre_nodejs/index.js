const express = require('express');
const app = express();

require('dotenv').config();

let port = process.env.PORT;

app.get('/', (req, res)=>{

});

app.listen(port, ()=>{
    console.log(process.env.API_KEY);
    console.log('Servidor rodando na porta: '+port);
})