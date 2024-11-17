"use client";

import React, { useState, useEffect } from "react";
import ListagemProduto from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { ItemCarrinho } from "./types/carrinho";
import { Produto } from "./types/produto";
import api from "./services/api";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [valorTotal, setValorTotal] = useState<number>(0);
  const [qtdItens, setQtdItens] = useState<number>(0);

  useEffect(() => {
    const controller = new AbortController();

    let isMounted = true;

    api
      .get(`/produto/`, {
        signal: controller.signal,
      })
      .then((response) => {
        if (isMounted) {
          setProdutos(response.data);
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Requisição cancelada");
        } else {
          console.error("Erro ao buscar produtos:", error);
        }
      });

    return () => {
      controller.abort();
      isMounted = false;
    };
  }, []);

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
        {produtos ? (
          <ListagemProduto
            produtos={produtos}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </main>
  );
}
