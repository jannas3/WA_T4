"use client";
import React, { useState } from "react";
import { Produto } from "./types/produto";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produtos";

export default function Produtos() {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeTotal((prev) => prev + 1);
    setValorTotal((prev) => prev + parseFloat(produto.preco));
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho
            quantidadeTotal={quantidadeTotal}
            valorTotal={valorTotal}
          />
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ListagemProdutos
            produtos={mockProdutos}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        </div>
      </main>
    </>
  );
}
