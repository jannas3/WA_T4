import { ProdutoAPI } from "@/app/types/ProdutoAPI";

//src/components/ItemCarrinho/ItemCarrinho.tsx
type itemCarrinhoProp = {
  item: ProdutoAPI;
  remover: (id: string) => void;
};

export default function ItemFavorito({ item, remover }: itemCarrinhoProp) {
  return (
    <tr key={item.id}>
      <td>{item.nome}</td>
      <td>R$ {item.preco}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => remover(item.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
