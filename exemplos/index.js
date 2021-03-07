const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html')
});

let peoples = [
    {name:'Jefferson', age:'22'},
    {name:'Leticia', age:'33'},
    {name:'Victor', age:'23'}
]

app.get('/banco', (req, res)=>{
    let lista = peoples.forEach((p)=>{
        return p.name;
    });
    res.send(lista);
});

app.post('/salvar', (req, res)=>{
    res.send('Salvo');
})

app.listen(3000, ()=>{
    console.log('Servidor Rodando');
})