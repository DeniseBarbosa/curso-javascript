const pessoas = [
  { nome: "Alice", idade: 25, peso: 55 },
  { nome: "Bob", idade: 32, peso: 70 },
  { nome: "Carol", idade: 28, peso: 60 },
  { nome: "David", idade: 21, peso: 75 }
];

// filtar nomes que começa com D -> caso quiser filtrar nomes que termina com alguma coisa só acrescentar endsWith
const nome = pessoas.filter((valor) =>{
  return valor.nome.toLocaleLowerCase().startsWith('b');
  
});
console.log(nome);
// filtrar pessoas com peso maior que 50
const peso = pessoas.filter(valor => valor.peso > 50);
console.log(peso)
// filtar pessoas com idade menos que 30 
const idade = pessoas.filter(valor => valor.idade < 30);
console.log(idade)
