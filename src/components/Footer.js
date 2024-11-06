// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 E-commerce Website. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components for Footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 60px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;
