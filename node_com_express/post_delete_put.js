const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'cliente')));

// post
app.post('/', (req, res )=> {
    res.send('resposta do post');
})
// delete
app.delete('/', (req, res)=>{
    res.send('resposta do delete');
});

// put 
app.put('/', (req, res)=> {
    res.send('resposta do put');
})


app.listen(3001, ()=> {
    console.log('Servidor Rodando');
})