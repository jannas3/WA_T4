"use client";
import { createContext, useContext, useState } from "react";
import { Produto } from "../types/produto";

type FavoritosProviderProps = {
  children: React.ReactNode;
};

type FavoritosContextProps = {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
};

export const FavoritosContext = createContext<FavoritosContextProps>({
  favoritos: [],
  setFavoritos: () => {},
});

const FavoritosProvider = ({ children }: FavoritosProviderProps) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
