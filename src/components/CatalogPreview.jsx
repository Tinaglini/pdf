import React from 'react';
import './CatalogPreview.css';

const CatalogPreview = ({ products, config }) => {
  if (products.length === 0) {
    return (
      <div className="catalog-preview" id="catalog-preview">
        <div className="empty-catalog">
          <div className="empty-catalog-icon">📦</div>
          <div className="empty-catalog-text">
            Adicione produtos para visualizar o catálogo
          </div>
        </div>
      </div>
    );
  }

  const renderProduct = (product) => {
    if (config.layout === 'list') {
      return (
        <div key={product.id} className="catalog-product-list-item">
          {product.foto ? (
            <img src={product.foto} alt={product.nome} className="catalog-product-list-image" />
          ) : (
            <div className="catalog-product-list-image"></div>
          )}
          <div className="catalog-product-list-details">
            <div className="catalog-product-list-name">{product.nome}</div>
            <div className="catalog-product-list-brand">{product.marca}</div>
            <div className="catalog-product-list-footer">
              <span className={'catalog-product-badge ' + product.categoria.toLowerCase()}>
                {product.categoria}
              </span>
              <span className="catalog-product-price">R$ {product.preco}</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={product.id} className="catalog-product-card">
        <div className="catalog-product-image-container">
          {product.foto ? (
            <img src={product.foto} alt={product.nome} className="catalog-product-image" />
          ) : (
            <div className="catalog-product-image"></div>
          )}
        </div>
        <div className="catalog-product-details">
          <div className="catalog-product-name">{product.nome}</div>
          <div className="catalog-product-brand">{product.marca}</div>
          <div className="catalog-product-footer">
            <span className="catalog-product-price">R$ {product.preco}</span>
            <span className={'catalog-product-badge ' + product.categoria.toLowerCase()}>
              {product.categoria}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="catalog-preview" id="catalog-preview">
      <div className="catalog-header">
        <h1 className="catalog-title">{config.title}</h1>
        <p className="catalog-subtitle">{config.storeName}</p>
      </div>

      {config.layout === 'grid' ? (
        <div className={'catalog-products-grid cols-' + config.columns}>
          {products.map(renderProduct)}
        </div>
      ) : (
        <div className="catalog-products-list">
          {products.map(renderProduct)}
        </div>
      )}

      <div className="catalog-footer">
        <div className="catalog-footer-title">Entre em contato</div>
        <div className="catalog-contact">
          {config.whatsapp && (
            <div className="catalog-contact-item">
              <span>WhatsApp:</span>
              <span>{config.whatsapp}</span>
            </div>
          )}
          {config.instagram && (
            <div className="catalog-contact-item">
              <span>Instagram:</span>
              <span>{config.instagram}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPreview;
