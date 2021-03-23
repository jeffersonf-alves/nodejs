const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title:String,
    description: String,
    url: String,
    click: Number
});

const Link = mongoose.model('Link', linkSchema);

let link = new Link({
    title:'progbr',
    description:'link para o twiter',
    url:'http://twiter.com/progbr',
    click:0
})


link.save().then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err);
})

mongoose.connect('mongodb://localhost:27017/newlink',(error, db)=> { 
    console.log(error) 
    if(db) {
        console.log('Banco carregado');
    }
});



app.get('/', (req, res)=> {

});

app.listen(port, ()=>{
    console.log('Servidor rodando na porta: '+port);
});