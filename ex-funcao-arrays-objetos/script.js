function meuEScopo( ) {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function eventoFormulario(evento) {
 
    evento.preventDefault();  // Impede o envio padrão do formulário
    // Seleciona os campos de entrada do formulário
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    // Cria um objeto com os valores dos campos e adiciona-o ao array 'pessoas'
    /**
     * Esse método pega os valores que o usuário digita exemplo: const nome = form.querySelector('.nome'); e etc
     * e adicionar no array const pessoas = []
     */
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    // Exibe as informações no console e na área de resultado
    //aqui exibi o objento dentro do array [] => array {} => objeto [{}] => objeto dentro do array
     console.log(pessoas);

    //aqui vai exibir os resultado na página
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} Peso => ${peso.value} Altura => ${altura.value}</p>`

  };
  // Adiciona o evento de envio de formulário ao formulário
  form.addEventListener('submit', eventoFormulario);
};
// Chama a função para configurar o escopo
meuEScopo();

// Resumindo, este código configura um formulário que captura o nome, sobrenome, peso e altura de uma pessoa, armazena essas informações em um array e exibe os detalhes no console e em uma área de resultado no HTML, sem realizar o envio padrão do formulário.