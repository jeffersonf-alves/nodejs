const PORT = 3001;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let posts = [
    {id:'ju',
    title:'Teste do Mural',
    description:'Descrição teste'
    }
];

app.get('/all', (req, res)=> {
    res.json(JSON.stringify(posts));
});

app.post('/new', bodyParser.json(),(req, res)=> {
    let id = generatorID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description });
    res.send('Post Adicionado');
}); 

app.listen(PORT, ()=> {
    console.log('Server running on port: '+PORT);
})

function generatorID() {
    return Math.random().toString(36).substr(2, 9);
}
