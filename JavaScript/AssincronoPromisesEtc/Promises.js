// As soluções antigas para as promisses erão as funções de callBack

// Promise.all Promise.race Promise.resolve Promise.reject
// Alguns métodos uteis de promises ...



function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+ min);
}


function esperaAi (msg, tempo){

    return new Promise((resolve, reject)=>{ // Reject seria o cara que armazena o erro , segue exemplo a baixo

        // É bem parecio com a estrutura try catch
        if(typeof msg !== 'string') reject('BAD VALUE '); // reject vai direto para o catch, ai tratamos o erro como quisermos ...

        setTimeout(()=>{
            resolve(msg);
        },tempo);

    });


}

// Posso encadear esses caras numa boa ...
esperaAi('Testando1', aleatorio(1,3)).then(resposta =>{
    console.log(resposta);
}).catch(e => {
    console.log('ERRO' , e);
});
// esperaAi('Testando2', aleatorio(1,3));
// esperaAi('Testando3', aleatorio(1,3));