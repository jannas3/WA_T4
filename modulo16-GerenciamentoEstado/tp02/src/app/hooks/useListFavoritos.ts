import { useQuery } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { listProdutosFavoritos } from "../services/favoritos";

export const useListFavoritos = () => {
  const {
    data: listaFavoritos,
    isLoading,
    isError,
    error,
  } = useQuery<Produto[], Error>({
    queryKey: ["favoritos"],
    queryFn: listProdutosFavoritos,
  });

  return { listaFavoritos, isLoading, isError, error };
};
