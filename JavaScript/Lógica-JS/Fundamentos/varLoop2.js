/* Perceba que neste exemplo, quando a variaveis funcs é chamada
    seu valor sera de 10, idepente da posição que você escolher chamar
    este é o fomoso erros histórico do JavaScript */

const funcs = []


for( var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    
    })
}

funcs[2]()
funcs[8]()

/* No exemplo a baixo usarei a mesma função, só que desta vez
    usando o  let ao invés do var */

    const funcs2 = []


for( let i = 0; i < 10; i++){
    funcs2.push(function() {
        console.log(i)

    })
}

funcs2[2]()
funcs2[8]()
