/**
 * Escopo Léxico a função conhece o lugar onde ela foi declarada
 * conhece seus vizinhos etc ...
 */ 


const nome = 'caique';

function falaNome(){
    console.log(nome);
}

/**
 * Neste exemplo, quando a func for chamada o console irá  imprimir o nome que foi declarado na  linha 7
 * Pois a função conhece o local onde foi declarada, e conhece seus vizinhos...
 * Isso caracteriza Escopo Léxico...
 */ 
function usaFalaNome(){
    const nome = 'serginho';
    falaNome(); 
}

usaFalaNome();