
const nome = pessoas.filter((valor) =>{
  return valor.nome.toLocaleLowerCase().startsWith('b');
});
console.log(nome);
