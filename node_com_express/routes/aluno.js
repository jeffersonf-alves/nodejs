const express = require('express');
const router = express.Router();

let alunos = [{ id:0, name:'Igor'},
    { id: 1, nome:'Jefferson'},
    { id: 2, nome:'José'},
    { id: 3, nome:'Leticia'}
];

router.get('/aluno', (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if(aluno) {
        res.json(aluno)
    } else {
        next();
    }
})
router.get('/aluno', (req, res)=> {
    console.log(req.query);
    let aluno = alunos[req.query.id];
    if(aluno) {
        res.json(aluno)
    } else {
        res.send('Aluno não encontrado');
    }

})
router.get('/alunos/all', (req, res)=> {
    res.json(JSON.stringify(alunos));
})
router.get('/aluno/:id', (req, res)=> {
    console.log(req.params.id)
    let aluno = alunos[req.params.id];
    if(aluno) {
        res.json(aluno)
    } else {
        res.send('Aluno não encontrado');
    }
})

module.exports = router;
