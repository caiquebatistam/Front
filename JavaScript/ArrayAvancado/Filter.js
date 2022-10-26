// Filter -> Esse cara filtra o Array

// Retorne os numeros maiores que 10 ...


/**
 * Usando a função filter -> ele sempre vai retornar um boolean
 * true: se o elemento for embutido no novo array.
 * false: se o elemento não ser embutido neste novo array.
 */

const numeros = [5,50,80,1,2,3,5,6,7,11,15,22,27];

const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});

console.log(numerosFiltrados);

/**  O mesmo exemplo, só que desta vez replicando dentro de arrow function :
*const numerosFiltradosDois = numeros.filter((valor) => { return valor > 10});
*Não preciso condicionar, pois o resultado de valor > 10 já é um booleano.   
                                            como é apenas um param, n utilizei os '()'
                                            um linha de código, o return é implicito.
*/                                         
const numerosFiltradosDois = numeros.filter(valor => valor > 10);

console.log(numerosFiltradosDois);


/**
 * Agora vamos a um exemplo um pouco mais complexo :
 * 
 * (1) Retornar as pessoas que tem o nome com 5 letras ou mais:
 * (2) Retornar as pessoas com mais de 50 anos:
 * (3) Retornar as pessoas cujo o nome terminar com a letra 'a':
 */

const pessoas = [
    {nome: "Luiz", idade:62},
    {nome: "Maria", idade:23},
    {nome: "Eduardo", idade:55},
    {nome: "Leticia", idade:19},
    {nome: "Rosana", idade:32},
    {nome: "Wallace", idade:47}
];

// Questão 1:
const pessoasNomeGrande = pessoas.filter(function(obj){
    return obj.nome.length > 5;
})
console.log(pessoasNomeGrande);

// Questão 2:
const pessoasMaisCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisCinquentaAnos);

// Questão 3:
const pessoasletraFinalLetraA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasletraFinalLetraA);