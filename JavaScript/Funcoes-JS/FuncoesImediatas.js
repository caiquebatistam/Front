// IIFE -> Immediately invoked function expression

// É uma função auto executada, ela tambem é livre de um escopo global...
(function(idade, altura){

    function criaNome(nome, sobrenome){
        return nome + ' ' + sobrenome;
    }
    return console.log(criaNome('Caique', 'Batista'+' idade : ' + idade+' altura : ' + altura))

})(29, 1.75); // repare que aqui, já estou chamando a função

const nome = 'Qualquer coisa';