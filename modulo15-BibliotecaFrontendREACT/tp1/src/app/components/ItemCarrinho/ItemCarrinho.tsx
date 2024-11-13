import React from 'react';
import { ItemCarrinho } from '../../types/carrinho';

interface ItemCarrinhoProps {
  item: ItemCarrinho;
  removerItemDoCarrinho: (id: string) => void;
}

const ItemCarrinhoComponent: React.FC<ItemCarrinhoProps> = ({
  item,
  removerItemDoCarrinho,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.nome}</h5>
        <p>Quantidade: {item.quantidade}</p>
        <p>Preço: R$ {item.preco}</p>
        <p>Total: R$ {(item.quantidade * item.preco).toFixed(2)}</p>
        <button
          className="btn btn-danger"
          onClick={() => removerItemDoCarrinho(item.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default ItemCarrinhoComponent;