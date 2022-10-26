const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // pra saber o tipo, se inteiro retorna true no console
console.log(Number.isInteger(peso2))



const avaliacao1 = 5
const avaliacao2 = 3

const total = avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1+ peso2)

console.log(media.toFixed(2)) // casas decimais que eu escolher


console.log(media.toString()) // transformando em string

console.log(typeof media)











