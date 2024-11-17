"use client";

import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";

const Favoritos = () => {
  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itensCarrinho={itensCarrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
      </div>
    </main>
  );
};

export default Favoritos;
