// Criação do objeto carro
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'prata',
    proprietario: 'Seu Nome', // Adicione seu nome aqui

    // Função para exibir uma frase com as propriedades do carro
    descricao: function() {
        console.log(`Este é um ${this.marca} ${this.modelo} de ${this.ano} na cor ${this.cor}.`);
    }
};

// Exibe o valor da propriedade modelo no console
console.log(carro.modelo);

// Altera a cor do carro para vermelho e exibe o objeto atualizado
carro.cor = 'vermelho';
console.log(carro);

// Adiciona uma nova propriedade chamada proprietario
carro.proprietario = 'Seu Nome'; // Substitua "Seu Nome" pelo seu nome real

// Exibe a descrição do carro usando a função do objeto
carro.descricao();
