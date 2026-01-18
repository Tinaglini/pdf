import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ExportButtons.css';

const ExportButtons = ({ disabled, products, activeBrand }) => {
  const [exporting, setExporting] = useState(false);

  const exportToPNG = async () => {
    setExporting(true);
    try {
      const element = document.getElementById('catalog-preview');
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      });

      const link = document.createElement('a');
      const timestamp = new Date().toISOString().slice(0, 10);
      link.download = 'catalogo-perfumes-' + timestamp + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Erro ao exportar PNG:', error);
      alert('Erro ao exportar imagem. Tente novamente.');
    } finally {
      setExporting(false);
    }
  };

  const exportToPDF = async () => {
    setExporting(true);
    try {
      const element = document.getElementById('catalog-preview');
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      const timestamp = new Date().toISOString().slice(0, 10);
      pdf.save('catalogo-perfumes-' + timestamp + '.pdf');
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      alert('Erro ao exportar PDF. Tente novamente.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="export-buttons">
      <button
        className="export-btn export-btn-png"
        onClick={exportToPNG}
        disabled={disabled || exporting}
      >
        <span className="export-btn-icon">📥</span>
        <span>{exporting ? 'Exportando...' : 'Baixar como PNG'}</span>
      </button>
      <button
        className="export-btn export-btn-pdf"
        onClick={exportToPDF}
        disabled={disabled || exporting}
      >
        <span className="export-btn-icon">📄</span>
        <span>{exporting ? 'Exportando...' : 'Baixar como PDF'}</span>
      </button>
    </div>
  );
};

export default ExportButtons;
