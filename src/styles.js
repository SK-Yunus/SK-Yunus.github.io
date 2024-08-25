import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background-color: #fafafa;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  primaryColor: '#ff6f61', // Coral color
  secondaryColor: '#333', // Dark color for contrast
  backgroundColor: '#ffffff', // White background for sections
  textColor: '#333',
  borderColor: '#ddd',
};
