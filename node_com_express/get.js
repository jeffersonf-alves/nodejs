const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.text('Respondendo');
})

app.listen(3001,()=> {
    console.log('Servidor Rodando');
})