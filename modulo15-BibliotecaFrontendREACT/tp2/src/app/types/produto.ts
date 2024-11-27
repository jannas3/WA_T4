interface Foto {
  titulo: string;
  src: string;
}

export interface Produto {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: { src: string; titulo: string }[];
  vendido: boolean;
  usuario_id: string;
}
