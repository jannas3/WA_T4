import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { addProdutoFavortio } from "../services/favoritos";

export const useAddFavorito = () => {
  const queryClient = useQueryClient();

  const {
    mutate: addFavorito,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (produto: Produto) => addProdutoFavortio(produto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoritos"] });
    },
  });

  return { addFavorito, isPending, isError, error };
};
