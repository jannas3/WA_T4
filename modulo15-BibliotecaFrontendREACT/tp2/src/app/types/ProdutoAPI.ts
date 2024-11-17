type Foto = {
  titulo: string;
  src: string;
};

export type ProdutoAPI = {
  id: string;
  fotos: Foto[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: boolean;
  usuario_id: string;
};
