/* Neste ex, o let é apenas local, então fora do loop, ele não 
   estara visivel*/

for ( let i = 0; i <10; i++) {
    console.log(i)
}

console.log('i = ', i)