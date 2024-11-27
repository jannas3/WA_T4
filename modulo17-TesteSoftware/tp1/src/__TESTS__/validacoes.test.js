const { primeiroNome, verificarDisponibilidadeEstoque, calcularPrecoTotal } = require('../utils/validacoes');

describe('Função primeiroNome', () => {
  it('deve retornar o primeiro nome quando houver espaço em branco', () => {
    expect(primeiroNome('Joao da Silva')).toBe('Joao');
  });

  it('deve retornar o nome completo se não houver espaço em branco', () => {
    expect(primeiroNome('Joao')).toBe('Joao');
  });

  it('deve retornar uma string vazia quando o nome for vazio', () => {
    expect(primeiroNome('')).toBe('');
  });

  it('deve retornar o primeiro nome e ignorar espaços extras', () => {
    expect(primeiroNome('   Joao    da Silva   ')).toBe('Joao');
  });

  it('deve retornar uma string vazia se o argumento não for uma string', () => {
    expect(primeiroNome(null)).toBe('');
  });
});

describe('Função verificarDisponibilidadeEstoque', () => {
  it('deve retornar true se o produto estiver disponível', () => {
    expect(verificarDisponibilidadeEstoque('laptop', 1)).toBeTruthy();
  });

  it('deve retornar false ao exceder a quantidade disponível no estoque', () => {
    expect(verificarDisponibilidadeEstoque('smartphone', 30)).toBeFalsy();
  });

  it('deve retornar false se o produto não estiver disponível', () => {
    expect(verificarDisponibilidadeEstoque('livro', 1)).toBeFalsy();
  });

  it('deve retornar false se o produto não existir no estoque', () => {
    expect(verificarDisponibilidadeEstoque('televisao', 1)).toBeFalsy();
  });
});

describe('Função calcularPrecoTotal', () => {
    it('deve calcular o preço total corretamente com múltiplos produtos', () => {
      const produtos = [
        { nome: 'Laptop', preco: 10, quantidade: 2 },  
        { nome: 'Smartphone', preco: 20, quantidade: 3 }, 
        { nome: 'livro', preco: 5, quantidade: 1 },  
      ];
      expect(calcularPrecoTotal(produtos)).toBe(85); 
    });
  
    it('deve retornar 0 se não houver produtos', () => {
      expect(calcularPrecoTotal([])).toBe(0);
    });
  });
  
  