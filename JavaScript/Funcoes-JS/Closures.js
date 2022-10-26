/**
 * Clousure -> é a habilidade de acessar o escopo léxico da própria função
 *  Segue o exemplo a baixo...
 * 
 */



function retornaFuncao(nome){
    //const nome = 'Caique';
    return function (){
        return nome;
    }
}



// Aqui teremos dois Clousure ...

//Quando passei para o param nome -> Caique, o escopo vai receber esta string
const funcao = retornaFuncao('Caique');

// A mesma coisa ocorre aqui, 
const funcao2 = retornaFuncao('Jesus');
console.log(funcao());
console.log(funcao2());