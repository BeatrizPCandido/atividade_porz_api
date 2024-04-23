// Captura os elementos do formulário
const formularioProduto = document.getElementById('formulario-produto');
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const feedbackUsuario = document.getElementById('feedback-usuario');
const produtosCadastrados = document.getElementById('produtos-cadastrados');

// Função para enviar os dados do produto para o Back End
const enviarProduto = async () => {
  const url = 'https://httpbin.org/post'; // URL da API
  const dadosProduto = {
    produto: nomeProduto.value,
    valor: valorProduto.value,
    descrição: descricaoProduto.value
  };

  try {
    const resposta = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dadosProduto),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (resposta.ok) {
      feedbackUsuario.textContent = 'Produto cadastrado com sucesso!';
      // Limpa os campos do formulário
      nomeProduto.value = '';
      valorProduto.value = '';
      descricaoProduto.value = '';
    } else {
      feedbackUsuario.textContent = 'Erro ao cadastrar o produto. Tente novamente.';
    }
  } catch (erro) {
    feedbackUsuario.textContent = 'Erro na requisição. Verifique sua conexão.';
  }
};

// Evento de clique no botão Enviar
btnEnviar.addEventListener('click', enviarProduto);
