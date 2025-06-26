// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);

        return result;
    }
}

function fatorial(n) {
    if (n < 0) {
        throw console.error("Fatorial não é definido para números negativos.");
    }

    if (n === 0) {
        return 1
    }

    return n * fatorial(n - 1);
}

// Função fatorial memoizada
const memoizedFatorial = memoize(fatorial);

// Teste com memoização
console.time("Fatorial com memoização");
console.log(memoizedFatorial(150));
console.timeEnd("Fatorial com memoização");

// Teste de memoização
console.time("Fatorial com memoização (cache)");
console.log(memoizedFatorial(150));
console.timeEnd("Fatorial com memoização (cache)");

// Teste sem memoização
console.time("Fatorial sem memoização");
console.log(fatorial(150));
console.timeEnd("Fatorial sem memoização");