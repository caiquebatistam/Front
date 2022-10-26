/**
 * Promises tem 3 estados
 * 
 * promises pendin -> ( pendente), qunando tu não usa nem then() e nem await pra esperar a execução ... Estado iniciald dela !
 * 
 * fullfilled -> promise resolvida
 * 
 * rejected -> promise rejeitada
 * 
 */



function aleatorio(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+ min);
}


function esperaAi (msg, tempo){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg + 'Passei na Promise');
            return;

        }, tempo); 
    });


}

// Basicamente é uma forma mais facil de usar promises ...

async function executa(){

    try{
        const fase1 = await esperaAi('oi oi testando1', aleatorio());
        console.log(fase1);
        const fase2 = await esperaAi('oi oi testando2', aleatorio());
        console.log(fase2);
        const fase3 = await esperaAi('oi oi testando3', aleatorio());
        console.log(fase3);
    
        console.log('terminamos na fase: ', fase3);

    } catch(e){
        console.log(e);
    }
}