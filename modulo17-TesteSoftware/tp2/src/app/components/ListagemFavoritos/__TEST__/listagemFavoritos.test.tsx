import { render, screen } from '@testing-library/react';
import ListagemFavoritos from '../ListagemFavoritos';
import { useFavoritosContext, useProdutosFavoritos, useValorTotalFavoritos } from '@/app/State/FavoritosProvider';
import { mockProdutos } from '@/app/mocks/produtos'; 


jest.mock('@/app/State/FavoritosProvider', () => ({
  useFavoritosContext: jest.fn(),
  useProdutosFavoritos: jest.fn(),
  useValorTotalFavoritos: jest.fn(),
}));

describe('ListagemFavoritos', () => {
  const mockSetFavoritos = jest.fn();


  const setupMocks = (favoritos = mockProdutos, valorTotal = 270) => {
    useFavoritosContext.mockReturnValue({ setFavoritos: mockSetFavoritos });
    useProdutosFavoritos.mockReturnValue(favoritos);  
    useValorTotalFavoritos.mockReturnValue(valorTotal);  
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar corretamente os produtos favoritos', async () => {
    setupMocks(); 

    render(<ListagemFavoritos />);

   
    mockProdutos.forEach(async (produto) => {
      expect(await screen.findByText(produto.nome)).toBeInTheDocument(); 
      expect(await screen.findByText(`R$ ${parseFloat(produto.preco).toFixed(2).replace('.', ',')}`)).toBeInTheDocument(); 
      if (produto.desconto) {
        expect(await screen.findByText(`${produto.desconto}% de desconto`)).toBeInTheDocument(); 
      }
    });

    
    expect(screen.getByText(`Quantidade de produtos: ${mockProdutos.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Valor total: R$ 270`)).toBeInTheDocument(); 
  });

  it('deve exibir mensagem de lista vazia quando não houver favoritos', () => {
    setupMocks([]); 

    render(<ListagemFavoritos />);

    
    expect(screen.getByText('Sua lista de favoritos está vazia.')).toBeInTheDocument();
  });

  it('deve chamar a função setFavoritos ao interagir com a lista de favoritos', async () => {
    setupMocks();

    render(<ListagemFavoritos />);

  
    const itemFavorito = screen.getByText(mockProdutos[0].nome); 
    expect(itemFavorito).toBeInTheDocument();
    
    
  });
});
