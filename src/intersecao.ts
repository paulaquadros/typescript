type Info = {
  id: number;
  nome: string;
  slug: string;
  descricao?: string;
  qtdProd: number;
};
type Categoria = { slug: string; qtdProd: number };

type ProdutoInfo = Info & Categoria;

const newProduct: ProdutoInfo = {
  id: 54321,
  nome: "Teclado RBG",
  slug: "teclado mecanico",
  qtdProd: 10,
};

console.log(newProduct);
