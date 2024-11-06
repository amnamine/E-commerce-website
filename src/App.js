// src/App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <ProductSection />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;

// Styled Components for layout
const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  color: #333;
`;
