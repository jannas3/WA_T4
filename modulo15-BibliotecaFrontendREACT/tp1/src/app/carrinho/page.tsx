// src/app/carrinho/page.tsx
"use client";
import React, { useState } from "react";
import { ItemCarrinho } from "../types/carrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>(mockItensCarrinho);

  const valorTotalCarrinho = () => {
    return itensCarrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  };

  const quantidadeTotalCarrinho = () => {
    return itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
  };

  const removerItemDoCarrinho = (id: string) => {
    setItensCarrinho((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho
            quantidadeTotal={quantidadeTotalCarrinho()}
            valorTotal={valorTotalCarrinho()}
          />
          <ListagemCarrinho
            itensCarrinho={itensCarrinho}
            removerItemDoCarrinho={removerItemDoCarrinho}
          />
        </div>
      </main>
    </>
  );
}
