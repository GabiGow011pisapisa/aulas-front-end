fetch(url, options)
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => console.log(data))    // Exibe os dados recebidos no console
  .catch(error => console.error('Erro:', error)); // Trata erros