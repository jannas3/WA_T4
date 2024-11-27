import { useContext } from "react";
import { FavoritosContext } from "../state/FavoritosProvider";

export const useFavoritosContext = () => {
  const favoritosContext = useContext(FavoritosContext);
  return favoritosContext;
};
