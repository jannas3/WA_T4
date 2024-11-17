//src/app/produto/[produto]/page.tsx
"use client";

import { useDetalhesProduto } from "@/app/hooks/useDetalhesProdutos";
import { useParams } from "next/dist/client/components/navigation";
import Image from "next/image";
import React from "react";

export default function Produto() {
  const produtoId = useParams<{ produto: string }>();
  const { produto, isLoading, isError, error } = useDetalhesProduto(
    produtoId.produto
  );

  console.log(produtoId.produto);

  if (isLoading)
    return <h5 className="card-title mb-4 fw-bold">Carregando...</h5>;
  if (isError || error)
    return (
      <h5 className="card-title mb-4 fw-bold">
        Erro ao carregar detalhes do produto.
      </h5>
    );

  const imageSrc = produto?.fotos ? produto.fotos[0].src : "";
  const imageTitulo = produto?.fotos ? produto.fotos[0].titulo : "";

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            {produto ? (
              <>
                <h5 className="card-title mb-4 fw-light">
                  {produto?.descricao}
                </h5>

                <h5 className="card-title mb-4 fw-bold">{produto?.nome}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                  <Image
                    key={produto?.id}
                    src={imageSrc}
                    alt={imageTitulo}
                    width={300}
                    height={320}
                  />
                </div>

                <p className="card-text fw-medium">Valor: R${produto?.preco}</p>
                <p className="card-text fw-medium">
                  Descrição: {produto?.descricao}
                </p>
                <p className="card-text fw-medium">
                  Anunciado por: {produto?.usuario_id}
                </p>
              </>
            ) : (
              <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
