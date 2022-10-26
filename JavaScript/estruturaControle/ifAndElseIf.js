    Number.prototype.entre = function (inicio, fim) {
        return this >= inicio && this <= fim
    }

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Tu passou meu paceeeeru, brabo, monstro sagrado")
    }else if(nota.entre( 7, 8.99)) {
        console.log("Tu passou apenas, nada de mais/mediocre"+ " " +
        "melhore...")
    }else if (nota.entre(0,  6)) {
        console.log("Não sabe Não sabe, vai ter que aprender, orelha de burro"
         + " " 
         + "cabeça de ET")
    }else{
        console.log('Nota invalida')
    }
    console.log('fim')
}

imprimirResultado(6)