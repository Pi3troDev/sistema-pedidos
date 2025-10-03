import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { getProducts } from '../services/api.js';
import { useCart } from '../context/CartContext.jsx'; // Importa o hook do carrinho
import './ClientDashboard.css';

// --- SUA LÓGICA DE CATEGORIAS ---
// Este mapa define a qual categoria cada produto pertence.
const productCategoryMap = {
  // PRATOS PRINCIPAIS
  'Pizza Margherita': 'PRATOS PRINCIPAIS', 'Pizza Calabresa': 'PRATOS PRINCIPAIS', 'Pizza Quatro Queijos': 'PRATOS PRINCIPAIS',
  'Lasanha à Bolonhesa': 'PRATOS PRINCIPAIS', 'Espaguete Carbonara': 'PRATOS PRINCIPAIS', 'Risoto de Frango': 'PRATOS PRINCIPAIS',
  'Risoto de Camarão': 'PRATOS PRINCIPAIS', 'Filé à Parmegiana': 'PRATOS PRINCIPAIS', 'Strogonoff de Frango': 'PRATOS PRINCIPAIS',
  'Strogonoff de Carne': 'PRATOS PRINCIPAIS',
  // LANCHES
  'Hambúrguer Clássico': 'LANCHES', 'Hambúrguer Bacon': 'LANCHES', 'Sanduíche Natural': 'LANCHES',
  'Wrap de Frango': 'LANCHES', 'Batata Frita': 'LANCHES',
  // BEBIDAS
  'Coca-Cola Lata': 'BEBIDAS', 'Guaraná Antarctica Lata': 'BEBIDAS', 'Suco de Laranja Natural': 'BEBIDAS',
  'Suco de Maracujá': 'BEBIDAS', 'Água Mineral': 'BEBIDAS', 'Água com Gás': 'BEBIDAS',
  'Cerveja Heineken': 'BEBIDAS', 'Cerveja Budweiser': 'BEBIDAS', 'Vinho Tinto': 'BEBIDAS', 'Vinho Branco': 'BEBIDAS',
  // SOBREMESAS
  'Petit Gateau': 'SOBREMESAS', 'Cheesecake': 'SOBREMESAS', 'Mousse de Maracujá': 'SOBREMESAS',
  'Pudim de Leite': 'SOBREMESAS', 'Torta de Limão': 'SOBREMESAS', 'Brownie com Sorvete': 'SOBREMESAS',
  'Açaí na Tigela': 'SOBREMESAS', 'Salada de Frutas': 'SOBREMESAS', 'Sorvete 2 Bolas': 'SOBREMESAS',
  // ADICIONAIS
  'Molho de Alho': 'ADICIONAIS', 'Molho Barbecue': 'ADICIONAIS', 'Queijo Extra': 'ADICIONAIS',
  'Bacon Extra': 'ADICIONAIS', 'Ovo Frito': 'ADICIONAIS',
};

const getCategoryForProduct = (productName) => {
  return productCategoryMap[productName] || 'Outros';
};
// --- FIM DA SUA LÓGICA ---

const formatCategoryName = (name) => {
  if (!name) return 'Outros';
  return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

function ClientDashboard() {
  const { addToCart } = useCart(); // Pega a função para adicionar ao carrinho
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedProductId, setAddedProductId] = useState(null); // Estado para feedback visual

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError('Não foi possível carregar os produtos. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- NOVA FUNÇÃO PARA ADICIONAR AO CARRINHO ---
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  const groupedProducts = products.reduce((acc, product) => {
    const category = getCategoryForProduct(product.nome); // Usa a sua função de categorias
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const categoryOrder = [
    'PRATOS PRINCIPAIS', 'LANCHES', 'BEBIDAS', 'SOBREMESAS', 'ADICIONAIS', 'Outros'
  ];

  if (loading) {
    return <><Navbar /><div className="loading-container">Carregando cardápio...</div></>;
  }

  if (error) {
    return <><Navbar /><div className="error-container">{error}</div></>;
  }

  return (
    <div className="client-dashboard">
      <Navbar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Nosso Cardápio</h1>
          <p>Escolha seus itens favoritos e monte seu pedido!</p>
        </header>
        
        {categoryOrder.map(category => (
          groupedProducts[category] && (
            <section key={category} className="category-section">
              <h2 className="category-title">{formatCategoryName(category)}</h2>
              <div className="product-grid">
                {groupedProducts[category].map(product => (
                  <div key={product.id} className="product-card">
                    <img 
                      src={product.imageUrl || `https://placehold.co/600x400/CCCCCC/FFFFFF?text=${product.nome}`} 
                      alt={`Imagem de ${product.nome}`} 
                      className="product-image" 
                    />
                    <div className="product-info">
                      <h3>{product.nome}</h3>
                      <p className="product-description">{product.descricao}</p>
                      <div className="product-footer">
                        <span className="product-price">R$ {parseFloat(product.preco).toFixed(2)}</span>
                        {/* --- BOTÃO CONECTADO AO CARRINHO --- */}
                        <button 
                          onClick={() => handleAddToCart(product)} 
                          className={`add-to-cart-button ${addedProductId === product.id ? 'added' : ''}`}
                        >
                          {addedProductId === product.id ? 'Adicionado!' : 'Adicionar'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        ))}
      </main>
    </div>
  );
}

export default ClientDashboard;

