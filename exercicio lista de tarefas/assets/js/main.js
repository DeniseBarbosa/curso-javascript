// selecionar os elementos 
const nTarefa = document.querySelector('.nova-tarefa');
const bTarefa = document.querySelector('.btn-add-tarefa');
const lTarefa = document.querySelector('.tarefas');




function criarLista(){
  const li = document.createElement('li');
  return li;
}

//essa função servira para quando vc clicar no botão enter add nova tarefa
nTarefa.addEventListener('keypress', function  (e) {
  if(e.keyCode == 13){
    if (nTarefa.value === '') return;
    criarTarefa(nTarefa.value);
  }
});

//essa função limpara o input quando voce criar novas tarefas
function limparInput(){
  nTarefa.value = '';
}

//função responsavel para criar o botão de apaagar
function criarBotaoApaar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerHTML = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
  // vamos adicionar o que será escrito dentro do input para dentro da lista 
  const li = criarLista();
  li.innerHTML = textoInput;
  lTarefa.appendChild(li);
  limparInput();
  criarBotaoApaar(li);
  // salvarTarefas(); 
}



//capturar o evento de click, ao clicar no botão fazer alguma coisa
bTarefa.addEventListener('click', function  () {
// Se o valor inserido na entrada de texto for vazio, encerre imediatamente a execução da função
// pode ser feito dessa maneira tambem  -> if (!nTarefa.value) return;
  if (nTarefa.value === '') return;
  
  // essa função será responsavel para criar uma nova tarefa 
  criarTarefa(nTarefa.value);
});

//função que vai dar poder para o botão apagar 
document.addEventListener('click', function  (e) {
  const el = e.target;
  if(el.classList.contains('apagar')){
      el.parentElement.remove();
  }
});

