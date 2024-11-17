//src/app/components/ResumoCarrinho/ResumoCarrinho.tsx
interface ResumoCarrinhoProps {
  precoTotal: number;  
  quantidadeItensTotal: number;
}

export default function ResumoCarrinho({
  precoTotal,
  quantidadeItensTotal,
}: ResumoCarrinhoProps) {
  const precoTotalFormatado = precoTotal ? precoTotal : 0;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: {quantidadeItensTotal}</p>
        <p className="card-text fw-medium">
          Valor total: R${precoTotalFormatado.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
