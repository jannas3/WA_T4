// src/types/produto.ts
interface Foto {
  titulo: string;
  src: string;
}

// src/app/types/produto.ts
export interface Produto {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: { src: string; titulo: string }[];
  vendido: string;
}
