// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';  // Optional, for the logo image

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="E-commerce Logo" />
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Shop</NavLink>
        <NavLink href="#">Cart</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components for Header
const HeaderContainer = styled.header`
  background-color: #4caf50;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: white;
  font-weight: bold;
  margin-left: 20px;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;
