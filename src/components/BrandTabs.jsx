import React from 'react';
import './BrandTabs.css';

const BrandTabs = ({ brands, activeBrand, onBrandChange }) => {
  if (brands.length === 0) return null;

  return (
    <div className="brand-tabs">
      {brands.map(brand => (
        <button
          key={brand.name}
          className={'brand-tab ' + (activeBrand === brand.name ? 'active' : '')}
          onClick={() => onBrandChange(brand.name)}
        >
          {brand.name}
          <span className="brand-tab-count">{brand.count}</span>
        </button>
      ))}
    </div>
  );
};

export default BrandTabs;
