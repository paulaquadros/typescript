"use strict";
// Classe: estrutura que abstrai um conjunto de objetos que possuem
// características e comportamentos similares. Descrevendo os serviços
// oferecidos e quais informações podem armazenar.
class Produto {
    constructor(nome, categoria, preco, status) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
}
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProduto.nome);
