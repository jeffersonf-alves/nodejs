
window.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
});

function updatePost() {

    let promisse = fetch('http://localhost:3001/api/all').then((res)=>{
        return res.json();
    });
    promisse.then(json=> {
        console.log(json);
    })
}

function newPosts() {
    alert('Funcionando');
}