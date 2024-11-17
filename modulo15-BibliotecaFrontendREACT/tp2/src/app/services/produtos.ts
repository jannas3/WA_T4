// src/api/services/produtos.ts
import axios from "axios";
import { ProdutoAPI } from "../types/ProdutoAPI";

export const getDetalhesProduto = async (id: string): Promise<ProdutoAPI> => {
  try {
    const response = await axios.get(
      `https://ranekapi.origamid.dev/json/api/produto/${id}`
    );
    return response.data as ProdutoAPI;
  } catch (err) {
    throw new Error(`Falha ao buscar detalhes do produto. Err: ${err}`);
  }
};
