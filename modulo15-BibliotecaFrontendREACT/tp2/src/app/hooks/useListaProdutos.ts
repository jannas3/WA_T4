// src/app/hooks/useListaProdutos.ts
import { useQuery } from "@tanstack/react-query";
import api from "@/app/services/api";
import { Produto } from "@/app/types/produto";

async function fetchProdutos(): Promise<Produto[]> {
  const response = await api.get("/produto");
  return response.data;
}

export function useListaProdutos() {
  return useQuery({
    queryKey: ["produtos"],
    queryFn: fetchProdutos,
  });
}
