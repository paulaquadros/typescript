"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
        this.codigo = this.gerarCodigo();
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    // Método privado que gera um código para o produto
    gerarCodigo() {
        return "12345678";
    }
    // Métodos protected (protegidos) podem apenas ser acessados pela própria classe ou por classes que herdam dela (filhas)
    adicionar() {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.getNome()}, categoria: ${this.getCategoria()}`);
    }
    mudarStatus(status) {
        if (status === "EM_ESTOQUE") {
            this.status = "EM_ESTOQUE";
        }
        else {
            this.status = "ESGOTADO";
        }
    }
    // Getters e setters
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
}
const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
// novoProduto.adicionar();
// console.log(novoProduto.getCodigo());
// console.log(novoProduto.getNome());
// console.log(novoProduto.getCategoria());
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        // Chama o construtor da classe pai (só pra eu lembrar que isso existe :D)
        super(nome, categoria, preco, status);
        this.verificarFaixaEtaria(faixa_etaria);
        this._faixa_etaria = faixa_etaria;
    }
    verificarFaixaEtaria(faixa_etaria) {
        if (faixa_etaria > 12) {
            // Verifica se a faixa etária é maior que 12, se for, lança um erro
            throw new Error("A faixa etária deve ser até 12 anos para produtos infantis.");
        }
    }
    adicionarProdutoInfantil() {
        this.adicionar();
    }
    getFaixaEtaria() {
        return this._faixa_etaria;
    }
}
const novoProdutoInfantil = new ProdutoInfantil("Shampoo Infantil", "Cuidados Pessoais", 25, "EM_ESTOQUE", 8);
novoProdutoInfantil.adicionarProdutoInfantil(); // Método acessível através da classe filha
console.log(novoProdutoInfantil.getCodigo());
console.log(novoProdutoInfantil.getNome());
console.log(novoProdutoInfantil.getCategoria());
console.log(novoProdutoInfantil.getFaixaEtaria());
