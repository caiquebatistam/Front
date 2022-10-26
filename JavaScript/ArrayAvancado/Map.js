/**
 * Map -> Com esse cara você percorre o Array, e retorna um novo array com modificações, sem
 * alterar o array original...
 * */ 

// Retorne o dobro de cada posição dos números no array ...

/**
 * 
 */

 const numeros = [5,50,80,1,2,3,5,6,7,11,15,22,27];


 const dobroNumber = numeros.map(function(valor){
     return valor * 2;
 });

 
 /**
  * Para cada elemento:
  * 
  * (1) Retorne apenas uma string com o nome da pessoa
  * (2) Retorne apenas  a chave "idade" do objeto
  * (3) Adicione uma chave id em cada objeto
  */
 const pessoas = [
     {nome: "Luiz", idade:62},
     {nome: "Maria", idade:23},
     {nome: "Eduardo", idade:55},
     {nome: "Leticia", idade:19},
     {nome: "Rosana", idade:32},
     {nome: "Wallace", idade:47}
 ];

// (1)
 const primeiroNome = pessoas.map(function(obj){
    return obj.nome;
 })

 //(2)
 const apenasChaveNome = pessoas.map(function(obj){
    // posso usar o delete.obj.nome, mas neste caso eu altero o array original
    // ou simplesmente poderia retornar obj.idade;
    return obj.idade;
 });

//(3)
const chaveId = pessoas.map(function(obj, index){
    obj.id = index;
    return obj;
})


 //console.log(primeiroNome);
 //console.log(apenasChaveNome);
 console.log(chaveId);



 const veiculo = {
    carro:{
        passageiro: 'luiz',
        marca:'pegeout',
        valor:{
            usado: 3000,
            novo: 6000,
        }
    },
};

veiculo.carro.valor.novo = 8000;

console.log(veiculo.carro.valor.novo);
 