import React from 'react';
import { CatalogContainer, ProductCard, ProductImage, ProductTitle } from './Catalog.styles';

const Catalog: React.FC = () => {
  return (
    <CatalogContainer>
      <h2>Catálogo</h2>
      <div className="product-list">
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/200" alt="Produto 1" />
          <ProductTitle>Produto 1</ProductTitle>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/200" alt="Produto 2" />
          <ProductTitle>Produto 2</ProductTitle>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/200" alt="Produto 3" />
          <ProductTitle>Produto 3</ProductTitle>
        </ProductCard>
        {/* Adicione mais produtos conforme necessário */}
      </div>
    </CatalogContainer>
  );
}

export default Catalog;
