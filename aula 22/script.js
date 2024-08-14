function verificaIdade(idade) {
    if (idade < 18) {
        return "menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        return "adulta";
    } else {
        return "idosa";
    }
}


const idade ("") = 70;
const resultado = verificaIdade(idade);
console.log(`A pessoa com ${idade} anos é ${resultado}.`);