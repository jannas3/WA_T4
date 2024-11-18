import { ProdutoAPI } from "../types/ProdutoAPI";
import api_json from "./api_json_server";

export const addProduto = async (produto: ProdutoAPI) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return api_json
    .post<ProdutoAPI>("/favoritos", produto)
    .then((response) => response.data);
};

export const listProdutosFavoritos = async (): Promise<ProdutoAPI[]> => {
  return api_json
    .get<ProdutoAPI[]>("/favoritos")
    .then((response) => response.data);
};

export const deleteProdutoFavorito = async (id: string) => {
  return api_json.delete(`/favoritos/${id}`);
};
