const express = require('express');
const app = express();
const path = require('path');

let users = [
    {
        id:0,
        name:'Jefferson',
        phone:'(11)95822-6123'
    },
    {
        id:1,
        name:'Josen',
        phone:'(11)95528-6123'
    },
    {
        id:2,
        name:'Maria',
        phone:'(11)95822-0000'
    }
    
    
    
]
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('user', { users });
});

app.listen(3000, ()=>{
    console.log('Servidor rodando');
});