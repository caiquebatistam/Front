// Herança


/**
 * 
 * Vamos utilizar a função construtora
 * 
 *  E-commerce
 * 
 * produtos > aumento, desconto
 * camiseta > cor / caneca > material
 * 
 */

function Produto(nome, preco){
    this.nome = nome ;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto= function(quantia){
    this.preco -= quantia;
}


// Neste caso, repare que estou herdando tudo de Produto e tendo meus próprios atributos, como cor ....
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Usando o método aumento e desconto vindo do prototype do Produto
// Neste exemplo vamos linkar os prototypes
Camiseta.prototype = Object.create(Produto.prototype);
// desta forma o _proto_ de camiseta vai ser de produto e o construtor tbm
// para corrigir isso podemos fazer assim :
Camiseta.prototype.constructor = Camiseta;


//posso tbm sobrescrever o método aumento dentro do prototype da camiseta
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /100));
}

const camiseta = new Camiseta('Sonic', 29.9, 'azul');

camiseta.aumento(2);

console.log(camiseta);

