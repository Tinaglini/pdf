import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products, onDelete, onEdit, onReorder }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newProducts = [...products];
    const draggedItem = newProducts[draggedIndex];
    newProducts.splice(draggedIndex, 1);
    newProducts.splice(index, 0, draggedItem);

    onReorder(newProducts);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  if (products.length === 0) {
    return (
      <div className="product-list">
        <h2>📋 Produtos Adicionados</h2>
        <div className="empty-state">
          <div className="empty-state-icon">🛍️</div>
          <div className="empty-state-text">
            Nenhum produto adicionado ainda.<br/>
            Adicione produtos usando o formulário acima.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2>📋 Produtos Adicionados ({products.length})</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={'product-item ' + (draggedIndex === index ? 'dragging' : '')}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div className="drag-handle">⋮⋮</div>
            {product.foto ? (
              <img src={product.foto} alt={product.nome} className="product-thumbnail" />
            ) : (
              <div className="product-thumbnail"></div>
            )}
            <div className="product-info">
              <div className="product-name">{product.nome}</div>
              <div className="product-meta">
                <span>{product.marca}</span>
                <span>•</span>
                <span className="product-price">R$ {product.preco}</span>
                <span>•</span>
                <span>{product.categoria}</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="edit-btn" onClick={() => onEdit(product)}>
                ✏️
              </button>
              <button className="delete-btn" onClick={() => onDelete(product.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
