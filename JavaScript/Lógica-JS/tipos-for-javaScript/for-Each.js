const nome = ['Caique', 'Elie', 'Joel'];

// faz a mesma coisa, o elemento percorre o array.
// neste caso, podemos passar valor e indice como parametros
// da função, sendo o indice opcional
// poodemos até passar o array completo como terceiro param
nome.forEach(function(valor, indice){
 console.log(valor, indice);
});