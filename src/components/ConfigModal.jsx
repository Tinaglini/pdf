import React, { useState } from 'react';
import './ConfigModal.css';

const ConfigModal = ({ isOpen, onClose, config, onSave }) => {
  const [formData, setFormData] = useState(config);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⚙️ Configurações do Catálogo</h2>
          <button className="close-modal-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="config-group">
              <label>Título do Catálogo</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: Catálogo Primavera 2025"
              />
            </div>

            <div className="config-group">
              <label>Nome da Loja</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                placeholder="Ex: Perfumaria Elegância"
              />
            </div>

            <div className="config-row">
              <div className="config-group">
                <label>WhatsApp</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(45) 99999-0000"
                />
              </div>

              <div className="config-group">
                <label>Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@perfumaria"
                />
              </div>
            </div>

            <div className="config-group">
              <label>Layout</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="layout"
                    value="grid"
                    checked={formData.layout === 'grid'}
                    onChange={handleChange}
                  />
                  <span>Grid</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="layout"
                    value="list"
                    checked={formData.layout === 'list'}
                    onChange={handleChange}
                  />
                  <span>Lista</span>
                </label>
              </div>
            </div>

            {formData.layout === 'grid' && (
              <div className="config-group">
                <label>Colunas</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="columns"
                      value="2"
                      checked={formData.columns === '2'}
                      onChange={handleChange}
                    />
                    <span>2 Colunas</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="columns"
                      value="3"
                      checked={formData.columns === '3'}
                      onChange={handleChange}
                    />
                    <span>3 Colunas</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-modal-btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="save-modal-btn">
              💾 Salvar Configurações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigModal;
