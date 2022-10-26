function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [dadosPessoa];

    function recebeEventoForm (event){

        event.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoa.push({
           nome : nome.value,
           sobrenome : sobrenome.value,
           peso : peso.value,
           altura : altura.value
        });

        console.log(pessoa);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();