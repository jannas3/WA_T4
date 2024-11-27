import { Produto } from "../types/produto";
import api_json from "./api_json_server";

export const addProdutoFavortio = async (produto: Produto) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return api_json
    .post<Produto>("/favoritos", produto)
    .then((response) => response.data);
};

export const listProdutosFavoritos = async (): Promise<Produto[]> => {
  return api_json
    .get<Produto[]>("/favoritos")
    .then((response) => response.data);
};

export const deleteProdutoFavorito = async (id: string) => {
  return api_json.delete(`/favoritos/${id}`);
};
