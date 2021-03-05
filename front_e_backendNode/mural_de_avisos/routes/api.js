const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const posts = require('../model/posts');

router.get('/all', (req, res)=> {
    res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', bodyParser.json(),(req, res)=> {
    let id = generatorID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description });
    res.send('Post Adicionado');
});

module.exports = router;