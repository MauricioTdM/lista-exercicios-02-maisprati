// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const sales = [
    { customer: "Maria", total: 100 },
    { customer: "John", total: 200 },
    { customer: "Maria", total: 150 },
    { customer: "John", total: 300 },
    { customer: "Anna", total: 250 },
    { customer: "Anna", total: 100 },
    { customer: "Peter", total: 400 },
    { customer: "Maria", total: 50 },
    { customer: "John", total: 120 },
    { customer: "Peter", total: 150 },
    { customer: "Anna", total: 200 },
    { customer: "Maria", total: 75 },
    { customer: "John", total: 80 },
    { customer: "Peter", total: 170 }
];

const totalPerCustomer = sales.reduce((acc, sale) => {
    acc[sale.customer] = (acc[sale.customer] || 0) + sale.total;
    return acc;
}, {});

console.log(totalPerCustomer);
