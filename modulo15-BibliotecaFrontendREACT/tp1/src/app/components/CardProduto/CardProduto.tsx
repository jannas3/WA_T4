import React from "react";
import { Produto } from "../../types/produto";
import Image from "next/image";

type CardProdutoProps = {
  produto: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
};

const CardProduto: React.FC<CardProdutoProps> = ({ produto, adicionarAoCarrinho }) => {
  return (
    <div className="card shadow-sm h-100">
      <Image
        src="/placeholder.png"
        className="card-img-top"
        alt="imagem do produto"
        width={300}
        height={320}
      />
      <div className="card-body bg-light">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text text-secondary">R$ {produto.preco}</p>
        <button
          className="btn btn-dark d-block w-100"
          type="button"
          onClick={() => adicionarAoCarrinho(produto)}
        >
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
