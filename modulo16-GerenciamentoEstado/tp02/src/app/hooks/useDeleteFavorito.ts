import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProdutoFavorito } from "../services/favoritos";

export const useDeleteFavorito = () => {
  const queryClient = useQueryClient();

  const {
    mutate: removeFavorito,
    isPending: isDeleting,
    isError: isErrorDelete,
    error: errorDelete,
  } = useMutation({
    mutationFn: (id: string) => deleteProdutoFavorito(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoritos"] });
    },
  });

  return { removeFavorito, isDeleting, isErrorDelete, errorDelete };
};
