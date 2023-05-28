"use strict";
var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["FICCAO"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["FANTASIA"] = "Fantasia";
    CategoriaLivro["DISTOPIA"] = "Distopia";
    CategoriaLivro["OUTROS"] = "Outros";
})(CategoriaLivro || (CategoriaLivro = {}));
const livros = [
    {
        nome: "Dom Quixote",
        preco: 29.99,
        categoria: CategoriaLivro.FICCAO,
    },
    {
        nome: "O Senhor dos Anéis",
        preco: 49.99,
        categoria: CategoriaLivro.FANTASIA,
    },
    {
        nome: "1984",
        preco: 19.99,
        categoria: CategoriaLivro.DISTOPIA,
    },
    {
        nome: "Livro sem categoria",
        preco: 9.99,
    },
];
for (const livro of livros) {
    console.log(`Livro: ${livro.nome}`);
    console.log(`Preço: R$ ${livro.preco.toFixed(2)}`);
    console.log(`Categoria: ${livro.categoria || CategoriaLivro.OUTROS}`);
    console.log("---------------------");
}
