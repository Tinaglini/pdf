import React, { useState } from 'react';
import './ProductForm.css';

const MARCAS_PADRAO = [
  'Nishane',
  'Dior',
  'Chanel',
  'Paco Rabanne',
  'Carolina Herrera',
  'Ralph Lauren',
  'Tom Ford',
  'Armani',
  'Versace',
  'Dolce & Gabbana',
  'Outra'
];

const ProductForm = ({ onAddProduct, brands }) => {
  const [formData, setFormData] = useState({
    nome: '',
    marca: '',
    marcaCustom: '',
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
    const marcaFinal = formData.marca === 'Outra' ? formData.marcaCustom : formData.marca;

    if (formData.nome && marcaFinal && formData.preco) {
      onAddProduct({
        nome: formData.nome,
        marca: marcaFinal,
        preco: formData.preco,
        categoria: formData.categoria,
        foto: formData.foto,
        id: Date.now()
      });
      setFormData({
        nome: '',
        marca: '',
        marcaCustom: '',
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
          <select name="marca" value={formData.marca} onChange={handleChange} required>
            <option value="">Selecione uma marca</option>
            {MARCAS_PADRAO.map(marca => (
              <option key={marca} value={marca}>{marca}</option>
            ))}
          </select>
        </div>

        {formData.marca === 'Outra' && (
          <div className="form-group">
            <label>Nome da Marca</label>
            <input
              type="text"
              name="marcaCustom"
              value={formData.marcaCustom}
              onChange={handleChange}
              placeholder="Digite o nome da marca"
              required
            />
          </div>
        )}

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
