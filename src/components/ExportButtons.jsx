import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ExportButtons.css';

const ExportButtons = ({ disabled, products, activeBrand, config, onBrandChange }) => {
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
      const brandName = activeBrand ? '-' + activeBrand.replace(/\s+/g, '-') : '';
      link.download = 'catalogo-perfumes' + brandName + '-' + timestamp + '.png';
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
      const brandName = activeBrand ? '-' + activeBrand.replace(/\s+/g, '-') : '';
      pdf.save('catalogo-perfumes' + brandName + '-' + timestamp + '.pdf');
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      alert('Erro ao exportar PDF. Tente novamente.');
    } finally {
      setExporting(false);
    }
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const exportToCompletePDF = async () => {
    setExporting(true);
    const originalBrand = activeBrand;

    try {
      // Agrupar produtos por marca
      const brandGroups = products.reduce((acc, product) => {
        if (!acc[product.marca]) {
          acc[product.marca] = [];
        }
        acc[product.marca].push(product);
        return acc;
      }, {});

      const brands = Object.keys(brandGroups).sort((a, b) => a.localeCompare(b));

      if (brands.length === 0) {
        alert('Nenhum produto para exportar');
        return;
      }

      const pdf = new jsPDF('p', 'mm', 'a4');
      let firstPage = true;

      for (const brand of brands) {
        // Mudar para a marca atual
        onBrandChange(brand);

        // Aguardar renderização
        await sleep(300);

        // Capturar canvas
        const element = document.getElementById('catalog-preview');
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Adicionar página (exceto na primeira)
        if (!firstPage) {
          pdf.addPage();
        }
        firstPage = false;

        // Adicionar imagem (pode quebrar em múltiplas páginas se necessário)
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
      }

      // Salvar PDF
      const timestamp = new Date().toISOString().slice(0, 10);
      pdf.save('catalogo-perfumes-completo-' + timestamp + '.pdf');

    } catch (error) {
      console.error('Erro ao exportar PDF completo:', error);
      alert('Erro ao exportar PDF completo. Tente novamente.');
    } finally {
      // Restaurar marca original
      onBrandChange(originalBrand);
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
        <span>{exporting ? 'Exportando...' : 'Baixar PNG'}</span>
      </button>
      <button
        className="export-btn export-btn-pdf"
        onClick={exportToPDF}
        disabled={disabled || exporting}
      >
        <span className="export-btn-icon">📄</span>
        <span>{exporting ? 'Exportando...' : activeBrand ? 'PDF da Marca' : 'Baixar PDF'}</span>
      </button>
      <button
        className="export-btn export-btn-complete"
        onClick={exportToCompletePDF}
        disabled={disabled || exporting}
      >
        <span className="export-btn-icon">📚</span>
        <span>{exporting ? 'Exportando...' : 'PDF Completo'}</span>
      </button>
    </div>
  );
};

export default ExportButtons;
