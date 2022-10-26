const data = new Date();

let diaSemana = data.getDay();




function getDiaSemana(diaSemana){
    let diaSemanaTexto;

    // Qual a variavel eu quero verificar 
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'terça';
            break;
        case 3:
            diaSemanaTexto = 'quarta';
            break;
        case 4:
            diaSemanaTexto = 'quinta';
            break;
        case 5:
            diaSemanaTexto = 'sexta';
            break;
        case 6:
            diaSemanaTexto = 'sábado';
            break;                 
        default:
            break;
    }
    console.log(diaSemanaTexto);
    return diaSemana;
  
}


console.log(getDiaSemana(4));