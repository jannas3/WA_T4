// src/app/types/carrinho.ts
export interface ItemCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Carrinho {
  itensCarrinho: ItemCarrinho[];
}
