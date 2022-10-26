/**
 * Com o uso da classe como padrão de projeto, perceba que não precisamos 
 * criar as classes junto ao objeto prototype, isso é feito de forma automatica 
 * Bem mais interessante ... 
 */

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

    }

    falar(){
        console.log(`${this.nome} esta hablando `);
    }
    comer(){
        console.log(`${this.nome} esta carregando o buxin `);
    }
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 = new Pessoa('Caique', 'Batista');

console.log(p1);

p1.beber();

p1.comer();

p1.falar();