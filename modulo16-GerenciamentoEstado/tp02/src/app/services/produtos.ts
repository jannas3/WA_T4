// src/api/services/produtos.ts
import axios from "axios";
import { Produto } from "../types/produto";

export const getDetalhesProduto = async (id: string): Promise<Produto> => {
  try {
    const response = await axios.get(
      `https://ranekapi.origamid.dev/json/api/produto/${id}`
    );
    return response.data as Produto;
  } catch (err) {
    throw new Error(`Falha ao buscar detalhes do produto. Err: ${err}`);
  }
};
