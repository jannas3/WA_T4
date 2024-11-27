import { render, screen } from '@testing-library/react';
import ListagemProdutos from '../ListagemProdutos';
import { mockProdutos } from '../../../mocks/produtos';

describe('ListagemProdutos', () => {
    it('renders products correctly', async () => {
        const produtos = mockProdutos;

        
        render(<ListagemProdutos produtos={produtos} />);

       
        produtos.forEach(async (produto) => {
            
            const nomeElement = await screen.findByText(produto.nome); 
            expect(nomeElement).toBeInTheDocument();

            
            const precoFormatted = `R$ ${parseFloat(produto.preco).toFixed(2).replace('.', ',')}`;
            const precoElements = await screen.queryAllByText(precoFormatted);
            expect(precoElements.length).toBeGreaterThan(0);

            
            if (produto.desconto) {
                const descontoElement = await screen.findByText(`${produto.desconto}% de desconto`);
                expect(descontoElement).toBeInTheDocument();
            }

            
            produto.fotos.forEach(async (foto) => {
                const tituloElement = await screen.findByAltText(foto.titulo);
                expect(tituloElement).toBeInTheDocument();
            });
        });
    });
});
