"use client";
import ListagemFavoritos from "../components/ListagemFavoritos/ListagemFavoritos";
import { useContext } from "react";
import { FavoritosContext } from "../state/FavoritosProvider";
import { useFavoritosContext } from "../hooks/useFavoritosContext";

export default function Favoritos() {
  const { favoritos, setFavoritos } = useFavoritosContext();
  return (
    <main>
      <div className="container p-5">
        <ListagemFavoritos
          produtosFavoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
