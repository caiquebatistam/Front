
//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('Ta sem money papito : ');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;

    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log('seu saldo atual é : ' + this.saldo);
}

const contaNU = new Conta(14, 162, 400);

contaNU.depositar(20);
contaNU.depositar(1000);

contaNU.sacar(400);


contaNU.sacar(2000);
