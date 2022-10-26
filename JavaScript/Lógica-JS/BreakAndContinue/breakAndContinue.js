const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){

    // neste caso, ele vai pular o 2, e retornar para o a condição do looping.
    // sem executar o código a baixo...
    // resumindo pula para a proxima iteração do laço
    if(numero === 2){
        console.log('pulei o numero 2');
        continue;
    }

    /**
     * Suponha que a gente queira achar apenas o numero 7 dentro do array
     * logo após isso parar o código...
     * a lógica com a palavra break é justamente para fazer isso!
     * quando numero for === 7, o break é ativado e faz a saida do laço
     */
    if(numero === 7){
        console.log('7 encontrado, saindo ...');
        break;
    }

    console.log(numero);
}