import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

const ShowcaseContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.backgroundColor};
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid ${theme.borderColor};
  border-radius: 10px;
  padding: 1rem;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: ${theme.primaryColor};
  margin-top: 0.5rem;
`;

const ProductShowcase = () => {
  return (
    <ShowcaseContainer>
      <h2>Our Collections</h2>
      <ProductGrid>
        {/* Replace with your product details */}
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/300x300?text=Product+1" alt="Product 1" />
          <ProductName>Product 1</ProductName>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/300x300?text=Product+2" alt="Product 2" />
          <ProductName>Product 2</ProductName>
        </ProductCard>
        {/* Add more products as needed */}
      </ProductGrid>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;
