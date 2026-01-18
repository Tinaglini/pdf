import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    nome: '',
    marca: '',
    preco: '',
    categoria: 'Masculino',
    foto: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.marca && formData.preco) {
      onAddProduct({
        ...formData,
        id: Date.now()
      });
      setFormData({
        nome: '',
        marca: '',
        preco: '',
        categoria: 'Masculino',
        foto: ''
      });
    }
  };

  return (
    <div className="product-form">
      <h2>📦 Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Foto do Produto</label>
          <label className={'upload-area ' + (formData.foto ? 'has-image' : '')}>
            {formData.foto ? (
              <img src={formData.foto} alt="Preview" className="image-preview" />
            ) : (
              <>
                <div className="upload-icon">📷</div>
                <div className="upload-text">Clique para fazer upload</div>
                <div className="upload-text" style={{ fontSize: '12px', color: '#999' }}>
                  JPG, PNG ou WEBP
                </div>
              </>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="form-group">
          <label>Nome do Perfume</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Polo Black 125ml"
            required
          />
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            placeholder="Ex: Ralph Lauren"
            required
          />
        </div>

        <div className="form-group">
          <label>Preço</label>
          <input
            type="text"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            placeholder="Ex: 289,90"
            required
          />
        </div>

        <div className="form-group">
          <label>Categoria</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange}>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Unissex">Unissex</option>
          </select>
        </div>

        <button type="submit" className="add-product-btn">
          ➕ Adicionar Produto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
