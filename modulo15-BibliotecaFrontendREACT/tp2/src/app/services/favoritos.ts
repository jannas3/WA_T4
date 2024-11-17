import { Produto } from "../types/produto";
import api_json from "./api_json_server";

export const addProduto = async (produto: Produto) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return api_json.post<Produto>("", produto).then((response) => response.data);
};
