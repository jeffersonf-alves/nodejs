const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const aluno = require('./routes/aluno');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', aluno);


app.get('/', (req, res)=>{
    res.send('Hello world');
})



app.listen(3000, () => console.log('Servidor Rodando'));