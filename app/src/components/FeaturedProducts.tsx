import React from 'react';
import { FeaturedProductsContainer, ProductCard, ProductImage, ProductTitle } from './FeaturedProducts.styles';

const FeaturedProducts: React.FC = () => {
  return (
    <FeaturedProductsContainer>
      <h2>Produtos em Destaque</h2>
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
      </div>
    </FeaturedProductsContainer>
  );
}

export default FeaturedProducts;
