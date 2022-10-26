// Herança com classe no JavaScript


class DispositivoEletronico{

    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + 'Já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'Já desligado');
            return;
        }

        this.ligado = false;

    }
}

const d1 = new DispositivoEletronico('SmartPhone');

d1.ligar();

console.log(d1);

class Smarthphone extends DispositivoEletronico {

    constructor(nome,cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }

    ligar(){
        console.log('testando');
    }

}

const iphone = new Smarthphone('Iphone','preto','14 max Pro');

iphone.ligar(); // Neste caso, ele buscou o método no próprio objeto, caso não encontrasse, ele iria na classe pai...

console.log(iphone);



// Posso extender quantas vezes eu quiser ...