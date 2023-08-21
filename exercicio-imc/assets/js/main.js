// Pegando uma referência para o formulário usando o id "formulario"
const form = document.querySelector('.formulario');

// Adicionando um "ouvinte" para quando o formulário for enviado (quando alguém apertar o botão de enviar)
form.addEventListener('submit', function (event) {
  // Impede que o formulário seja realmente enviado, o que é o padrão
  event.preventDefault();

  // Pegando referências para os campos de peso e altura usando os classes "peso" e "altura"
  const inputPeso = form.querySelector('.peso');
  const inputAltura = form.querySelector('.altura');

  // Convertendo os valores dos campos para números
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verificando se o peso foi preenchido corretamente
  if (!peso) {
    // Se não tiver peso, chama a função para exibir uma mensagem de erro
    exibirResultado('Peso inválido', false);
    return; // Encerra a função
  }

  // Verificando se a altura foi preenchida corretamente
  if (!altura) {
    // Se não tiver altura, chama a função para exibir uma mensagem de erro
    exibirResultado('Altura inválida', false);
    return; // Encerra a função
  }

  // Calculando o IMC usando a função calcularImc e guardando o resultado
  const imc = calcularImc(peso, altura);

  // Descobrindo o nível do IMC usando a função obterNivelImc e guardando o resultado
  const nivelImc = obterNivelImc(imc);

  // Criando uma mensagem com o IMC e o nível do IMC
  const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;

  // Chamando a função para exibir o resultado final
  exibirResultado(mensagem, true);
});

// Função para obter o nível do IMC
function obterNivelImc(imc) {
  // Uma lista com os diferentes níveis de IMC e suas descrições
  const niveis = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  // Comparando o IMC com os valores para determinar o nível e retornando a descrição correspondente
  if (imc >= 39.9) return niveis[5];
  if (imc >= 34.9) return niveis[4];
  if (imc >= 29.9) return niveis[3];
  if (imc >= 24.9) return niveis[2];
  if (imc >= 18.5) return niveis[1];
  
  // Se não se encaixar em nenhum dos níveis acima, é considerado "Abaixo do peso"
  return niveis[0];
}

// Função para calcular o IMC
function calcularImc(peso, altura) {
  // Fórmula para calcular o IMC: peso dividido pelo quadrado da altura
  const imc = peso / altura ** 2;

  // Arredondando o resultado para duas casas decimais
  return imc.toFixed(2);
}

// Função para criar um novo parágrafo
function criarParagrafo() {
  // Criando um elemento HTML do tipo "p" (parágrafo)
  return document.createElement('p');
}

// Função para exibir o resultado na página
function exibirResultado(mensagem, isValid) {
  // Pegando uma referência para o elemento com o class "resultado"
  const resultado = document.querySelector('.resultado');
  // Limpando qualquer conteúdo anterior dentro do elemento
  resultado.innerHTML = '';
  // Criando um novo parágrafo usando a função criarParagrafo
  const paragrafo = criarParagrafo();
  // Configurando a mensagem dentro do parágrafo
  paragrafo.textContent = mensagem;
  // Adicionando uma classe CSS ao parágrafo dependendo se o resultado é válido ou não
  if (isValid) {
    paragrafo.classList.add('paragrafo-resultado');
  } else {
    paragrafo.classList.add('bad');
  }

  // Colocando o parágrafo dentro do elemento "resultado" na página
  resultado.appendChild(paragrafo);
}
