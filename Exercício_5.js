// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

FAZER NOVAMENTEEEEEEEEEEEEEEEEEEEEEEE

function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId); // Cancela o timeout anterior, se houver

    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Chama fn com os argumentos e contexto corretos
    }, delay);
  };
}

function digitar() {
  console.log("Usuário terminou de digitar!");
}

const debouncedDigitar = debounce(digitar, 1000);

// Simulando chamadas rápidas:
debouncedDigitar(); // chamada 1
debouncedDigitar(); // chamada 2 (reinicia o timer)
debouncedDigitar(); // chamada 3 (reinicia o timer)

// "digitar" só será chamado 1 segundo depois da última chamada