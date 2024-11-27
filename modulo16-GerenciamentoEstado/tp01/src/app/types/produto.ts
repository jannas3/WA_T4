type Foto = {
  titulo: string;
  src: string;
};

export type Produto = {
  id: string;
  fotos: Foto[];
  nome: string;
  preco: string;
  desconto: number;
  descricao: string;
  vendido: string;
  usuario_id: string;
};
