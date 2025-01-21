import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontPrimary}
    background-color: ${({ theme }) => theme.primaryWhite}
    color: ${({ theme }) => theme.primaryBlack}
    line-heigh: 1.6;
  }

  h1,h2,h3,h4,h4,h5,h6 {
    margin-bottom: ${({ theme }) => theme.fontSecondary}
  }

 a { 
  text-decoration: none;
  color: inherit;
 }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontPrimary}
    border: none;
    background: none;
  }
`;
