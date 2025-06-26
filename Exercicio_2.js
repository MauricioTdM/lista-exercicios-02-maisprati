// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")()

function getRandomNumber(max) {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber
}

const randomNumber = getRandomNumber(100);

let userNumber = Number.parseInt(prompt("Adivinhe o número: "));

while (userNumber !== randomNumber) {
    (randomNumber > userNumber) ? console.log("Mais alto") : console.log("Mais baixo")
    userNumber = Number.parseInt(prompt("Tente novamente: "));
}

console.log("Parabéns! Você acertou!");
