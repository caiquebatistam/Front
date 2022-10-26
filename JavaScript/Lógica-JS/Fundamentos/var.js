{
    {
        {
            {
                 var sera = 'Será???'
                console.log(sera)
            }

        }
    }
}

/* neste caso o console.log só vai funcionar dentro da função,
   pois a variavel foi declarada localmente*/
function teste(){
    var local = 123
    console.log(local)

}
// Neste exemplo, chamar a variavel não irá funcionar
teste()
console.log(local)

