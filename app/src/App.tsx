import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import Catalog from "./components/Catalog";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyle />
      <Banner />
      <FeaturedProducts />
      <Catalog />
    </ThemeProvider>
  );
};

export default App;
