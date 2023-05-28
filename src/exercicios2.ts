type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
  private codigo: string;
  private nome: string;
  private categoria: string;
  private preco: number;
  private status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.codigo = this.gerarCodigo();
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
  }

  // Método privado que gera um código para o produto
  private gerarCodigo(): string {
    return "12345678";
  }

  // Métodos protected (protegidos) podem apenas ser acessados pela própria classe ou por classes que herdam dela (filhas)
  protected adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this.getNome()}, categoria: ${this.getCategoria()}`);
  }

  protected mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this.status = "EM_ESTOQUE";
    } else {
      this.status = "ESGOTADO";
    }
  }

  // Getters e setters
  public getCodigo(): string {
    return this.codigo;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }
}

const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");

// novoProduto.adicionar();
// console.log(novoProduto.getCodigo());
// console.log(novoProduto.getNome());
// console.log(novoProduto.getCategoria());

class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;

  constructor(
    nome: string,
    categoria: string,
    preco: number,
    status: Status,
    faixa_etaria: number
  ) {
    // Chama o construtor da classe pai (só pra eu lembrar que isso existe :D)
    super(nome, categoria, preco, status);
    this.verificarFaixaEtaria(faixa_etaria);
    this._faixa_etaria = faixa_etaria;
  }

  private verificarFaixaEtaria(faixa_etaria: number): void {
    if (faixa_etaria > 12) {
      // Verifica se a faixa etária é maior que 12, se for, lança um erro
      throw new Error(
        "A faixa etária deve ser até 12 anos para produtos infantis."
      );
    }
  }

  public adicionarProdutoInfantil(): void {
    this.adicionar();
  }

  public getFaixaEtaria(): number {
    return this._faixa_etaria;
  }
}

const novoProdutoInfantil = new ProdutoInfantil(
  "Shampoo Infantil",
  "Cuidados Pessoais",
  25,
  "EM_ESTOQUE",
  8
);

novoProdutoInfantil.adicionarProdutoInfantil(); // Método acessível através da classe filha

console.log(novoProdutoInfantil.getCodigo());
console.log(novoProdutoInfantil.getNome());
console.log(novoProdutoInfantil.getCategoria());
console.log(novoProdutoInfantil.getFaixaEtaria());
