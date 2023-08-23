const pessoas = [
  { nome: "Alice", idade: 25, peso: 55 },
  { nome: "Bob", idade: 32, peso: 70 },
  { nome: "Carol", idade: 28, peso: 60 },
  { nome: "David", idade: 21, peso: 75 }
];
// retornar os objetos só com os nomes
const nomes = pessoas.map(valor => valor.nome);
console.log(nomes)
//retornar chave nome: e o valor 
const chaveValor = pessoas.map(chaveValor => ({nome: chaveValor.nome} ));
console.log(chaveValor)
// adicionar uma chave no array de pessoas, mas antes de fazer isso para não alterar o array original vams fazer uma copia
const chaveId = pessoas.map(function(valor, indice){
  const copiarArray = {...valor}
  copiarArray.id = indice;
  return copiarArray;
})
console.log(chaveId)
console.log('-----------------------------------------------')
console.log(pessoas)