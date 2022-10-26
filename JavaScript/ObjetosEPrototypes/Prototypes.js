/**
 * JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
 * 
 * Definição de protótipo, é o termo usado para se referir ao que foi criado pela primeira vez, servindo
 * de modelo ou molde para futura produções...
 * 
 * Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade 
 * prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro no próprio
 * objeto, primeiro o motor do JS vai tentar encontrar este membro  no próprio objeto e depois a cadeia de 
 * protótipos é usada até o topo (null) até encontrar ( ou não) tal membro.
 */


// Contrutora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}


/**
 * Basicamente se você instanciar esses dois objetos, você vai criar a mesma função para as duas intâncias e 
 * para as posteriores que viram... Então esta função a cada nova instância, vai ser alocada novos espaços na memória
 * assim comprometendo o desempenhoo/performace da sua Api.
 * 
 * Felizmente existe uma forma de colocar esse método indiretamente dentro de um objeto que vai estar linkado a sua função
 * construtora, imagine que este método estara guardado em um local apenas, e não será necessario criar este método a cada
 * nova instância...
 * 
 * A baixo segue o exemplo do uso do prototype :
 * 
 * Agora todas as intancias usarão este método do mesmo local
 */

 Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
 } 
 



//instância
const pessoa1 = new Pessoa('Caique', 'Batista'); // objetos instanciados que vem da função Pessoa
const pessoa2 = new Pessoa('Ceci', 'Batista');

console.log(pessoa1.nomeCompleto());


console.log(pessoa1);
console.log(pessoa2);

