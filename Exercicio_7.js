// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const products = [
    { name: "Notebook", value: 3500.00 },
    { name: "Smartphone", value: 2200.00 },
    { name: "Fone de Ouvido", value: 250.00 },
    { name: "Teclado Mecânico", value: 450.00 },
    { name: "Mouse Gamer", value: 300.00 },
    { name: "Cadeira Ergonômica", value: 800.00 },
    { name: "Webcam Full HD", value: 400.00 },
    { name: "HD Externo 1TB", value: 600.00 },
    { name: "Impressora Multifuncional", value: 900.00 }
];

function showSortedProducts(productsArray) {
    const sortedProductsName = []

    const sortedProducts = productsArray.toSorted((a, b) => a.value - b.value);
    sortedProducts.map((product) => sortedProductsName.push(product.name))

    return sortedProductsName
}

console.log(showSortedProducts(products))
