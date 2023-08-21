//Arrays
const elementos =[
  //objetos
   {tag: 'p', texto: 'Foi criado um parágrafo'}, //-> começa
   {tag: 'div', texto: 'Foi criado uma div'},
   {tag: 'footer', texto: 'Foi criado um rodapé'},
   {tag: 'section', texto: 'Foi criado uma seção'},// -> termina
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // -> criar uma div

// vamos usar o for para percorrer o array elementos 
for(let i = 0; i< elementos.length; i++){
  // vamos capturar os valores do array elementos, para isso vamos usar a desistruturação do objeto
  let {tag, texto} = elementos[i]
  //criar os elementos
  let criarElemento = document.createElement(tag);
  // dentro dos elementos criados como p, div e etc vamos colocar os textos 
  criarElemento.innerHTML = texto;
  // vamos add os elementos criados, p, div e etc na no elemento div 
  div.appendChild(criarElemento);
  
}
container.appendChild(div)