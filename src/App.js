import React from 'react';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import SocialMediaIcons from './components/SocialMediaIcons';
import { GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <ProductShowcase />
      <SocialMediaIcons />
    </>
  );
}

export default App;
