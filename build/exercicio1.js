"use strict";
const livros = [
    {
        nome: "Dom Quixote",
        preco: 29.99,
        categoria: "Ficção",
    },
    {
        nome: "O Senhor dos Anéis",
        preco: 49.99,
        categoria: "Fantasia",
    },
    {
        nome: "1984",
        preco: 19.99,
        categoria: "Distopia",
    },
];
for (const livro of livros) {
    console.log(`Livro: ${livro.nome}`);
    console.log(`Preço: R$ ${livro.preco.toFixed(2)}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("---------------------");
}
