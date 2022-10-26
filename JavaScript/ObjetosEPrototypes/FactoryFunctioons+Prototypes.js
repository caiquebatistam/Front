function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    };
}

function criaPessoa2(nome, sobrenome){
    return{
        pessoa1:
        [this.nome = nome,
         this.sobrenome = sobrenome
        ]
    }

}


const p1 =  criaPessoa('Caique', 'Batista');

console.log(p1);


criaPessoa.prototype.falar = function (){
    console.log('Estou hablando papito');
}


p1.falar();
