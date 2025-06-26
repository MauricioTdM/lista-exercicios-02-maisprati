// 9. Conversão Entre Formatos
// Escreva duas funções:

// - paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// - objetoParaPares(obj) faz o inverso, retornando um array de pares.

const pares = [
    ["nome", "Ana"],
    ["idade", 30],
    ["cidade", "São Paulo"],
];

const obj = {
    nome: "Maurício",
    idade: 28,
    cidade: "Rio de Janeiro",
    profissao: "Desenvolvedor Front End",
    disponivelParaMorarFora: true
};

function paresParaObjeto(pares) {
    const obj = Object.fromEntries(pares)

    return obj
}

function objetoParaPares(obj) {
    const pares = Object.entries(obj)

    return pares
}

console.log(paresParaObjeto(pares));
console.log(objetoParaPares(obj));
