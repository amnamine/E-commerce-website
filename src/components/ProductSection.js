// src/components/ProductSection.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductSectionContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image_url} alt={product.name} />
          <ProductDetails>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductDetails>
        </ProductCard>
      ))}
    </ProductSectionContainer>
  );
};

export default ProductSection;

// Styled Components for Product Section
const ProductSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px 0;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff9800;
  }
`;
  