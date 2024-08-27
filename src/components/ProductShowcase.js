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
          <ProductImage src="https://images.unsplash.com/photo-1724325444561-fffca0e44bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXR0YXJzJTIwYW5kJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 1" />
          <ProductName>Ameer ul Oud</ProductName>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://plus.unsplash.com/premium_photo-1691592871274-5d0531e7518b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXR0YXJzJTIwYW5kJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 2" />
          <ProductName>Black Musk</ProductName>
        </ProductCard>
        {/* Add more products as needed */}
      </ProductGrid>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;
