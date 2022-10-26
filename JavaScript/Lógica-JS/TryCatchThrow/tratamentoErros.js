

// try -> tente
try {
    console.log(naoExisto); // neste caso a variavel n foi declarada
} catch (error) { // caso a tentaiva do try seja falha, o tratamento deste erro vem a baixo...
    console.log('Essa variavel, não existe');
    console.log(error); // -> o erro fica armazenado na variavel...
}

// exemplo simples :


function soma(x,y){
    if( typeof x !== 'number' || typeof y !== 'number'){
       // throw('caracter digitado não é um number');  lançamento do erro
       throw new Error('Para de ser burro, tu só consegue somar com números...'); // Neste caso estou criando um novo erro
    }
    return x + y;
}

try {
    console.log(soma(1,'a'));
} catch (error) {
    console.log(error);
}finally{ // Geralmente só usamos o bloco try-catch, mas em alguns momentos é necessario o uso do Finally
    //Ele sempre vai executar oq você colocar dentro dele...

}