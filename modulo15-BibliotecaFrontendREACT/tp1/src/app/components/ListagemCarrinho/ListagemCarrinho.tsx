import React from "react";
import { ItemCarrinho } from "../../types/carrinho";
import ItemCarrinhoComponent from "../ItemCarrinho/ItemCarrinho";

interface ListagemCarrinhoProps {
  itensCarrinho: ItemCarrinho[];
  removerItemDoCarrinho: (id: string) => void;
}

const ListagemCarrinho: React.FC<ListagemCarrinhoProps> = ({
  itensCarrinho,
  removerItemDoCarrinho,
}) => {
  return (
    <div>
      {itensCarrinho.map((item) => (
        <ItemCarrinhoComponent
          key={item.id}
          item={item}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
      ))}
    </div>
  );
};

export default ListagemCarrinho;
