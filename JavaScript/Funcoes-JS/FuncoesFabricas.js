// Funções que retornam um objeto

// Quando uma função está dentro de um objeto, a chamamos de **Método**

// É sempre o this que chama o objeto...


/**
 * 
 * 
 * FACTORY FUNCTION ( FUNÇÃO FABRICA)
 * 
 */
function criaPessoa(nome, sobrenome, altura){
    return {
        nome: nome,  // perceba que o objeto esta recebendo o parametro nome
        sobrenome: sobrenome, // a mesma coisa acontece aqui
        peso: 120,
        altura: altura,
        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}, seu peso é ${this.peso}kg`;
        },
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return `Seu IMC é de: ${indice.toFixed(2)}`;
        },
        // GETTER
        get qualquerCoisa(){
            return 'ai papai';
        },
        get nomeCompleto(){
            return this.nome +' '+ this.sobrenome
        },
        // SETTER
        set nomeCompleto(valor){

        }
        

        // para acessar um objeto que não esta no parametro, é necessario o uso do THIS.
    };
}
/**
 * Um outro exemplo pra simplificar seria o seguinte :
 * Repare que a variavel p1 recebe a função criaPessoa...
 * Quando queremos acessar qualquer objeto desta função
 * teriamos que usar p1.nome por exemplos, o uso da palavra this é exatamente
 * isso, 'referenciamos'  a varia com this
 */
const p1 = criaPessoa('Caique', 'Batista'); // neste caso o this, assume o valor de p1
const p2 = criaPessoa('Thais', 'Tchamba');
console.log(p2.fala('Terraplanistas'));
console.log(p1);
console.log(p1.fala('Tchamba'));

const p3 = criaPessoa('Willian','Lemos', 1.90);
console.log(p3.imc());
console.log(p3.qualquerCoisa); // com o uso do get, eu não preciso passar **( )** , ele  fica como atributo do objeto
// pois neste caso só queremos obter o valor

console.log(p3.nomeCompleto = 'Tchambinha'+'Magica');