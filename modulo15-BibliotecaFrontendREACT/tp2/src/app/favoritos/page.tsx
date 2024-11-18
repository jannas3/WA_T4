"use client";

import { toast } from "react-toastify";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useListaFavoritos } from "../hooks/useListaFavoritos";
import { deleteProdutoFavorito } from "../services/favoritos";

const Favoritos = () => {
  const { listaFavoritos, isLoading, refetch } = useListaFavoritos();
  const removerItem = async (id: string) => {
    await deleteProdutoFavorito(id);
    refetch();
    toast.success("Item Removido de Favoritos!");
  };
  return (
    <main>
      <div className="container p-5">
        {isLoading ? (
          "Carregando"
        ) : (
          <ListagemFavoritos
            itensFavoritos={listaFavoritos}
            remove={removerItem}
          />
        )}
      </div>
    </main>
  );
};

export default Favoritos;
