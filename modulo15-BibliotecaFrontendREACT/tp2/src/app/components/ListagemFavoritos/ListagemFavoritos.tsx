//src/components/ListagemCarrinho.tsx
import { ProdutoAPI } from "@/app/types/ProdutoAPI";
import ItemFavorito from "../ItemFavorito/ItemFavorito";

type listagemFavoritosProp = {
  itensFavoritos: ProdutoAPI[] | undefined;
  remove: (id: string) => void;
};

export default function ListagemFavoritos({
  itensFavoritos,
  remove,
}: listagemFavoritosProp) {
  return (
    <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">Produtos Favoritados</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {itensFavoritos
                ? itensFavoritos.map((item) => (
                    <ItemFavorito
                      item={item}
                      key={`ITEM_${item.id}`}
                      remover={remove}
                    />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
