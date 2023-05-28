enum CategoriaLivro {
  FICCAO = "Ficção",
  FANTASIA = "Fantasia",
  DISTOPIA = "Distopia",
  OUTROS = "Outros",
}

interface Livro {
  nome: string;
  preco: number;
  categoria?: CategoriaLivro;
}

const livros: Livro[] = [
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
    nome: "Coração",
    preco: 19.99,
    categoria: CategoriaLivro.DISTOPIA,
  },
  {
    nome: "Livro sem categoria",
    preco: 9.99,
  },
];

for (const livro of livros) {
  const nomeFormatado = livro.nome.includes(" ")
    ? livro.nome.toLowerCase()
    : livro.nome.toUpperCase();

  console.log(`Livro: ${nomeFormatado}`);
  console.log(`Preço: R$ ${livro.preco.toFixed(2)}`);
  console.log(`Categoria: ${livro.categoria || CategoriaLivro.OUTROS}`);
  console.log("---------------------");
}
