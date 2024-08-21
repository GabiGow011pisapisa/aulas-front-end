Manipulação de Elementos no DOM com createElement, appendChild e removeChild

1. createElement
O método createElement cria um novo elemento HTML, mas ele não o insere automaticamente no DOM. Ele cria apenas o "esqueleto" do elemento.

Exemplo:
let novoElemento = document.createElement('div');
novoElemento.textContent = 'Olá, sou um novo elemento!';
Aqui, criamos uma div e definimos o conteúdo de texto para ela. Porém, ela ainda não aparece na página porque ainda não foi adicionada ao DOM.

2. appendChild
O método appendChild adiciona um elemento como o último filho de outro elemento no DOM.

Exemplo:
Vamos adicionar a div que criamos no exemplo anterior ao corpo do documento (body):

document.body.appendChild(novoElemento);
Agora, o conteúdo 'Olá, sou um novo elemento!' será exibido na página porque a div foi inserida no body.

3. removeChild
O método removeChild remove um elemento filho de um elemento pai no DOM.

Exemplo:
Vamos remover o elemento que acabamos de adicionar:

document.body.removeChild(novoElemento);
Esse código vai remover a div que inserimos no body.