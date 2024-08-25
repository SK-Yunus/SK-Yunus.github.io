import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

const HeroContainer = styled.section`
  background: url('https://via.placeholder.com/1500x800?text=Perfume+Hero+Image') no-repeat center center/cover;
  height: 100vh;
  color: ${theme.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: ${theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${theme.backgroundColor};
  margin-bottom: 1.5rem;
`;

const HeroButton = styled.a`
  background-color: ${theme.primaryColor};
  color: ${theme.backgroundColor};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.secondaryColor};
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Essence of Luxury</HeroTitle>
      <HeroSubtitle>Discover Premium Attars & Perfumes</HeroSubtitle>
      <HeroButton href="#products">Explore Our Collection</HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
