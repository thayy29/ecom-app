import styled from "styled-components";

export const FeaturedProductsContainer = styled.section`
  padding: 3rem 1.5rem;
  background-color: ${(props) => props.theme.primaryWhite};
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;

export const ProductCard = styled.div`
  background-color: ${(props) => props.theme.beige};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.bordoRed};
`;
