import React from "react";
import { Produto } from "../../types/produto";
import CardProduto from "../CardProduto/CardProduto";

type ListagemProdutosProps = {
  produtos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
};

const ListagemProdutos: React.FC<ListagemProdutosProps> = ({
  produtos,
  adicionarAoCarrinho,
}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {produtos.map((produto) => (
        <div className="col" key={produto.id}>
          <CardProduto produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
        </div>
      ))}
    </div>
  );
};

export default ListagemProdutos;
