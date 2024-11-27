"use client";
import React, { useState } from "react";
import ListagemProduto from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { ItemCarrinho } from "./types/carrinho";
import { Produto } from "./types/produto";


export default function Produtos() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [valorTotal, setValorTotal] = useState<number>(0);
  const [qtdItens, setQtdItens] = useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    console.log("Produto adicionado ao carrinho:", produto);

    const atualizarCarrinho = (newCarrinho: ItemCarrinho[]) => {
      setCarrinho(newCarrinho);
      setQtdItens((prevQtdItens) => prevQtdItens + 1);
      setValorTotal((prevValorTotal) => prevValorTotal + Number(produto.preco));
    };

    const itemExiste = carrinho.find((c) => c.id === produto.id);

    if (itemExiste) {
      const newCarrinho = carrinho.map((c) =>
        c.id === produto.id ? { ...c, quantidade: c.quantidade + 1 } : c
      );
      atualizarCarrinho(newCarrinho);
    } else {
      const newCarrinho = [
        ...carrinho,
        {
          ...produto,
          id: produto.id,
          nome: produto.nome,
          preco: Number(produto.preco),
          quantidade: 1,
        },
      ];
      atualizarCarrinho(newCarrinho);
    }
  };

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          precoTotal={valorTotal}
          quantidadeItensTotal={qtdItens}
        />
        <ListagemProduto adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </main>
  );
}
