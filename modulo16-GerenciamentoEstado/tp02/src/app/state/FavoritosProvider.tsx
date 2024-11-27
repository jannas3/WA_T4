"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Produto } from "../types/produto";
import { useAddFavorito } from "../hooks/useAddFavorito";
import { useListFavoritos } from "../hooks/useListFavoritos";
import { useDeleteFavorito } from "../hooks/useDeleteFavorito";

type FavoritosProviderProps = {
  children: React.ReactNode;
};

type FavoritosContextProps = {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
  removeFavorito: (id: string) => void;
  isFavorito: (id: string) => boolean;
  addFavorito: (produto: Produto) => void;
  valorTotalFavoritos: () => number;
};

export const FavoritosContext = createContext<FavoritosContextProps>({
  favoritos: [],
  setFavoritos: () => {},
  removeFavorito: () => {},
  isFavorito: () => false,
  addFavorito: () => {},
  valorTotalFavoritos: () => 0,
});

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const { listaFavoritos, isLoading } = useListFavoritos();
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  useEffect(() => {
    if (!isLoading && listaFavoritos) {
      setFavoritos(listaFavoritos);
    }
  }, [listaFavoritos, isLoading]);

  const { addFavorito: novofavorito } = useAddFavorito();
  const { removeFavorito: deleteFavorito } = useDeleteFavorito();

  const removeFavorito = (id: string) => {
    deleteFavorito(id);
  };

  const isFavorito = (id: string): boolean => {
    return favoritos.some((item) => item.id === id);
  };

  const addFavorito = (produto: Produto) => {
    novofavorito(produto);
  };

  const valorTotalFavoritos = (): number => {
    return favoritos.reduce((total, item) => total + parseFloat(item.preco), 0);
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        removeFavorito,
        isFavorito,
        addFavorito,
        valorTotalFavoritos,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
