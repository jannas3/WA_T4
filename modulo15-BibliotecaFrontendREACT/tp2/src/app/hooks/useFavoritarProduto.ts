import { useMutation } from "@tanstack/react-query";
import { addProduto } from "../services/favoritos";
import { Produto } from "../types/produto";

export const useAddFavorito = (onSuccess: () => void, onError: () => void) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (produto: Produto) => addProduto(produto),
    onSuccess,
    onError,
  });

  return {
    addFavorito: mutate,
    isPending,
  };
};
