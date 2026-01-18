import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CatalogPreview from './components/CatalogPreview';
import ExportButtons from './components/ExportButtons';
import ConfigModal from './components/ConfigModal';
import './App.css';

const DEFAULT_CONFIG = {
  title: 'CATÁLOGO DE PERFUMES 2025',
  storeName: 'Perfumaria Elegância',
  whatsapp: '(45) 99999-0000',
  instagram: '@perfumariaelegancia',
  layout: 'grid',
  columns: '3'
};

const INITIAL_PRODUCTS = [
  {
    id: 1,
    nome: 'Polo Black 125ml',
    marca: 'Ralph Lauren',
    preco: '289,90',
    categoria: 'Masculino',
    foto: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    nome: 'Good Girl 80ml',
    marca: 'Carolina Herrera',
    preco: '459,90',
    categoria: 'Feminino',
    foto: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    nome: 'Sauvage 100ml',
    marca: 'Dior',
    preco: '549,90',
    categoria: 'Masculino',
    foto: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=300&h=300&fit=crop'
  }
];

function App() {
  const [products, setProducts] = useState([]);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [showConfigModal, setShowConfigModal] = useState(false);

  useEffect(() => {
    const savedProducts = localStorage.getItem('perfume-catalog-products');
    const savedConfig = localStorage.getItem('perfume-catalog-config');

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }

    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('perfume-catalog-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('perfume-catalog-config', JSON.stringify(config));
  }, [config]);

  const handleAddProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleEditProduct = (product) => {
    alert('Funcionalidade de edição será implementada em breve!');
  };

  const handleReorderProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>🌸 Catálogo de Perfumes</h1>
        <button className="config-btn" onClick={() => setShowConfigModal(true)}>
          ⚙️ Configurações
        </button>
      </div>

      <div className="app-container">
        <div className="left-panel">
          <ProductForm onAddProduct={handleAddProduct} />
          <ProductList
            products={products}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
            onReorder={handleReorderProducts}
          />
        </div>

        <div className="right-panel">
          <div className="preview-header">
            <h2>👁️ Preview do Catálogo</h2>
            <p>Visualização em tempo real de como ficará o catálogo</p>
          </div>
          <div className="preview-container">
            <CatalogPreview products={products} config={config} />
          </div>
          <ExportButtons disabled={products.length === 0} />
        </div>
      </div>

      <ConfigModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        config={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
}

export default App;
