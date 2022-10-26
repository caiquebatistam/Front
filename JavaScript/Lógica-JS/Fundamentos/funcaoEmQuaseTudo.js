console.log(typeof Object) // o objeto em Js é um função

class Produto {}
console.log(typeof Produto)

// função sem retorno no Js


function imprimirSoma(a, b){

console.log(a+b)

}


imprimirSoma(2,3)


// funcao com retorno

function soma (a, b = 0){
    return a+b

}
console.log(soma(2,3))