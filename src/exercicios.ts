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

type Autor = "JK Rowling" | "George Orwell";

type Biblioteca = { [autor in Autor]: Livro[] };

const biblioteca: Biblioteca = {
  "JK Rowling": [
    {
      nome: "Harry Potter",
      preco: 29.99,
      categoria: CategoriaLivro.FICCAO,
    },
    {
      nome: "Animais Fantásticos",
      preco: 49.99,
      categoria: CategoriaLivro.FANTASIA,
    },
  ],
  "George Orwell": [
    {
      nome: "1984",
      preco: 19.99,
      categoria: CategoriaLivro.DISTOPIA,
    },
    {
      nome: "A Revolução dos Bichos",
      preco: 9.99,
      categoria: CategoriaLivro.OUTROS,
    },
  ],
};

Object.entries(biblioteca).forEach(([autor, livros]) => {
  console.log(`Autor: ${autor}`);
  console.log("Livros:");
  livros.forEach((livro) => {
    const nomeFormatado = livro.nome.includes(" ")
      ? livro.nome.toLowerCase()
      : livro.nome.toUpperCase();
    console.log(`- ${nomeFormatado}`);
  });
  console.log("---------------------");
});
