# Curso Desenvolvedor Full Stack +Prati - Lista de Exercícios 2 - Aplicando conceitos intermediários em JS

## Aplicando conceitos intermediários em JS

   Este repositório dá continuidade aos estudos em JavaScript, focando em conceitos intermediários essenciais para o desenvolvimento de aplicações mais robustas. Os exercícios abordam desde estruturas de controle avançadas e recursão até a manipulação complexa de arrays e objetos. Alguns desafios utilizam a biblioteca prompt-sync para interações via terminal quando necessário.

---

## 👤 Autor

- Maurício Tavares de Melo

- [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mauricio-tavares-de-melo/)

- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=FFF)](https://github.com/MauricioTdM)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina.
- Biblioteca `prompt-sync` instalada. Caso ainda não tenha, execute o comando abaixo:

```
npm install prompt-sync
```

---

## 📝 Exercícios

### Seção 1: Estruturas de Controle Avançadas

   1. **Validação de Datas**: Cria uma função ehDataValida que verifica se uma data (dia, mês, ano) é real, considerando meses de 28 a 31 dias e anos bissextos. 
   2. **Jogo de Adivinhação**: Script que gera um número aleatório de 1 a 100 e desafia o usuário a adivinhá-lo, fornecendo dicas de "mais alto" ou "mais baixo" a cada tentativa.  
   3. **Palavras Únicas**: Extrai e exibe todas as palavras únicas de uma string fornecida, desconsiderando repetições.

### Seção 2: Funções e Recursão

   4. **Fatorial Recursivo**: Implementa uma função recursiva para calcular o fatorial de um número, tratando casos de erro para números negativos.
   5. **Debounce**: Cria uma função debounce que recebe uma função e um delay, garantindo que a função só seja executada após um período de inatividade.
   6. **Memoization**: Implementa uma função memoize que armazena em cache os resultados de chamadas anteriores para otimizar o desempenho em invocações repetidas com os mesmos argumentos.

### Seção 3: Arrays e Objetos Complexos

   7. **Mapeamento e Ordenação**: A partir de um array de objetos de produtos, cria uma função que retorna um novo array contendo apenas os nomes dos produtos, ordenados pelo preço em ordem crescente.
   8. **Agrupamento por Propriedade**: Utiliza o método reduce para agrupar um array de objetos de vendas por cliente, somando o valor total das compras de cada um.
   9. **Conversão Entre Formatos**: Desenvolve duas funções: paresParaObjeto, que converte um array de pares [chave, valor] em um objeto, e objetoParaPares, que realiza a operação inversa.
---

## ▶️ Como Executar o Projeto Localmente

1. Clone este repositório:

```
git clone https://github.com/MauricioTdM/lista-exercicios-02-maisprati.git
```

2. Execute o arquivo desejado com o Node.js:

```
node <nome_do_arquivo>.js
```

Por exemplo:

```
node Exercicio_1.js
```

3. Siga as instruções exibidas no terminal quando houver.