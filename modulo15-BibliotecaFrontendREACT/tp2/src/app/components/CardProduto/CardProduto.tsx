import Image from "next/image";
import { Produto } from "../../types/produto";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAddFavorito } from "@/app/hooks/useFavoritarProduto";

interface ICardProdutoProps {
  produto: Produto;
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function CardProduto({
  produto,
  adicionarAoCarrinho,
}: ICardProdutoProps) {
  const router = useRouter();

  const { isPending, addFavorito } = useAddFavorito(
    () => toast.success("Produto favoritado com sucesso!"),
    () => toast.error("Algo deu errado")
  );

  const verDetalhesProduto = () => {
    router.push(`/produto/${produto.nome}`);
  };

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt={produto.fotos[0].titulo}
          width={300}
          height={320}
          onClick={verDetalhesProduto}
          style={{ cursor: "pointer" }}
        />
        <div className="card-body bg-light">
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text text-secondary">R$ {produto.preco}</p>

          <button
            className="btn btn-dark d-block w-100"
            type="button"
            onClick={() => adicionarAoCarrinho(produto)}
          >
            Adicionar no carrinho
          </button>
          <button
            className="btn btn-warning d-block w-100 mt-2"
            type="button"
            onClick={() => addFavorito(produto)}
            disabled={isPending}
          >
            {isPending ? "Favoritando..." : "Favoritar"}
          </button>
        </div>
      </div>
    </div>
  );
}
