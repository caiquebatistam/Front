const escola = "Cod3r"

console.log(escola.charAt(4)) // achar a posição desejada do caracter

console.log(escola.charCodeAt(3)) // tabela unicode

console.log(escola.substring(1)) 

console.log('Escola ' .concat(escola).concat("!")) // concatenar

console.log(escola.replace(3, 'e')) // substitui a posição escolhida pelo exemplo


/*
 * Convertendo string para um array, é passado a virgula como separador
 * no exemplo será criado um array com 3 posições, guardando 3 elementos
 *
 */
console.log("Ana, Maria, Pedro".split(',')) 