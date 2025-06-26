// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require("prompt-sync")();

const sentence = prompt("Digite uma frase: ");

const words = sentence.split(" ");

const uniqueWords = [];

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
    }
}

console.log(uniqueWords);
