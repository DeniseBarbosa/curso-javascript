console.log('Frutas: maça 0'); // -> começa 
console.log('Frutas: pera 1');
console.log('Frutas: banana 2');
console.log('Frutas: uva 3');
console.log('Frutas: abacaxi 4');
console.log('Frutas: melancia 5'); // -> termina

for (let i = 0; i <= 5; i++) {
  console.log(i)
}
                //começa                                  //termina
const objetos = ['copo', 'colher','sapato','cimento','liquidificador'];
for( let i = 0; i<objetos.length; i++){
  console.log(`${i}`, '->', objetos[i])
}