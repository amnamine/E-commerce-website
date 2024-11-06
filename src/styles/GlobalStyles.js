// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f3f3f3;
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
  }
`;
