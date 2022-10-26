


class Carro {
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    get velocidade (){
        console.log('GETTER');
        return this.velocidade;
    }


    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this.velocidade = valor;
    }

    acelerar(){
        if(this.velocidade >=100) return;
        this.velocidade ++;
    }
    
    freiar(){
        if(this.velocidade <= 0) return;
        this.velocidade--;
    }

}

const c1 = new Carro('Fusca');

// O setter já esta implicito no sinal de atribuição ...
c1.velocidade = 62;

console.log(c1.velocidade);