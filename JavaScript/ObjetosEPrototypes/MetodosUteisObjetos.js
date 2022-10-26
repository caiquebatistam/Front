/**
 * No exemplo a baixo, caso o dev atribua a uma variavel o objeto produto
 * as duas variaveis passarão a apontar para o mesmo local na memória,
 * dito isso tudo oque for feito em uma será alterada em ambas ...
 */

const produto = {
    nome : 'video game',
    preco: 4500,
    modelo: 'playstation 5',
    marca: 'sony'
};

const videoGame = produto;
videoGame.estoque = 6; // atribuindo mais uma chave e valor
// console.log(videoGame); Perceba que a nova chave e valor serão atribuidos para os dois objetos
// console.log(produto); pois eles apontão para o mesmo local na memória

// Para copiar o valor de um array, de forma o objeto seja idependente, exemplo a baixo:

const videoGame2 = {... produto}; // spread
videoGame2.cor = 'preto';
// console.log(videoGame2);

// ou

const videoGame3 = Object.assign({}, produto); // Tambem posso passar mais valores para dentro do objeto dentro da função

videoGame3.estado = 'novo';
// console.log(videoGame3);


//Exemplo para pegar apenas uma propriedade do Objeto

const consoleMicrosoft = { nome: produto.marca}
// console.log(consoleMicrosoft);

// console.log(Object.keys(produto)); // trás as chaves do objeto
// Object.freeze(produto);  congela o objeto, não consegue fazer mais nada

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // busca as informações da propriedade do Objeto
