/**
 *  Local Storage armazena dados localmente!
 *  Só pode ser testado desta forma em ambientes de navegador,
 *  pois o console não consome as mesmas apis que o navegador...
 * 
 * */

//Passamos a chave e o valor / key and value /
localStorage.setItem('nome', 'Caique') 

// Para buscar o item, basta colocar a chave / key /
localStorage.getItem('nome')

// Se o uso do localStorage for em ambiente de teste ...
//esse código só vai passar via Mock 