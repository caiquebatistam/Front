/*
Array é representado com chaves, no Js o array é heterogenio, posso armazenar
qualquer dado e definir o tamanho dele em qualquer momento, porem o indicado
é sempre criar um array com o mesmo tipo, para ficar claro e de forma mais 
organizada
*/

const value = [7.7, 9.2, 4.3, 2.4]
console.log(value[0], value[3])


value [4] = 10 // -> criando uma quarta posição no meu array
console.log(value.length) // diz quantos elementos existe no array
value.push({id: 3},false, null, 'teste') // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
console.log(value.pop()) // tira o ultimo elemento do array
delete value[0] // vai tirar o primeiro elemento do array

console.log(typeof value)
console.log(value)
