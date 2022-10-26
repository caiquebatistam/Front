// DefineProperty - defineProperties

// Basicamente um é para uma chave só e o outro para varias chaves ...


/**
 * Posso fazer o uso deste cara pra ter uma segurança/ controle maior
 * no que eu posso ou não fazer dentro do código para essas propriedas
 */


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    // recebo objeto, o nome da chave e objeto com descrição deste cara
    Object.defineProperty(this, 'estoque', {
     enumerable: true, // true para mostrar a chave
     // value: , -> como vou setar o valor através do método set, não preciso deste cara
     // writable: , -> como estou usando o set para fazer a alteração deste cara, essa descrição não é mais necessaria.
     configurable: true, // se eu posso ou não configurar outro objeto, neste caso eu poderia criando um novo Object.defineProperty
    
     // posso tbm utilizar para o get e set

    get: function(){
        return estoquePrivado;
    },

    set: function(valor){
        if(typeof valor !== 'number'){
            throw new TypeError('Só numero meu cria, pare de ser burricu seu nojento')
        }
        estoquePrivado = valor;

    }
    });

    // recebe um objeto tbm,
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome, // valor da propriedade, neste caso passei o param nome
            writable: false, // se eu posso ou não alterar o valor da variavel, neste caso não, passei false
            configurable: true 
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true 
        }
    });

}


const p1 = new Produto('Caderno', 18.40, 2);

// Object.Keys -> para ver as chaves
//console.log(Object.keys(p1));
p1.estoque = 24;
console.log(p1.estoque);




