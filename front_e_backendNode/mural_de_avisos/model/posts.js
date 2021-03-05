module.exports = {
    posts:[
        {id:'ju',
        title:'Teste do Mural',
        description:'Descrição teste'
        }
    ],

    getAll() {
        return this.posts;
    },

    newPosts(title, description) {
        this.posts.push({ id:generatorID(), title, description });
    }
};

function generatorID() {
    return Math.random().toString(36).substr(2, 9);
}
