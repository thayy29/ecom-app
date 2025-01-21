import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  PromoBanner,
  MenuToggle,
  MenuIcon,
  NavList,
  NavItem,
  InfoContainer,
} from "./Navbar.styles";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarContainer>
      {/* Promoção/Oferta */}
      <PromoBanner>
        <span>
          ⚡ Oferta Especial: Até 50% OFF em produtos selecionados! ⚡
        </span>
      </PromoBanner>

      {/* Logo */}
      <InfoContainer>
        <Logo>Minha Loja</Logo>

        {/* Links de Navegação */}
        <NavLinks className={isMenuOpen ? "open" : ""}>
          <NavList>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#products">Produtos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contato</NavLink>
            </NavItem>
          </NavList>
        </NavLinks>
      </InfoContainer>

      {/* Ícone de Menu (Hamburguer) */}
      <MenuToggle onClick={toggleMenu}>
        <MenuIcon />
      </MenuToggle>
    </NavbarContainer>
  );
};

export default Navbar;
