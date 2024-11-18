import { useQuery } from "@tanstack/react-query";
import { listProdutosFavoritos } from "../services/favoritos";
import { ProdutoAPI } from "../types/ProdutoAPI";

export const useListaFavoritos = () => {
  const {
    data: listaFavoritos,
    isLoading,
    refetch,
  } = useQuery<ProdutoAPI[], Error>({
    queryKey: ["Favoritos"],
    queryFn: () => listProdutosFavoritos(),
  });

  return {
    listaFavoritos,
    isLoading,
    refetch,
  };
};
