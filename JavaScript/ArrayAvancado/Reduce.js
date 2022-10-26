/**
 * Reduce -> O reduce busca reduzir um array... Ele iterará por cada elemento desta
 * lista com o objetivo de ao final gerar um único valor(de qualquer tipo) que relembraram
 * a pegada funcional do javaScript.
 * */ 

// Some todas as posições de seu array e retorne um único valor (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
 const numeros = [5,50,80,1,2,3,5,6,7,11,15,22,27];


 const total = numeros.reduce(function(acumulador, valor, index, array){
    acumulador += valor;
    return acumulador; 
 },0) // tambem posso receber um valor inicial para meu acumulador...


const numerosPares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0) return acumulador;
},0);

console.log(numerosPares);


// Retorne pessoas mais velhas
const pessoas = [
    {nome: "Luiz", idade:62},
    {nome: "Maria", idade:23},
    {nome: "Eduardo", idade:55},
    {nome: "Leticia", idade:19},
    {nome: "Rosana", idade:32},
    {nome: "Wallace", idade:47}
];

const maisVelha = pessoas.reduce(function(acumulador, obj){
    if(acumulador.idade > obj.idade) return acumulador;
});

console.log(maisVelha);



