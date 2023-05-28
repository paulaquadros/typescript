// Classe: estrutura que abstrai um conjunto de objetos que possuem
// características e comportamentos similares. Descrevendo os serviços
// oferecidos e quais informações podem armazenar.

// Objeto: representação de algo no mundo real.

// Exemplo:
// Classe: Produto
// Atributos: nome, categoria, preco, status
// Instância a classe produto: shampoo, “Cuidados Pessoais”, 30,
// “ESGOTADO”.

type Status = "EM_ESTOQUE" | "ESGOTADO";
class Produto {
  nome: string;
  categoria: string;
  preco: number;
  status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
  }
}

const novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");

console.log(novoProduto.nome);
