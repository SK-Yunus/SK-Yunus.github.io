import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { theme } from '../styles';

const SocialContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const IconLink = styled.a`
  color: ${theme.primaryColor};
  font-size: 2rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.secondaryColor};
  }
`;

const SocialMediaIcons = () => {
  return (
    <SocialContainer>
      <IconLink href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </IconLink>
      <IconLink href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
    </SocialContainer>
  );
};

export default SocialMediaIcons;
