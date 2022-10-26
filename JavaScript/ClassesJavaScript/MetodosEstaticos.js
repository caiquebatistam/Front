/**
 * Pra resumir ele não é método de instância, você só consegue usar ele pela própria classe
 * 
 * neste exemplo usando ControleRemoto.trocaPilha();
 */


class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume +=2;
    }

    diminuirVolume(){
        this.volume -=2;
    }

    //Métodos staticos não tem acesso aos dados da instância
    // no exemplo desta classe, ele não teria acessa a volume, tv.
    static trocaPilha(){
        console.log('Ok, vou trocar');
    }

}

const controle1 = new ControleRemoto('controle Samsung');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocaPilha();