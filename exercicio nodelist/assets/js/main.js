
const paragrafo = document.querySelector('.paragrafos');
// selecionando uma coleção de elementos 
const paragrafos = document.querySelectorAll('p');

const cor = getComputedStyle(document.body);
const corDeFundo = cor.backgroundColor;
for(let p of paragrafos){
  p.style.backgroundColor = corDeFundo;
  // cor das frases 
  p.style.color ='#ffffff'
}
